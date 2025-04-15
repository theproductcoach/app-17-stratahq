interface Notice {
  title: string;
  date: string;
  message: string;
  audience: "All residents" | "Owners only";
}

const notices: Notice[] = [
  {
    title: "Annual Fire Drill",
    date: "2024-04-20",
    message:
      "A fire drill will be conducted at 10:00 AM on Saturday 20 April. All residents are required to participate.",
    audience: "All residents",
  },
  {
    title: "Balcony Repairs - Units 5–7",
    date: "2024-04-15",
    message:
      "Contractors will be on-site between 15–18 April to carry out balcony waterproofing repairs.",
    audience: "Owners only",
  },
  {
    title: "Garage Door Maintenance",
    date: "2024-04-10",
    message:
      "The garage door will be serviced on Wednesday 10 April between 1–4 PM. Expect brief access delays.",
    audience: "All residents",
  },
];

const getAudienceBadgeStyle = (audience: Notice["audience"]) => {
  return audience === "All residents"
    ? "bg-blue-100 text-blue-800"
    : "bg-purple-100 text-purple-800";
};

export default function Noticeboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold mb-6 text-slate-900">
        Noticeboard
      </h1>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.title}
            className="bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-lg font-medium text-slate-900">
                {notice.title}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getAudienceBadgeStyle(
                  notice.audience
                )}`}
              >
                {notice.audience}
              </span>
            </div>

            <p className="text-sm text-slate-600 mb-3">{notice.message}</p>

            <time className="text-sm text-slate-500">
              {new Date(notice.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        ))}
      </div>
    </div>
  );
}
