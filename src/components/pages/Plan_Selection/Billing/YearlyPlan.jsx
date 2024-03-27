import React from "react";
import { useFormData } from "../../../context/UserContext";
const planOptionsYearly = [
  {
    id: 1,
    name: "Arcade",
    price: 90,
    src: "/icon-arcade.svg",
    free_trial: "2 months Free",
  },
  {
    id: 2,
    name: "Advanced ",
    price: 120,
    src: "/icon-advanced.svg",
    free_trial: "2 months Free",
  },
  {
    id: 3,
    name: "Pro",
    price: 150,
    src: "/icon-pro.svg",
    free_trial: "2 months Free",
  },
];
const YearlyPlan = ({ billing }) => {
  const { handlePlanSelection, selectedPlan, toggleSelectedBilling } =
    useFormData();
  return (
    <>
      {planOptionsYearly.map(item => {
        return (
          <section
            key={item.id}
            className={`lg:flex lg:flex-col lg:justify-between  max-sm:flex  max-sm:justify-start max-sm:gap-5  max-sm:h-fit max-sm:items-center  w-full h-[170px] p-3 bg-white border-2  rounded-lg cursor-pointer  hover:border-[#3d68ff]  transition duration-300 ease-in-out ${
              selectedPlan && selectedPlan.id === item.id
                ? "border-[#3d68ff]"
                : "border-[#e0dfe3]"
            }`}
            onClick={() =>
              handlePlanSelection(
                item,
                toggleSelectedBilling ? "Yearly" : "Monthly"
              )
            }
          >
            <img src={item?.src} alt="" className="h-10 w-10" />
            <section className="text-sm">
              <label htmlFor={item.name} className="text-lg text-[#172843]">
                {" "}
                {item.name}
              </label>{" "}
              <br />
              <label htmlFor={item.name} className="text-[#a6a6b0]">
                $
                {billing
                  ? `${item["price"]}/yr`
                  : ` ${item["monthly-price"]}/mo`}
              </label>{" "}
              <br />
              {billing && (
                <label className="  font-ubuntu-bold text-[#172843]">
                  {" "}
                  {item.free_trial}
                </label>
              )}
            </section>
          </section>
        );
      })}
    </>
  );
};

export default YearlyPlan;
