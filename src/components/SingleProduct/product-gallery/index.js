import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const ProductGallery = ({ mainImage, galleryImages }) => {
  // console.log(mainImage, galleryImages);

  return (
    <>
      <Swiper
            pagination={{
              dynamicBullets: false,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
          <SwiperSlide key={mainImage.id}>
              <img className="rounded-md" src={mainImage?.sourceUrl} alt="pic1" />
          </SwiperSlide>
          {galleryImages?.nodes &&
                galleryImages?.nodes.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img className="rounded-md" src={image.sourceUrl} alt="pic"/>
                  </SwiperSlide>
                ))}
      </Swiper>
    </>
  );
};

export default ProductGallery;