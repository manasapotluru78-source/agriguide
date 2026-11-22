
import { useNavigate, useParams } from "react-router-dom";
import "./CropDetails.css";

const cropDetails = {
  Rice: {
    scientific: "Oryza sativa",
    image: "https://images.unsplash.com/photo-1599328580087-15c9dab481f3?w=1200&q=85&auto=format&fit=crop",
    soil: "Clayey and loamy soil",
    season: "Kharif",
    temperature: "20°C – 35°C",
    water: "High",
    duration: "Approximately 120–150 days",
    description: "Rice is one of the most important food crops in the world. It is widely cultivated in areas with adequate water availability.",
    cultivation: [
      "Prepare and level the field before planting.",
      "Use healthy seeds or suitable seedlings.",
      "Maintain appropriate water levels.",
      "Monitor weeds, pests and diseases.",
      "Harvest when the grains are mature."
    ]
  },

  Wheat: {
    scientific: "Triticum aestivum",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200",
    soil: "Fertile, well-drained loamy soil",
    season: "Rabi",
    temperature: "10°C – 25°C",
    water: "Medium",
    duration: "Approximately 110–150 days",
    description: "Wheat is an important cereal crop used to produce flour, bread and other food products.",
    cultivation: [
      "Prepare a fine and level seedbed.",
      "Sow quality seeds at the recommended depth.",
      "Provide irrigation at important growth stages.",
      "Control weeds and monitor crop health.",
      "Harvest when the grains become mature and dry."
    ]
  },

  Cotton: {
    scientific: "Gossypium spp.",
    image: "https://agritech.tnau.ac.in/crop_protection/images/pest_index_pages/Cotton%20.jpg",
    soil: "Deep black soil and well-drained loamy soil",
    season: "Kharif",
    temperature: "21°C – 30°C",
    water: "Medium",
    duration: "Approximately 150–180 days or more",
    description: "Cotton is an important fibre crop. Its white fibres are used in the textile industry to manufacture clothing and other products.",
    cultivation: [
      "Select suitable cotton varieties.",
      "Prepare the field and sow quality seeds.",
      "Maintain proper spacing between plants.",
      "Monitor sucking pests and bollworms.",
      "Pick mature, open cotton bolls."
    ]
  },

  Maize: {
    scientific: "Zea mays",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=1200",
    soil: "Fertile, well-drained loamy soil",
    season: "Kharif and Rabi",
    temperature: "18°C – 27°C",
    water: "Medium",
    duration: "Approximately 90–120 days",
    description: "Maize is a versatile cereal crop used for food, animal feed and industrial products.",
    cultivation: [
      "Prepare the field with good drainage.",
      "Sow healthy maize seeds.",
      "Provide nutrients according to soil requirements.",
      "Control weeds during early growth.",
      "Harvest when the cobs reach maturity."
    ]
  },

  Groundnut: {
    scientific: "Arachis hypogaea",
    image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=1200",
    soil: "Sandy loam and well-drained soil",
    season: "Kharif and Rabi",
    temperature: "20°C – 30°C",
    water: "Low to Medium",
    duration: "Approximately 100–130 days",
    description: "Groundnut is an important oilseed and legume crop. Its seeds are used for edible oil and food products.",
    cultivation: [
      "Choose quality groundnut seeds.",
      "Prepare loose and well-drained soil.",
      "Sow seeds at suitable spacing.",
      "Maintain moisture during flowering and pod formation.",
      "Harvest when the pods are mature."
    ]
  },

  Sugarcane: {
    scientific: "Saccharum officinarum",
    image: "https://a-z-animals.com/media/2023/02/shutterstock_718945261-1536x1025.jpg",
    soil: "Deep, fertile loamy soil",
    season: "Long-duration crop",
    temperature: "20°C – 30°C",
    water: "High",
    duration: "Approximately 10–18 months",
    description: "Sugarcane is a major commercial crop used for producing sugar, jaggery and other products.",
    cultivation: [
      "Prepare deep, well-drained field soil.",
      "Select healthy sugarcane setts.",
      "Plant setts in properly prepared furrows.",
      "Provide irrigation and nutrient management.",
      "Harvest when the crop reaches maturity."
    ]
  },

  Tomato: {
    scientific: "Solanum lycopersicum",
    image: "https://ynet-pic1.yit.co.il/picserver5/crop_images/2022/01/10/SyD2rYK2t/SyD2rYK2t_0_0_980_735_0_x-large.jpg",
    soil: "Loamy soil",
    season: "Rabi",
    temperature: "20°C – 30°C",
    water: "Medium",
    duration: "Approximately 90–120 days",
    description: "Tomato is an important vegetable crop grown for its nutritious fruits. It is widely used in cooking and food processing.",
    cultivation: [
      "Prepare fertile and well-drained soil.",
      "Raise healthy seedlings in a nursery.",
      "Transplant seedlings into the prepared field.",
      "Provide regular irrigation and nutrients.",
      "Monitor pests and diseases.",
      "Harvest mature tomatoes."
    ]
  },

  Potato: {
    scientific: "Solanum tuberosum",
    image: "https://cdn.mos.cms.futurecdn.net/JEyJyru6xoZLgvwGDksasB-1920-80.jpg",
    soil: "Sandy loam soil",
    season: "Rabi",
    temperature: "15°C – 25°C",
    water: "Medium",
    duration: "Approximately 90–120 days",
    description: "Potato is an important tuber crop and a major source of carbohydrates.",
    cultivation: [
      "Prepare loose and well-drained soil.",
      "Select healthy seed tubers.",
      "Plant tubers at suitable spacing.",
      "Provide irrigation when required.",
      "Earth up the plants during growth.",
      "Harvest mature tubers."
    ]
  },

  Onion: {
    scientific: "Allium cepa",
    image: "https://www.e-warzywnictwo.pl/pliki/aktualnosci_2019/elite_meranto1.jpg",
    soil: "Loamy soil",
    season: "Rabi",
    temperature: "13°C – 25°C",
    water: "Medium",
    duration: "Approximately 100–150 days",
    description: "Onion is an important bulb vegetable used in cooking and food preparation.",
    cultivation: [
      "Prepare fertile and well-drained soil.",
      "Raise seedlings in a nursery.",
      "Transplant seedlings into the field.",
      "Maintain suitable soil moisture.",
      "Control weeds and pests.",
      "Harvest when tops begin to dry."
    ]
  },

  Chilli: {
    scientific: "Capsicum annuum",
    image: "https://kj1bcdn.b-cdn.net/media/79247/chilli-7465.jpg?width=1200",
    soil: "Black soil",
    season: "Kharif",
    temperature: "20°C – 30°C",
    water: "Medium",
    duration: "Approximately 120–180 days",
    description: "Chilli is an important spice crop cultivated for its pungent fruits.",
    cultivation: [
      "Prepare fertile and well-drained soil.",
      "Raise healthy seedlings.",
      "Transplant seedlings into the field.",
      "Provide regular irrigation.",
      "Monitor pests and diseases.",
      "Harvest mature green or red chillies."
    ]
  },

  Soybean: {
    scientific: "Glycine max",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Soybean_Plants_in_the_Field_%289624015808%29.jpg",
    soil: "Black soil",
    season: "Kharif",
    temperature: "20°C – 30°C",
    water: "Medium",
    duration: "Approximately 90–120 days",
    description: "Soybean is an important oilseed and protein-rich legume crop.",
    cultivation: [
      "Prepare well-drained fertile soil.",
      "Select quality soybean seeds.",
      "Sow seeds at recommended spacing.",
      "Maintain suitable soil moisture.",
      "Control weeds during early growth.",
      "Harvest when pods mature."
    ]
  },

  Banana: {
    scientific: "Musa spp.",
    image: "https://www.garden.eco/wp-content/uploads/2018/03/how-to-grow-bananas.jpg",
    soil: "Loamy soil",
    season: "Throughout the year",
    temperature: "20°C – 35°C",
    water: "High",
    duration: "Approximately 10–15 months",
    description: "Banana is a tropical fruit crop cultivated for its nutritious fruits.",
    cultivation: [
      "Prepare fertile and well-drained soil.",
      "Select healthy planting material.",
      "Plant at recommended spacing.",
      "Provide sufficient irrigation.",
      "Apply suitable organic manure and fertilizers.",
      "Harvest mature banana bunches."
    ]
  },

  Turmeric: {
    scientific: "Curcuma longa",
    image: "https://kj1bcdn.b-cdn.net/media/52082/turmeric-farming.jpg",
    soil: "Red soil",
    season: "Kharif",
    temperature: "20°C – 30°C",
    water: "High",
    duration: "Approximately 7–9 months",
    description: "Turmeric is an important spice crop cultivated for its underground rhizomes.",
    cultivation: [
      "Prepare fertile soil with good drainage.",
      "Select healthy turmeric rhizomes.",
      "Plant rhizomes at suitable spacing.",
      "Provide regular irrigation.",
      "Control weeds and apply manure.",
      "Harvest when leaves turn yellow and dry."
    ]
  },

  Pulses: {
    scientific: "Various legume species",
    image: "https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/11/06/501646-1766490050.jpg?itok=G5Bv43Xd",
    soil: "Loamy soil",
    season: "Rabi",
    temperature: "20°C – 30°C",
    water: "Low",
    duration: "Approximately 70–120 days",
    description: "Pulses are protein-rich legume crops that contribute to food security and soil fertility.",
    cultivation: [
      "Prepare suitable well-drained soil.",
      "Select healthy pulse seeds.",
      "Sow seeds at recommended spacing.",
      "Provide irrigation when necessary.",
      "Control weeds and pests.",
      "Harvest when pods become mature."
    ]
  },
  
};

