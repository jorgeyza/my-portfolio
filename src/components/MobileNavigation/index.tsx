import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import Hamburger from "./Hamburger";
import { NAV_LINKS } from "~/configuration";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className="relative right-0 h-6 w-6 rotate-0 duration-500 ease-in-out"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <Hamburger isOpen={isOpen} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[rgb(0_0_0_/_0.7)] transition-opacity data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed right-0 top-0 h-screen w-[200px] bg-slate-800 p-6 transition-opacity focus:outline-none data-[state=closed]:animate-moveLtoR data-[state=open]:animate-moveRtoL"
        >
          <Dialog.Title className="text-lg font-bold">Navigation Menu</Dialog.Title>
          <ul className="mt-20 flex flex-col items-center gap-y-4" role="navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className="hover:text-cyan-300"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="inline-flex gap-x-1 rounded-lg border border-transparent bg-cyan-300 px-2 py-2 text-sm text-slate-900 shadow-md transition-colors duration-300 hover:bg-cyan-400 focus:outline-none"
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                <path
                  stroke="#022C43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.083 1.667H5a1.667 1.667 0 0 0-1.667 1.666v13.334A1.667 1.667 0 0 0 5 18.333h10a1.667 1.667 0 0 0 1.667-1.666V6.25l-4.584-4.583Z"
                />
                <path
                  stroke="#022C43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.667 1.667v5h5M13.333 10.833H6.667M13.333 14.167H6.667M8.333 7.5H6.667"
                />
              </svg>
              Resume
            </a>
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileNavigation;
