import { NavLink } from "react-router-dom";
import ItemList from "./ItemList";
import items from "../data/items";

const Home = () => {
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
            of 200
          </form>
        </div>
      </div>
      <ItemList items={items} />

      <div class="row tm-mb-90">
        <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
          <a
            href="javascript:void(0);"
            class="btn btn-primary tm-btn-prev mb-2 disabled"
          >
            Previous
          </a>
          <div class="tm-paging d-flex">
            <a
              href="javascript:void(0);"
              class="active tm-paging-link"
            >
              1
            </a>
            <a
              href="javascript:void(0);"
              class="tm-paging-link"
            >
              2
            </a>
            <a
              href="javascript:void(0);"
              class="tm-paging-link"
            >
              3
            </a>
            <a
              href="javascript:void(0);"
              class="tm-paging-link"
            >
              4
            </a>
          </div>
          <a
            href="javascript:void(0);"
            class="btn btn-primary tm-btn-next"
          >
            Next Page
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
