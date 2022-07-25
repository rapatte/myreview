import React, { useState } from 'react';

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {label}
    </label>
    // <div>
    //   <Checkbox label="My Value" value={checked} onChange={handleChange} />

    //   <p>Is "My Value" checked? {checked.toString()}</p>
    // </div>
  );
};

export default Checkbox;
