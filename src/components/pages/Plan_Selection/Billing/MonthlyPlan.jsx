import React from "react";
import { useFormData } from "../../../context/UserContext";

const planOptionsMonthly = [
  {
    id: 1,
    name: "Arcade",
    price: 9,
    src: "/icon-arcade.svg",
  },
  {
    id: 2,
    name: "Advanced ",
    price: 12,
    src: "/icon-advanced.svg",
  },
  {
    id: 3,
    name: "Pro",
    price: 15,
    src: "/icon-pro.svg",
  },
];
const MonthlyPlan = ({ billing }) => {
  const { handlePlanSelection, selectedPlan, toggleSelectedBilling } =
    useFormData();
  return (
    <>
      {planOptionsMonthly.map(item => {
        return (
          <section
            key={item.id}
            className={`lg:flex lg:flex-col justify-between  max-sm:flex  max-sm:justify-start max-sm:gap-5  max-sm:h-fit max-sm:items-center w-full h-[170px] p-3 bg-white border-2  rounded-lg cursor-pointer  hover:border-[#3d68ff]  transition duration-300 ease-in-out ${
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
                  ? `${item["$yearly-price"]}/yr`
                  : `${item["price"]}/mo`}
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

export default MonthlyPlan;
