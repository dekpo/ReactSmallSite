import { NavLink } from 'react-router-dom';
import config from '../config.json';

const ListImages = ({ galleryData,page }) => {
  return (
    <div className="row">
      {
        galleryData.map(item => {
          return (
            <div key={item.id} className="col-12 col-md-4 mb-2 text-center">
              <NavLink to={config.HOMEPAGE+"/picture/" + item.id + "/" + page}>
                <img className="img-fluid thumb" src={item.url} alt={item.title} />
              </NavLink>
              <h2 className="h5">{item.title}</h2>
            </div>)
        })
      }
    </div>
  )
}
export default ListImages