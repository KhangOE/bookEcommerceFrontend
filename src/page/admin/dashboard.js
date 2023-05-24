import DashboardHeader from "../../components/admin/dashboardHeader";
import { Earningchart } from "../../components/admin/earningchart";
import DashboardTable from "../../components/admin/dashboardTable";
import React, { useEffect } from "react";

export const Dashboard = () => {
  return (
    <>
      <div className="lg:p-6 p-2 w-full overflow-hidden">
        <DashboardHeader></DashboardHeader>
        <Earningchart></Earningchart>
        <DashboardTable> </DashboardTable>
      </div>
    </>
  );
};
