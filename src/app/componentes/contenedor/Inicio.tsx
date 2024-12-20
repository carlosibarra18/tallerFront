import image1  from "../../../assets/img/fotoLibro1.jpeg"
import image2 from "../../../assets/img/fotoLibro2.jpg"
import image3 from "../../../assets/img/fotoLibro3.jpeg"
export const Inicio = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
            src={image1} 
            className="d-block w-100" 
            alt="..."
            width={1896}
            height={550}/>
          </div>
          <div className="carousel-item">
            <img 
            src={image2} 
            className="d-block w-100" 
            alt="..."
            width={1896}
            height={550}/>
          </div>
          <div className="carousel-item">
            <img 
            src={image3} 
            className="d-block w-100" 
            alt="..."
            width={1896}
            height={550}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
