import React from "react";
import Feedbackitem from "./Feedbackitem";
import PropTypes from "prop-types";

function Feedbacklist({ feedback, handleDelete }) {
   if (!feedback || feedback.length === 0) {
      return <p className="text-white">No Feedback Yet</p>;
   }
   return (
      <div className="text-white space-y-5 mt-8">
         {feedback.map((item) => (
            <Feedbackitem key={item.id} item={item}
            handleDelete={handleDelete}/>
         ))}
      </div>
   );
}

Feedbacklist.propTypes ={
   feedback: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      text: PropTypes.string
   }
   ))
}

export default Feedbacklist;
