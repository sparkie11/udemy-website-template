import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";

import logomain from "../Assets/UDEMY-MAIN-LOGO.PNG";
const Header = () => {
  return (
    <div className="header">
      <div className="header-head">
        <div className="head-head-head">
          <p>
            <span className="bold flexy">
              learn from a variety of teaching styles|
            </span>
            Courses from ₹649 through April 12
          </p>
        </div>
        <h2>1 day left!</h2>
      </div>
      <div className="header-leg">
        <div className="logo-box">
          <img src={logomain} alt="yeah-main-logo-man" />
        </div>
        <div className="head-cat">
          <p>Categories</p>
        </div>

        <div className="search-box">
          <SearchIcon />
          <input
            type="text"
            alt="search here"
            placeholder="search for anything"
          />
        </div>
        <div className="udem-bus">
          <p>udemy business</p>
        </div>
        <div className="udem-bus">
          <p>Teach on udemy</p>
        </div>
        <div className="cart-container">
          <ShoppingCartIcon />
        </div>
        <div>
          <button className="whitebut">Log in</button>
        </div>

        <div className="marlef">
          <button className="blackbut ">sign up</button>
        </div>

        <div className="box">
          <LanguageIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
