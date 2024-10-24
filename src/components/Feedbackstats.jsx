import React from "react";
import PropTypes from 'prop-types'


function Feedbackstats({ feedback }) {
   // Calculate ratings
   
   let avarage = feedback.reduce((acc, cur)=>{
      return acc +  cur.rating
   },0) / feedback.length

   avarage = avarage.toFixed(1).replace(/[.,]0$/,'')



   return (
      <div className="flex justify-between mt-4">
         <h4 className="text-white font-bold">{feedback.length} Reviewes</h4>
         <h4 className="text-white font-bold">Avarage Rating : {isNaN(avarage) ? 0 : avarage} </h4>
         
      </div>
   );
}

Feedbackstats.propTypes = {
   feedback:PropTypes.array.isRequired
}


export default Feedbackstats;

