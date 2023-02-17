import { Prestations } from "@lib/components/navigation/prestations";

const Home = () => {
  return (
    <div>
      <div className="h-72 w-full overflow-hidden relative">
        <div className="absolute z-10 bg-blue-500 h-72 w-full opacity-40" />
        <img src="/images/bg_img.jpg" alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      <Prestations />

    </div>
  );
}

export default Home;