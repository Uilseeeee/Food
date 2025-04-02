// "use client";

// import React from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { useState, useEffect } from "react";

// export const FoodOrder = () => {
//   const [error, setError] = useState("");

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/foods");
//     } catch (err) {
//       console.error(err);
//       setError("error occurred.");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <Dialog>
//         <DialogTrigger
//           className="absolute left-0 bottom-0 rounded-full w-9"
//           asChild
//         >
//           <Button variant="outline">+</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           {food.slice(0, 5).map((food, index) => (
//             <div key={index}>
//               {" "}
//               <Image src="/food2.png" alt="Logo" width={200} height={200} />
//               {food.name}
//             </div>
//           ))}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };
