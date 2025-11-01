// "use client";

// import { SessionProvider } from "next-auth/react";

// export default function SessionWrapper(props) {
//   return <SessionProvider>{props.children}</SessionProvider>;
// }

//my code
// "use client";

// // TEMPORARY FIX: NextAuth disable karein
// export default function SessionWrapper(props) {
//   return <>{props.children}</>;
  
//   // Comment out for now:
//   // return <SessionProvider>{props.children}</SessionProvider>;
// }

// "use client";

// // Temporary fix - NextAuth disable
// export default function SessionWrapper({ children }) {
//   return <>{children}</>;
// }

"use client";
import { SessionProvider } from "next-auth/react";

export default function SessionWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}


