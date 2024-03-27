import React from "react";

const Completed = () => {
  return (
    <>
      <section className=" flex flex-col gap-5 items-center justify-center h-full  w-full">
        <section>
          <img src="/icon-thank-you.svg" alt="" />
        </section>{" "}
        <h1 className="text-[#052955] text-4xl"> Thank you!</h1>
        <p className="text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </section>
    </>
  );
};

export default Completed;
