import { promises as fs } from "fs";
import path from "path";

interface Lot {
  id: number;
  unitNumber: string;
  ownerName: string;
  residentName: string;
  status: "Owner-occupied" | "Tenanted";
}

async function getLots(): Promise<Lot[]> {
  const filePath = path.join(process.cwd(), "public/data/lots.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(fileContents);
  return data.lots;
}

export default async function LotDirectory() {
  const lots = await getLots();

  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
        Lot Directory
      </h1>

      <div className="-mx-4 sm:mx-0 overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-slate-200">
            <thead>
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50">
                  Unit Number
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50">
                  Owner
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50">
                  Resident
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {lots.map((lot) => (
                <tr key={lot.id} className="hover:bg-slate-50">
                  <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm text-slate-800 whitespace-nowrap">
                    {lot.unitNumber}
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm text-slate-800 whitespace-nowrap">
                    {lot.ownerName}
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm text-slate-800 whitespace-nowrap">
                    {lot.residentName}
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm whitespace-nowrap">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs ${
                        lot.status === "Owner-occupied"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {lot.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
