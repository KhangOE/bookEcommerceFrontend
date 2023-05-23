import React from "react";
import { CommentList } from "./commentList";
import { useState } from "react";
import { Description } from "./description";
import { CommentItem } from "./commentItem";
import { CommentInput } from "./commentInput";

export const Block = (props) => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="w-full mt-8">
      <div className="flex gap-4 w-full bg-[rgb(135,170,152)]  ">
        <div
          className="font-bold text-xl  hover:bg-[rgb(15,85,50)] p-2"
          onClick={() => {
            setCurrent(1);
          }}
        >
          bình luần
        </div>
        <div
          className="font-bold text-xl  hover:bg-[rgb(15,85,50)]  p-2"
          onClick={() => {
            setCurrent(2);
          }}
        >
          chi tiet
        </div>
      </div>
      <div className="w-full min-h-[500px]">
        {current == 1 ? (
          // <CommentList></CommentList>
          <div>
            <CommentInput productId={props.id}></CommentInput>
            <CommentItem productId={props.id}></CommentItem>
          </div>
        ) : (
          <Description description={props.product.description}></Description>
        )}
      </div>
    </div>
  );
};
