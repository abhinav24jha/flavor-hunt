import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-col items-center gap-10 bg-slate-900">
      
      {recipeList && recipeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipeList.map((item) => <RecipeItem key={item.id} item={item} />)}
        </div>
      ) : (
        <div className="relative text-center text-white">
  <img src="https://blog.amigofoods.com/wp-content/uploads/2019/03/spanish-food.jpg" alt="landingpg-img" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 p-8 rounded-md">
    <h1 className="text-4xl text-blue-500 font-extrabold mb-8">
      Welcome to FlavorHunt
    </h1>
    <p className="lg:text-2xl text-xl font-extrabold mb-4">
      Explore a World of Exquisite Recipes and Culinary Delights!
    </p>
    <p className="text-lg mb-8">
      Embark on a culinary adventure by searching for your favorite recipes.
    </p>
    <p className="text-xl">
      Start your <span className="text-blue-500 font-extrabold">FlavorHunt</span> now!
    </p>
  </div>
</div>


      )}
    </div>
  );
}