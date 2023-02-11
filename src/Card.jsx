export default function Card(props) {
  return (
    <div className="mt-4 w-full">
      <div>
        <img
          src={props.img}
          className="object-fill w-full h-40 rounded-t-2xl md:h-44 lg:h-48"
        />
      </div>
      <div className="bg-slate-500 p-4 text-gray-50 rounded-b-2xl">
        <h1 className="font-semibold text-sm mb-2 md:text-lg">{props.title}</h1>
        <p className="mb-4 text-xs md:text-sm lg:text-sm">{props.subtitle}</p>
        <h1 className="font-bold text-sm md:text-md lg:text-lg">
          ${props.price}
        </h1>
        <button className="bg-gray-900 px-4 py-2 rounded-lg text-md mt-2 md:text-md md:px-6 lg:text-lg lg:px-8 lg:mt-4">
          Buy Now
        </button>
      </div>
    </div>
  );
}
