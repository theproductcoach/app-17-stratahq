interface MaintenanceItem {
  title: string;
  dateReported: string;
  status: "Open" | "In Progress" | "Closed";
  assignedTo: string;
}

const maintenanceLog: MaintenanceItem[] = [
  {
    title: "Leaking tap in laundry room",
    dateReported: "2024-04-10",
    status: "Open",
    assignedTo: "PlumbRight Services",
  },
  {
    title: "Garage light not working",
    dateReported: "2024-03-28",
    status: "In Progress",
    assignedTo: "BrightSpark Electrical",
  },
  {
    title: "Broken intercom at Unit 7",
    dateReported: "2024-03-15",
    status: "Closed",
    assignedTo: "SecureCom Systems",
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getStatusStyles(status: MaintenanceItem["status"]): string {
  switch (status) {
    case "Open":
      return "bg-red-100 text-red-800";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800";
    case "Closed":
      return "bg-emerald-100 text-emerald-800";
    default:
      return "bg-slate-100 text-slate-800";
  }
}

export default function Maintenance() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">
        Maintenance Log
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Issue
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Reported Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Assigned To
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {maintenanceLog.map((item) => (
              <tr
                key={`${item.title}-${item.dateReported}`}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-slate-800">
                  {item.title}
                </td>
                <td className="px-6 py-4 text-sm text-slate-800">
                  {formatDate(item.dateReported)}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-800">
                  {item.assignedTo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
