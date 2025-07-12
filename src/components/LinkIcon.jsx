import React from 'react'
import { Link } from "react-router-dom";
import { FaQuestion } from 'react-icons/fa'
function LinkIcon() {
  return (
    <div className="LinkIcon">
      <Link to={"/about"}>
        <FaQuestion size={30} color='white' />
      </Link>
    </div>
  );
}

export default LinkIcon
