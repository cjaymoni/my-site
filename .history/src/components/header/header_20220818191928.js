/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span>Jude A. Clottey</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </a>
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
}
