import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import PersonalInfo from "./components/pages/personal_information/PersonalInfo";
import SelectPlan from "./components/pages/Plan_Selection/SelectPlan";
import PickAddOns from "./components/pages/Add-ons/PickAddOns";
import Summary from "./components/pages/summary/Summary";
import Completed from "./components/pages/completed/Completed";
function App() {
  return (
    <>
      <BrowserRouter>
        <main className="flex items-center  justify-center w-full min-h-screen bg-[#eef5ff]">
          <section className="w-[850px] flex max-lg:flex-col max-lg:h-fit  h-[550px]  p-5 gap-10  bg-white shadow-2xl rounded-xl font-ubuntu-medium">
            <Homepage />
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/select-plan" element={<SelectPlan />} />
              <Route path="/add-ons" element={<PickAddOns />} />
              <Route path="/summary" element={<Summary />} />
            </Routes>
          </section>
        </main>
        <Toaster position="top-right" reverseOrder={false} />
      </BrowserRouter>
    </>
  );
}

export default App;
