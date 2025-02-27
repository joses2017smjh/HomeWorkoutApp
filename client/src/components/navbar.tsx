import { Link } from "react-router-dom";
import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react";

const navbar = () => {
  return (
    <>
      <SignedIn>
        <header className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-base-300">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">Web Workout Explorer</div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <Link to="/" className="btn btn-ghost mx-1">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/library" className="btn btn-ghost mx-1">
                      Workouts
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="btn btn-ghost mx-1">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <UserButton />
                  </li>
                  <li>
                    <Link to="/start-workout" className="btn btn-ghost mx-1">
                      Start Workout
                    </Link>
                  </li>
                  <li>
                    <Link to="/view-workout-plan" className="btn btn-ghost mx-1">
                      View Workout Plan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </header>
      </SignedIn>

      <SignedOut>
        <header className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-base-300">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">Web Workout Explorer</div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <Link to="/" className="btn btn-ghost mx-1">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-in" className="btn btn-ghost mx-1">
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </header>
      </SignedOut>
    </>
  );
};

export default navbar;
