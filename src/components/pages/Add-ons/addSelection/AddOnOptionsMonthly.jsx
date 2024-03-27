import React, { useState } from "react";
import { useFormData } from "../../../context/UserContext";
const OptionsMonthly = [
  {
    id: 1,
    name: "Online Service",
    offers: "Access to multiplayer games",
    price: "1",
  },
  {
    id: 2,
    name: "Larger Storage",
    offers: "Extra 1TB cloud save",
    price: "2",
  },
  {
    id: 3,
    name: "Customizable Profile",
    offers: "Custom theme on your profile",
    price: "2",
  },
];

const AddOnOptionsMonthly = () => {
  const { selectedOptions, toggleOption } = useFormData();

  return (
    <>
      <section className="mt-5">
        {OptionsMonthly.map(item => {
          const isSelected = selectedOptions.some(
            option => option.id === item.id
          );
          return (
            <section
              key={item.id}
              className={`flex flex-col justify-between  mt-2   w-full h-[80px] px-5 py-2 bg-white border-2  rounded-lg cursor-pointer ${
                isSelected ? "border-[#3d68ff]" : "border-[#e0dfe3]"
              }  hover:border-[#3d68ff]  transition duration-300 ease-in-out`}
              onClick={() => toggleOption(item.id, item)}
            >
              <section className="text-sm flex justify-between items-center">
                <section className="flex  gap-5">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={isSelected}
                    readOnly
                  />
                  <section className="flex flex-col">
                    <label
                      htmlFor={item.name}
                      className="text-lg text-[#172843]"
                    >
                      {item.name}
                    </label>
                    <label htmlFor={item.name} className="text-[#a6a6b0]">
                      {item.offers}
                    </label>
                  </section>
                </section>
                <label htmlFor={item.name} className="text-[#a6a6b0]">
                  +${item.price}/mo
                </label>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default AddOnOptionsMonthly;
