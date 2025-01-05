import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const Tabs2 = () => {
  return (
    <>
      <div className="flex w-full flex-col mt-6">
        <Tabs aria-label="Options">
          <Tab  key="photos" title="بررسی اجمالی">
            <Card>
              <CardBody>
                این روزا هندزفری و ساعت هوشمند به یکی از پر طرفدارترین اقلام
                تبدیل شدن، شرکت ورنا با کنار هم قرار دادن این دو کالای محبوب،
                سعی کرده تا نیاز این دسته از مشتریان رو تا حدی پاسخ بده و ضمنا
                با ارائه یه پکیج منحصر به فرد، مشکل انتخاب یه هدیه جذاب رو برای
                شما حل کرده. همونطور که میدونید، مدل ساعت‌ها و هندزفری‌ها خیلی
                متنوع هستن، برای همین شرکت ورنا پکهای مختلفی رو ارائه داده و
                برای راحتی مشتری اسم مدل رو آسون انتخاب کرده تا دقیقا گویای
                محتویات داخل پک باشه.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="توضیحات تکمیلی">
            <Card>
              <CardBody>
              هدیه جذاب رو برای
                شما حل کرده. همونطور که میدونید، مدل ساعت‌ها و هندزفری‌ها خیلی
                متنوع هستن، برای همین شرکت ورنا پکهای مختلفی رو ارائه داده و
                برای راحتی مشتری اسم مدل رو آسون انتخاب کرده تا دقیقا گویای
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="مشخصات فنی">
            <Card>
              <CardBody>
              مین شرکت ورنا پکهای مختلفی رو ارائه داده و
              برای راحتی مشتری اسم مدل رو آسون انتخاب کرده تا دقیقا گویای
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <div className="flex ">
          <div className="text-sm ">برچسب ها:</div>
          <div className="text-sm text-gray-400">  برچسب 1 ،</div>
          <div className="text-sm text-gray-400"> برچسب 2 </div>
        </div>
    </>
  );
};

export default Tabs2;
