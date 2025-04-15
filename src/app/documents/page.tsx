interface Document {
  category: string;
  filename: string;
  label: string;
}

const documents: Document[] = [
  {
    category: "By-Laws",
    filename: "bylaws.pdf",
    label: "Strata By-Laws",
  },
  {
    category: "Insurance",
    filename: "building-insurance-2024.pdf",
    label: "Building Insurance Certificate 2024",
  },
  {
    category: "Fire Safety",
    filename: "fire-safety-2024.pdf",
    label: "Fire Safety Certificate 2024",
  },
];

// Group documents by category
const groupedDocuments = documents.reduce((acc, doc) => {
  if (!acc[doc.category]) {
    acc[doc.category] = [];
  }
  acc[doc.category].push(doc);
  return acc;
}, {} as Record<string, Document[]>);

export default function Documents() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8 text-slate-900">
        Document Library
      </h1>

      <div className="grid gap-8">
        {Object.entries(groupedDocuments).map(([category, docs]) => (
          <section key={category} className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">{category}</h2>
            <div className="bg-white rounded-xl shadow divide-y divide-slate-200">
              {docs.map((doc) => (
                <div
                  key={doc.filename}
                  className="p-4 hover:bg-slate-50 transition-colors"
                >
                  <a
                    href={`/documents/${doc.filename}`}
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
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
                    <span className="text-sm text-slate-800">{doc.label}</span>
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
