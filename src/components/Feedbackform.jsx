import React from "react";
import Card from "./shared/Card";
import { useState } from "react";

export default function Feedbackform() {
   const [text, setText] = useState('')

   const handleTextChange = (e) => {
      setText(e.target.value)
   }

   return (
      <Card>
         <form>
            <h2 className="text-slate-900 font-semibold text-xl">
               How would you rate your service with us?
            </h2>
               {/* todo : add rating system */}
               <div className="relative">
                  <input type="text" onChange={handleTextChange} className="rounded-xl border border-slate-700 w-full py-2 px-4 mt-4 focus:outline-none text-black" placeholder="Wrete a review" />
                  <button className="absolute bg-black right-[12px] bottom-[10px] text-base ">Send</button>
               </div>
         </form>
      </Card>
   );
}
