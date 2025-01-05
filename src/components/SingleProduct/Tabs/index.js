const Tabs = () => {
  return (
    <>
      <div className="flex justify-between bg-slate-100">
        <div className="flex justify-end">
          <div className="text-sm px-2">رضایت</div>
          <div className="text-green-600">84%</div>
        </div>
        <div className="flex justify-start">
          <div>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_108_388)">
                <path
                  d="M3.75195 5.625L7.50195 9.375L11.252 5.625"
                  stroke="#38394B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_108_388">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.00195312)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-sm text-green-700 ">عالی</div>
          <div className="text-sm">:عملکرد فروشنده </div>
        </div>
      </div>
      <div className="flex justify-between bg-slate-100">
        
        <div>
          <button className="flex justify-between bg-white w-40 h-12 text-sky-500 rounded-md border-2 border-sky-500 px-3 items-center m-4">
            پروفایل فروشنده
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_108_372)">
                <path
                  d="M3.125 18.875H18.875"
                  stroke="#0075FF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.125 6.625V7.5C3.125 8.19619 3.40156 8.86387 3.89384 9.35616C4.38613 9.84844 5.05381 10.125 5.75 10.125C6.44619 10.125 7.11387 9.84844 7.60616 9.35616C8.09844 8.86387 8.375 8.19619 8.375 7.5M3.125 6.625H18.875M3.125 6.625L4.875 3.125H17.125L18.875 6.625M8.375 7.5V6.625M8.375 7.5C8.375 8.19619 8.65156 8.86387 9.14384 9.35616C9.63613 9.84844 10.3038 10.125 11 10.125C11.6962 10.125 12.3639 9.84844 12.8562 9.35616C13.3484 8.86387 13.625 8.19619 13.625 7.5M13.625 7.5V6.625M13.625 7.5C13.625 8.19619 13.9016 8.86387 14.3938 9.35616C14.8861 9.84844 15.5538 10.125 16.25 10.125C16.9462 10.125 17.6139 9.84844 18.1062 9.35616C18.5984 8.86387 18.875 8.19619 18.875 7.5V6.625"
                  stroke="#0075FF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.875 18.8754V9.99414"
                  stroke="#0075FF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.125 18.8754V9.99414"
                  stroke="#0075FF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.375 18.875V15.375C8.375 14.9109 8.55937 14.4658 8.88756 14.1376C9.21575 13.8094 9.66087 13.625 10.125 13.625H11.875C12.3391 13.625 12.7842 13.8094 13.1124 14.1376C13.4406 14.4658 13.625 14.9109 13.625 15.375V18.875"
                  stroke="#0075FF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_108_372">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div>
          <button className="flex justify-between bg-white w-40 h-12 text-sky-500 rounded-md border-2 border-sky-500 px-3 items-center m-4">
            چت با فروشنده
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_108_381)">
                <path
                  d="M7.5 8.375H14.5"
                  stroke="#0075FF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 11.875H12.75"
                  stroke="#0075FF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.25 4C16.9462 4 17.6139 4.27656 18.1062 4.76884C18.5984 5.26113 18.875 5.92881 18.875 6.625V13.625C18.875 14.3212 18.5984 14.9889 18.1062 15.4812C17.6139 15.9734 16.9462 16.25 16.25 16.25H11.875L7.5 18.875V16.25H5.75C5.05381 16.25 4.38613 15.9734 3.89384 15.4812C3.40156 14.9889 3.125 14.3212 3.125 13.625V6.625C3.125 5.92881 3.40156 5.26113 3.89384 4.76884C4.38613 4.27656 5.05381 4 5.75 4H16.25Z"
                  stroke="#0075FF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_108_381">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Tabs;
