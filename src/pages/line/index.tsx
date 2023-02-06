import LineChart from "../../components/LineChart";
import PageHeader from "../../components/PageHeader";

const Line = () => {
  return (
    <div>
      <PageHeader header="Line Chart" subheader="Simple Line Chart" />
      <div className="h-[75vh] mt-8">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
