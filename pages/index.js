import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>rotpunkt.dev</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />{" "}
      </Head>
      <section className="text-blueGray-700 bg-black">
        <div className=" flex  h-screen w-full justify-center items-center">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-white lg:w-1/2 sm:text-6xl title-font">
              {" "}
              rotpunkt.dev{" "}
            </h1>
            <p className="mx-auto p-4  font-medium leading-relaxed text-gray-500 lg:w-1/2">
              Our projects will be shown soon. Stay tuned and drop us a mail: hi
              [at] rotpunkt.dev
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
