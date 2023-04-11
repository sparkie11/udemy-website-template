import ubusy from "../Assets/udemy-business.PNG";
import one from "../Assets/one.jpg";
import two from "../Assets/two.jpg";

const LastComponent = () => {
  return (
    <div className="lastcomponent">
      <h2>Trusted by over 13,400 great teams</h2>
      <p>
        Leading companies use the same courses to help employees keep their
        skills fresh.
      </p>
      <div className="part-container">
        <div className="partone">
          <div className="parts">
            <div className="ubusy-container">
              <img src={ubusy} alt="busy " />
            </div>
            <h1>Upskill your team with Udemy Business</h1>
            <ul>
              <li>Unlimited access to 19,000+ top Udemy courses, anytime,</li>
              <li>anywhere International course collection in 14 languages</li>
              <li> Top certifications in tech and business</li>
            </ul>
            <button className="blackbut long"> Get Udemy Business</button>
            <button className="whitebut long marg"> Learn More</button>
          </div>
          <div className="onecontainer">
            <img src={one} alt="ONE" />
          </div>
        </div>
      </div>
      <div className="partz">
        <div className="partone">
          <div className="onecontainer">
            <img src={two} alt="ONE" />
          </div>
          <div className="partcompress">
            <h1> Become an instructor</h1>
            <p>
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button className="blackbut long">Start Teaching Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastComponent;
