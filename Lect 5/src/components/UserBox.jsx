import React, { useContext, useEffect, useState } from "react";
import { userarr } from "../Context/Context"; // Ensure the path to Context is correct

const UserBox = () => {
  const value = useContext(userarr);
  const [userValue, setUserValue] = useState(""); // State to hold the user value

  useEffect(() => {
    filterFirstUser();
  }, [value]); // Include value in the dependency array to re-run the effect when value changes

  const filterFirstUser = () => {
    if (value.length > 0) {
      const firstUser = value[0];
      const userValue = firstUser.User;
      setUserValue(userValue); // Set the userValue in state
      console.log(userValue);
    }
  };

  return (
    <div className="userbox">{userValue && <p>User Value: {userValue}</p>}</div>
  );
};

export default UserBox;
