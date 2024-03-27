import React from "react";
import { useLocation } from "react-router-dom";
import PersonalInfo from "../pages/personal_information/PersonalInfo";
const formSteps = [
  {
    id: 1,
    step: 1,
    name: "Your Info",
    path: "/",
  },
  {
    id: 2,
    step: 2,
    name: "Select Plan",
    path: "/select-plan",
  },
  {
    id: 3,
    step: 3,
    name: "Add-ons",
    path: "/add-ons",
  },
  {
    id: 4,
    step: 4,
    name: "Summary",
    path: "/summary",
  },
];
const Homepage = () => {
  const location = useLocation();
  return (
    <>
      <section
        className="h-full  rounded-lg w-[400px]  max-lg:w-full "
        style={{
          background: "url(/bg-sidebar-desktop.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="pt-5 max-lg:flex max-lg:py-10 max-lg:gap-5  max-lg:items-center max-lg:justify-center ">
          {formSteps.map(step => {
            const isActive = location.pathname === step.path;
            return (
              <div key={step.id} className="flex   items-center lg:pl-7  pt-5 ">
                <div
                  className={`flex   items-center justify-center font-bold w-[30px] h-[30px] border ${
                    isActive ? "bg-[#bce0fa] text-black " : "border text-white"
                  }  rounded-full`}
                >
                  {step.step}
                </div>
                <div className="ml-5 max-lg:hidden">
                  <span className="block text-[#9493eb] uppercase text-sm">
                    Step {step.step}
                  </span>
                  <span className="block text-white uppercase font-bold text-sm">
                    {step.name}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Homepage;
