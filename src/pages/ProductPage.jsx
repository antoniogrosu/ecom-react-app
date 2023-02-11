import { useParams } from "react-router-dom";
import Data from "../dummyData";
import Product from "../components/Product";

export default function ProductPage() {
  let { id } = useParams();
  let index = Data.findIndex((item) => item.id === id);
  return (
    <div className="bg-slate-900 px-8 py-32 poppins">
      <Product index={index} />
    </div>
  );
}
