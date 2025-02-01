import React from "react";
import InputField from "./InputField";

const CardInformation = ({
  handleInputValueChange,
  InputFieldValue,
  fields,
  pattern,
}) => {
  return (
    <fieldset className="flex items-center justify-between md:flex-row flex-col md:gap-2">
      {fields.map((field) => (
        <InputField
          key={field.id}
          onChange={handleInputValueChange}
          value={InputFieldValue[field.id]}
          id={field.id}
          label={field.label}
          type={field.type || "text"}
          pattern={pattern}
        />
      ))}
    </fieldset>
  );
};

export default CardInformation;
