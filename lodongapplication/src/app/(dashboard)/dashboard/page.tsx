import Nav from "@/components/Nav/Nav";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* side navigation  */}
      <Nav />
      {/* detail */}
      <main>nmaind i v</main>
      <aside className="bg-gray-200">right</aside>
    </div>
  );
}
