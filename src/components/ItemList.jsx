import Item from "./Item";
import { useState, useEffect } from "react";

const ItemList = ({ items, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const countOfPage = 2;

  const [fotosCurrentPage, setFotosCurrentPage] = useState(
    items.slice(0, countOfPage)
  );
  let pagesCount = Math.ceil(items.length / countOfPage);
  //количество страниц с фото

  useEffect(() => {
    const start = currentPage * countOfPage - countOfPage;
    const end = currentPage * countOfPage;
    setFotosCurrentPage(items.slice(start, end));
  }, [currentPage]);

  const nextClickHandler = () => {
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousClickHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="row mb-4">
        <h2 className="col-6 tm-text-primary">{title}</h2>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <form
            action=""
            className="tm-text-primary"
          >
            Page
            <input
              type="text"
              defaultValue="1"
              className="tm-input-paging tm-text-primary"
              onChange={(event) => setCurrentPage(+event.target.value)}
              // вводим нужную страницу в поле
            />
            of {pagesCount}
          </form>
        </div>
      </div>
      <div className="row tm-mb-90 tm-gallery">
        {fotosCurrentPage.map((item, index) => {
          return <Item item={item} />;
        })}
      </div>
      <div className="row tm-mb-90">
        <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
          <a
            href="javascript:void(0);"
            className={`${
              currentPage === 1 ? "disabled" : ""
            } btn btn-primary tm-btn-prev mb-2`}
            onClick={previousClickHandler}
            // меняем стиль при первой странице
          >
            Previous
          </a>
          <div className="tm-paging d-flex">
            {[...Array(pagesCount)].map((x, i) => (
              <a
                href="javascript:void(0);"
                className={`${
                  currentPage === i + 1 ? "active" : ""
                } tm-paging-link`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </a>
            ))}
          </div>
          <a
            href="javascript:void(0);"
            className={`${
              currentPage === pagesCount ? "disabled" : ""
            } btn btn-primary tm-btn-next`}
            onClick={nextClickHandler}
            //меняем стиль на последней странице
          >
            Next Page
          </a>
        </div>
      </div>
    </>
  );
};
export default ItemList;
