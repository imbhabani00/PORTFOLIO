import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MeetMyTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/team")
      .then((response) => setTeamMembers(response.data))
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Set to 4000ms (4 seconds)
    arrows: false,
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">
        {/* Left Section - Title & Quote */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-5xl font-bold mb-4">Meet My Team</h2>
          <p className="text-lg italic text-gray-300">
            "Our team is a group of highly skilled professionals, each an expert
            in their field. Together, we combine years of experience and passion
            for innovation to achieve excellence in every project we undertake."
          </p>
        </div>

        {/* Right Section - Slider */}
        <div className="md:w-1/2 bg-white bg-opacity-10 p-8 rounded-xl shadow-xl border border-purple-500 backdrop-blur-md">
          <Slider {...sliderSettings}>
            {teamMembers.map((member) => (
              <div key={member._id} className="p-4">
                <div className="p-6 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 shadow-lg border border-gray-600 text-center">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto border-2 border-purple-500"
                  />
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-purple-400">{member.role}</p>
                  <p className="text-gray-300 text-sm mt-2 overflow-hidden line-clamp-5">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MeetMyTeam;
