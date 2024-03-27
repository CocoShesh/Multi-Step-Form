import React from "react";
import { useNavigate } from "react-router-dom";
import AddOnOptionsMonthly from "./addSelection/AddOnOptionsMonthly";
import { useFormData } from "../../context/UserContext";
import AddOnOptionsYearly from "./addSelection/AddOnOptionsYearly";
const PickAddOns = () => {
  const navigate = useNavigate();
  const { toggleSelectedBilling } = useFormData();
  return (
    <>
      <section className=" h-full  w-full flex flex-col justify-between  max-md:px-0 font-ubuntu-bold px-10 pt-7">
        <section>
          <h1 className="text-4xl text-[#032859]">Pick add-ons</h1>
          <p className="text-sm  mt-2  text-[#9b9ca1]">
            Add-ons help enhance your gaming experience
          </p>
          {toggleSelectedBilling ? (
            <AddOnOptionsYearly />
          ) : (
            <AddOnOptionsMonthly />
          )}
        </section>
        <section className="flex  w-full justify-between items-center mb-5">
          <button
            onClick={() => navigate("/select-plan", { replace: true })}
            className="w-28 h-12 rounded-lg   mt-10 "
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/summary", { replace: true })}
            className="w-28 h-12 rounded-lg bg-[#03295a] mt-10 text-white"
          >
            Next Step
          </button>
        </section>
      </section>
    </>
  );
};

export default PickAddOns;
