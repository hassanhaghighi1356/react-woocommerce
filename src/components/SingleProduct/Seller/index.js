const Seller = () => {
  return (
    <>
      <div>
        <div className="bg-slate-200">
          <div className="flex justify-between mt-8 mb-8 ">
            <div>فروشنده</div>
            <div className="text-right text-sm text-sky-600">
              {" "}
              3فروشنده دیگر{" "}
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-14">آریاسنتر</div>
            <div className="pr-6 text-xs text-gray-500 ">تهران</div>
          </div>
          <div className="absolute right-4 ">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3676 0.518951C15.9648 -0.172984 17.0372 -0.172983 17.6343 0.518952L19.2702 2.41445C19.6715 2.87941 20.316 3.05212 20.896 2.85009L23.2605 2.02647C24.1236 1.72582 25.0523 2.26202 25.2235 3.15983L25.6925 5.61931C25.8075 6.22262 26.2793 6.69446 26.8826 6.8095L29.3421 7.27845C30.2399 7.44963 30.7761 8.37836 30.4755 9.24148L29.6519 11.6059C29.4498 12.1859 29.6225 12.8305 30.0875 13.2318L31.983 14.8676C32.6749 15.4648 32.6749 16.5372 31.983 17.1343L30.0875 18.7702C29.6225 19.1715 29.4498 19.816 29.6519 20.396L30.4755 22.7605C30.7761 23.6236 30.2399 24.5523 29.3421 24.7235L26.8826 25.1925C26.2793 25.3075 25.8075 25.7793 25.6925 26.3826L25.2235 28.8421C25.0523 29.7399 24.1236 30.2761 23.2605 29.9755L20.896 29.1519C20.316 28.9498 19.6715 29.1225 19.2702 29.5875L17.6343 31.483C17.0372 32.1749 15.9648 32.1749 15.3676 31.483L13.7318 29.5875C13.3305 29.1225 12.6859 28.9498 12.1059 29.1519L9.74148 29.9755C8.87836 30.2761 7.94963 29.7399 7.77845 28.8421L7.3095 26.3826C7.19446 25.7793 6.72262 25.3075 6.11931 25.1925L3.65983 24.7235C2.76202 24.5523 2.22582 23.6236 2.52647 22.7605L3.35009 20.396C3.55212 19.816 3.37941 19.1715 2.91445 18.7702L1.01895 17.1343C0.327016 16.5372 0.327017 15.4648 1.01895 14.8676L2.91445 13.2318C3.37941 12.8305 3.55212 12.1859 3.35009 11.6059L2.52647 9.24148C2.22582 8.37836 2.76202 7.44963 3.65983 7.27845L6.11931 6.8095C6.72262 6.69446 7.19446 6.22262 7.3095 5.61931L7.77845 3.15983C7.94963 2.26202 8.87836 1.72582 9.74148 2.02647L12.1059 2.85009C12.6859 3.05212 13.3305 2.87941 13.7318 2.41445L15.3676 0.518951Z"
                fill="#E80000"
              />
              <circle cx="12.0019" cy="12.4892" r="2.17576" fill="white" />
              <path
                d="M22.4186 10.002L18.1914 12.4885M18.222 12.4885L22.4492 14.9751"
                stroke="white"
                strokeWidth="1.24329"
                strokeLinecap="round"
              />
              <path
                d="M9.79688 20.1963C9.79688 20.1963 12.4078 21.9991 16.4329 21.9991C20.4581 21.9991 23.069 20.1963 23.069 20.1963"
                stroke="white"
                strokeWidth="1.49195"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
            <div className="absolute left-4 text-sm text-gray-400">( 3 سال همکاری)</div>

            <button className="bg-green-100 text-green-700 h-10 w-30 rounded-full p-6 text-center leading-1">
              ضمانت پارس قائم
            </button>
          
        </div>
        <hr className="text-slate-800 h-1" />
        <div className="h-10 "></div>
      </div>
    </>
  );
};

export default Seller;
