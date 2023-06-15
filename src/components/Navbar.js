import { NavLink } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <header className="px-36 py-7 flex justify-between gap-8 items-center border border-gray-200 border-solid">
    <div className="flex items-center gap-4">
      <h1 className="w-60 h-9 mt-3.75 mr-11.75 mb-1.25 font-bold text-3xl text-blue-500">
        Bookstore CMS
      </h1>
      <nav>
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className="text-sm font-montserrat-300 font-normal tracking-widest text-gray-600"
            >
              BOOKS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="categories"
              className="text-sm font-montserrat-300 font-light tracking-widest text-gray-600"
            >
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <button type="button" className="border border-gray-200 border-solid rounded-full w-25 h-12">
        <BsPersonFill className="text-blue-600 w-12 text-2xl" />
      </button>
    </div>
  </header>
);

export default Navbar;
