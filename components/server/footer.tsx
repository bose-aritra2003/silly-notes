import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-11 md:px-20 mt-auto">
      <hr className={"h-px bg-gray-200 border-0"}/>
      <div className="w-full flex flex-col mx-auto p-4 md:flex-row md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">
                    © 2023
                    <a className="hover:underline pl-1" href="https://bose-aritra2003.github.io/my-portfolio-website/">
                        Aritra Bose™
                    </a>.
                    All Rights Reserved.
                </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="https://github.com/bose-aritra2003/silly-notes" className="mr-4 hover:underline md:mr-6">GitHub</a>
          </li>
          <li>
            <a href="https://github.com/bose-aritra2003/silly-notes/blob/master/LICENSE"
               className="mr-4 hover:underline md:mr-6">Licensing</a>
          </li>
          <li>
            <a href="mailto:dev.bose.aritra@gmail.com" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;