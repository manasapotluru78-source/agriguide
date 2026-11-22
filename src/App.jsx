
import AuthPage from "./Auth.jsx";
import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import SoilDetails from "./SoilDetails.jsx";
import "./App.css";
import CropDetails from "./CropDetails.jsx";
const crops = [
  {
    name: "Rice",
    soil: "Clay and loamy soil",
    season: "Kharif",
    water: "High",
    image: "https://images.unsplash.com/photo-1599328580087-15c9dab481f3?w=1200&q=85&auto=format&fit=crop",
  },
  {
    name: "Wheat",
    soil: "Loamy soil",
    season: "Rabi",
    water: "Medium",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600",
  },
  {
    name: "Cotton",
    soil: "Black soil",
    season: "Kharif",
    water: "Medium",
    image: "https://agritech.tnau.ac.in/crop_protection/images/pest_index_pages/Cotton%20.jpg",
  },
  {
    name: "Maize",
    soil: "Well-drained loamy soil",
    season: "Kharif",
    water: "Medium",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600",
  },
  {
    name: "Groundnut",
    soil: "Sandy loam soil",
    season: "Kharif",
    water: "Low",
    image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=600",
  },
  {
    name: "Sugarcane",
    soil: "Fertile loamy soil",
    season: "Long duration",
    water: "High",
    image: "https://a-z-animals.com/media/2023/02/shutterstock_718945261-1536x1025.jpg",
  },
];


const allCrops = [
  ...crops,

  {
    name: "Tomato",
    soil: "Loamy Soil",
    season: "Rabi",
    water: "Medium",
    image: "https://ynet-pic1.yit.co.il/picserver5/crop_images/2022/01/10/SyD2rYK2t/SyD2rYK2t_0_0_980_735_0_x-large.jpg"
  },
  {
    name: "Potato",
    soil: "Sandy Loam",
    season: "Rabi",
    water: "Medium",
    image: "https://cdn.mos.cms.futurecdn.net/JEyJyru6xoZLgvwGDksasB-1920-80.jpg"
  },
  {
    name: "Onion",
    soil: "Loamy Soil",
    season: "Rabi",
    water: "Medium",
    image: "https://www.e-warzywnictwo.pl/pliki/aktualnosci_2019/elite_meranto1.jpg"
  },
  {
    name: "Chilli",
    soil: "Black Soil",
    season: "Kharif",
    water: "Medium",
    image: "https://kj1bcdn.b-cdn.net/media/79247/chilli-7465.jpg?width=1200"
  },
  {
    name: "Soybean",
    soil: "Black Soil",
    season: "Kharif",
    water: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Soybean_Plants_in_the_Field_%289624015808%29.jpg"

  },
  {
    name: "Banana",
    soil: "Loamy Soil",
    season: "Throughout the year",
    water: "High",
    image: "https://www.garden.eco/wp-content/uploads/2018/03/how-to-grow-bananas.jpg"
  },
  {
    name: "Turmeric",
    soil: "Red Soil",
    season: "Kharif",
    water: "High",
    image: "https://kj1bcdn.b-cdn.net/media/52082/turmeric-farming.jpg"
  },
  {
    name: "Pulses",
    soil: "Loamy Soil",
    season: "Rabi",
    water: "Low",
    image: "https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/11/06/501646-1766490050.jpg?itok=G5Bv43Xd"
  }
];

const soilTypes = [
  {
    name: "Black Soil",
    image: "https://civilengpro.com/wp-content/uploads/2023/05/1Black-Cotton-Soil-1024x669.jpg",
    description: "Black clay-rich soil with high moisture retention.",
    water: "High",
    crops: ["Cotton", "Soybean", "Sorghum"]
  },
  {
    name: "Red Soil",
    image: "https://smartlocus.in/uploads/images/202502/image_750x_67a9e17c71aaa.webp",
    description: "Reddish soil containing iron oxides.",
    water: "Low to Medium",
    crops: ["Groundnut", "Millets", "Pulses"]
  },
  {
    name: "Sandy Soil",
    image: "https://ik.imagekit.io/plantgarden/media/soils/sandy-soil.png",
    description: "Light, coarse soil with rapid water drainage.",
    water: "Low",
    crops: ["Groundnut", "Watermelon", "Millets"]
  },
  {
    name: "Clay Soil",
    image: "https://www.groundsguys.com/us/en-us/grounds-guys/_assets/images/clay-soil-hero.webp",
    description: "Fine-textured soil that retains considerable moisture.",
    water: "High",
    crops: ["Rice", "Wheat", "Lentils"]
  },
  {
    name: "Loamy Soil",
    image: "https://www.creationofnature.co.uk/site/assets/files/1313/fertile-loam-soil-suitable-planting-soil-texture-background_38663-327.jpg",
    description: "Fertile, crumbly soil containing sand, silt and clay.",
    water: "Medium",
    crops: ["Maize", "Wheat", "Vegetables"]
  }
];


function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [results, setResults] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  
const filteredCrops = search.trim()
  ? allCrops.filter((crop) =>
      crop.name.toLowerCase().includes(search.trim().toLowerCase())
    )
  : crops;


  const recommendCrops = () => {
    const matches = allCrops.filter((crop) => {
      const soilMatch = crop.soil.toLowerCase().includes(soil.toLowerCase());
      const seasonMatch = !season || crop.season === season;
      return soilMatch && seasonMatch;
    });

    setResults(matches);
  };

  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          🌱 AgriGuide
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#soil" onClick={() => setMenuOpen(false)}>Soil Types</a>
          <a href="#crops" onClick={() => setMenuOpen(false)}>Crops</a>
          <a href="#recommend" onClick={() => setMenuOpen(false)}>Recommendations</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button
  className="nav-auth-link"
  onClick={() => {
    navigate("/login");
    setMenuOpen(false);
  }}
