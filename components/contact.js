export default function Contact() {
  return (
    <section className="pt-20 pb-36 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Contact</h1>
          <p className="pt-2">Get in touch with me</p>
        </div>
      </div>
      <div className="mt-16 relative max-w-4xl mx-auto">
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative z-20 bg-white rounded-md shadow-md p-12">
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
              />
              <input
                type="text"
                placeholder="Email"
                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
              ></textarea>
            </div>
            <button className="inline-block w-auto mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
