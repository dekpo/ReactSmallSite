import { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [page, setPage] = useState(1);
  const [count,setCount] = useState(0);
  const limit = 6;

  const loadApi = () => {
    fetch("https://html-learning.com/dwwm2i/dekpo/public/pictures/list?page="+page+"&limit="+limit)
      .then(response => response.json())
      .then(data => {
        console.log('Items: ',data);
        setGalleryData(data);
      })
  }
  const countItems = () => {
    fetch("https://html-learning.com/dwwm2i/dekpo/public/pictures/count")
      .then(response => response.json())
      .then(data => {
        console.log('Total: ',data.count);
        setCount(data.count);
      })
  }
  useEffect(() => { countItems();loadApi(); }, [page]);

  const nextPage = (page) => {
    setPage(page);
    console.log(page*limit);
  }

  const Pagination = () => (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={"page-item "+(page<2?"disabled":"")}>
          <a className="page-link" href="#" onClick={ ()=>nextPage(page-1) }>Previous</a>
        </li>
        <li className="page-item active"><a className="page-link" href="#" onClick={ ()=>nextPage(page) }>{page}</a></li>
        {
          (page*limit<count)?(<li className="page-item"><a className="page-link" href="#" onClick={ ()=>nextPage(page+1) }>{page+1}</a></li>):""
        }
        {
          ((page+1)*limit<count)?(<li className="page-item"><a className="page-link" href="#" onClick={ ()=>nextPage(page+2) }>{page+2}</a></li>):""
        }
        <li className={"page-item "+((page)*limit>=count?"disabled":"")}>
          <a className="page-link" href="#" onClick={ ()=>nextPage(page+1) }>Next</a>
        </li>
      </ul>
    </nav>
  )

  const ListImages = () => {
    return (
      <div className="row">
        {
          galleryData.map(item => {
            return (
              <div key={item.id} className="col-12 col-md-4 mb-2 text-center">
                <img className="img-fluid" src={item.url} alt="Cabane" />
                <h2 className="h5">{item.title}</h2>
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
        <Pagination />
        <ListImages />
        <Pagination />
      </div>
    </section>
  )
}
export default Gallery;