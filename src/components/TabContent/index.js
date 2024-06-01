import { useDataContext } from "../../context/dataContext";
import ContentItem from "./Content";
import "./index.css";

const TabContent = () => {
  const { data } = useDataContext();
  return (
    <div className="content-container">
      {data?.length > 0 &&
        data?.map((item) => <ContentItem key={item.id} item={item} />)}
    </div>
  );
};

export default TabContent;
