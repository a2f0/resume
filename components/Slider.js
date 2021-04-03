import React, { useState } from "react";
export default function SvgResume(props) {

  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.adjustCoefficient(value);
  }

  return (
    <input
      id="typeinp"
      type="range"
      min="0" max="1.2"
      value={value}
      onChange={handleChange}
      step=".01"/>
  );
}
