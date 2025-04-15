import Link from "next/link";

const quickLinks = [
  {
    title: "Lot Directory",
    description: "View all lots and their current status",
    href: "/lots",
  },
  {
    title: "Committee",
    description: "Contact committee members",
    href: "/committee",
  },
  {
    title: "Meetings",
    description: "View upcoming and past meetings",
    href: "/meetings",
  },
  {
    title: "Documents",
    description: "Access strata documents and forms",
    href: "/documents",
  },
  {
    title: "Maintenance",
    description: "Submit and track maintenance requests",
    href: "/maintenance",
  },
  {
    title: "Noticeboard",
    description: "View community announcements",
    href: "/noticeboard",
  },
];

export default function Home() {
  return (
    <div className="space-y-4 sm:space-y-8">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-slate-900">
          Welcome to StrataHQ – Committee Hub for Springfield Heights
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Access all strata management tools and information from one central
          location.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-blue-50 border border-blue-200 text-blue-800 rounded-xl p-4 sm:p-6 shadow hover:bg-blue-100 transition group min-h-[88px] flex flex-col justify-center"
          >
            <h2 className="text-base sm:text-lg font-medium mb-1 sm:mb-2 group-hover:text-blue-900">
              {link.title}
            </h2>
            <p className="text-xs sm:text-sm text-blue-700">
              {link.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Space reserved for future content */}
      <div className="h-24 sm:h-32" />
    </div>
  );
}
