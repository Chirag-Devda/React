import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";
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

  // sending the object to localhost3000 means at our backend whitout delaying

  const onSubmit = async (data) => {
    // await delay(2);
    let r = fetch("http://localhost:3000/", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await (await r).text;
    console.log(data, res);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("UserName", {
            required: { value: true, message: "*" },
            minLength: { value: 2, message: " ! Minumum length is 2" },
            maxLength: { value: 10, message: " ! Maxumum length is 10" },
          })}
          placeholder="Username"
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
        />
        {errors.Password && (
          <>
            <span className="red">{errors.Password.message}</span>
          </>
        )}
        <br />
        <br />
        <input disabled={isSubmitting} type="submit" value="submit" />
        {errors.invaliduser && (
          <>
            <br />
            <div className="red">{errors.invaliduser.message}</div>
          </>
        )}
      </form>
    </>
  );
}

export default App;
