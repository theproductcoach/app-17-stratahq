interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  priority: "high" | "medium" | "low";
}

const announcements: Announcement[] = [
  {
    id: "1",
    title: "Annual General Meeting",
    date: "2024-04-15",
    content:
      "The AGM will be held in the common room. All owners are encouraged to attend.",
    priority: "high",
  },
  {
    id: "2",
    title: "Building Maintenance Schedule",
    date: "2024-04-10",
    content:
      "Regular maintenance of the elevators will be conducted next week.",
    priority: "medium",
  },
  {
    id: "3",
    title: "Garden Committee Update",
    date: "2024-04-05",
    content: "New plants have been added to the communal garden area.",
    priority: "low",
  },
];

const getPriorityStyles = (priority: Announcement["priority"]) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
  }
};

export default function Announcements() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold mb-6 text-slate-900">
        Announcements
      </h1>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-lg font-medium text-slate-900">
                {announcement.title}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityStyles(
                  announcement.priority
                )}`}
              >
                {announcement.priority}
              </span>
            </div>

            <p className="text-sm text-slate-600 mb-3">
              {announcement.content}
            </p>

            <time className="text-sm text-slate-500">
              {new Date(announcement.date).toLocaleDateString("en-US", {
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
