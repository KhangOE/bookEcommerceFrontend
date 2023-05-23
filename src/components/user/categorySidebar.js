import { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { useEffect } from "react";
import { getAuthorApi } from "../../api/authorApi";
import { getCategoryApi } from "../../api/CategoryApi";

export const CategorySidebar = (props) => {
  const [author, setAuthor] = useState();
  const [category, setCategory] = useState();
  const [showAuthor, setShowAuthor] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  useEffect(() => {
    const auhthors = async () => {
      await getAuthorApi().then((res) => {
        setAuthor(res.data.Authors);
        // console.log(res.data);
      });
    };

    const category = async () => {
      await getCategoryApi().then((res) => {
        setCategory(res.data.category);
        //  console.log(res.data.category);
      });
    };
    auhthors();
    category();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col gap-6 p-4 bg-white ">
        {/* danh muc  */}
        <div className="border-b border-gray-200 pb-6">
          <div
            className="font-semibold cursor-pointer capitalize text-center bg-indigo-500 text-white rounded-lg py-2 mb-4"
            onClick={() => {
              props.submit();
            }}
          >
            submit filter
          </div>
          <div className="font-semibold   ">Danh mục sản phẩm</div>
          <div className="flex flex-col gap-2 font-semi text-md text-sm">
            {category?.slice(0, showCategory ? 20 : 10).map((c) => {
              return (
                <div key={c._id} className="text-sm flex  gap-2">
                  <input
                    value={c._id}
                    onChange={(e) => {
                      if (props.filter.category.includes(e.target.value)) {
                        // console.log("rm");
                        props.setFilter((state) => ({
                          ...state,
                          category: state.category.filter((au) => {
                            return au != e.target.value;
                          }),
                        }));
                      } else {
                        // console.log(
                        //   props.filter.category.includes(e.target.value)
                        // );
                        // console.log(e.target.value);
                        props.setFilter((state) => ({
                          ...state,
                          category: [...state.category, e.target.value],
                        }));
                      }
                    }}
                    type="checkbox"
                  ></input>
                  <label>{c.name}</label>
                </div>
              );
            })}
            <div
              className="cursor-pointer"
              onClick={() => {
                setShowCategory((state) => !state);
              }}
            >
              {showCategory ? "show less" : "more..."}
            </div>
          </div>
        </div>
        {/* dia chi  */}

        {/* danh gia  */}
        <div className="border-b border-gray-200 pb-6">
          <div className="font-semibold   ">Đánh Giá</div>
          <div
            className="flex gap-4 cursor-pointer "
            onClick={() => {
              props.setFilter((state) => ({ ...state, rating: 5 }));
            }}
          >
            <div
              className={
                props.filter.rating == 5 && "border-b border-yellow-400"
              }
            >
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
            </div>
            <div className="text-[14px]">từ 5 sao</div>
          </div>
          <div
            className={
              "flex gap-4 cursor-pointer"
              // (props.filter.rating == 4 && "border border-yellow-400")
            }
            onClick={() => {
              props.setFilter((state) => ({ ...state, rating: 4 }));
            }}
          >
            <div
              className={
                props.filter.rating == 4 && "border-b border-yellow-400"
              }
            >
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-gray-300">&#xe838;</span>
            </div>
            <div className="text-[14px]">từ 4 sao</div>
          </div>
          <div
            className="flex gap-4 cursor-pointer"
            onClick={() => {
              props.setFilter((state) => ({ ...state, rating: 3 }));
            }}
          >
            <div
              className={
                props.filter.rating == 3 && "border-b border-yellow-400"
              }
            >
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-yellow-200">&#xe838;</span>
              <span class="material-icons md-14 text-gray-300">&#xe838;</span>
              <span class="material-icons md-14 text-gray-300">&#xe838;</span>
            </div>
            <div className="text-[14px]">từ 3 sao</div>
          </div>
        </div>

        {/* giá */}
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-6">
          <div className="font-semibold   ">Giá</div>
          <div className="font-semi text-gray-400 text-sm">chọn khoảng giá</div>
          <div className="flex justify-between">
            <input
              value={props.filter.priceFrom}
              onChange={(e) => {
                props.setFilter((state) => ({
                  ...state,
                  priceFrom: e.target.value,
                }));
              }}
              type="text"
              placeholder="từ"
              className="border border-gray-300 focus:outline-none focus:border-sky-500 h-8 w-[45%] rounded-md focu"
            ></input>
            -
            <input
              value={props.filter.priceTo}
              onChange={(e) => {
                props.setFilter((state) => ({
                  ...state,
                  priceTo: e.target.value,
                }));
              }}
              type="text"
              placeholder="đến"
              className="border border-gray-300 focus:outline-none focus:border-sky-500 h-8 w-[45%] rounded-md"
            ></input>
          </div>
        </div>

        {/* cong ty phat hanh */}

        {/* tac gia  */}
        <div className="pb-6 border-b border-gray-200">
          <div className="font-bold mb-2">Tác giả</div>

          <div className="flex flex-col  items-start gap-2">
            {author?.slice(0, showAuthor ? 20 : 10).map((a) => {
              return (
                <div key={a._id} className="text-sm flex justify-center gap-2">
                  <input
                    value={a._id}
                    onChange={(e) => {
                      if (props.filter.author.includes(e.target.value)) {
                        props.setFilter((state) => ({
                          ...state,
                          author: state.author.filter((au) => {
                            return au != e.target.value;
                          }),
                        }));
                      } else {
                        // console.log(
                        //   props.filter.author.includes(e.target.value)
                        // );
                        // console.log(e.target.value);
                        props.setFilter((state) => ({
                          ...state,
                          author: [...state.author, e.target.value],
                        }));
                      }
                    }}
                    type="checkbox"
                  ></input>
                  <label>{a.name}</label>
                </div>
              );
            })}
            <div
              className="cursor-pointer"
              onClick={() => {
                setShowAuthor((state) => !state);
              }}
            >
              {showAuthor ? "show less" : "more..."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
