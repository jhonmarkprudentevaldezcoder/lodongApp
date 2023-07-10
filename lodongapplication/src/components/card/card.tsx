import Image from "next/image";

import { AiOutlineRight } from "react-icons/ai";
export default function Card() {
  return (
    <div className="flex items-center space-x-4 p-5 mt-2 bg-[#D9D9D9]   md:bg-[#FFFFFF] overflow-hidden">
      <div className="flex flex-row items-center justify-between gap-10">
        <Image
          className="w-12 h-12 rounded-full "
          src={"/images/Ellipse.png"}
          alt="pic"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm  text-gray-900 truncate font-bold">이름</p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400 font-bold">
            전화번호 직접입력or 불러오기
          </p>
        </div>

        <div className="text-sm  text-gray-900 truncate font-bold">
          010 1111 1111
        </div>
        <div className="text-sm  text-gray-900 truncate font-bold md:hidden lg:flex">
          <ul className="flex flex-row justify-between gap-4 items-center">
            <li className="bg-[#4DD39926] text-[#4DD399] p-2">
              <span>직장동료</span>
            </li>
            <li className="bg-[#4DD39926] text-[#4DD399] p-2">
              <span>중요</span>
            </li>
            <li className="bg-[#4DD39926] text-[#4DD399] p-2">
              <span>PM</span>
            </li>
            <li className="bg-[#4DD39926] text-[#4DD399] p-2">
              <span>...</span>
            </li>
          </ul>
        </div>
        <div className="text-sm  text-gray-900 truncate font-bold">
          23-07-05
        </div>
        <div className="text-sm  text-gray-900 truncate font-bold">
          <AiOutlineRight className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
