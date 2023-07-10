import Nav from "@/components/Nav/Nav";
import NoCard from "@/components/Nocard/NoCard";
import Card from "@/components/card/card";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row font-spoqahansansneo ">
      {/* side navigation  */}
      <Nav />
      {/* end of side bar */}

      {/* list */}
      <main className="p-5 md:w-4/5 lg:w-3/5">
        <div className="p-5 mt-2">
          <h2 className="hidden md:block text-black font-spoqahansansneo text-2xl font-bold leading-normal">
            연락처 리스트
          </h2>
          <div className="mt-5">
            <p className="text-black font-spoqahansansneo text-base  font-normal leading-6">
              지금 <span className="text-[#4DD399] font-bold">83명의</span>
              연락처와
            </p>
            <div className="flex flex-row justify-between mt-2">
              <span>
                <Link
                  href={"#"}
                  className="bg-[#4DD399] text-white p-2 rounded-md"
                >
                  47개
                </Link>{" "}
                의 메모가 있어요.
              </span>
              <span className="hidden md:block text-[#4DD399]  font-bold">
                + 새 연락처 추가
              </span>
            </div>
          </div>

          <div>
            <form className="mt-4">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="relative flex justify-end">
          {/* Dropdown toggle button */}
          <button className="px-4 py-2 flex  flex-row gap-3 items-center border border-gray-300 text-sm text-gray-800 rounded-md focus:outline-none">
            최근 수정일 순 <AiOutlineDown />
          </button>

          {/*  Dropdown content */}
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg hidden">
            <ul className="py-2">
              {/* Dropdown items */}
              <li className="px-4 py-2 hover:bg-gray-100">Dropdown Item 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Dropdown Item 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Dropdown Item 3</li>
            </ul>
          </div>
        </div>

        {/* cards */}
        <Card />
        <NoCard />
        {/* end of cards */}
        <section className="bg-gray-50 w-full mt-20  md:flex lg:hidden">
          <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
            <Link
              href={"/login"}
              className="flex flex-col text-center items-center mb-6  "
            >
              <Image
                className="w-100 h-100 mb-2"
                src={"/images/Ellipse.png"}
                alt="logo"
                width={100}
                height={100}
              />
              <p className="text-md font-semibold text-gray-900">
                이름을 입력해 주세요.
              </p>
              <p className="text-sm text-gray-500">
                {" "}
                최근 수정일 2023-07-07 | 최근 수정일 2023-07-07
              </p>
            </Link>
            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      전화번호
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="전화번호를 입력해 주세요."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      태그
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="#을 제외하고 입력해 주세요."
                      className="bg-gray-50 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      한줄메모
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="연락처 리스트에 나타날 짧은 메모를 등록해 보세요."
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      메모
                    </label>
                    <textarea
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-5"
                      placeholder="‘성이름’ 님과의 약속, 일정관리 등 자세한 메모가 가능해요."
                      required
                    />
                  </div>
                  <button className="w-full text-white bg-[#4dd399] hover:bg-primary-700 p-2 rounded-sm">
                    저장
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* end of list section */}

      {/* detail section */}
      <aside className="bg-gray-200 hidden w-full lg:flex lg:w-2/5 ">
        <section className="bg-gray-50 w-full">
          <div className="flex flex-col  items-center mx-auto md:h-screen ">
            <div className="flex flex-col p-5 text-center items-center mb-6  ">
              <Image
                className="w-100 h-100 mb-2 "
                src={"/images/Ellipse.png"}
                alt="logo"
                width={140}
                height={140}
              />
              <p className="text-md font-semibold text-gray-900">
                이름을 입력해 주세요.
              </p>
              <p className="text-sm text-gray-500">
                {" "}
                최근 수정일 2023-07-07 | 최근 수정일 2023-07-07
              </p>
            </div>
            <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-full xl:p-0  ">
              <div className=" space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-md font-bold text-gray-900 "
                    >
                      전화번호
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 pl-5 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="전화번호를 입력해 주세요."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-md font-bold text-gray-900 "
                    >
                      태그
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="#을 제외하고 입력해 주세요."
                      className="bg-gray-50 pl-5 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-md font-bold text-gray-900 "
                    >
                      한줄메모
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 pl-5 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="연락처 리스트에 나타날 짧은 메모를 등록해 보세요."
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-md font-bold text-gray-900 "
                    >
                      메모
                    </label>
                    <textarea
                      name="memo"
                      id="memo"
                      className="bg-gray-50 pl-5  h-40 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-5"
                      placeholder="‘성이름’ 님과의 약속, 일정관리 등 자세한 메모가 가능해요."
                      required
                    />
                  </div>
                  <button className="w-full text-white bg-[#4dd399] hover:bg-primary-700 p-2 rounded-sm">
                    저장
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </aside>

      {/* end of detail section */}
    </div>
  );
}
