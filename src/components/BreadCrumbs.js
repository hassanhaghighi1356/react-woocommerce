import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const BreadCrubms = () => {
  return (
    <Breadcrumbs className="my-2" itemClasses={{
      separator: "rotate-180",
    }}>
      <BreadcrumbItem>خانه</BreadcrumbItem>
      <BreadcrumbItem>موزیک</BreadcrumbItem>
      <BreadcrumbItem>هنرمندان</BreadcrumbItem>
      <BreadcrumbItem>آلبوم</BreadcrumbItem>
      <BreadcrumbItem>موزیک</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default BreadCrubms;
