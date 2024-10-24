import React from "react";

function Feedbackitem({ item }) {
   
   return (
      <div className="bg-white p-8 relative rounded-xl">
         <div className="absolute top-[-10px] left-[-10px] p-4 w-[50px] h-[50px] bg-pink-500 text-white flex justify-center items-center z-20 rounded-full border">
            {item.rating}
         </div>
         <div className="text-base text-black ml-6">{item.text}</div>
      </div>
   );
}

export default Feedbackitem;
