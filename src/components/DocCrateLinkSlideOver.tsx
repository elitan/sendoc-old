import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useInsertDocLinkMutation } from '../utils/__generated__/graphql'

export function CreateLinkSlideOver({ docId }: { docId: string }) {
  const [open, setOpen] = useState(false)

  const [requireEmailToView, setRequireEmailToView] = useState(false)
  const [downloadAllowed, setDownloadAllowed] = useState(false)

  const [passcodeProtected, setPasscodeProtected] = useState(false)
  const [passcode, setPasscode] = useState('')

  const mutation = useInsertDocLinkMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await mutation.mutate({
      docLink: {
        docId,
        requireEmailToView,
        downloadAllowed,
        passcode: passcodeProtected ? passcode : null
      }
    })

    alert('create link!')
    setOpen(false)
  }

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Link
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <form
                    className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
                    onSubmit={handleSubmit}
                  >
                    <div className="min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Create Link
                          </Dialog.Title>
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              type="button"
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 relative flex-1 px-4 sm:px-6">
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="h-5 flex items-center">
                              <input
                                id="require-email"
                                name="require-email"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                checked={requireEmailToView}
                                onChange={() => {
                                  setRequireEmailToView(!requireEmailToView)
                                }}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="require-email" className="font-medium text-gray-700">
                                Require email to view
                              </label>
                              <p className="text-gray-500">
                                Viewers must enter an email to view your document.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="h-5 flex items-center">
                              <input
                                id="allow-downloading"
                                name="allow-downloading"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                checked={downloadAllowed}
                                onChange={() => {
                                  setDownloadAllowed(!downloadAllowed)
                                }}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="allow-downloading"
                                className="font-medium text-gray-700"
                              >
                                Allow downloading
                              </label>
                              <p className="text-gray-500">Viewers can download your file.</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="h-5 flex items-center">
                              <input
                                id="passcode"
                                name="passcode"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                checked={passcodeProtected}
                                onChange={() => {
                                  setPasscodeProtected(!passcodeProtected)
                                }}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="passcode" className="font-medium text-gray-700">
                                Passcode
                              </label>
                              <p className="text-gray-500">
                                Viewers must enter the passcode to view the document.
                              </p>
                            </div>
                          </div>
                          <div className="ml-7">
                            {passcodeProtected && (
                              <div>
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                  placeholder="Passcode"
                                  value={passcode}
                                  onChange={(e) => {
                                    setPasscode(e.target.value)
                                  }}
                                  autoFocus={true}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={mutation.isLoading}
                      >
                        Create Link
                      </button>
                    </div>
                  </form>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
