

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <h2>Hello world</h2>
     <button className="px-4 py-2 bg-blue-600 text-white rounded">
  Click Me
</button>
<UserButton />
   </div>
   
  );
}
