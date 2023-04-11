const CourseList = () => {
  return (
    <div className="courselist">
      <div className="courselist-up">
        <h1>A broad selection of courses</h1>
        <p className="noflex">
          Choose from 213,000 online video courses with new additions published
          every month
        </p>
        <div className="courseflex">
          <p className="dark"> python</p>
          <p>Excel </p>
          <p> Web Development </p>
          <p> Javascript</p>
          <p> Datascience</p>
          <p>AWS Certification </p>
          <p> Drawing</p>
        </div>
      </div>
      <div className="courses">
        <h2>Expand your career opportunities with Python</h2>
        <p>
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to both
          beginners
        </p>
        <button className="whitebut python">Explore Python </button>
        <div className="courses-api"> </div>
      </div>
    </div>
  );
};

export default CourseList;
