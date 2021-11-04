import { useEffect } from "react";

const Gallery = () => {

 useEffect( ()=>{ alert("yo");}, []);

    return(
        <section>
        <div className="container-fluid">
          <div className="row"><h1>Gallery</h1></div>
          <div className="row">
            <div className="col-12 col-md-4 mb-2">
              <img className="img-fluid" src="https://cdn.pixabay.com/photo/2021/10/28/20/20/hut-6750482_1280.jpg" alt="Cabane" />
            </div>
            <div className="col-12 col-md-4 mb-2">
              <img className="img-fluid" src="https://cdn.pixabay.com/photo/2021/10/28/20/20/hut-6750482_1280.jpg" alt="Cabane" />
            </div>
            <div className="col-12 col-md-4 mb-2">
              <img className="img-fluid" src="https://cdn.pixabay.com/photo/2021/10/28/20/20/hut-6750482_1280.jpg" alt="Cabane" />
            </div>
          </div>
        </div>
      </section> 
    )
}
export default Gallery;