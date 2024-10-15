// // // app/gallery/page.js
// // import Focus from './Focus';
// // import ProjectGallery from '../../components/ProjectGallery';

// // export default function Gallery() {
// //   return (
// //     <div className="p-8">
// //       <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
// //       <ProjectGallery />
// //       <Focus/>
// //     </div>
// //   );
// // }


// import { FocusCards } from "@/components/ui/focus-cards";

// function Gallery() {
//   const cards = [
//     {
//       title: "Ananthika",
//       // src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       src: "/images/Ananthika.jpg",
//     },
//     {
//       title: "Sarya",
//       src: "/images/Sarya-Indoor.jpg",
//     },
//     {
//       title: "LEKHYA",
//       src: "/images/Lekhya.jpg",
//     },
//     {
//       title: "Jewellery-Shoot",
//       src: "/images/Jewellery-Sarya.png",
//     },
//     {
//       title: "The road not taken",
//       src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "The First Rule",
//       src: "https://assets.aceternity.com/the-first-rule.png",
//     },
//   ];

//   return <FocusCards cards={cards} />;
// }

// export default Gallery;


// 
import { FocusCards } from "@/components/ui/focus-cards";
import Image from 'next/image';

function Gallery() {
  const cards = [
    {
      title: "Ananthika",
      images: [
        "/images/Ananthika.jpg",
        "/images/Avanthika1.jpg",
        "/images/Avanthika2.jpg",
        "/images/Avanthika3.jpg", // Fourth image
        "/images/Avanthika4.jpg", // Fifth image
        "/images/Avanthika5.jpg", // Sixth image
        "/images/Avanthika6.jpg", // Seventh image
        "/images/Avanthika7.jpg", // Eighth image
      ],
    },
    {
      title: "Sarya",
      images: [
        "/images/Sarya-Indoor.jpg",
        "/images/Sarya-Indoor1.jpg",
        "/images/Sarya-Indoor2.jpg",
        "/images/Sarya-Indoor3.jpg", // Fourth image
        "/images/Sarya-Indoor4.jpg", // Fifth image
        "/images/Sarya-Indoor5.jpg", // Sixth image
        "/images/Sarya-Indoor6.jpg", // Seventh image
        "/images/Sarya-Indoor7.jpg", // Eighth image
      ],
    },
    {
      title: "LEKHYA",
      images: [
        "/images/Lekhya.jpg",
        "/images/Lekhya2.jpg",
        "/images/Lekhya3.jpg",
        "/images/Lekhya4.jpg", // Fourth image
        "/images/Lekhya5.jpg", // Fifth image
        "/images/Lekhya6.jpg", // Sixth image
        "/images/Lekhya7.jpg", // Seventh image
        "/images/Lekhya8.jpg", // Eighth image
      ],
    },
    {
      title: "Jewellery-Shoot",
      images: [
        "/images/Jewellery-Sarya.png",
        "/images/Sarya-Jewellery1.jpg",
        "/images/Sarya-Jewellery2.jpg",
        "/images/Sarya-Jewellery3.jpg", // Fourth image
        "/images/Sarya-Jewellery4.jpg", // Fifth image
        "/images/Sarya-Jewellery5.jpg", // Sixth image
        "/images/Sarya-Jewellery6.jpg", // Seventh image
        "/images/Sarya-Jewellery7.jpg", // Eighth image
      ],
    },
    {
      title: "Lekhya",
      images: [
        "/images/L.Ekhya4.jpg",
        "/images/L.Ekhya1.jpg",
        "/images/L.Ekhya2.jpg",
        "/images/L.Ekhya3.jpg", // Fourth image
        "/images/L.Ekhya5.jpg", // Fifth image
        "/images/L.Ekhya6.jpg", // Sixth image
        "/images/L.Ekhya7.jpg", // Seventh image
        "/images/L.Ekhya8.jpg", // Eighth image
      ],
    },
    // {
    //   title: "The First Rule",
    //   images: [
    //     "https://assets.aceternity.com/the-first-rule.png",
    //     "https://assets.aceternity.com/the-first-rule-2.png",
    //     "https://assets.aceternity.com/the-first-rule-3.png",
    //     "https://assets.aceternity.com/the-first-rule-4.png", // Fourth image
    //     "https://assets.aceternity.com/the-first-rule-5.png", // Fifth image
    //     "https://assets.aceternity.com/the-first-rule-6.png", // Sixth image
    //     "https://assets.aceternity.com/the-first-rule-7.png", // Seventh image
    //     "https://assets.aceternity.com/the-first-rule-8.png", // Eighth image
    //   ],
    // },
  ];

  return <FocusCards cards={cards} />;
}

export default Gallery;
