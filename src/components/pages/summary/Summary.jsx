import React, { useMemo, useState } from "react";
import { useFormData } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Completed from "../completed/Completed";

const Summary = () => {
  const { completeOrder, toggleSelectedBilling } = useFormData();
  const navigate = useNavigate();
  const [completedMessage, setCompletedMessage] = useState(false);

  const selectedOptions = completeOrder?.selectedOptions || [];

  const AddOnsTotal = useMemo(() => {
    return selectedOptions.reduce((acc, curr) => acc + parseInt(curr.price), 0);
  }, [selectedOptions]);

  const totalMonthlyPrice = useMemo(() => {
    return AddOnsTotal + parseInt(completeOrder?.selectedPlan?.price || 0);
  }, [AddOnsTotal, completeOrder?.selectedPlan?.price]);

  const handleCompletedOrder = () => {
    setCompletedMessage(prev => !prev);
  };
  return (
    <>
      {completedMessage ? (
        <Completed />
      ) : (
        <section className="h-full w-full flex flex-col justify-between font-ubuntu-bold p-10 max-sm:px-3">
          <section>
            <h1 className="text-4xl text-[#032859]">Finishing Up</h1>
            <p className="text-sm mt-2 text-[#9b9ca1]">
              Double-check everything looks OK before confirming
            </p>
            <section className="h-fit mt-10 p-3 rounded-xl bg-[#f8f9fe]">
              <section className="flex items-center justify-between">
                <section>
                  <h1>
                    {completeOrder?.selectedPlan?.name} ({""}
                    {completeOrder?.selectedPlan?.selectedPlanDuration})
                  </h1>
                  <Link to="/select-plan" className="underline text-blue-500">
                    {" "}
                    Change
                  </Link>
                </section>
                ${completeOrder?.selectedPlan?.price}{" "}
                {toggleSelectedBilling ? `/yr` : `/mo`}
              </section>
              <section className="mt-5 pt-5 border-t-2">
                <section className="flex flex-col gap-3">
                  {selectedOptions.map((option, index) => (
                    <section
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>{option.name}</span>
                      <span>
                        + {option.price} {toggleSelectedBilling ? `/yr` : `/mo`}
                      </span>
                    </section>
                  ))}
                </section>
              </section>
            </section>
            <section className="flex justify-between px-3 pt-5">
              <span>
                Total {toggleSelectedBilling ? `(per year) ` : `(per month) `}{" "}
              </span>
              <span>
                <span>${totalMonthlyPrice}</span>
              </span>
            </section>
          </section>
          <section className="flex  w-full justify-between mt-5 items-center">
            <button
              onClick={() => navigate("/add-ons", { replace: true })}
              className="w-28 h-12 rounded-lg   mt-10 "
            >
              Go Back
            </button>
            <button
              onClick={handleCompletedOrder}
              className={`w-28 h-12 rounded-lg bg-[#03295a] mt-10 text-white 
            `}
            >
              Next Step
            </button>
          </section>
        </section>
      )}
    </>
  );
};

export default Summary;
