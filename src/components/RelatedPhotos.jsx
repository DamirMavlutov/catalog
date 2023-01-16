import Item from "./Item";

const RelatedPhotos = ({ items, found }) => {
  console.log(found);
  return (
    <>
      <div className="row tm-mb-90 tm-gallery">
        {items.map((item, index) => {
          if (item !== found) {
            return <Item item={item} />;
          }
        })}
      </div>
    </>
  );
};
export default RelatedPhotos;
