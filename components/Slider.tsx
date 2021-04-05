import React, {useState} from 'react';

interface SvgResumeProps {
  adjustCoefficient: Function;
}

export default function SvgResume({adjustCoefficient}: SvgResumeProps) {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.valueAsNumber);
    adjustCoefficient(value);
  };

  return (
    <input
      id="typeinp"
      type="range"
      min="0"
      max="1.2"
      value={value}
      onChange={handleChange}
      step=".01"
    />
  );
}
