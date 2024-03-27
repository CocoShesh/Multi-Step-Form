import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import YearlyPlan from "./Billing/YearlyPlan";
import MonthlyPlan from "./Billing/MonthlyPlan";
import { useFormData } from "../../context/UserContext";
import toast from "react-hot-toast";
const SelectPlan = () => {
  const navigate = useNavigate();
  const { toggleSelectedBilling, setToggleSelectedBilling, selectedPlan } =
    useFormData();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = data => {
    if (!selectedPlan) {
      return toast.error("Please select a plan");
    } else {
      navigate("/add-ons", { replace: true });
    }
  };

  return (
    <>
      <section className=" h-full  w-full  font-ubuntu-bold p-10 max-sm:px-3">
        <h1 className="text-4xl text-[#032859]">Select your plan</h1>
        <p className="text-sm  mt-2  text-[#9b9ca1]">
          You have the option of monthly or yearly bill.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="flex  items-center   max-sm:flex-col gap-5 justify-between mt-5 ">
            {toggleSelectedBilling ? (
              <YearlyPlan billing={toggleSelectedBilling} />
            ) : (
              <MonthlyPlan billing={toggleSelectedBilling} />
            )}
          </section>
          {errors.selectedPlan && (
            <span className="text-red-500">Please select a plan</span>
          )}
          <section className="w-full flex items-center justify-center gap-5 bg-[#f8f9fe] h-12 mt-5 rounded-lg select-none">
            <span
              className={`${
                toggleSelectedBilling ? "text-[#a0a0ab]" : "  text-black"
              } `}
            >
              Monthly
            </span>
            <section
              className="w-12 relative h-6 rounded-full bg-[#042959] cursor-pointer"
              onClick={() => setToggleSelectedBilling(prev => !prev)}
              style={{
                transition: "background-color 0.3s ease",
              }}
            >
              <div
                className="h-4 w-4 bg-white rounded-full absolute top-[4px] transition-all duration-300 select-none"
                style={{
                  right: toggleSelectedBilling ? "5px" : "calc(100% - 20px)",
                }}
              ></div>
            </section>
            <span
              className={`${
                toggleSelectedBilling ? "text-black" : " text-[#a0a0ab]"
              } `}
            >
              Yearly
            </span>
          </section>

          <section className="flex  w-full mt-7 justify-between items-center">
            <button
              onClick={() => navigate("/", { replace: true })}
              className="w-28 h-12 rounded-lg   mt-10 "
            >
              Go Back
            </button>
            <button
              type="submit"
              className={`w-28 h-12 rounded-lg bg-[#03295a] mt-10 text-white ${
                !isValid && "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              Next Step
            </button>
          </section>
        </form>
      </section>
    </>
  );
};

export default SelectPlan;
