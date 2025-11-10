import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    switch (button) {
      case "Home":
        navigate("/home");
        break;
      case "Broom & Brush":
        navigate("/broom-brush");
        break;
      case "HealthCare":
        navigate("/healthcare");
        break;
      default:
        navigate("/");
    }
  };

  const cards = [
  {
    id: 1,
    title: "We",
    subtitle: "inspect",
    subtitle2: "with precision",
    color: "#8FFF00",
    image: "/src/assets/primary/ep1.jpg",
    description:
      "From ultrasonic testing to advanced radiography, we ensure your products meet the highest quality standards.",
    buttons: ["Home", "Aerospace", "Oil & Gas"],
  },
  {
    id: 2,
    title: "We",
    subtitle: "deliver",
    subtitle2: "reliable results",
    color: "#FF0066",
    image: "/src/assets/primary/ep2.webp",
  },
  {
    id: 3,
    title: "We",
    subtitle: "analyze",
    subtitle2: "materials",
    color: "#FF00FF",
    image: "/src/assets/primary/q1.jpeg",
  },
  {
    id: 4,
    title: "We",
    subtitle: "are",
    subtitle2: "NDT Experts",
    color: "#00FFFF",
    image: "/src/assets/primary/q4.jpg",
  },
  ];

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`card ${hoveredIndex === index ? 'expanded' : ''} ${
                hoveredIndex !== null && hoveredIndex !== index ? 'collapsed' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="card-image-wrapper">
                <img src={card.image} alt={card.title} className="card-image" />
                <div className="card-overlay"></div>
              </div>

              <div className="card-content">
                <h1 className="card-title" style={{ color: card.color }}>
                  {card.title}
                </h1>
                <h2 className="card-subtitle" style={{ color: card.color }}>
                  {card.subtitle}
                </h2>
                <h2 className="card-subtitle2" style={{ color: card.color }}>
                  {card.subtitle2}
                </h2>

                {card.description && hoveredIndex === index && (
                  <div className="card-details">
                    <p className="card-description">{card.description}</p>
                    {card.buttons && (
                      <div className="card-buttons">
                        {card.buttons.map((button, btnIndex) => (
                          <button
                            key={btnIndex}
                            className="card-button"
                            onClick={() => handleButtonClick(button)}
                          >
                            {button}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
