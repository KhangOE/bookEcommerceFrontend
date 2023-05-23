import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentByProductId } from "../../../redux/slice/commentSlice";

export const CommentItem = (props) => {
  const { comment } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(props.productId, "iddd");
    dispatch(getCommentByProductId(props.productId));
  }, []);

  useEffect(() => {
    console.log(comment, "cm");
  }, [comment]);

  return (
    <div>
      <>
        {comment?.map((c) => {
          return (
            <>
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt="Helene Engels"
                  />
                  {c.userId.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate=""
                    dateTime="2022-06-23"
                    title="June 23rd, 2022"
                  >
                    {c.createdAt}
                  </time>
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 pl-8">
                {c.content}
              </p>
            </>
          );
        })}
      </>
    </div>
  );
};
