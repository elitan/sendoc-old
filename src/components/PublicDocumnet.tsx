import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

// import { Document, Page } from "react-pdf";
import { useState } from "react";
import { nhost } from "../utils/nhost";
import { query } from "../gqty";

export function PublicDocument() {
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");

  const [allowedToView, setAllowedToView] = useState(false);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  console.log("file:");

  const docLink = query.docLink({ id });

  if (!docLink) {
    return <div>No doc link found</div>;
  }

  if ((docLink.requireEmailToView || docLink.passcode) && !allowedToView) {
    return (
      <div>
        <div>You must add your email to view this document.</div>
        <form
          onSubmit={() => {
            // TODO: Insert viewer with email

            setAllowedToView(true);
          }}
        >
          <input type="email" />
          <button type="submit">View document</button>
        </form>
      </div>
    );
  }

  console.log({ docLink });

  const url = nhost.storage.getUrl({
    fileId: docLink.doc.fileId,
  });

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
              setPageNumber(pageNumber - 1);
            }}
          >
            prev
          </button>
          <button
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
