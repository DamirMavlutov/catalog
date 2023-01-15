import { format } from "date-fns/esm";
import { NavLink } from "react-router-dom";
const Item = ({ item }) => {
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <figure className="effect-ming tm-video-item">
          <img
            src={item.img}
            alt="Image"
            className="img-fluid"
          />
          <figcaption className="d-flex align-items-center justify-content-center">
            <h2>{item.title}</h2>
            <NavLink to={"/detail/" + item.id}>View more</NavLink>
          </figcaption>
        </figure>
        <div className="d-flex justify-content-between tm-text-gray">
          <span className="tm-text-gray-light">
            {format(item.date, "dd MMMM yyyy")}
          </span>
          <span>{item.views} views</span>
        </div>
      </div>
    </>
  );
};
export default Item;
