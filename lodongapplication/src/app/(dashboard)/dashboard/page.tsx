import Nav from "@/components/Nav/Nav";
import Card from "@/components/card/card";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row font-spoqahansansneo ">
      {/* side navigation  */}
      <Nav />

      {/* list */}
      <main className="p-5 md:w-1/2">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* end of list  */}

        {/* cards */}
        <Card />
        {/* end of cards */}
      </main>

      {/* detail section */}
      <aside className="bg-gray-200  md:w-1/3">
        {" "}
        <section className="bg-gray-50 w-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link
              href={"/login"}
              className="flex flex-col text-center items-center mb-6 text-2xl font-semibold text-gray-900 "
            >
              <Image
                className="w-8 h-8 ml-2"
                src={"/images/applogo.png"}
                alt="logo"
                width={100}
                height={100}
              />
              로그인
            </Link>
            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="이메일(아이디)을 입력해 주세요."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      비밀번호
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="비밀번호를 입력해 주세요"
                      className="bg-gray-50 border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>

                  <button className="w-full text-white bg-[#4dd399] hover:bg-primary-700 p-2 rounded-sm">
                    로그인
                  </button>
                  <div className="items-center">
                    <div className="flex">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300  hover:cursor-pointer rounded  focus:[#4dd399] bg-[#4dd399] focus:ring-[#4dd399] "
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 ">
                          자동 로그인
                        </label>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-light text-center text-gray-500 ">
                    아이디 · 비밀번호 찾기
                  </p>
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
