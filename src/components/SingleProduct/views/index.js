import ProductGallery from "../product-gallery";

const Views = () => {
  return (
    <>
      <div className="bg-gray-100 mt-4 p-4 rounded-lg">
        <div className="bg-white rounded-lg p-3">
          <div className="flex justify-between m-4">
            <div>
              <div className="font-bold">دیدگاه ها</div>
              <div className="text-right">273 دیدگاه </div>
            </div>
            <button className="flex justify-evenly w-50 p-2 items-baseline gap-2 rounded-full bg-gray-100">
              نمایش همه
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L1 5L5 9"
                  stroke="#38394B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div></div>
          </div>
          {/* <div>
            {product?.image && (
              <ProductGallery
                mainImage={product?.image}
                galleryImages={product?.galleryImages}
              />
            )}
          </div> */}
          <div className="text-3xl text-center p-6 border-2 m-2">
            <h1>اسلایدر تصاویر</h1>
          </div>
          <div className="border-2 m-2">
            <h1 className="text-center text-3xl ">اسلایدردیدگاه ها</h1>
            <div className="text-right text-sky-500 text-2xl">
              خلاصه دیدگاه کاربران
            </div>
            <div className="text-right">
              کاربران بر این باورند که نرم‌افزار جدید به طور قابل توجهی کارایی و
              سرعت کار را افزایش داده است.کاربران بر این باورند که نرم‌افزار
              جدید به طور قابل توجهی کارایی و سرعت کار را افزایش داده است.
            </div>
            <div className="items-stretch">
              <button>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_167_89)">
                    <path
                      d="M10 4.5L6 8.5L10 12.5"
                      stroke="#38394B"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_167_89">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              بیشتر
            </div>
          </div>
          <div className="flex ">
            <div className="flex text-right text-2xl">
              <svg
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3737 11.5674C19.3737 14.962 16.0475 17.5816 11.9584 17.6388C10.8853 17.6538 9.82943 17.3931 8.84679 18.0307C8.19864 18.4513 7.48574 18.5481 7.10486 18.5447C7.28168 18.2399 8.27752 17.551 8.05072 16.7837C5.95717 15.6978 4.56445 13.7676 4.56445 11.5674C4.56445 8.17283 7.89364 5.42091 11.9831 5.4209C16.0726 5.4209 19.3737 8.17283 19.3737 11.5674Z"
                  fill="#03C056"
                />
              </svg>
              <p className="font-bold text-base mr-2">
                دیدگاه خود را درباره این کالا بنویسید.
              </p>
              <div>
                <button className="w-10 h-10 rounded-full bg-gray-100 m-4 p-2 pr-2">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_167_89)">
                      <path
                        d="M10 4.5L6 8.5L10 12.5"
                        stroke="#38394B"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_167_89">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div></div>
          </div>

          <div className="text-gray-500 text-lg text-right">
            با ثبت دیدگاه بر رووی کالا های خریداری شده ۵ امتیاز دریافت کنید.
          </div>
        </div>
      </div>
    </>
  );
};

export default Views;
