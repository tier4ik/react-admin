import { useState, useContext } from "react";

import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BiShieldQuarter, BiLock } from "react-icons/bi";

import { mockDataTeam } from "../../data/mockData";
import { ThemeContext } from "../../context/ThemeContext";
import PageHeader from "../../components/PageHeader";

type MemberRole = "admin" | "user" | "manager";

interface TeamMember {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: MemberRole;
}

const accessIcons = {
  admin: <MdOutlineAdminPanelSettings className="text-xl" />,
  manager: <BiShieldQuarter className="text-xl" />,
  user: <BiLock className="text-xl" />,
};

const Team = () => {
  const [team] = useState(mockDataTeam as Array<TeamMember>);
  const { theme } = useContext(ThemeContext);

  const tableClasses = `
    ${theme === "dark" ? "text-slate-200" : "text-gray-800"}
    w-full text-sm text-left
  `;

  const theadClasses = `
    ${theme === "dark" ? "bg-indigo-800" : "bg-gray-400"}
  `;

  const tbodyClasses = `
    ${theme === "dark" ? "bg-slate-800" : "bg-gray-300"}
  `;

  const trClasses = `
    ${theme === "dark" ? "border-slate-700" : "border-slate-200"}
    h-14 border-b-[1px] last:border-none
  `;

  return (
    <div>
      <PageHeader header="TEAM" subheader="Managing the Team Members" />
      <div className="rounded-md overflow-hidden mt-8">
        <table className={tableClasses}>
          <thead className={theadClasses}>
            <tr className="h-14">
              <th className="pl-4">ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Access Level</th>
            </tr>
          </thead>
          <tbody className={tbodyClasses}>
            {team.map((member) => {
              return (
                <tr className={trClasses} key={member.id}>
                  <td className="pl-4">{member.id}</td>
                  <td className="text-teal-600">{member.name}</td>
                  <td>{member.age}</td>
                  <td>{member.phone}</td>
                  <td>{member.email}</td>
                  <td className="pr-4">
                    <div className="flex justify-center items-center gap-1 py-2 bg-teal-600 rounded-md">
                      {accessIcons[member.access]}
                      {member.access}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
