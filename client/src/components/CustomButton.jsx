import React from "react";
import { useSnapshot } from "valtio";

// State
import state from "../store";

const CustomButton = ({ type, title, handleClick, customStyles }) => {
   const snap = useSnapshot(state);
   const generalStyle = (type) => {
      if (type === "filled") {
         return {
            backgroundColor: snap.color,
            color: "#fff",
         };
      }
   };
   return (
      <button
         className={`px-2 py-1.5 rounded-md ${customStyles}`}
         style={generalStyle(type)}
         onClick={handleClick}
      >
         {title}
      </button>
   );
};

export default CustomButton;
