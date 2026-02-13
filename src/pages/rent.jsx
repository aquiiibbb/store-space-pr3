import './rent.css'
import { useNavigate } from 'react-router-dom'

export default function Rent() {
  const navigate = useNavigate()

  const handleCardClick = (unitType, size) => {
    // Form page pe navigate karo with unit details
    navigate('/form', { 
      state: { 
        unitType: unitType,
        size: size 
      } 
    })
  }

  return (
    <div className="rent">
      <div className="hero-section">
        <h1>PRICING & AVAILABILITY</h1>
        <p>Select the Unit Size To Check Pricing & Availability</p>
      </div>

      <div className="storage-section">
        <h2>Self Storage Units</h2>
        <div className="storage-grid">
          <div className="storage-card" onClick={() => handleCardClick('storage', '5x10')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_a906f71e95fc47d9aced5bbe5099bd87~mv2.png/v1/crop/x_0,y_125,w_864,h_614/fill/w_136,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5x10_edited.png" alt="5x10 Storage Unit" />
            </div>
            <div className="size-label">5 x 10</div>
          </div>
          <div className="storage-card" onClick={() => handleCardClick('storage', '10x10')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_ad4b2a7571ce4c9eb5fbe042d7266501~mv2.png/v1/fill/w_136,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10x10_edited_edited_edited.png" alt="10x10 Storage Unit" />
            </div>
            <div className="size-label">10 x 10</div>
          </div>
          <div className="storage-card" onClick={() => handleCardClick('storage', '10x15')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_f9a580d140594e128a9257e8586be8a7~mv2.jpg/v1/crop/x_1,y_0,w_583,h_470/fill/w_136,h_97,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/10x15.jpg" alt="10x15 Storage Unit" />
            </div>
            <div className="size-label">10 x 15</div>
          </div>
          <div className="storage-card" onClick={() => handleCardClick('storage', '10x20')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_7dedd0f13a13429ab7ab04ab404e554f~mv2.jpg/v1/fill/w_136,h_97,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/10x20.jpg" alt="10x20 Storage Unit" />
            </div>
            <div className="size-label">10 x 20</div>
          </div>
          <div className="storage-card" onClick={() => handleCardClick('storage', '10x25')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_e649a0a20d2f4abc960bd9aedbff48ae~mv2.png/v1/crop/x_0,y_15,w_1355,h_962/fill/w_136,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10x25%202.png" alt="10x25 Storage Unit" />
            </div>
            <div className="size-label">10 x 25</div>
          </div>
          <div className="storage-card" onClick={() => handleCardClick('storage', '10x30')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_98e53e3c49c34ec1bd6e5a3ecbf05022~mv2.jpg/v1/crop/x_29,y_46,w_1185,h_842/fill/w_136,h_97,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/10x30.jpg" alt="10x30 Storage Unit" />
            </div>
            <div className="size-label">10 x 30</div>
          </div>
          <div className="storage-card" onClick={() => handleCardClick('storage', '10x40')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_fb6d100fb61248c78fcc30236466a44f~mv2.jpeg/v1/fill/w_136,h_97,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/10x40.jpeg" alt="10x40 Storage Unit" />
            </div>
            <div className="size-label">10 x 40</div>
          </div>
        </div>
      </div>

      <div className="parking-section">
        <h2>Covered Parking</h2>
        <div className="parking-grid">
          <div className="parking-card covered" onClick={() => handleCardClick('covered-parking', '10x12')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_f63f24b568694558975bf47b245e7a06~mv2.png/v1/crop/x_37,y_39,w_318,h_256/fill/w_160,h_128,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_car-trailer-open-icons-set-trailer-icons-showing-different_54074936_edited.png" alt="Covered Parking" />
            </div>
            <div className="size-label">10 x 12</div>
          </div>
          <div className="parking-card covered" onClick={() => handleCardClick('covered-parking', '10x25')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_6b4ceb3fac194a5f8fb23b3b8608dc4f~mv2.png/v1/fill/w_160,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_camping-trailer-icon_10507570_edited.png" alt="Covered Parking" />
            </div>
            <div className="size-label">10 x 25</div>
          </div>
          <div className="parking-card covered" onClick={() => handleCardClick('covered-parking', '12x40')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_d68a6edd0b914b9289ef12acdbe0aec4~mv2.png/v1/fill/w_160,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_various-isometric-car-logistic-delivery-vehicles-with-cargo_%20copy%202_edited_edited.png" alt="Covered Parking" />
            </div>
            <div className="size-label">12 x 40</div>
          </div>
        </div>
      </div>

      <div className="parking-section">
        <h2>Uncovered Parking</h2>
        <div className="parking-grid">
          <div className="parking-card uncovered" onClick={() => handleCardClick('uncovered-parking', '10x20')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_ea1321d59c3d41e9b262f49ff5fae1f5~mv2.png/v1/crop/x_0,y_23,w_473,h_381/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_various-isometric-car-logistic-delivery-vehicles-with-cargo__edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">10 x 20</div>
          </div>
          <div className="parking-card uncovered" onClick={() => handleCardClick('uncovered-parking', '10x25')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_c00b4b3ebfa54ef3aa2185aa7fc5e26a~mv2.png/v1/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_various-isometric-car-logistic-delivery-vehicles-with-cargo_%20copy_edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">10 x 25</div>
          </div>
          <div className="parking-card uncovered" onClick={() => handleCardClick('uncovered-parking', '12x30')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_d68a6edd0b914b9289ef12acdbe0aec4~mv2.png/v1/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_various-isometric-car-logistic-delivery-vehicles-with-cargo_%20copy%202_edited_edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">12 x 30</div>
          </div>
          <div className="parking-card uncovered" onClick={() => handleCardClick('uncovered-parking', '12x35')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_66acc12463824a278e6a88c937817efb~mv2.png/v1/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rv-trailer-3d-rendering-isolated-260nw-1514959451_edited_edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">12 x 35</div>
          </div>
          <div className="parking-card uncovered" onClick={() => handleCardClick('uncovered-parking', '12x40')}>
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_d68a6edd0b914b9289ef12acdbe0aec4~mv2.png/v1/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_various-isometric-car-logistic-delivery-vehicles-with-cargo_%20copy%202_edited_edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">12 x 40</div>
          </div>
        </div>
      </div>
    </div>
  );
}