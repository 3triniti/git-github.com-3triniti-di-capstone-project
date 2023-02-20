import React from "react";
// import "./inputFieldStyles.scss";

const InputField = (props) => {
  const validateInput = (values) => {
    if (values.some((f) => f === "") || values[0].indexOf("@") === -1) {
      return true;
    } else {
      return false;
    }
  };

  if (props.type === "submit") {
    return (
      <input
        className="primaryBtn primaryBtn--big g__justify-self-center"
        type="submit"
        value={props.label}
        disabled={validateInput(props.formValues)}
      />
    );
  } else if (props.type === "textarea") {
    return (
      <label className="inputField__label">
        {props.label}
        <textarea
          onChange={(e) => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="inputField__field w-64 lg:w-96 h-80"
          rows={7}
          name={props.name}
        />
      </label>
    );
  } else if (props.type === "textarea2") {
    return (
      <label className="inputField__label">
        {props.label}
        <textarea
          onChange={(e) => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="inputField__field lg:w-80 w-64 h-32"
          rows={7}
          name={props.name}
        />
      </label>
    );
  } else {
    return (
      <label className="inputField__label">
        {props.label}
        <input
          onChange={(e) => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="inputField__field w-64 h-12 ml-0 lg:w-96 lg:h-14 lg:ml-2 border-teal-500"
          name={props.name}
        />
      </label>
    );
  }
};

export default React.memo(InputField);