function CropDetails() {
  const { cropName } = useParams();
  const navigate = useNavigate();

  const crop = cropDetails[cropName];

  if (!crop) {
    return (
      <div className="crop-not-found">
        <h2>Crop information not found</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="crop-details-page">

      <header className="crop-details-navbar">
        <h2>🌱 AgriGuide</h2>
        <button onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </header>

      <section className="crop-details-hero">
        <img src={crop.image} alt={cropName} />

        <div className="crop-details-overlay">
          <span>AGRICULTURAL CROP GUIDE</span>
          <h1>{cropName}</h1>
          <p>{crop.description}</p>
        </div>
      </section>

      <main className="crop-details-container">

        <section className="crop-about">
          <span className="crop-label">CROP OVERVIEW</span>
          <h2>About {cropName}</h2>
          <p>{crop.description}</p>
          <p>
            <strong>Scientific Name:</strong> {crop.scientific}
          </p>
        </section>

        <section className="crop-facts">
          <div className="crop-fact-card">
            <span>🌱</span>
            <small>Suitable Soil</small>
            <h3>{crop.soil}</h3>
          </div>

          <div className="crop-fact-card">
            <span>☀️</span>
            <small>Growing Season</small>
            <h3>{crop.season}</h3>
          </div>

          <div className="crop-fact-card">
            <span>🌡️</span>
            <small>Temperature</small>
            <h3>{crop.temperature}</h3>
          </div>

          <div className="crop-fact-card">
            <span>💧</span>
            <small>Water Requirement</small>
            <h3>{crop.water}</h3>
          </div>

          <div className="crop-fact-card">
            <span>📅</span>
            <small>Growing Duration</small>
            <h3>{crop.duration}</h3>
          </div>
        </section>

        <section className="cultivation-section">
          <span className="crop-label">FARMING PROCESS</span>
          <h2>How to Cultivate {cropName}</h2>

          <div className="cultivation-list">
            {crop.cultivation.map((step, index) => (
              <div className="cultivation-step" key={index}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="crop-tip">
          <h3>🌿 Important Farming Tip</h3>
          <p>
            Crop requirements vary with region, variety and climate.
            Always consider local agricultural recommendations and
            soil test results before cultivation.
          </p>
        </section>

        <button
          className="crop-back-button"
          onClick={() => navigate("/")}
        >
          ← Explore More Crops
        </button>

      </main>

      <footer className="crop-details-footer">
        <h3>🌱 AgriGuide</h3>
        <p>Smart Crop & Soil Information System</p>
      </footer>

    </div>
  );
}

export default CropDetails;
