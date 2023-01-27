import { useState } from "react";
import styles from "./CustomInput.module.scss";

const CustomInput = ({
  label,
  type = "input",
  value = "",
  onChange,
  name,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.inputContainer}>
      <label
        className={
          isFocused || !!value.length
            ? styles.inputLabelFocused
            : styles.inputLabel
        }
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
      />
    </div>
  );
};

export default CustomInput;
