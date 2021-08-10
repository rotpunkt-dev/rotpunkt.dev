export default function Services() {
  return (
    <section className="bg-gray-50 pt-20 pb-28 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Services</h1>
          <p className="pt-2">Here's what we offer</p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div className="relative">
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>

            <div className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12">
              <ion-icon
                name="phone-portrait-outline"
                className="text-5xl text-cyan-500"
              ></ion-icon>
              <h2 className="pt-3 font-bold text-2xl">Responsive Websites</h2>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur aperiam quibusdam repudiandae et necessitatibus
                culpa libero mollitia.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>

            <div className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12">
              <ion-icon
                name="layers-outline"
                className="text-5xl text-cyan-500"
              ></ion-icon>
              <h2 className="pt-3 font-bold text-2xl">Web Apps</h2>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur aperiam quibusdam repudiandae et necessitatibus
                culpa libero mollitia.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>

            <div className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12">
              <ion-icon
                name="chatbubbles-outline"
                className="text-5xl text-cyan-500"
              ></ion-icon>
              <h2 className="pt-3 font-bold text-2xl">Consultation</h2>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur aperiam quibusdam repudiandae et necessitatibus
                culpa libero mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
