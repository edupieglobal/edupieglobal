import React from "react";
import Slider from "react-slick";
import FacultyCard from "../components/FacultyCard"; // Assuming FacultyCard is already implemented
import facultyData from "../assets/facultyData"; // Import the faculty data from the new file

// Slider settings can be declared outside the component for optimization
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  fade: true,
  cssEase: "ease-in-out",
};

const TrainersSection = () => {
  return (
    <div className="text-center my-24"> 
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 m-10">
        Meet Our Expert Trainers
      </h2>
      <Slider {...sliderSettings}>
        {facultyData.map((faculty) => (
          <FacultyCard
            key={faculty.id} // Assuming facultyData contains unique ids
            name={faculty.name}
            position={faculty.position}
            image={faculty.image}
            bio={faculty.bio}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TrainersSection;
