import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Vid = ({ mainImage, galleryImages }) => {
  return (
    <>
      <div className="bg-gray-100 rounded-md p-4">
      <div className="bg-white m-4 rounded-md">
      <div className="text-right text-xl">بررسی ویدیویی</div>
      <div>
      <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
          <SwiperSlide key={mainImage.id}>
              <img src={mainImage?.sourceUrl} alt="pic" />
          </SwiperSlide>
          {galleryImages?.nodes &&
                galleryImages?.nodes.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img src={image.sourceUrl} alt="pic"/>
                  </SwiperSlide>
                ))}
      </Swiper>
      </div>
      <div className="text-right text-xl">راهنمای خرید گوشی خوش دست</div>
      <div className="flex justify-end ">
        <div className="pl-6 text-sm text-gray-400">تهران</div>
        <div className="pl-6">آریاسنتر</div>
        <div className="pl-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8667 0.518951C15.4638 -0.172984 16.5362 -0.172983 17.1333 0.518952L18.7691 2.41445C19.1703 2.87941 19.8148 3.05212 20.3948 2.85009L22.7591 2.02647C23.6222 1.72582 24.5508 2.26202 24.722 3.15983L25.1909 5.61931C25.3059 6.22262 25.7778 6.69446 26.381 6.8095L28.8404 7.27845C29.7381 7.44963 30.2743 8.37836 29.9737 9.24148L29.1501 11.6059C28.9481 12.1859 29.1208 12.8305 29.5857 13.2318L31.4811 14.8676C32.173 15.4648 32.173 16.5372 31.4811 17.1343L29.5857 18.7702C29.1208 19.1715 28.9481 19.816 29.1501 20.396L29.9737 22.7605C30.2743 23.6236 29.7381 24.5523 28.8404 24.7235L26.381 25.1925C25.7778 25.3075 25.3059 25.7793 25.1909 26.3826L24.722 28.8421C24.5508 29.7399 23.6222 30.2761 22.7591 29.9755L20.3948 29.1519C19.8148 28.9498 19.1703 29.1225 18.7691 29.5875L17.1333 31.483C16.5362 32.1749 15.4638 32.1749 14.8667 31.483L13.2309 29.5875C12.8297 29.1225 12.1852 28.9498 11.6052 29.1519L9.24092 29.9755C8.37785 30.2761 7.44918 29.7399 7.278 28.8421L6.80908 26.3826C6.69405 25.7793 6.22224 25.3075 5.61897 25.1925L3.15964 24.7235C2.26188 24.5523 1.72571 23.6236 2.02635 22.7605L2.84991 20.396C3.05193 19.816 2.87924 19.1715 2.4143 18.7702L0.51892 17.1343C-0.172974 16.5372 -0.172973 15.4648 0.518921 14.8676L2.4143 13.2318C2.87924 12.8305 3.05193 12.1859 2.84991 11.6059L2.02635 9.24148C1.72571 8.37836 2.26188 7.44963 3.15964 7.27845L5.61897 6.8095C6.22224 6.69446 6.69405 6.22262 6.80908 5.61931L7.278 3.15983C7.44918 2.26202 8.37785 1.72582 9.24092 2.02647L11.6052 2.85009C12.1852 3.05212 12.8297 2.87941 13.2309 2.41445L14.8667 0.518951Z"
              fill="#E80000"
            />
            <ellipse
              cx="11.5018"
              cy="12.4892"
              rx="2.17562"
              ry="2.17576"
              fill="white"
            />
            <path
              d="M21.9183 10.002L17.6914 12.4885M17.722 12.4885L21.9489 14.9751"
              stroke="white"
              strokeWidth="1.24329"
              strokeLinecap="round"
            />
            <path
              d="M9.29688 20.1963C9.29688 20.1963 11.9076 21.9991 15.9325 21.9991C19.9574 21.9991 22.5682 20.1963 22.5682 20.1963"
              stroke="white"
              strokeWidth="1.49195"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Vid;
