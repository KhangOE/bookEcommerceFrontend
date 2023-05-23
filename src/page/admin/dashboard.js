import DashboardHeader from "../../components/admin/dashboardHeader";
import { Earningchart } from "../../components/admin/earningchart";
import DashboardTable from "../../components/admin/dashboardTable";
import React, { useEffect } from "react";

export const Dashboard = () => {
  useEffect(() => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = "cat";
    speech.lang = "en";
    window.speechSynthesis.speak(speech);
  }, []);

  // useEffect(() => {
  //     console.log('ca3d')

  //     axios.get('https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb/violet?strictMatch=false', {
  //         headers: {
  //             app_id: "20d5be5c",
  //             app_key: "3689eaa3c8bbb54c633611ce106adb70"
  //         }
  //         //     withCredentials: false,
  //     }).then(res => { console.log('re', res) })

  // }, [])
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
