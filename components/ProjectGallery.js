// components/ProjectGallery.js
// "use client";
// import { useState } from 'react';

// const projects = [
//   { title: 'Project 1', images: ['/path-to-image1.jpg', '/path-to-image2.jpg'] },
//   { title: 'Project 2', images: ['/path-to-image3.jpg', '/path-to-image4.jpg'] },
// ];

// const ProjectGallery = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

//   const nextProject = () => setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
//   const prevProject = () => setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-2xl mb-4">{projects[currentProjectIndex].title}</h2>
//       <img src={projects[currentProjectIndex].images[0]} alt="Project Image" className="w-64 h-64 object-cover mb-4" />
//       <div className="flex space-x-4">
//         <button onClick={prevProject} className="px-4 py-2 bg-neon-blue text-white rounded-md">Previous</button>
//         <button onClick={nextProject} className="px-4 py-2 bg-neon-blue text-white rounded-md">Next</button>
//       </div>
//     </div>
//   );
// };

// export default ProjectGallery;

// "use client";
// import { useState, useEffect } from "react";

// const projects = [
//   {
//     images: ["/path-to-image1.jpg", "/path-to-image2.jpg"], // Images from Folder 1
//   },
//   {
//     images: ["/path-to-image3.jpg", "/path-to-image4.jpg"], // Images from Folder 2
//   },
//   {
//     images: ["/path-to-image5.jpg", "/path-to-image6.jpg"], // Images from Folder 3
//   },
//   {
//     images: ["/path-to-image7.jpg", "/path-to-image8.jpg"], // Images from Folder 4
//   },
//   {
//     images: ["/path-to-image9.jpg", "/path-to-image10.jpg"], // Images from Folder 5
//   },
// ];

// const ProjectGallery = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
//   const [fadeOut, setFadeOut] = useState(false);

//   const nextProject = () => {
//     setFadeOut(true);
//     setTimeout(() => {
//       setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
//       setFadeOut(false);
//     }, 300); // Duration of the fade-out animation
//   };

//   useEffect(() => {
//     const interval = setInterval(nextProject, 3000); // Change project every 3 seconds
//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, []);

//   return (
//     <div className="flex flex-col items-center">
//       <img
//         src={projects[currentProjectIndex].images[0]} // Displaying the first image from the current project
//         alt="Project Image"
//         className={`w-64 h-64 object-cover mb-4 transition-opacity duration-300 ${
//           fadeOut ? "opacity-0" : "opacity-100"
//         }`}
//       />
//     </div>
//   );
// };

// export default ProjectGallery;

"use client";
import { useState, useEffect } from "react";

const projects = [
  {
    images: ["/path-to-image1.jpg", "/path-to-image2.jpg"], // Images from Folder 1
  },
  {
    images: ["/path-to-image3.jpg", "/path-to-image4.jpg"], // Images from Folder 2
  },
  {
    images: ["/path-to-image5.jpg", "/path-to-image6.jpg"], // Images from Folder 3
  },
  {
    images: ["/path-to-image7.jpg", "/path-to-image8.jpg"], // Images from Folder 4
  },
  {
    images: ["/path-to-image9.jpg", "/path-to-image10.jpg"], // Images from Folder 5
  },
];

const ProjectGallery = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const nextProject = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setFadeOut(false);
    }, 300); // Duration of the fade-out animation
  };

  useEffect(() => {
    const interval = setInterval(nextProject, 3000); // Change project every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="border rounded-lg overflow-hidden shadow-lg transition-opacity duration-300">
        <img
          src={projects[currentProjectIndex].images[0]} // Displaying the first image from the current project
          alt="Project Image"
          className={`w-96 h-64 object-cover mb-4 transition-opacity duration-300 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default ProjectGallery;


