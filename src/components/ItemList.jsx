import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="row tm-mb-90 tm-gallery">
        {items.map((item, index) => {
          return <Item item={item} />;
        })}
      </div>
    </>
  );
};
export default ItemList;
