import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

export default function Nav() {
  return (
    <aside className="md:w-1/5 lg:w-1/6">
      <div className="flex flex-col p-5 border border-e-gray-300 md:h-screen">
        <div className="font-montserrat text-2xl font-bold leading-normal uppercase p-5 text-gradient-green-blue">
          APP TITLE
        </div>
        <div className="md:flex flex-row lg:flex-row md:flex-col items-center gap-2 mt-5 hidden ">
          <Image
            alt="folder"
            width={20}
            height={20}
            src={"/images/mainfolder.png"}
          />
          <p className="text-sm font-bold flex flex-row gap-10  ">
            연락처 전체보기 <AiOutlineRight />
          </p>
        </div>
        <div className="mt-5 ml-5">
          <ul>
            <li>
              <span className="flex flex-row gap-4">
                <Image
                  src={"/images/folder.png"}
                  width={20}
                  height={20}
                  alt="folder"
                />
                <p>폴더1</p>
              </span>
            </li>
          </ul>
          <span className="hidden md:block text-[#D1D1D1] text-sm mt-5 hover:cursor-pointer hover:text-[#494848] transition ease-in-out delay-100 duration-200">
            + 새 폴더 만들기
          </span>
        </div>
      </div>
    </aside>
  );
}
