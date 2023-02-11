import Card from "./Card";
import Data from "./dummyData";

function App() {
  const cards = Data.map((obj) => {
    return <Card img={obj.img} title={obj.title} subtitle={obj.subtitle} />;
  });
  return (
    <div className="bg-slate-900 px-8 py-32 poppins">
      <h1 className="text-gray-50 font-semibold text-2xl mb-4">
        Macbooks Ecommerce
      </h1>
      <p className="text-gray-50 text-sm mb-12">
        Click on any of these cards’ button and you will be redirected to its
        own route.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {cards}
      </div>
    </div>
  );
}

export default App;
