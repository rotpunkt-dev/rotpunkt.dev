import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { Circle, GithubLogo } from "phosphor-react";
export default function Home() {
  return (
    
      <div className="relative z-10 flex min-h-screen h-auto justify-center items-center bg-black text-white">
        <div className="relative max-w-4xl">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-red-600 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
          <div className="relative z-20 bg-black md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl">
            <div className="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10">
              <div>
                <h2 className="text-lg">Hello, we are</h2>
                <h1>
                  <Typist
                    avgTypingDelay={120}
                    startDelay={1000}
                    cursor={{ element: "•" }}
                    className="font-sans pt-1 text-4xl font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600  to-purple-500  sm:text-6xl "
                  >
                    rotpunkt.dev{" "}
                  </Typist>
                </h1>
              </div>
              <p className="text-xl leading-relaxed">
                Our projects will be shown soon. Stay tuned and drop us a mail:
              </p>
              <p className="text-xl ">hi [at] rotpunkt.dev</p>
              <div className="inline-flex text-xl text-gray-600 space-x-5">
                <a
                  href="https://github.com/rotpunkt-dev"
                  target="_blank"
                  rel="noopener"
                  aria-label="Github Link"
                >
                  <GithubLogo className="hover:text-red-600" />
                </a>
              </div>
            </div>
            {/* <Circle size={96} className="hover:text-red-600 flex-shrink-0 w-80 my-auto"></Circle> */}
          </div>
        </div>
      </div>
  );
}
