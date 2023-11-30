import Sidebar_a from "../../components/Admin/Sidebar_Admin/Sidebar_a";
import Balance_a from "../../components/Admin/Balance_Admin/Balance_a";
import Grafico from "../../components/Admin/Grafico_Admin/Grafico";

const Dashboard_a = () => {
  return (
    <div className="dashboard">
      <Sidebar_a />

      <main>
      <Balance_a />
      <Grafico />

      </main>
    </div>
  );
};

export default Dashboard_a;
