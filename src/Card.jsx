export default function Card(props) {
  return (
    <div className="mt-20 w-full">
      <div>
        <img
          src={props.img}
          className="object-fill w-full h-28 rounded-t-2xl md:h-48 lg:h-56"
        />
      </div>
      <div className="bg-slate-500 p-4 text-gray-50 rounded-b-2xl">
        <h1 className="font-semibold text-md">{props.title}</h1>
        <p className="mt-2 mb-4 text-xs">{props.subtitle}</p>
        <button className="bg-gray-900 px-4 py-2 rounded-lg text-xs">
          Buy Now
        </button>
      </div>
    </div>
  );
}
