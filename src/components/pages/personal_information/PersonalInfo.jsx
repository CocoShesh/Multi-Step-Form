import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserInfoSchema } from "../../Schema/UserInfoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormData } from "../../context/UserContext";
import toast from "react-hot-toast";
const PersonalInfo = () => {
  const { formData, updateFormData } = useFormData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserInfoSchema),
    defaultValues: formData,
  });

  const onSubmit = data => {
    updateFormData(data);
    navigate("/select-plan", { replace: true });
  };
  return (
    <>
      <section className=" h-full  w-full  font-ubuntu-bold p-10 max-sm:px-3">
        <h1 className="text-4xl text-[#032859]">Personal info</h1>
        <p className="text-sm  mt-2  text-[#9b9ca1]">
          Please provide your name. email address, and phone number.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10">
          <section className="flex items-center justify-between">
            <label htmlFor="name"> Name</label> <br />
            {errors?.name && (
              <span className="block text-red-400 text-sm text-left">
                {errors?.name?.message}
              </span>
            )}{" "}
          </section>
          <input
            type="text"
            className="w-full h-12 rounded-lg pl-2 outline-none border-[#e0dfe3] border my-2"
            placeholder="e.g. Alex Cooper"
            {...register("name")}
          />{" "}
          <section className="flex items-center justify-between">
            <label htmlFor="email"> Email</label> <br />
            {errors?.email && (
              <span className="block text-red-400 text-sm text-left">
                {errors?.email?.message}
              </span>
            )}
          </section>
          <input
            type="email"
            id="email"
            className="w-full h-12 rounded-lg pl-2 outline-none border-[#e0dfe3] border my-2"
            placeholder="e.g. AlexCooper@gmail.com"
            {...register("email")}
          />
          <section className="flex items-center justify-between">
            <label htmlFor="PhoneNumber"> Phone Number</label> <br />
            {errors?.phoneNumber && (
              <span className="block text-red-400 text-sm text-left">
                {errors?.phoneNumber?.message}
              </span>
            )}
          </section>
          <input
            type="text"
            className="w-full h-12 rounded-lg pl-2 outline-none border-[#e0dfe3] border my-2"
            placeholder="e.g. +63 234 567 8900"
            {...register("phoneNumber", {
              required: "This field is required",
            })}
          />
          <button
            type="submit"
            className="w-28 h-12 rounded-lg bg-[#03295a] ml-auto mt-10 text-white"
          >
            Next Step
          </button>
        </form>
      </section>
    </>
  );
};

export default PersonalInfo;
