import DashCard from "../../shared/card/DashCard";
import Analytics from "../analytics/Analytics";
import DashTable from "../table/DashTable";

const DashHome = () => {
  return (
    <div>
      <DashCard />
      <Analytics />
      <DashTable />
      
    </div>
  );
};

export default DashHome;
