function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Secure access to your work portals
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Sign in to manage your modules, track progress, and collaborate with your team.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#modules" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium shadow">Explore Modules</a>
            <a href="#privacy" className="px-5 py-3 rounded-md font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100">Privacy Policy</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-white shadow-lg border border-gray-100 grid place-items-center">
            <div className="text-center p-6">
              <p className="text-sm uppercase tracking-wider text-gray-500">Your brand</p>
              <p className="text-3xl font-bold text-gray-800">Vibe Portal</p>
              <p className="mt-2 text-gray-500">Fast. Secure. Beautiful.</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-indigo-100" />
          <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-purple-100" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
