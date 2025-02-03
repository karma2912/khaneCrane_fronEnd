import React from "react";

const Call = () => {
  const phoneNumber = "9561829120"; // Replace with your phone number

  return (
    <a href={`tel:${phoneNumber}`} className="fixed bottom-5 right-5 bg-yellow-500 p-3 z-50 rounded-full shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/83/Circle-icons-phone.svg" // Replace with your contact icon
        alt="Call Us"
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
      />
    </a>
  );
};

export default Call;