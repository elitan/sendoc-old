import copy from 'copy-to-clipboard'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useGetDocQuery } from '../utils/__generated__/graphql'
import { CreateLinkSlideOver } from './DocCrateLinkSlideOver'

export function Doc() {
  const { id } = useParams()

  const { data, isLoading } = useGetDocQuery({
    id
  })

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  const { doc } = data

  if (!doc) {
    return <div>No document found</div>
  }

  return (
    <div>
      <div className="my-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {doc.name}
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <CreateLinkSlideOver docId={doc.id} />
          </div>
        </div>
      </div>

      <div className="my-12">
        <div className="text-3xl my-4">All Visits</div>
        <div>Coming soon...</div>
      </div>

      <div className="my-12">
        <div className="text-3xl my-4">All Links</div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Link
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        createdAt
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {doc.docLinks.map((docLink) => {
                      const docLinkFormatted = `${process.env.REACT_APP_DOMAIN}/d/${docLink.id}`

                      return (
                        <tr key={docLink.id ?? 0}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <span
                              className="border border-gray-200 p-2 rounded-md cursor-pointer select-none"
                              onClick={() => {
                                copy(docLinkFormatted)
                                toast.success('Link copied to clipboar')
                              }}
                            >
                              {docLinkFormatted}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {docLink.createdAt}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
