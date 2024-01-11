// head of the body
import bodyImage from "../Assets/HEAD-IMAGE.jpg";

const BodyHead = () => {
  return (
    <div className="body-head-main">
      <div className="body-head">
        <img src={bodyImage} alt="iage-head" />
      </div>
      <div className="body-head-box">
        <h1> Find the right Fit</h1>
        <p>
          The topics you want, taught by real-world experts. Log in for deals on
          courses. Sale ends April 12.
        </p>
      </div>
    </div>
  );
};

export default BodyHead;
