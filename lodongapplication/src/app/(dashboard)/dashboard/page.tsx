import Nav from "@/components/Nav/Nav";
import Card from "@/components/card/card";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row font-spoqahansansneo ">
      {/* side navigation  */}
      <Nav />
      {/* detail */}
      <main className="p-2">
        <div>
          <h2 className="hidden md:block text-black font-spoqahansansneo text-2xl font-bold leading-normal">
            연락처 리스트
          </h2>
          <div className="mt-5">
            <p className="text-black font-spoqahansansneo text-base  font-normal leading-6">
              지금 <span className="text-[#4DD399] font-bold">83명의</span>{" "}
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
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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

        <Card />
      </main>
      <aside className="bg-gray-200 ">right</aside>
    </div>
  );
}
