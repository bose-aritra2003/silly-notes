'use client';

import {Menu, Transition} from '@headlessui/react';
import {
  AiOutlineFileText,
  AiOutlineForm,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineMenu
} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import {NavItem} from "@/components/client/navItem";
import {AuthCheck} from "@/components/client/authCheck";
import {RegisterButton, SignInButton, SignOutButton} from "@/components/client/authLinks";

export const HamburgerMenu = () => {
  return (
    <div className="xl:hidden">
      <Menu as="div" className="relative text-right">
        {({open}) => (
          <div>
            <Menu.Button
              className="w-full justify-center border border-gray-300 rounded-md px-2 py-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              {
                open ? (<GrClose/>) : (<AiOutlineMenu/>)
              }
            </Menu.Button>
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute right-0 mt-2 w-32 lg:w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    <button
                      className="text-gray-900 hover:bg-amber-300 hover:text-white group flex w-full items-center justify-between rounded-md px-1 py-1"
                    >
                      <AiOutlineHome/>
                      <NavItem type={'link'} href={'/'}>Home</NavItem>
                    </button>
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    <button
                      className="text-gray-900 hover:bg-amber-300 hover:text-white group flex w-full items-center justify-between rounded-md px-1 py-1"
                    >
                      <AiOutlineFileText/>
                      <NavItem type={'link'} href={'/notes'}>Notes</NavItem>
                    </button>
                  </Menu.Item>
                </div>
                <AuthCheck invert={true}>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      <button
                        className="text-gray-900 hover:bg-amber-300 hover:text-white group flex w-full items-center justify-between rounded-md px-1 py-1"
                      >
                        <AiOutlineLogin/>
                        <SignInButton/>
                      </button>
                    </Menu.Item>
                  </div>
                </AuthCheck>
                <AuthCheck invert={true}>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      <button
                        className="text-gray-900 hover:bg-amber-300 hover:text-white group flex w-full items-center justify-between rounded-md px-1 py-1"
                      >
                        <AiOutlineForm/>
                        <RegisterButton/>
                      </button>
                    </Menu.Item>
                  </div>
                </AuthCheck>
                <AuthCheck invert={false}>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      <button
                        className="text-gray-900 hover:bg-amber-300 hover:text-white group flex w-full items-center justify-between rounded-md px-1 py-1"
                      >
                        <AiOutlineLogout/>
                        <SignOutButton/>
                      </button>
                    </Menu.Item>
                  </div>
                </AuthCheck>
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    </div>
  );
}