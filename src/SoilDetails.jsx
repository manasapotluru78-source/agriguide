
import { useNavigate, useParams } from "react-router-dom";
import "./SoilDetails.css";

const soilDetails = {
  "Black Soil": {
    image: "https://civilengpro.com/wp-content/uploads/2023/05/1Black-Cotton-Soil-1024x669.jpg",
    description: "Black soil, also known as regur soil, is a clay-rich soil known for its moisture-retaining capacity. It is widely found in parts of India, especially the Deccan Plateau.",
    properties: [
      "Rich in clay minerals",
      "High moisture retention",
      "Generally dark in colour",
      "May develop cracks during dry periods"
    ],
    water: "High",
    crops: [
      { name: "Cotton", image: "https://agritech.tnau.ac.in/crop_protection/images/pest_index_pages/Cotton%20.jpg" },
      { name: "Soybean", image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Soybean_Plants_in_the_Field_%289624015808%29.jpg"},
      { name: "Sorghum", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sorghum_head_in_India.jpg" }
    ]
  },

  "Red Soil": {
    image: "https://smartlocus.in/uploads/images/202502/image_750x_67a9e17c71aaa.webp",
    description: "Red soil gets its reddish colour mainly from iron oxides. It is commonly found in southern and eastern parts of India.",
    properties: [
      "Contains iron oxides",
      "Generally well drained",
      "Often low in nitrogen and organic matter",
      "Can benefit from organic manure"
    ],
    water: "Low to Medium",
    crops: [
      { name: "Groundnut", image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=600" },
      { name: "Millets", image: "https://cdn.assets.prezly.com/35c3c5f7-b89b-493d-b475-43606124add7/-/crop/3403x2213/76%2C148/-/preview/ICRISAT%20cereals.jpg" },
      { name: "Pulses", image: "https://cdn.assets.prezly.com/dbd0a422-4c88-4a93-8812-c5f215631eda/IMG_6951.jpg"}
    ]
  },

  "Sandy Soil": {
    image: "https://ik.imagekit.io/plantgarden/media/soils/sandy-soil.png",
    description: "Sandy soil contains relatively large particles. It allows water to drain quickly and is easy to cultivate.",
    properties: [
      "Coarse soil particles",
      "Fast water drainage",
      "Good air circulation",
      "Usually requires frequent nutrient management"
    ],
    water: "Low",
    crops: [
      { name: "Groundnut", image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=600" },
      { name: "Watermelon", image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600" },
      { name: "Pearl Millet",   image: "https://www.ikshvakuseeds.com/assets/img/pearl-millet-204098_1280.jpg" }
    ]
  },

  "Clay Soil": {
    image: "https://www.groundsguys.com/us/en-us/grounds-guys/_assets/images/clay-soil-hero.webp",
    description: "Clay soil consists of very fine particles. It holds water and nutrients but can have poor drainage.",
    properties: [
      "Very fine soil particles",
      "High water retention",
      "Can become sticky when wet",
      "May become hard when dry"
    ],
    water: "High",
    crops: [
      { name: "Rice", image: "https://images.unsplash.com/photo-1599328580087-15c9dab481f3?w=1200&q=85&auto=format&fit=crop" },
      { name: "Wheat", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600" },
      { name: "Lentils", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600" }
    ]
  },

  "Loamy Soil": {
    image: "https://www.creationofnature.co.uk/site/assets/files/1313/fertile-loam-soil-suitable-planting-soil-texture-background_38663-327.jpg",
    description: "Loamy soil is a balanced mixture of sand, silt and clay. It is generally suitable for a wide range of crops.",
    properties: [
      "Balanced soil texture",
      "Good drainage",
      "Good moisture retention",
      "Can support healthy root development"
    ],
    water: "Medium",
    crops: [
      { name: "Maize", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600" },
      { name: "Wheat", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600" },
      { name: "Vegetables", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600" }
    ]
  }
};

function SoilDetails() {
  const { soilName } = useParams();
  const navigate = useNavigate();

  const soil = soilDetails[soilName];

  if (!soil) {
    return (
      <div className="soil-not-found">
        <h2>Soil information not found</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="details-page">

      <header className="details-navbar">
        <h2>🌱 AgriGuide</h2>
        <button onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </header>

      <section className="details-hero">
        <img src={soil.image} alt={soilName} />
        <div className="details-hero-overlay">
          <span>SOIL INFORMATION</span>
          <h1>{soilName}</h1>
          <p>Understand your soil and discover suitable crops.</p>
        </div>
      </section>

      <section className="details-container">

        <div className="details-description">
          <span className="details-label">ABOUT THIS SOIL</span>
          <h2>Characteristics of {soilName}</h2>
          <p>{soil.description}</p>
        </div>

        <div className="property-grid">
          {soil.properties.map((property, index) => (
            <div className="property-card" key={index}>
              <span>✓</span>
              <p>{property}</p>
            </div>
          ))}
        </div>

        <div className="water-card">
          <h3>💧 Water Retention Capacity</h3>
          <h2>{soil.water}</h2>
          <p>General characteristic of this soil type.</p>
        </div>

        <div className="suitable-section">
          <span className="details-label">CROP SUITABILITY</span>
          <h2>Crops Suitable for {soilName}</h2>
          <p>Some crops that may grow well in this soil under suitable conditions.</p>

          <div className="suitable-grid">
            {soil.crops.map((crop) => (
              <div className="suitable-card" key={crop.name}>
                <img src={crop.image} alt={crop.name} />
                <h3>{crop.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="farming-tip">
          <h3>🌿 Farming Tip</h3>
          <p>
            Test your soil before cultivation. Soil pH, nutrients,
            climate and water availability also influence crop suitability.
          </p>
        </div>

      </section>

      <footer className="details-footer">
        <h3>🌱 AgriGuide</h3>
        <p>Smart Crop & Soil Information System</p>
      </footer>

    </div>
  );
}

export default SoilDetails;
