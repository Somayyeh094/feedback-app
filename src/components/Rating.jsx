import React from "react";

function Rating({ select, selected }) {
  function handleChange(e) {
    select(+e.currentTarget.value);
  }

  return (
    <div>
      <ul className="ul-Rating">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i+1}>
            <input
              type="radio"
              name="Rating"
              value={i+1}
              id={`num${i+1}`}
              checked={selected === i+1}
              onChange={handleChange}
            />
                <label htmlFor={`num${i+1}`}>{i+1}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rating;
