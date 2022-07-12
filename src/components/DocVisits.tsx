import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { useGetDocVisitsByDocIdQuery } from '../utils/__generated__/graphql'

type DocVisitsParams = {
  docId: string
}

export function DocVisits({ docId }: DocVisitsParams) {
  const { data, isLoading } = useGetDocVisitsByDocIdQuery(
    {
      docId
    },
    {
      refetchInterval: 5000
    }
  )

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  const { docVisits } = data

  return (
    <div>
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
              Location
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Visited
            </th>
          </tr>
        </thead>
        {docVisits.map((docVisit) => {
          return (
            <tr key={docVisit.id ?? 0}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {docVisit.docLink.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {docVisit.city}, {docVisit.country}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDistanceToNowStrict(parseISO(docVisit.createdAt), {
                  addSuffix: true
                })}
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
