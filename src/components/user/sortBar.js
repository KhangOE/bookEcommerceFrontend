export const SortBar = (props) => {
  return (
    <>
      <div className="w-full bg-white rounded-sm flex gap-6 px-6 py-4">
        <div
          className={
            props.sorter == 1
              ? " text-sm cursor-pointer font-bold border-b border-black"
              : "text-sm cursor-pointer"
          }
          onClick={() => {
            props.setFilter((state) => ({ ...state, sort: 1 }));
          }}
        >
          Phổ biến
        </div>
        <div
          className={
            props.sorter == 2
              ? " text-sm cursor-pointer font-bold border-b border-black"
              : "text-sm cursor-pointer"
          }
          onClick={() => {
            props.setFilter((state) => ({ ...state, sort: 2 }));
          }}
        >
          Hàng mới
        </div>
        <div
          className={
            props.sorter == 3
              ? " text-sm cursor-pointer font-bold border-b border-black"
              : "text-sm cursor-pointer"
          }
          onClick={() => {
            props.setFilter((state) => ({ ...state, sort: 3 }));
          }}
        >
          Giá thấp đến cao
        </div>
        <div
          className={
            props.sorter == 4
              ? " text-sm cursor-pointer font-bold border-b border-black"
              : "text-sm cursor-pointer"
          }
          onClick={() => {
            props.setFilter((state) => ({ ...state, sort: 4 }));
          }}
        >
          {" "}
          Giá cao đến thấp
        </div>
      </div>
    </>
  );
};
