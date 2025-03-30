import React from "react";
import Cyber_logo from "../assets/Cyber_logo.png";

const Footer = () => {
  return (
    <div className="w-screen">
      <div className="w-full h-80 absolute bg-black p-24 items-center">
        <div className="m-4 items-center">
          <div className="">
            <img src={Cyber_logo} className="bg-white" />
          </div>
          <div className="text-gray-300 pt-6">
            <p>Home</p>
            <p>About Us</p>
            <p>Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;





async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();


fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Hello World",
    body: "This is a test post",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Created Post:", data))
  .catch((error) => console.error("Error:", error));


//   promises