import React from "react";
import Feedbackitem from "./Feedbackitem";

function Feedbacklist({ feedback }) {
   if (!feedback || feedback.length === 0) {
      return <p className="text-white">No Feedback Yet</p>;
   }
   return (
      <div className="text-white space-y-5">
         {feedback.map((item) => (
            <Feedbackitem key={item.id} item={item} />
         ))}
      </div>
   );
}

export default Feedbacklist;
