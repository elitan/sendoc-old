import { useParams } from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf'

// import { Document, Page } from "react-pdf";
import { useEffect, useState } from 'react'
import { nhost } from '../utils/nhost'
import { useGetDocLinkQuery, useInsertDocVisitsMutation } from '../utils/__generated__/graphql'
import { fetchData } from '../utils/gql-fetcher'

export function PublicDocument() {
  const { id } = useParams()

  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [email, setEmail] = useState('')
  const [passcode, setPasscode] = useState('')
  const [docVisit, setDocVisit] = useState(false)
  const [allowedToView, setAllowedToView] = useState(false)

  const mutation = useInsertDocVisitsMutation()

  useEffect(() => {
    const fetchData = async () => {
      if (typeof id !== 'string') {
        return
      }

      if (!docVisit) {
        const ipInfoResponse = await fetch('https://ipapi.co/json/', {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        }).then(async (res) => await res.json())

        mutation.mutate({
          docVisit: {
            docLinkId: id,
            country: ipInfoResponse.country_name,
            city: ipInfoResponse.city
          }
        })

        setDocVisit(true)
      }
    }

    fetchData()
  })

  // document
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  const { data, isLoading } = useGetDocLinkQuery({
    id
  })

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  const { docLink } = data

  if (!docLink) {
    return <div>No doc link found</div>
  }

  if ((docLink.requireEmailToView || docLink.passcode) && !allowedToView) {
    return (
      <div>
        <div>You must add your email to view this document.</div>
        <form
          onSubmit={() => {
            // TODO: Insert viewer with email

            setAllowedToView(true)
          }}
        >
          <input type="email" />
          <button type="submit">View document</button>
        </form>
      </div>
    )
  }

  const url = nhost.storage.getPublicUrl({
    fileId: docLink.doc.fileId
  })

  return (
    <div className="border">
      <div className="mx-auto max-w-max">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div>
          <button
            onClick={() => {
              setPageNumber(pageNumber - 1)
            }}
          >
            prev
          </button>
          <button
            onClick={() => {
              setPageNumber(pageNumber + 1)
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  )
}
