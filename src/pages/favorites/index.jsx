import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="flex justify-center items-center w-[100] h-full bg-slate-800 rounded-md shadow-lg p-8 mt-12">
          <div className="text-center">
            <p className="text-3xl text-white font-extrabold mb-4">
                Your Favorites List is Empty!
            </p>
            <p className="text-lg text-gray-300">
                Explore our recipes and add your favorite dishes to the list.
            </p>
            <p className="text-lg text-gray-300 mt-2">
                Start your FlavorHunt now!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
