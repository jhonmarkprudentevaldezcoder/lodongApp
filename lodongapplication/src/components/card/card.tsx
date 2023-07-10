import Image from "next/image";

export default function Card() {
  return (
    <div className="flex items-center space-x-4 p-5 mt-2 bg-[#D9D9D9] md:bg-[#FFFFFF]">
      <div className="flex-shrink-0">
        <Image
          className="w-8 h-8 rounded-full"
          src={"/images/Ellipse.png"}
          alt="pic"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm  text-gray-900 truncate font-bold">이름</p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400 font-bold">
          전화번호(직접입력or 불러오기
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
        010 1111 1111
      </div>
    </div>
  );
}
