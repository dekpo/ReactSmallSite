import { useEffect, useState } from "react"
import config from "../config.json";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const loadSlide = () => {
    fetch(config.API_URL+"/pictures/list?limit=3")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSlides(data);
      })
  }
  useEffect(() => {
    loadSlide()
  }, []);
  let count = 0;
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {
          slides.map(item => {
            count++;
            return (
              <div key={item.id} className={"carousel-item " + (count === 1 ? "active" : "")}>
                <img src={item.url} className="d-block w-100" alt={item.title} />
                <div className="carousel-caption d-none d-sm-block">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

const Home = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row"><h1>Home</h1></div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Carousel />
          </div>
          <div className="col-12 col-md-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      </div>
    </section>
  )
}
export default Home;