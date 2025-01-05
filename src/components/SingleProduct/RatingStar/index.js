import Star from 'svg/star';

const Rating = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <span className="text-gray-400">(17)</span>
        <span>4.3</span> 
        <Star />
      </div>
    </>
  );
};

export default Rating;
