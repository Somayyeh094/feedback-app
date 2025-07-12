import React from "react";

function ButtonCustom({ children, isDisabled, type , version='primary'}) {
  return (
    <div>
      <button
        type={type}
        disabled={isDisabled}
        className={`button button-${version}`}
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonCustom;
