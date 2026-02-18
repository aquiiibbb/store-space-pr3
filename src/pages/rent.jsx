import './rent.css'
import { useNavigate } from 'react-router-dom'

export default function Rent() {

  return (
    <div className="rent">
      <div className="hero-section">
        <h1>PRICING & AVAILABILITY</h1>
        <p>Select the Unit Size To Check Pricing & Availability</p>
      </div>

      <div className="storage-section">
        <h2>Self Storage Units</h2>
        <div className="storage-grid">
          <div className="storage-card"><a href="/form">
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_f9a580d140594e128a9257e8586be8a7~mv2.jpg/v1/crop/x_1,y_0,w_583,h_470/fill/w_136,h_97,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/10x15.jpg" alt="10x15 Storage Unit" />
            </div>
            <div className="size-label">10 x 15</div>
           </a> </div>
          <div className="storage-card"><a href="/tentwentyform">
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_7dedd0f13a13429ab7ab04ab404e554f~mv2.jpg/v1/fill/w_136,h_97,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/10x20.jpg" alt="10x20 Storage Unit" />
            </div>
            <div className="size-label">10 x 20</div>
          </a></div>
        </div>
      </div>

      <div className="parking-section">
        <h2>Uncovered Parking</h2>
        <div className="parking-grid">
          <div className="parking-card uncovered"><a href="/un1">
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_ea1321d59c3d41e9b262f49ff5fae1f5~mv2.png/v1/crop/x_0,y_23,w_473,h_381/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_various-isometric-car-logistic-delivery-vehicles-with-cargo__edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">10 x 20</div>
          </a></div>
          <div className="parking-card uncovered"><a href="/un2">
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_c00b4b3ebfa54ef3aa2185aa7fc5e26a~mv2.png/v1/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_various-isometric-car-logistic-delivery-vehicles-with-cargo_%20copy_edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">10 x 25</div>
          </a></div>
          <div className="parking-card uncovered"><a href="/un3">
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_d68a6edd0b914b9289ef12acdbe0aec4~mv2.png/v1/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_various-isometric-car-logistic-delivery-vehicles-with-cargo_%20copy%202_edited_edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">12 x 30</div>
          </a></div>
          <div className="parking-card uncovered"><a href="/un4">
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_66acc12463824a278e6a88c937817efb~mv2.png/v1/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rv-trailer-3d-rendering-isolated-260nw-1514959451_edited_edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">12 x 35</div>
          </a></div>
          <div className="parking-card uncovered" ><a href="/un5">
            <div className="image-container">
              <img src="https://static.wixstatic.com/media/0db761_d68a6edd0b914b9289ef12acdbe0aec4~mv2.png/v1/fill/w_153,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_various-isometric-car-logistic-delivery-vehicles-with-cargo_%20copy%202_edited_edited.png" alt="Uncovered Parking" />
            </div>
            <div className="size-label">12 x 40</div>
          </a></div>
        </div>
      </div>
    </div>
  );
}