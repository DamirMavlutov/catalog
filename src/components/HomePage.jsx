import { NavLink } from "react-router-dom";
import ItemList from "./ItemList";
import items from "../data/items";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const countOfPage = 2;
  const fotos = items.filter((el) => el.type === "foto");
  const [fotosCurrentPage, setFotosCurrentPage] = useState(
    fotos.slice(0, countOfPage)
  );
  const pagesCount = Math.ceil(fotos.length / countOfPage);

  useEffect(() => {
    const start = currentPage * countOfPage - countOfPage;
    const end = currentPage * countOfPage;
    setFotosCurrentPage(fotos.slice(start, end));
  }, [currentPage]);

  return (
    <div className="container-fluid tm-container-content tm-mt-60">
      <div className="row mb-4">
        <h2 className="col-6 tm-text-primary">Latest Photos</h2>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <form
            action=""
            className="tm-text-primary"
          >
            Page
            <input
              type="text"
              value="1"
              size="1"
              className="tm-input-paging tm-text-primary"
            />
            of {pagesCount}
          </form>
        </div>
      </div>
      <ItemList items={fotosCurrentPage} />

      <div className="row tm-mb-90">
        <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
          <a
            href="javascript:void(0);"
            className="btn btn-primary tm-btn-prev mb-2 disabled"
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
            className="btn btn-primary tm-btn-next"
            onClick={() => (pagesCount = 10)}
          >
            Next Page
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
