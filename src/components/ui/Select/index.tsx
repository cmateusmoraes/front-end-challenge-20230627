import ReactSelect from "react-select";

type SelectProps = {
  options: string[];
  placeholder: string;
};

export default function Select({ options, placeholder }: SelectProps) {
  return (
    <ReactSelect
      options={options}
      id="select-filters"
      placeholder={placeholder}
      styles={{
        container: baseStyles => ({
          ...baseStyles,
          width: "65%",
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
          fontWeight: 500,
          color: "#2c3e50",
        }),
      }}
    />
  );
}
