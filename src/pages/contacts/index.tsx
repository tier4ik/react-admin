import { useState, useContext, useMemo } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import { ThemeContext } from "../../context/ThemeContext";

import { mockDataContacts } from "../../data/mockData";

interface memberContacts {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

const Contacts = () => {
  const [members] = useState(mockDataContacts as Array<memberContacts>);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const currentMembers = useMemo(() => {
    return members.slice(
      rowsPerPage * (pageNumber - 1),
      rowsPerPage * pageNumber
    );
  }, [members, pageNumber, rowsPerPage]);

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

  const getItemsViewed = () => {
    const itemsViewed = rowsPerPage * pageNumber;
    return (
      <span className="mx-4">
        {`${itemsViewed >= members.length ? members.length : itemsViewed} of ${
          members.length
        }`}
      </span>
    );
  };

  const handleRowsPerPage: React.ChangeEventHandler<HTMLSelectElement> = (
    evt
  ) => {
    setRowsPerPage(Number(evt.target.value));
  };

  const handlePrevPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    setPageNumber((currentPage) =>
      currentPage - 1 >= 1 ? currentPage - 1 : 1
    );
  };

  const handleNextPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    const nextRowsChank = (pageNumber + 1) * rowsPerPage;
    setPageNumber((currentPage) =>
      nextRowsChank <= members.length + rowsPerPage
        ? currentPage + 1
        : currentPage
    );
  };

  return (
    <div>
      <PageHeader
        header="CONTACTS"
        subheader="List of Contacts for Future Reference"
      />
      <div className="rounded-md overflow-hidden mt-8">
        <table className={tableClasses}>
          <thead className={theadClasses}>
            <tr className="h-14">
              <th className="pl-4">ID</th>
              <th>Registrar ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody className={tbodyClasses}>
            {currentMembers.map((member) => {
              return (
                <tr className={trClasses} key={member.id}>
                  <td className="pl-4">{member.id}</td>
                  <td>{member.registrarId}</td>
                  <td className="text-teal-600">{member.name}</td>
                  <td>{member.age}</td>
                  <td>{member.phone}</td>
                  <td>{member.email}</td>
                  <td>{member.address}</td>
                  <td>{member.city}</td>
                  <td className="pr-4">{member.zipCode}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className={theadClasses.concat(" ", "h-14")}>
            <tr>
              <td colSpan={6}></td>
              <td colSpan={3} className="text-end">
                Rows per page
                <select
                  name="rowsperpage"
                  id="rows-per-page"
                  className="text-gray-700 ml-2"
                  defaultValue={rowsPerPage}
                  onChange={handleRowsPerPage}
                >
                  {[5, 6, 7, 8, 9, 10].map((el) => (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  ))}
                </select>
                {getItemsViewed()}
                <button className="p-4" onClick={handlePrevPage}>
                  <FaLessThan />
                </button>
                <button className="p-4" onClick={handleNextPage}>
                  <FaGreaterThan />
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
