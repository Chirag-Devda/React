import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";
import Form from "./component/Form";

function App() {
  const [count, setCount] = useState(0);

  const delay = (d) => {
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello");
      }, d * 1000);
    });
    return p;
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
    if (data.UserName === "sahil") {
      setError("invaliduser", { message: "this user is cheap" });
    }
  };
  return (
    <>
      {isSubmitting && (
        <div>
          {isSubmitting && (
            <div className="loader-container">
              <div className="loader"></div>
              <div className="loading-text">Loading...</div>
            </div>
          )}
        </div>
      )}
      <form className="w-fit m-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("UserName", {
            required: { value: true, message: "*" },
            minLength: { value: 2, message: " ! Minumum length is 2" },
            maxLength: { value: 10, message: " ! Maxumum length is 10" },
          })}
          placeholder="Username"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
        {errors.UserName && (
          <>
            <span className="red">{errors.UserName.message}</span>
          </>
        )}
        <br />
        <br />
        <input
          type="password"
          {...register("Password", {
            required: { value: true, message: "*" },
            minLength: { value: 8, message: "minimum 8 length" },
            maxLength: { value: 10, message: "maximum 10 length" },
          })}
          placeholder="Password....."
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
        {errors.Password && (
          <>
            <span className="red">{errors.Password.message}</span>
          </>
        )}
        <br />
        <br />
        <input
          disabled={isSubmitting}
          type="submit"
          value="submit"
          className="px-5 py-2 bg-yellow-200 rounded-xl active:bg-yellow-100"
        />
        {errors.invaliduser && (
          <>
            <br />
            <div className="red">{errors.invaliduser.message}</div>
          </>
        )}
      </form>
      <Form />
    </>
  );
}

export default App;
