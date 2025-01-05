import Rating from "../RatingStar";
import Link from "next/link";

const Meta = ({ Categories, Brand }) => {
  console.log(Categories);

  return (
    <>
      <div className="flex justify-between text-xxs my-4">
        <div
          className="flex gap-5
        "
        >
          <p>
            <span>برند: </span>
            {Brand}
          </p>
          <p className=" pl-2 line-clamp-1">
            <span>دسته: </span>
            {Categories ? (
              Categories.map((cat) => (
                <Link
                  href={`/product-category/${cat.slug}`}
                  key={cat.id}
                  className="text-primary px-1"
                >
                  {cat.name}
                </Link>
              ))
            ) : (
              <span className="inline-block w-28 h-4 bg-gray-300 rounded animate-pulse align-middle"></span>
            )}
          </p>
        </div>

        <Rating />
      </div>
    </>
  );
};

export default Meta;
