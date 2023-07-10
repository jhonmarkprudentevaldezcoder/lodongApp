import Image from "next/image";

export default function Nav() {
  return (
    <aside>
      <div className="flex flex-col p-5 border border-e-gray-300">
        <div className="font-montserrat text-2xl font-bold leading-normal uppercase p-5">
          APP TITLE
        </div>
        <div className="md:flex flex-row gap-2 mt-5 hidden ">
          <Image
            alt="folder"
            width={20}
            height={20}
            src={"/images/mainfolder.png"}
          />
          <p className="text-sm font-bold">연락처 전체보기</p>
        </div>
      </div>
    </aside>
  );
}
