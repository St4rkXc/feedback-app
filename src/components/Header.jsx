import React from "react";
import PropTypes from "prop-types";

function Header({ text }) {
   return (
      <header>
         <div className="py-5 bg-[rgba(0,0,0,0.4)]">
            <h2 className="font-semibold text-center text-xl text-pink-400">{text}</h2>
         </div>
         <div className="container mx-auto">
            
         </div>
      </header>
   );
}

Header.defaultProps = {
   text: "Feedback UI", // default text
};
Header.propTypes = {
   text: PropTypes.string /* mastiin jenis prop settings */,
};

export default Header;
