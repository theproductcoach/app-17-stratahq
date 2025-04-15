interface Meeting {
  date: string;
  type: string;
  minutesUrl: string;
}

const meetings: Meeting[] = [
  {
    date: "2024-11-15",
    type: "AGM",
    minutesUrl: "/documents/agm-2024-minutes.pdf",
  },
  {
    date: "2024-08-10",
    type: "Committee Meeting",
    minutesUrl: "/documents/committee-2024-08.pdf",
  },
  {
    date: "2024-04-05",
    type: "Committee Meeting",
    minutesUrl: "/documents/committee-2024-04.pdf",
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Meetings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">
        Meeting History
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Minutes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {meetings.map((meeting) => (
              <tr
                key={meeting.date}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-slate-800">
                  {formatDate(meeting.date)}
                </td>
                <td className="px-6 py-4 text-sm text-slate-800">
                  {meeting.type}
                </td>
                <td className="px-6 py-4 text-sm">
                  <a
                    href={meeting.minutesUrl}
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Download</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
