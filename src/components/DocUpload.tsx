import { useState } from "react";
import { docs_insert_input, files_insert_input, useMutation } from "../gqty";
import { nhost } from "../utils/nhost";
import { DocsBase } from "./DocsBase";

export function DocUpload() {
  const [name, setName] = useState("");

  const [file, setFile] = useState<null | File>(null);

  const [insertDoc, { isLoading, data, error }] = useMutation(
    (mutation, args: docs_insert_input) => {
      const doc = mutation.insertDoc({
        object: args,
      });

      if (!doc) {
        return {
          id: null,
        };
      }

      return {
        id: doc.id,
      };
    },
    {
      onCompleted(data) {},
      onError(error) {},
      // refetchQueries: [query.user],
      awaitRefetchQueries: true,
      suspense: false,
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      return alert("no file selected");
    }

    const { fileMetadata, error } = await nhost.storage.upload({
      file,
      bucketId: "documents",
    });

    if (error) {
      return alert(error.message);
    }

    if (!fileMetadata) {
      return alert("failed to get file metadata");
    }

    await insertDoc({
      args: {
        name: fileMetadata.name,
        fileId: fileMetadata.id,
      },
    });

    alert(`uploaded ${fileMetadata?.name}`);
  };

  return (
    <div>
      <div>Upload a document</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="file-upload"
              className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept="application/pdf"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setFile(e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>
          <button type="submit">Upload Document</button>
        </form>
      </div>
    </div>
  );
}
