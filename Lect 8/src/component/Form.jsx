import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiKeyboard } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useState } from "react";

const Form = () => {
  const [isInputEmail, setIsInputEmail] = useState(false);
  const [isInputUsername, setIsInputUsername] = useState(false);
  const [isInputPass, setIsInputPass] = useState(false);
  const [isInputconfirm, setIsInputconfirm] = useState(false);

  // form function
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.ConfirmPassword) {
      setError("matchpassword", {
        message: "Passwords do not match. Please try again.",
      });
    }
    console.log(data);
  };

  return (
    <div className="container py-10 px-5 w-[40vw] bg-gray-100 rounded-lg max-h-full min-h-[90vh] relative mb-[200px] top-[100px] ">
      <div className="sign-up w-full flex justify-around">
        <button className="bg-transparent text-[#7541ff] py-4 px-12 rounded-lg">
          Sign-in
        </button>
        <button className="bg-[#7541ff] text-white py-4 px-12 rounded-lg">
          Sign-up
        </button>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="details">
          {/* Email input */}
          <div className="input flex items-center w-full my-5">
            <span
              className={`usericon  bg-white py-[1.1rem] text-gray-400 text-[1.30rem] pl-1 rounded-tl-lg rounded-bl-lg ${
                isInputEmail ? "border-[#7541ff] border-2 border-r-0" : ""
              }`}
            >
              <MdEmail />
            </span>
            <input
              type="Email"
              {...register("Email", {
                required: { value: true, message: "This feild is required" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "! Please enter valid Email",
                },
              })}
              className="w-full text-gray-400 border-1 appearance-none  py-4 pl-1 flex items-center justify-start rounded-tr-lg rounded-br-lg focus:outline-none focus:bg-white focus:text-black focus:border-[#7541ff] focus:border-2 focus:border-l-0
           "
              placeholder="Email"
              onFocus={() => setIsInputEmail(true)}
              onBlur={() => setIsInputEmail(false)}
            />
          </div>
          {/* Email input Errror  */}
          {errors.Email && (
            <span className="red flex justify-start py-2">
              {errors.Email.message}
            </span>
          )}

          {/* Username input */}
          <div className="input flex items-center w-full my-5">
            <span
              className={`usericon  bg-white py-[1.1rem] text-gray-400 text-[1.30rem] pl-1 rounded-tl-lg rounded-bl-lg ${
                isInputUsername ? "border-[#7541ff] border-2 border-r-0" : ""
              }`}
            >
              <CgProfile />
            </span>
            <input
              type="text"
              {...register("Username", {
                required: { value: true, message: "This feild is required" },
                pattern: {
                  value: /^@[A-Za-z0-9_-]+\d{4,}$/,
                  message: "“Enter a username like @example1234.” ",
                },
              })}
              className="w-full text-gray-400 appearance-none py-4 pl-1 flex items-center justify-start rounded-tr-lg rounded-br-lg focus:outline-none focus:bg-white focus:text-black focus:border-[#7541ff] focus:border-2 focus:border-l-0"
              placeholder="Username"
              onFocus={() => setIsInputUsername(true)}
              onBlur={() => setIsInputUsername(false)}
            />
          </div>
          {errors.Username && (
            <span className="red flex justify-start py-2">
              {errors.Username.message}
            </span>
          )}
          <div className="input flex items-center w-full my-5">
            <span
              className={`usericon  bg-white py-[1.1rem] text-gray-400 text-[1.30rem] pl-1 rounded-tl-lg rounded-bl-lg ${
                isInputPass ? "border-[#7541ff] border-2 border-r-0" : ""
              }`}
            >
              <CiKeyboard />
            </span>
            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "This feild is required" },
                maxLength: { value: 12, message: "Maximum length is 12" },
                minLength: { value: 8, message: "Minimum length is 8" },
              })}
              className="w-full text-gray-400 appearance-none py-4 pl-1 flex items-center justify-start rounded-tr-lg rounded-br-lg focus:outline-none focus:bg-white focus:text-black focus:border-[#7541ff]
           focus:border-2 focus:border-l-0"
              placeholder="Password"
              onFocus={() => setIsInputPass(true)}
              onBlur={() => setIsInputPass(false)}
            />
          </div>
          {errors.password && (
            <span className="red flex justify-start py-2">
              {errors.password.message}
            </span>
          )}
          <div className="input flex items-center w-full my-5">
            <span
              className={`usericon  bg-white py-[1.1rem] text-gray-400 text-[1.30rem] pl-1 rounded-tl-lg rounded-bl-lg ${
                isInputconfirm ? "border-[#7541ff] border-2 border-r-0" : ""
              }`}
            >
              <FaRegCircleCheck />{" "}
            </span>
            <input
              type="password"
              {...register("ConfirmPassword", {
                required: { value: true, message: "This field is required" },
                maxLength: { value: 12, message: "Maximum length is 12" },
                minLength: { value: 8, message: "Minimum length is 8" },
              })}
              className="w-full text-gray-400 appearance-none py-4 pl-1 flex items-center justify-start rounded-tr-lg rounded-br-lg focus:outline-none focus:bg-white focus:text-black focus:border-[#7541ff]
           focus:border-2 focus:border-l-0"
              placeholder="Confirm Password"
              onFocus={() => setIsInputconfirm(true)}
              onBlur={() => setIsInputconfirm(false)}
            />
          </div>
          {errors.ConfirmPassword && (
            <span className="red flex justify-start py-2">
              {errors.ConfirmPassword.message}
            </span>
          )}
          {errors.matchpassword && (
            <span className="red flex justify-start py-2">
              {errors.matchpassword.message}
            </span>
          )}
        </div>
        <div className="Terms-Conditons flex justify-start items-center gap-1 pl-2">
          <input
            {...register("Accept", {
              required: { value: true, message: "Accept Terms And Conditions" },
            })}
            className="cursor-pointer"
            type="checkbox"
          />
          <span> Accept </span>
          <span className="text-[#7541ff]">Terms & Conditions</span>
        </div>
        {errors.Accept && (
          <span className="red flex justify-start py-2">
            {errors.Accept.message}
          </span>
        )}
        <input
          type="submit"
          value="Sign Up"
          className="bg-[#7541ff] w-full py-5 px-2 rounded-lg text-white cursor-pointer my-4"
        />
      </form>
    </div>
  );
};

export default Form;
