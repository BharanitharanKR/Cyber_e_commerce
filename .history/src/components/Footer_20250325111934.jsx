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
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // Change to false to test rejection
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data.");
      }
    }, 2000); // Simulating an async operation
  });
}

// Using the Promise
fetchData()
  .then((response) => {
    console.log(response); // Executes if promise is resolved
  })
  .catch((error) => {
    console.error(error); // Executes if promise is rejected
  })
  .finally(() => {
    console.log("Operation complete.");
  });
