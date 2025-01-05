import {RadioGroup, Radio} from "@nextui-org/react";

export const Swatch = (props) => {
  const {children,color, ...otherProps} = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        control: "hidden",
      }}
    >
      <span>{color}</span>
      {children}
    </Radio>
  );
};

const Variable = () => {
  return (
    <>
      <RadioGroup disableAnimation={true} orientation="horizontal" label="Select your favorite city">
        <Swatch value="blue" color="#ff637d">آبی</Swatch>
      </RadioGroup>
    </>
  );
};

export default Variable;
