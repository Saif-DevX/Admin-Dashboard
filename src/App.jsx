import React, { useState } from "react";
import Sidebar from "./Components/Layout/Sidebar";
import Header from "./Components/Layout/Header";
import Dashboard from "./Components/Dashboard/dashboard";

const App = () => {
  const [sidebarcollapsed, setSidebarcollapsed] = useState(false);
  const [currentpage, setcurrentpage] = useState("dashboard");
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        <div className="flex h-screen overflow-hidden">
          <Sidebar
            collapsed={sidebarcollapsed}
            onToggle={() => setSidebarcollapsed(!sidebarcollapsed)}
            currentPage={currentpage}
            onPagechange={setcurrentpage}
          />

          <div className="flex-1 flex flex-col overflow-hidden">
            <Header sidebarcollapsed={sidebarcollapsed} onTogglesidebar={() => setSidebarcollapsed(!sidebarcollapsed)}/>

              <main className="flex-1 overflow-y-auto bg-transparent">
                <div className="p-6 space-y-6">
                  {currentpage === "dashboard" && <Dashboard/>}
                </div>
              </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
