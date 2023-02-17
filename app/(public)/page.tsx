import { Prestations } from "@lib/components/navigation/prestations";
import { NewsList } from "@lib/components/news";

const Home = () => {
  return (
    <div className="relative">
      <div className="h-96 w-full overflow-hidden relative">
        <div className="absolute z-10 bg-blue-500 h-96 w-full opacity-40" />
        <img src="/images/bg_img.jpg" alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      <NewsList />
      <Prestations />
    </div>
  );
}

export default Home;