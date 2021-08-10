export default function Portfolio() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Work</h1>
          <p className="pt-2">The best of my works</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          <div className="bg-white rounded-md shadow-md lg:col-span-2">
            <img
              src="images/work1.jpg"
              alt=""
              className="object-cover w-full h-80"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl">Work Title</h3>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat sequi minima vero sunt perferendis.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
              >
                View More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md">
            <img
              src="images/work2.jpg"
              alt=""
              className="object-cover w-full h-80"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl">Work Title</h3>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
              >
                View More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md">
            <img
              src="images/work3.jpg"
              alt=""
              className="object-cover w-full h-80"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl">Work Title</h3>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
              >
                View More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md lg:col-span-2">
            <img
              src="images/work4.jpg"
              alt=""
              className="object-cover w-full h-80"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl">Work Title</h3>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat sequi minima vero sunt perferendis.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
