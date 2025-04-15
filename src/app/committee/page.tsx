interface CommitteeMember {
  name: string;
  role: string;
  email?: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    name: "John Smith",
    role: "Chairperson",
    email: "chair@stratahq.com",
  },
  {
    name: "Sarah Johnson",
    role: "Secretary",
    email: "secretary@stratahq.com",
  },
  {
    name: "Michael Chen",
    role: "Treasurer",
    email: "treasurer@stratahq.com",
  },
  {
    name: "Lisa Williams",
    role: "Member",
  },
];

export default function Committee() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
        Committee Members
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {committeeMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-xl shadow p-4 sm:p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-base sm:text-lg font-medium text-slate-900 mb-1">
              {member.name}
            </h2>
            <p className="text-sm text-slate-600 mb-3">{member.role}</p>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors min-h-[32px] inline-flex items-center"
              >
                {member.email}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
