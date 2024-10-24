import { useState } from "react";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./data/FeedbackData";

function App() {
   const [feedback, setFeedback] = useState(FeedbackData)
   return (
      <>
         <Header text='ayam' />
         <div className="container mx-auto mt-12">
            <Feedbacklist feedback={feedback} />
         </div>
      </>
   );
}

export default App;
