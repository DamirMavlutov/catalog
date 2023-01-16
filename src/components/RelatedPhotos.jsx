import Item from "./Item";

const RelatedPhotos = ({ items, found }) => {
  const arr = items.filter((el) => el !== found);
  return (
    <>
      <div className="row tm-mb-90 tm-gallery">
        {arr.map((item, index) => (
          <Item item={item} />
        ))}
      </div>
    </>
  );
};
export default RelatedPhotos;
