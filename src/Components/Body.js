import AchieveList from "./AchieveList";
import BodyHead from "./BodyHead";
import CategoryList from "./CategoryList";
import CourseList from "./CourseList";
import FeaturedTopic from "./FeaturedTopic";
import LastComponent from "./LastComponent";
import ViewList from "./ViewList";

const Body = () => {
  return (
    <div className="body">
      <BodyHead />
      <CourseList />
      <AchieveList />
      <ViewList />
      <CategoryList />
      <FeaturedTopic />
      <LastComponent />
    </div>
  );
};

export default Body;
