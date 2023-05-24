import { CategorySidebar } from "../../components/user/categorySidebar";
import { SortBar } from "../../components/user/sortBar";
import { UProductCard } from "../../components/user/uProductCard";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { getProduct } from "../../redux/slice/loadProductSlice";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import { getCategoryApi } from "../../api/CategoryApi";
import { getAuthorApi } from "../../api/authorApi";
import { postProductApi } from "../../api/productsApi";
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((p) => (
          <UProductCard
            title={p?.title}
            imageUrl={p?.imageUrl}
            price={p?.price}
            id={p._id}
          ></UProductCard>
        ))}{" "}
      {/* </div> */}
    </>
  );
}

export const UProducts = ({ itemsPerPage = 20 }) => {
  //const dispatch = Dispatch();
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);
  const { product } = useSelector((state) => state.loadProduct);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [filter, setFilter] = useState({
    author: [],
    rating: 1,
    category: [],
    priceFrom: null,
    priceTo: null,
    sorting: 2,
  });
  const location = useLocation();
  
 
  const submitFilter = () => {
    dispatch(getProduct(filter));
  };
  useEffect(() => {
    filter && dispatch(getProduct(filter));
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(product.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(product.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, product]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center  w-[92%] min-h-screen m-auto py-4 gap-2">
        <div
          onClick={() => {
            setShowFilter((state) => !state);
          }}
          className="w-full py-2 rouned-lg bg-indigo-400 text-white font-semi text-center block md:hidden"
        >
          FILTER
        </div>
        <div className="w-1/6 hidden md:block">
          <CategorySidebar
            setFilter={setFilter}
            filter={filter}
            submit={submitFilter}
          ></CategorySidebar>
        </div>

        {showFilter && (
          <div className="w-full block md:hidden">
            <CategorySidebar
              setFilter={setFilter}
              filter={filter}
              submit={submitFilter}
            ></CategorySidebar>
          </div>
        )}

        <div className=" w-full md:flex-1 justify-center">
          <SortBar sorter={filter.sort || 1} setFilter={setFilter}></SortBar>
          <div className="min-h-[800px]">
            <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-5 gap-4 mt-4 ">
              <Items currentItems={currentItems} />
            </div>
          </div>
          <div className="w-full flex justify-center mt-4">
            {" "}
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </>
  );
};
