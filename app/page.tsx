import { Hero } from "./components/Hero/Hero";
import ItemOverview from "./components/Overview/ItemOverview";


export default function Home() {
  return (

    <div className="w-full min-h-screen">
      <div className="w-full">
        <Hero/>
      </div>
      <div>
        <ItemOverview />
      </div>
    </div>
  );
}
