export default function Card(props) {
  return (
    <div className="full mt-20">
      <div>
        <img
          src={props.img}
          className="object-fill w-full h-48 rounded-t-2xl"
        />
      </div>
      <div className="bg-slate-500 px-8 py-4 text-gray-50 rounded-b-2xl">
        <h1 className="font-semibold text-lg">{props.title}</h1>
        <p className="mt-2 mb-4 text-sm">{props.subtitle}</p>
        <button className="bg-gray-900 px-4 py-2 rounded-lg">Buy Now</button>
      </div>
    </div>
  );
}
