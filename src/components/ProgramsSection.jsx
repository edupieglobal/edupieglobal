import React from "react";
import { useNavigate } from 'react-router-dom';
import programsData from '../assets/programData'; // Import the program data

const ProgramsSection = () => {
  const navigate = useNavigate();

  // Filter to display only top programs
  const topPrograms = Object.keys(programsData)
    .filter(key => programsData[key].isTopProgram) // Only top programs
    .map(key => programsData[key]); // Map to the program objects

  return (
    <div className="text-center space-y-6 mb-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Top Programs</h2>
      <p className="text-lg md:text-xl text-gray-700 font-light mb-6">
        Explore our range of top programs designed to boost your skills and career prospects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12  p-1">
        {topPrograms.map((program, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-4 shadow-md hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105 border-1 border-solid border-black w-full h-80" // Adjusted to give a square-like appearance
            onClick={() => navigate(program.path)} // Use program.path for navigation
          >
            <div className="w-full h-full relative ">
              <img
                src={program.image}
                alt={program.name}
                className="w-full object-cover " 
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4">{program.name}</h3>
            <p className="text-gray-600">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsSection;