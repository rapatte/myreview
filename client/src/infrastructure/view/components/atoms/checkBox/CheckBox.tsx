import React from 'react';

const Checkbox = ({ label, checked, onChange, error }) => {
  return (
    <div className="checkbox__wrapper">
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
      <div className="error">{error}</div>
    </div>
  );
};

export default Checkbox;
