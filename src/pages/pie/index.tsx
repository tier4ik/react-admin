import PageHeader from "../../components/PageHeader";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <div>
      <PageHeader header="Pie Chart" subheader="Simple Pie Chart" />
      <div className="h-[75vh] mt-8">
        <PieChart />
      </div>
    </div>
  );
};

export default Pie;
