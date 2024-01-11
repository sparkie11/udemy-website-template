// category list
import business from "../Assets/Business.jpg";
import design from "../Assets/design.jpg";
import development from "../Assets/development.jpg";
import software from "../Assets/it-and-software.jpg";
import marketing from "../Assets/marketing.jpg";
import personal from "../Assets/personal-development.jpg";
import photography from "../Assets/photography.jpg";
import music from "../Assets/mussic.jpg";

const CategoryList = () => {
  return (
    <div className="categorylist">
      <h2>Top Categories</h2>
      <div className="category-body">
        <div className="grid-item">
          <img src={business} alt="business" />
          <h3>Business</h3>
        </div>
        <div className="grid-item">
          <img src={music} alt="business" />
          <h3>Music</h3>
        </div>
        <div className="grid-item">
          <img src={design} alt="business" />
          <h3>Design</h3>
        </div>
        <div className="grid-item">
          <img src={development} alt="business" />
          <h3>Development</h3>
        </div>
        <div className="grid-item">
          <img src={software} alt="business" />
          <h3>IT and Software</h3>
        </div>
        <div className="grid-item">
          <img src={marketing} alt="business" />
          <h3>Marketing</h3>
        </div>
        <div className="grid-item">
          <img src={personal} alt="business" />
          <h3>Perosnal Development</h3>
        </div>
        <div className="grid-item">
          <img src={photography} alt="business" />
          <h3>Photography</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
