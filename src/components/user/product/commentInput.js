import React from "react";
import { useState } from "react";
//import { postComment } from "../../../api/commentApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addComment } from "../../../redux/slice/productSlice";
import { postComment } from "../../../redux/slice/commentSlice";
export const CommentInput = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    content: "",
    userId: null,
    productId: props.productId,
  });
  const { currentUser } = useSelector((state) => state.auth);
  const { comment } = useSelector((state) => state.comment);

  useEffect(() => {
    currentUser &&
      setInput((state) => ({ ...state, userId: currentUser?._id }));
  }, [currentUser]);

  useEffect(() => {
    // if (props.product) {
    //   setInput((state) => ({ ...state, productId: props.product.id }));
    // }
    console.log(props);
    console.log(input);
  }, [input]);

  useEffect(() => {}, [input]);

  const submit = async (props) => {
    dispatch(postComment(input));
    //await postComment(input);
    setInput((state) => ({ ...state, content: "" }));
  };

  return (
    <>
      <div className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            value={input.content}
            onChange={(e) => {
              setInput((state) => ({ ...state, content: e.target.value }));
            }}
            rows={6}
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  h-[60px]"
            placeholder="Write a comment..."
            required=""
          />
        </div>
        <div
          onClick={() => {
            submit();
          }}
          type="submit"
          className=" bg-cyan-400 font-bold cursor-pointer  inline-flex items-center py-2.5 px-4 text-md font-medium text-center  bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
        >
          Post comment
        </div>
      </div>
    </>
  );
};
