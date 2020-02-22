import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const renderCheckboxes = (isChecked, value, onClick) => (
  <FormControlLabel
    control={<Checkbox checked={isChecked} onChange={onClick} value={value} />}
    label={value}
  />
);

export const FormCheckBox = ({ isChecked, value, onClick }) => (
  <>{renderCheckboxes(isChecked, value, onClick)}</>
);
