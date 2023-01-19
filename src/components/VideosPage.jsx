import items from "../data/items";
import ItemList from "./ItemList";
const VideosPage = () => {
  const videos = items.filter((el) => el.type === "video");
  return (
    <div className="container-fluid tm-container-content tm-mt-60">
      <ItemList
        items={videos}
        title="Latest Videos"
      />
    </div>
  );
};
export default VideosPage;
