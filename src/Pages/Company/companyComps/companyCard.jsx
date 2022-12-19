import "./companyCard.css";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const ComapnyCard = ({
  title,
  logo,
  rating,
  reviews,
  nature,
  company_size,
  id,
}) => {
  return (
    <div className="company_card">
      <img className="logo_image" src={logo} alt={title} />
      <Link to={`/companypage/${id}`}>
        <div className="company_info">
          <p>{title}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosStar color="gold" />
            {rating} | {reviews}
          </div>
          <div className="nature_div">
            {nature.map((ele, ind) => {
              return <div key={ind}>{ele}</div>;
            })}
          </div>
          <div>{company_size} emp.</div>
        </div>
      </Link>
    </div>
  );
};

export default ComapnyCard;
