import ReactSelect from "react-select";

type SelectProps = {
  options: string[];
  placeholder: string;
};

export default function Select({ options, placeholder }: SelectProps) {
  return (
    <ReactSelect
      options={options}
      placeholder={placeholder}
      styles={{
        container: baseStyles => ({
          ...baseStyles,
          width: "70%",
        }),
        control: baseStyles => ({
          ...baseStyles,
          borderRadius: "9px",
          borderColor: "#2c3e50",
        }),
        input: baseStyles => ({
          ...baseStyles,
          color: "#2c3e50",
        }),
        placeholder: baseStyles => ({
          ...baseStyles,
          color: "#2c3e50",
        }),
      }}
    />
  );
}
