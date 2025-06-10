'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ChatBubbleLeftEllipsisIcon,
  XMarkIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Fact Checker', description: 'AI checks statements to detect lies', href: '/fact-checker',target: '_self', icon: ChatBubbleLeftEllipsisIcon },
  { name: 'Portfolio Project', description: 'Speak directly to your customers', href: '/portfolio-project', target:'_blank' , icon: CursorArrowRaysIcon },
]


export default function NewNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-b from-gray-950 to-gray-900 ">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className=" text-gray-100 text-2xl left-0 inline-block">Chase's Website</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100">
            <span className="sr-only text-gray-100">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-gray-100 hover:text-blue-400">
              Projects
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-900 shadow-lg ring-1 ring-white/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-2 text-md/6 hover:bg-gray-500"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-100" target={item.target} id="project-link">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 hover:text-gray-600 text-gray-200">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            
            </PopoverPanel>
          </Popover>

          <a href="/about-me" className="text-md/6 font-semibold text-gray-100 hover:text-blue-400">
            About Me
          </a>
          <a href="/contact" className="text-md/6 font-semibold text-gray-100 hover:text-blue-400">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 ">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="text-white text-2xl">Chase's Website</span>
              
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-100 hover:bg-gray-50 hover:text-gray-900">
                    Projects
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-100 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                
                <a
                  href="/about-me"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-100 hover:text-gray-900 hover:bg-gray-50"
                >
                  About Me
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-100 hover:text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
