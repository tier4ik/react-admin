import BarChart from "../../components/BarChart";
import PageHeader from "../../components/PageHeader";

const Bar = () => {
  return (
    <div>
      <PageHeader header="Bar Chart" subheader="Simple Bar Chart" />
      <div className="h-[75vh] mt-8">
        <BarChart />
      </div>
    </div>
  );
};

export default Bar;
