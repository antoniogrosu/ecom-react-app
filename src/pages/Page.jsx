import { Link } from "react-router-dom";
export default function Page() {
  return (
    <div className="bg-slate-900 px-8 py-32 poppins h-screen">
      <h1 className="text-2xl text-gray-50 font-semibold">
        Visit the Macbooks Shop
      </h1>
      <p className="text-gray-50 text-sm mb-8 mt-8">
        Click on any of these cards’ button and you will be redirected to its
        own route.
      </p>
      <Link to={"/shop"}>
        <button className="text-md bg-gray-50 px-8 py-2 rounded-lg text-slate-900 font-semibold">
          Visit Shop
        </button>
      </Link>
    </div>
  );
}
