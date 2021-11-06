import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IoArrowBackCircle } from "react-icons/io5";
import { BsHeart, BsHeartFill} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import config from "../config.json";

const Picture = () => {
    const { id, p } = useParams();
    const [picture, setPicture] = useState({});
    const [datePic,setDatePic] = useState([]);
    const [liked,setLike] = useState(false);
    const loadPic = () => {
        fetch(config.API_URL + "/picture/" + id)
            .then(response => response.json())
            .then(data => {
                console.log('Picture: ', data);
                 setPicture(data);
                 console.log(Object.entries(data.date_created))
                 setDatePic(Object.entries(data.date_created)[0][1].substr(0,19));
            })
    }
    useEffect(() => { loadPic(); }, []);

    const like = (e) =>{
        e.preventDefault();
        const fetchOptions = {
            method:"POST",
        }
        fetch(config.API_URL+"/picture/"+id+"/like",fetchOptions)
        .then(response => response.json())
            .then(data => {
                setLike(true);
                loadPic();
                console.log('Like: ', data);
            })
    }
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h2>
                        <NavLink className="dark" to={config.HOMEPAGE+"/gallery/"+p}>
                            <IoArrowBackCircle color="#212529" />
                            <span>Go Back</span>
                        </NavLink>
                    </h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img className="img-fluid full" src={picture.url} alt={picture.title} />
                    </div>
                    <div className="col-12">
                        <h5 className="d-flex justify-content-between">
                            <span>Author: {picture.author}</span>
                            <span>Created: {datePic}</span>
                        </h5>
                    </div>
                    <div className="col-12">
                        <h1 className="d-flex justify-content-between">
                            {picture.title}
                            <a href="#" className={(picture.likes>0)?"liked":"dark"} onClick={like}>
                                {(picture.likes>0)?picture.likes:null}
                                {(liked?<BsHeartFill />:<BsHeart />)}
                            </a>
                        </h1>
                    </div>
                    <div className="col-12">
                        <p>{picture.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Picture