>
  Login
</button>

<button
  className="nav-auth-button"
  onClick={() => {
    navigate("/signup");
    setMenuOpen(false);
  }}
>
  Create Account
</button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="tagline">SMART FARMING • BETTER FUTURE</span>
            <h1>
              Grow Better With
              <span> The Right Crop</span>
            </h1>
            <p>
              Discover suitable crops for your soil, understand
              soil characteristics and make smarter farming decisions.
            </p>
            <div className="hero-buttons">
              <a href="#crops" className="btn primary-btn">Explore Crops</a>
              <a href="#recommend" className="btn outline-btn">Find Your Crop</a>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <span>ABOUT AGRIGUIDE</span>
            <h2>Making Agriculture Smarter</h2>
            <p>
              Every soil has its own characteristics. Choosing the right
              crop can help farmers improve productivity and use resources wisely.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Soil Knowledge</h3>
              <p>Learn about different soil types and their properties.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌾</div>
              <h3>Crop Information</h3>
              <p>Explore crops and understand their growing requirements.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Smart Selection</h3>
              <p>Discover crops suitable for your selected soil conditions.</p>
            </div>
          </div>
        </section>

<section className="soil-section section" id="soil">

  <div className="section-heading">
    <span>UNDERSTAND YOUR LAND</span>
    <h2>Explore Different Soil Types</h2>
    <p>
      Learn about soil characteristics, water retention
      and crops suitable for different soil types.
    </p>
  </div>

  <div className="soil-grid">

    {soilTypes.map((soil, index) => (

      <div
  className="soil-card"
  key={soil.name}
  onClick={() => navigate(`/soil/${encodeURIComponent(soil.name)}`)}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      navigate(`/soil/${encodeURIComponent(soil.name)}`);
    }
  }}
>

        <div className="soil-image">
          <img src={soil.image} alt={soil.name} />

          <span className="soil-number">
            0{index + 1}
          </span>
        </div>

        <div className="soil-content">

          <h3>{soil.name}</h3>

          <p>{soil.description}</p>

          <div className="soil-detail">
            <strong>Water Retention:</strong>
            <span>{soil.water}</span>
          </div>

          <div className="suitable-crops">
            <strong>Suitable Crops:</strong>

            <div className="crop-tags">
              {soil.crops.map((crop) => (
                <span key={crop}>{crop}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

    ))}

  </div>
</section>


        <section className="crops-section section" id="crops">
          <div className="section-heading">
            <span>EXPLORE AGRICULTURE</span>
            <h2>Popular Crops</h2>
            <p>Explore different crops and their soil requirements.</p>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search crops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span>🔍</span>
          </div>

          <div className="crop-grid">
            {filteredCrops.length > 0 ? (
              filteredCrops.map((crop) => (               
<div
  className="crop-card"
  key={crop.name}
  onClick={() => navigate(`/crop/${encodeURIComponent(crop.name)}`)}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      navigate(`/crop/${encodeURIComponent(crop.name)}`);
    }
  }}
>
                  <img src={crop.image} alt={crop.name} />
                  <div className="crop-info">
                    <h3>{crop.name}</h3>
                    <p><strong>Soil:</strong> {crop.soil}</p>
                    <p><strong>Season:</strong> {crop.season}</p>
                    <p><strong>Water:</strong> {crop.water}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No crops found.</p>
            )}
          </div>
        </section>

        <section className="recommend-section section" id="recommend">
          <div className="section-heading">
            <span>SMART CROP SELECTION</span>
            <h2>Find Suitable Crops</h2>
            <p>Select your soil type and growing season to explore matching crops.</p>
          </div>

          <div className="recommend-box">
            <label>Select Soil Type</label>
            <select value={soil} onChange={(e) => {
              setSoil(e.target.value);
              setResults(null);
            }}>
              <option value="">Choose soil</option>
              <option value="Black">Black Soil</option>
              <option value="Red">Red Soil</option>
              <option value="Sandy">Sandy Soil</option>
              <option value="Clay">Clay Soil</option>
              <option value="Loamy">Loamy Soil</option>
            </select>

            <label>Select Season</label>
            <select value={season} onChange={(e) => {
              setSeason(e.target.value);
              setResults(null);
            }}>
              <option value="">Any Season</option>
              <option value="Kharif">Kharif</option>
              <option value="Rabi">Rabi</option>
              <option value="Summer">Summer</option>
            </select>

            <button className="btn primary-btn recommend-btn"
              onClick={recommendCrops} disabled={!soil}>
              Get Recommendations
            </button>

            {results !== null && (
              <div className="recommend-results">
                <h3>Recommended Crops</h3>
                {results.length > 0 ? (
                  results.map((crop) => (
                    <p key={crop.name}>🌱 {crop.name} – {crop.soil}</p>
                  ))
                ) : (
                  <p>No matching crops in our sample data. Try another selection.</p>
                )}
                <small>
                  These are illustrative matches, not scientific soil-test recommendations.
                </small>
              </div>
            )}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2>Growing a Better Tomorrow</h2>
          <p>Knowledge about soil and crops leads to smarter agriculture.</p>    
<a
  href="mailto:manasapotluru78@gmail.com?subject=Inquiry%20about%20AgriGuide&body=Hello%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20AgriGuide."
  className="btn contact-btn"
>
  Contact Us
</a>

        </section>
      </main>

      <footer>
        <h3>🌱 AgriGuide</h3>
        <p>Smart Crop & Soil Information System</p>
        <p>© 2026 AgriGuide. Educational Project.</p>
      </footer>
    </>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/soil/:soilName" element={<SoilDetails />} />
      <Route path="/crop/:cropName" element={<CropDetails />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
