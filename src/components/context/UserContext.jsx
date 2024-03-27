// FormDataContext.js
import React, { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [toggleSelectedBilling, setToggleSelectedBilling] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const updateFormData = data => {
    setFormData(data);
  };

  const handlePlanSelection = (item, selectedPlanDuration) => {
    setSelectedPlan({ ...item, selectedPlanDuration });
  };

  const toggleOption = (id, item) => {
    const isSelected = selectedOptions.some(option => option.id === id);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter(option => option.id !== id));
    } else {
      setSelectedOptions([...selectedOptions, item]);
    }
  };
  const completeOrder = {
    userData: formData,
    selectedPlan: selectedPlan,
    selectedOptions: selectedOptions,
  };
  return (
    <FormDataContext.Provider
      value={{
        formData,
        updateFormData,
        selectedPlan,
        handlePlanSelection,
        setToggleSelectedBilling,
        toggleSelectedBilling,
        toggleOption,
        selectedOptions,
        completeOrder,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
