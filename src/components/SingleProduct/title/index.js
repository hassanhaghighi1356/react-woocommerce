import {Chip} from "@nextui-org/react";

const Title = ({ title }) => {
  return (
    <>
      <h1 className="font-bold leading-7">
        {title}
        <Chip className="mr-2" color="success" variant="flat" size="md">اصل</Chip>
      </h1>

      <h2 className="text-gray-500 bg-slate-100 text-left my-2 ">
        Honor Magic 6 Pro Dual SIM Storage 512GB And 12GB Mobile Phone
      </h2>
    </>
  );
};

export default Title;
