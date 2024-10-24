import { useState } from "react";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./data/FeedbackData";
import Feedbackstats from "./components/Feedbackstats";
import Feedbackform from "./components/Feedbackform";

function App() {
   const [feedback, setFeedback] = useState(FeedbackData)
   const deleteFeedback = (id) => {
      if(window.confirm('Are you sure want to delete this?')){
         setFeedback(feedback.filter((item) => item.id !== id))
      }
   }
   return (
      <>
         <Header  />
         <div className="container mx-auto mt-12">
            <Feedbackform />
            <Feedbackstats feedback={feedback} />
            <Feedbacklist feedback={feedback} handleDelete={deleteFeedback}/>
         </div>
      </>
   );
}

export default App;
