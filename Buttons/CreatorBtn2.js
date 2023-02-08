// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Creators from "../Pages/Creators";

// export const CreatorBtn2 = ({ setView }) => {
//   const [isOpen, setOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setOpen(false);
//   }, [location]);

//   const toggleIsOpen = () => {
//     setOpen((o) => !o);
//   };
//   return (
//     <div>
//       <button
//         className="text-cyan-600 font-open text-xs pt-6"
//         onClick={toggleIsOpen}
//       >
//         CREATORS
//       </button>
//       {isOpen && (
//         <div className="absolute top-20 bg-white">
//           <Creators />
//         </div>
//       )}
//     </div>
//   );
// };
