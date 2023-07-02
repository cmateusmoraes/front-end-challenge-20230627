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
          "@media only screen and (max-width: 820px)": {
            width: "90%",
            marginLeft: "10%",
          },
          "@media only screen and (max-width: 600px)": {
            width: "75%",
            marginLeft: "5%",
          },

          "@media only screen and (max-width: 768px)": {
            width: "70%",
            marginLeft: "5%",
          },
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
          fontSize: "1.6rem",
          color: "#2c3e50",
          "@media only screen and (max-width: 1280px)": {
            fontSize: "1.4rem",
          },

          "@media only screen and (max-width: 990px)": {
            fontSize: "1.8rem",
          },

          "@media only screen and (max-width: 768px)": {
            fontSize: "2rem",
          },
        }),
      }}
    />
  );
}
