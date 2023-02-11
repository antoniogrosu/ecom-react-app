import Card from "../components/Card";
import Data from "../dummyData";

export default function HomePage() {
  const Content = Data.map((obj) => {
    return (
      <Card
        id={obj.id}
        img={obj.img}
        title={obj.title}
        subtitle={obj.subtitle}
        price={obj.price}
      />
    );
  });
  return (
    <div className="bg-slate-900 px-8 py-32 poppins">
      <h1 className="text-gray-50 font-semibold text-2xl mb-4">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:w-full lg:gap-8 2xl:gtid-cols-4 2xl:gap-12">
        {Content}
      </div>
    </div>
  );
}
