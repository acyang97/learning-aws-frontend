import { Link } from "react-router-dom";

// https://flowbite.com/docs/components/navbar/
const AppNavBar = () => {
  return (
    <header
      aria-label="Site Header"
      className="bg-white sticky top-0 z-30 w-full"
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className=" md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/s3"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  S3
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/sqs"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  SQS
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppNavBar;
