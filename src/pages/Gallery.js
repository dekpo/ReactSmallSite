import { useEffect, useState } from "react";
import { useParams } from "react-router"
import config from "../config.json";

import ListImages from '../components/ListImages';
import Pagination from '../components/Pagination';

const Gallery = () => {
  let { p } = useParams();
  if (p===undefined) p = 1;
  const [galleryData, setGalleryData] = useState([]);
  const [page, setPage] = useState(parseInt(p));
  const [count,setCount] = useState(0);
  const limit = 6;

  const loadApi = () => {
    fetch(config.API_URL+"/pictures/list?page="+page+"&limit="+limit)
      .then(response => response.json())
      .then(data => {
        console.log('Items: ',data);
        setGalleryData(data);
      })
  }
  const countItems = () => {
    fetch(config.API_URL+"/pictures/count")
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

  return (
    <section>
      <div className="container-fluid">
        <div className="row"><h1>Gallery</h1></div>
        <Pagination limit={ limit } count={ count } page={ page } nextPage={ nextPage } />
        <ListImages galleryData={ galleryData } page={ page } />
        <Pagination limit={ limit } count={ count} page={ page } nextPage={ nextPage } />
      </div>
    </section>
  )
}
export default Gallery;