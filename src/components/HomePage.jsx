import ItemList from "./ItemList";
import items from "../data/items";

const HomePage = () => {
  const fotos = items.filter((el) => el.type === "foto");
  return (
    <div className="container-fluid tm-container-content tm-mt-60">
      <ItemList
        items={fotos}
        title="Latest Photos"
      />
    </div>
  );
};
export default HomePage;
