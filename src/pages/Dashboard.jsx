import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ContentTable from "../components/ContentTable";
import { Link } from "react-router-dom";
import Frequent from "../components/Frequent";

const Dashboard = () => {
  const [change, setChange] = useState("");
  useEffect(()=>{
setChange("contacts")
  },[])

  function renderContent() {
    if (change === "frequent") {
      return <Frequent />;
    } else if (change === "contacts") {
      return <ContentTable />;
    }
  }
  return (
    <div>
      <Navbar />
      <div className=" flex">
        <div className=" w-[25%]">
          <Link to={"/create"}>
            <button className=" bg-blue-500 text-white px-4 py-1 m-5">
              Create Content
            </button>
          </Link>
          <h1 onClick={() => setChange("contacts")}>contacts</h1>
          <h1 onClick={() => setChange("frequent")}>frequent</h1>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
