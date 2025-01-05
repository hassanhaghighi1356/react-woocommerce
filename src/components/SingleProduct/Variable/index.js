import { Button, ButtonGroup } from "@nextui-org/button";

const Swatch = () => {
  return (
    <>
      <div className="font-bold">رنگ:</div>
      <Button color="default" variant="bordered">
        <span className="rounded-lg  bg-success  "></span>
        سبز
      </Button>
      
    </>
  );
};

export default Swatch;
