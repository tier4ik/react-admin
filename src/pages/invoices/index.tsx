import { useState, useContext } from "react";
import PageHeader from "../../components/PageHeader";
import { ThemeContext } from "../../context/ThemeContext";
import { mockDataInvoices } from "../../data/mockData";

interface InvoiceType {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}

const Invoices = () => {
  const [invoices] = useState(mockDataInvoices as Array<InvoiceType>);
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
      <PageHeader header="INVOICES" subheader="List of Invoice Balances" />
      <div className="rounded-md overflow-hidden mt-8">
        <table className={tableClasses}>
          <thead className={theadClasses}>
            <tr className="h-14">
              <th className="pl-4">ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className={tbodyClasses}>
            {invoices.map((invoice) => {
              return (
                <tr className={trClasses} key={invoice.id}>
                  <td className="pl-4">{invoice.id}</td>
                  <td className="text-teal-600">{invoice.name}</td>
                  <td>{invoice.phone}</td>
                  <td>{invoice.email}</td>
                  <td className="text-teal-600">{invoice.cost}</td>
                  <td>{invoice.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
