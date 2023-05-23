import { Link } from "react-router-dom";
import { moneyFormatter } from "../../helper/moneyFormatter";

export const UProductCard = (props) => {
  return (
    <>
      <Link to={"/products/" + props.id}>
        <div className="w-full p-2 flex flex-col border border-gray-200 justify-end bg-white rounded-sm ">
          <div className="w-full text-center flex justify-center ] overflow-hidden">
            <img alt="a" className=" " src={props.imageUrl}></img>
          </div>

          <div className="text-sm font-bold max-h-[42px] overflow-hidden">
            {props.title}
          </div>
          <div className="flex justify-between">
            <div className="text-green-600 font-bold">
              {moneyFormatter(props.price)}{" "}
            </div>
            <div className="text-gray-300 font-bold line-through">
              {/* // {moneyFormatter(props.price - 3000)} đ */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
