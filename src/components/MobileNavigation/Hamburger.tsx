type Props = {
  isOpen: boolean;
};

const Hamburger = ({ isOpen }: Props) => {
  return (
    <>
      <span
        className={`absolute left-0 top-0 block h-1 w-full rotate-0 rounded-sm bg-slate-50 opacity-100 duration-500 ease-in-out${
          isOpen ? " top-2 left-1/2 w-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2 block h-1 w-full rotate-0 rounded-sm bg-slate-50 opacity-100 duration-500 ease-in-out${
          isOpen ? " rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2 block h-1 w-full rotate-0 rounded-sm bg-slate-50 opacity-100 duration-500 ease-in-out${
          isOpen ? " -rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-4 block h-1 w-full rotate-0 rounded-sm bg-slate-50 opacity-100 duration-500 ease-in-out${
          isOpen ? " top-2 left-1/2 w-0" : ""
        }`}
      />
    </>
  );
};

export default Hamburger;
