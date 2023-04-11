const FeaturedTopic = () => {
  return (
    <div className="featuredtopic">
      <h3>Featured topics by category</h3>
      <div className="grid-container">
        <div className="grid-item dark">Development</div>
        <div className="grid-item dark">Business</div>
        <div className="grid-item dark">IT and Software </div>
        <div className="grid-item dark">Design</div>
        <div className="grid-item lineunder">Python</div>
        <div className="grid-item lineunder">Financial Analysis</div>
        <div className="grid-item lineunder">AWS Certification</div>
        <div className="grid-item lineunder">Photoshop</div>
        <div className="grid-item lineunder">Web Development</div>
        <div className="grid-item lineunder">SQL</div>
        <div className="grid-item lineunder">Ethical Hacking</div>
        <div className="grid-item lineunder">Graphic Design</div>
        <div className="grid-item lineunder">Machine Learning</div>
        <div className="grid-item lineunder">PMP</div>
        <div className="grid-item lineunder">Cyber Security</div>
        <div className="grid-item lineunder">Drawing</div>
      </div>
      <button className="whitebut long">Explore More Topics</button>
    </div>
  );
};

export default FeaturedTopic;
