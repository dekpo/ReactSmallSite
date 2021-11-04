import { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  const loadAPI = () => {
    fetch("https://html-learning.com/dwwm2i/dekpo/public/pictures/list?page=1&limit=6")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGalleryData(data);
      })
  }
  useEffect(() => { loadAPI() }, []);

  const ListImages = () => {
    return (
      <div className="row">
        {
          galleryData.map(item => {
            return (
              <div key={ item.id } className="col-12 col-md-4 mb-2 text-center">
                <img className="img-fluid" src={ item.url } alt="Cabane" />
                <h2 className="h5">{ item.title }</h2>
              </div>)
          })
        }
      </div>
    )
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="row"><h1>Gallery</h1></div>
        <ListImages />
      </div>
    </section>
  )
}
export default Gallery;