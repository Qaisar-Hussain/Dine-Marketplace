"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "../context/store";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setCartCount, data, setData } = useGlobalContext();

  return (
    <header className="bg-white mb-20">
      <nav
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              className="h-8 w-auto"
              height="150"
              width="150"
              src="/Logo.webp"
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"></Popover.Panel>
            </Transition>
          </Popover>
          <ul className="flex flex-row justify-around -ml-4">
            {/* <li className="mx-6 font-normal">
              <Link href="pages/all">All Products</Link>
            </li>
            <li className="mx-6 font-normal">
              <Link href="pages/all">Has Full</Link>
            </li>
            <li className="mx-6 font-normal">
              <Link href="pages/all">Functionality</Link>
            </li> */}
            <li className="mx-6 font-normal">
              <Link href="pages/female">Female</Link>
            </li>
            <li className="mx-6 font-normal">
              <Link href="pages/male">Male</Link>
            </li>
            <li className="mx-6 font-normal">
              <Link href="pages/kids">Kids</Link>
            </li>
            <li className="mx-6 font-normal">
              <Link href="pages/all">All Products</Link>
            </li>
          </ul>
         <form className="ml-24">
  <input type="search" placeholder=" Search a product..." className="border-2  border-gray-300 "/>
 
</form>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <Link href="pages/cart">
          <div className="count text-white-600 rounded-full w-[30px] h-[30px] bg-red-500 opacity-90 z-40 flex justify-center items-center ml-4"> {cartCount}</div>
            <Image
              src="/cart.jpeg"
              alt="cart"
              width={50}
              height={50}
              className="-my-4 -z-10 "
            ></Image>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-8 w-auto"
                height="150"
                width="150"
                src="/Logo.webp"
                alt="img"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"></Disclosure.Button>
                    </>
                  )}
                </Disclosure>

                <Link
                  href="pages/female"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Female
                </Link>

                <Link
                  href="pages/male"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Male
                </Link>
                <Link
                  href="pages/kids"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Kids
                </Link>
                <Link
                  href="pages/all"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  All Products
                </Link>
              </div>
              <div className="py-6 border-lime-200 border-2">
                <Link
                  href="pages/cart"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                   <div className="count text-white-600 rounded-full w-[30px] h-[30px] bg-red-500 opacity-90 z-40 flex justify-center items-center ml-4"> {cartCount}</div>
                  <Image
                    src="/cart.jpeg"
                    alt="cart"
                    width={50}
                    height={50}
                    className="-my-4 -z-10 "
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
