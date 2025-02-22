export const MainPhoto = () => {
  const title = "choigomgom & parkheehee";

  return (
    <div className="relative flex justify-center">
      <img
        src="./default_main_photo.jpeg"
        // src="https://media.zizigobokgo.xyz/123/main_photo.png"
        alt="main_photo"
        className="w-full max-w-2xl h-auto"
      />
      <div className="absolute inset-0 my-15 flex flex-col justify-between text-white">
        <div className="text-title flex justify-center gap-x-3">
          <div>{title}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>2025년 03월 07일 토요일 오후 1시 30분</div>
          <div>서울AAA컨벤션 우라타타홀</div>
        </div>
      </div>
    </div>
  );
}
