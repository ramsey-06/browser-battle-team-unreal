function Alumni() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Our Alumni</h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Rohit */}
        <div className="bg-white p-6 text-center shadow rounded-xl">
          <img
            src="/images/alumni/rohit.jpg"
            alt="Rohit Sharma"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="font-semibold">Rohit Sharma</h2>
          <p>Google</p>
        </div>

        {/* Ananya */}
        <div className="bg-white p-6 text-center shadow rounded-xl">
          <img
            src="/images/alumni/ananya.jpg"
            alt="Ananya Reddy"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="font-semibold">Ananya Reddy</h2>
          <p>Amazon</p>
        </div>

        {/* Karthik */}
        <div className="bg-white p-6 text-center shadow rounded-xl">
          <img
            src="/images/alumni/karthik.jpg"
            alt="Karthik Nair"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="font-semibold">Karthik Nair</h2>
          <p>Startup Founder</p>
        </div>

      </div>
    </div>
  );
}

export default Alumni;