import Data from "../dummyData";
export default function Product(props) {
  const features = Data[props.index].features;
  const content = features.map((item) => {
    return <p className="text-gray-50 font-semibold my-2">{item}</p>;
  });
  return (
    <>
      <img
        src={Data[props.index].img}
        className="object-cover w-full h-48 rounded-2xl md:h-96 lg:w-6/12 lg:h-60 lg:m-auto lg:mb-20"
      />
      <div>
        <h1 className="mt-6 text-gray-50 font-semibold text-2xl">
          {Data[props.index].title}
        </h1>
        <p className="mt-4 text-sm text-gray-50">
          {Data[props.index].description}
        </p>
      </div>
      <div>
        <h1 className="mt-10 font-semibold text-gray-50 text-2xl">Features</h1>
        <div className="bg-slate-600 px-4 py-2 mt-2 rounded-2xl">{content}</div>
      </div>
      <div>
        <h1 className="mt-10 font-semibold text-gray-50 text-2xl">
          Price : ${Data[props.index].price}
        </h1>
      </div>
    </>
  );
}
