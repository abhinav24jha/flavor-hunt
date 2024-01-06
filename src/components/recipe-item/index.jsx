import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-slate-800/90 shadow-lg border-2 border-gray-700 rounded-2xl transition-transform transform hover:scale-105">
      <div className="h-40 overflow-hidden rounded-t-xl">
        <img
          src={item?.image_url}
          alt="recipe item"
          className="block w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="bg-gray-900 rounded-b-xl p-4">
        <span className="text-sm text-cyan-400 font-semibold">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl text-white mt-2 truncate">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 mt-4 px-8 rounded-full uppercase font-semibold tracking-wider inline-block shadow-md bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 text-white"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}
