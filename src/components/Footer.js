import React from 'react';
import fullLogo from "../images/full-logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#0e182b] dark:bg-gray-900">
        <div className="mx-auto py-2 lg:py-4 max-w-screen-xl">
          <div className="flex justify-center items-center gap-4">
            <div>
              {/* Increase the height and width of the logo */}
              <img src={fullLogo} className="object-contain h-32 w-32" alt="FlowBite Logo" />
            </div>

            <div className="flex flex-col items-center">
              
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="#" className="hover:underline">
                    My Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing Plans
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center">

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="#" className="hover:underline">
                    TV Shows
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Movies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-2 border-gray-200 dark:border-gray-700" />
          <div className="flex justify-between items-center py-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 Shik-Shak-Show™. All Rights Reserved.
            </span>
            <ul className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
