function Placement() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Placements</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Stats</h2>
        <p>Highest Package: ₹45 LPA</p>
        <p>Average Package: ₹8.5 LPA</p>
        <p>Placement Rate: 92%</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Top Recruiters</h2>
        <div className="flex gap-3 flex-wrap">
          <span className="bg-blue-100 px-3 py-1 rounded">Google</span>
          <span className="bg-blue-100 px-3 py-1 rounded">Microsoft</span>
          <span className="bg-blue-100 px-3 py-1 rounded">Amazon</span>
        </div>
      </div>
    </div>
  );
}

export default Placement;