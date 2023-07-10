export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* side navigation  */}
      <aside className="w-100 md:w-64 bg-gray-200  sm:block md:w-1/8">
        NAV
      </aside>

      {/* Main content */}
      <main className="flex-1">Your main content goes here</main>

      <aside className="w-100 md:w-64 bg-gray-200  md:w-1/4">right</aside>
    </div>
  );
}
