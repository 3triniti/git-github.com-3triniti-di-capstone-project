// import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import { useOnClickOutside } from "usehooks-ts";

// const NavButton = ({ Dropdown, title }) => {
//   const [isOpen, setOpen] = useState(false);
//   const location = useLocation();
//   //   const ref = useRef(null);

//   const handleClickOutside = () => setOpen(false);

//   useOnClickOutside(handleClickOutside);

//   useEffect(() => {
//     setOpen(false);
//   }, [location]);

//   const toggleIsOpen = () => {
//     setOpen((o) => !o);
//   };

//   return (
//     <div ref="">
//       <button
//         className="flex items-center hover:text-teal-500 gap-2"
//         onClick={toggleIsOpen}
//       >
//         {title}{" "}
//         <span className="text-yellow-400 text-2xl rotate-90">&#8250;</span>
//       </button>
//       {isOpen && (
//         <div className="absolute top-20 bg-white z-50 max-w-[66%]">
//           <Dropdown />
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavButton;
