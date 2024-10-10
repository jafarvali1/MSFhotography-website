// // app/gallery/page.js
// import Focus from './Focus';
// import ProjectGallery from '../../components/ProjectGallery';

// export default function Gallery() {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
//       <ProjectGallery />
//       <Focus/>
//     </div>
//   );
// }


import { FocusCards } from "@/components/ui/focus-cards";

function Gallery() {
  const cards = [
    {
      title: "Ananthika",
      // src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/images/Ananthika.jpg",
    },
    {
      title: "Sarya",
      src: "/images/Sarya-Indoor.jpg",
    },
    {
      title: "LEKHYA",
      src: "/images/Lekhya.jpg",
    },
    {
      title: "Jewellery-Shoot",
      src: "/images/Jewellery-Sarya.png",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return <FocusCards cards={cards} />;
}

export default Gallery;
