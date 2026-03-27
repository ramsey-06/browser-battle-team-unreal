function Research() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Research & Innovation</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="font-semibold text-lg">AI & ML</h2>
          <p>Advanced research in artificial intelligence.</p>
        </div>

        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="font-semibold text-lg">Renewable Energy</h2>
          <p>Focus on sustainable energy solutions.</p>
        </div>

        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="font-semibold text-lg">Healthcare Tech</h2>
          <p>Innovations in medical technology.</p>
        </div>
      </div>
    </div>
  );
}

export default Research;