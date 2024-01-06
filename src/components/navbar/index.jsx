import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import { BiSearch } from 'react-icons/bi';
import { FaUtensils } from 'react-icons/fa';


export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 bg-slate-900">

      <h2 className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
        <FaUtensils className="mr-3 text-blue-500" />
        <NavLink
          to={"/"}
          className="hover:text-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
        >
          FlavorHunt
        </NavLink>
      </h2>

     
      <form onSubmit={handleSubmit} className="mt-4 flex items-center">
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            Search for Recipes
          </label>
          <div className="flex items-center">
            <BiSearch className="w-5 h-5 text-gray-500 absolute left-3 pointer-events-none" />
            <input
              type="text"
              id="search"
              name="search"
              value={searchParam}
              onChange={(event) => setSearchParam(event.target.value)}
              placeholder="Search for Recipes Here!"
              className="w-80 py-2 pl-10 pr-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 font-serif"
            />
          </div>
        </div>
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 font-serif"
        >
          Search
        </button>
      </form>


      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 font-extrabold"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 font-bold"
          >
            Favorites
          </NavLink>
        </li>
      </ul>

      
    </nav>
  );
}
