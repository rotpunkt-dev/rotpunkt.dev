import Head from "next/head";

export default function Home() {
  return (
    <>
     
      <section className="text-blueGray-700 bg-black">
        <div className=" flex  h-screen w-full justify-center items-center">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-red-400 lg:w-1/2 sm:text-6xl title-font">
              {" "}
              rotpunkt.dev{" "}
            </h1>
            <p className="mx-auto p-4  font-medium leading-relaxed text-gray-400 lg:w-1/2">
              Our projects will be shown soon. Stay tuned and drop us a mail: hi
              [at] rotpunkt.dev
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
