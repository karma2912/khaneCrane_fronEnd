import React from "react";

const Call = () => {
  const phoneNumber = "9561829120"; // Replace with your phone number

  return (
    <a href={`tel:${phoneNumber}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Phone_icon.png" // Replace with your contact icon
        alt="Call Us"
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
      />
    </a>
  );
};

export default Call;