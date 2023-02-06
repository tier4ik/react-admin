import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import PageHeader from "../../components/PageHeader";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";

import { BiArrowToBottom } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { MdPointOfSale } from "react-icons/md";
import { FaTrafficLight } from "react-icons/fa";

import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";

interface TransactionType {
  txId: string;
  user: string;
  date: string;
  cost: string;
}

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  const containerClasses = `
    ${
      theme === "dark"
        ? "bg-slate-800 text-slate-200"
        : "bg-gray-200 text-gray-800"
    }
    p-4 rounded-md
  `;

  return (
    <>
      <div className="flex justify-between items-center">
        <PageHeader header="DASHBOARD" subheader="Welcome To Your Dashboard" />
        <button className="flex items-center gap-2 text-teal-500 font-bold text-sm">
          <BiArrowToBottom className="text-xl" />
          DOWNLOAD REPORTS
        </button>
      </div>
      <div className="grid grid-cols-12 auto-rows-[140px] gap-5 mt-8">
        {/* ROW 1 */}
        <div className="col-start-1 col-end-4">
          <StatBox
            title="12,361"
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            icon={<AiOutlineMail className="text-teal-500 text-3xl" />}
          />
        </div>
        <div className="col-start-4 col-end-7">
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<SlPeople className="text-teal-500 text-3xl" />}
          />
        </div>
        <div className="col-start-7 col-end-10">
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={<FaTrafficLight className="text-teal-500 text-3xl" />}
          />
        </div>
        <div className="col-start-10 col-end-13">
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={<MdPointOfSale className="text-teal-500 text-3xl" />}
          />
        </div>
        {/* ROW 2 */}
        <div
          className={containerClasses.concat(
            " col-start-1 col-end-9 row-start-2 row-end-4"
          )}
        >
          <div className="flex justify-between items-center">
            <div className="font-bold">
              <h5>Revenue Generated</h5>
              <h3>$59,342.32</h3>
            </div>
            <div>
              <BiArrowToBottom className="text-xl text-teal-500 cursor-pointer" />
            </div>
          </div>
          <div className="h-52">
            <LineChart isDashboard={true} />
          </div>
        </div>
        <div
          className={containerClasses.concat(
            " col-start-9 col-end-13 row-start-2 row-end-6"
          )}
        >
          <div className="h-full overflow-auto">
            <h5 className="font-bold">Recent Transactions</h5>
            <ul>
              {mockTransactions.map((transaction: TransactionType, i) => (
                <li
                  key={`${transaction.txId}-${i}`}
                  className="flex justify-between items-center p-4 rounded-md even:bg-teal-500"
                >
                  <div>
                    <h5>{transaction.txId}</h5>
                    <p>{transaction.user}</p>
                  </div>
                  <div>
                    <span>{transaction.date}</span>
                  </div>
                  <div>
                    <span>{transaction.cost}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* ROW 3 */}
        <div
          className={containerClasses.concat(
            " col-start-1 col-end-5 row-start-4 row-end-6 p-5"
          )}
        >
          <h5>Campaign</h5>
          <div className="flex flex-col items-center gap-3">
            <ProgressCircle size="120" progress="0.75" />
            <h5 className="text-teal-500">$48,352 revenue generated</h5>
            <p>Includes extra misc expenditures and costs</p>
          </div>
        </div>
        <div
          className={containerClasses.concat(
            " col-start-5 col-end-9 row-start-4 row-end-6 p-5"
          )}
        >
          <h5>Sales Quantity</h5>
          <div className="h-[250px]">
            <BarChart isDashboard={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
