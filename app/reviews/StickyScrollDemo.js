// 

// "use client";
// import React from "react";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
// import Image from "next/image";

// const content = [
//   {
//     title: (
//       <div className="text-2xl font-bold text-black dark:text-white">
//         Sarya
//       </div>
//     ),
//     description: (
//       <div className="text-black dark:text-white">
//         Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.
//       </div>
//     ),
//     content: (
//       <div className="h-full w-full flex items-center justify-center text-white">
//         <Image
//           src="/images/Sarya-Indoor.jpg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover rounded-full"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: (
//       <div className="text-2xl font-bold text-black dark:text-white">
//         Avanthika
//       </div>
//     ),
//     description: (
//       <div className="text-black dark:text-white">
//         See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.
//       </div>
//     ),
//     content: (
//       <div className="h-full w-full flex items-center justify-center text-white">
//         <Image
//           src="/images/Ananthika.jpg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover bg-transparent rounded-full"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: (
//       <div className="text-2xl font-bold text-black dark:text-white">
//         Lekhya
//       </div>
//     ),
//     description: (
//       <div className="text-black dark:text-white">
//         Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.
//       </div>
//     ),
//     content: (
//       <div className="h-full w-full flex items-center justify-center text-white">
//         <Image
//           src="/images/Lekhya.jpg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover rounded-full"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: (
//       <div className="text-2xl font-bold text-black dark:text-white">
//         Sahasra Reddy
//       </div>
//     ),
//     description: (
//       <div className="text-black dark:text-white">
//         Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.
//       </div>
//     ),
//     content: (
//       <div className="h-full w-full flex items-center justify-center text-white">
//         <Image
//           src="/images/Sarya-Indoor.jpg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover rounded-full"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
// ];

// export function StickyScrollRevealDemo() {
//   return (
//     <div className="p-10 h-52 bg-white dark:bg-black">
//       <StickyScroll content={content} />
//     </div>
//   );
// }

"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

// Content data for the sticky scroll demo
const content = [
  {
    title: (
      <div className="flex items-center space-x-4"> {/* Align items horizontally */}
        <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center"> {/* Small circular wrapper */}
          <Image
            src="/images/Sarya-Indoor.jpg"
            width={40}
            height={40}
            className="object-cover rounded-full" // Ensure the image is circular
            alt="Sarya Indoor"
          />
        </div>
        <div className="text-2xl font-bold text-black dark:text-white">Sarya</div>
      </div>
    ),
    description: (
      <div className="text-black dark:text-white">
        &ldquo;Work together in real time with your team, clients, and stakeholders. 
        Collaborate on documents, share ideas, and make decisions quickly. With our platform, 
        you can streamline your workflow and increase productivity.&rdquo;
      </div>
    ),
  },
  {
    title: (
      <div className="flex items-center space-x-4"> {/* Align items horizontally */}
        <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center"> {/* Small circular wrapper */}
          <Image
            src="/images/Ananthika.jpg"
            width={40}
            height={40}
            className="object-cover rounded-full" // Ensure the image is circular
            alt="Avanthika"
          />
        </div>
        <div className="text-2xl font-bold text-black dark:text-white">Avanthika</div>
      </div>
    ),
    description: (
      <div className="text-black dark:text-white">
        &ldquo;See changes as they happen. With our platform, you can track every modification in real time. 
        No more confusion about the latest version of your project. Say goodbye to the chaos of version 
        control and embrace the simplicity of real-time updates.&rdquo;
      </div>
    ),
  },
  {
    title: (
      <div className="flex items-center space-x-4"> {/* Align items horizontally */}
        <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center"> {/* Small circular wrapper */}
          <Image
            src="/images/Lekhya.jpg"
            width={40}
            height={40}
            className="object-cover rounded-full" // Ensure the image is circular
            alt="Lekhya"
          />
        </div>
        <div className="text-2xl font-bold text-black dark:text-white">Lekhya</div>
      </div>
    ),
    description: (
      <div className="text-black dark:text-white">
        &ldquo;Experience real-time updates and never stress about version control again. 
        Our platform ensures that you&apos;re always working on the most recent version of 
        your project, eliminating the need for constant manual updates. Stay in the loop, 
        keep your team aligned, and maintain the flow of your work without any interruptions.&rdquo;
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 h-52"> {/* Theme-specific background */}
      <StickyScroll content={content} />
    </div>
  );
}


