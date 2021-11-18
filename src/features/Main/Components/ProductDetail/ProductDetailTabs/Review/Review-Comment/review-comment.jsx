import React, { useEffect, useRef, useState } from "react";
import ReviewCommentItem from "./review-comment-item";
import "./review-comment.scss";
import ViewAndHideAll from "./ViewAndHideAll";

function ReviewComment({ comment }) {
  const [visible, setVisible] = useState(3);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  return (
    <div className="product-detail__tabs__content__review__comment" ref={ref}>
      {comment.slice(0, visible).map((commentItem, commentIndex) => (
        <ReviewCommentItem
          key={commentIndex}
          commentIndex={commentIndex}
          commentItem={commentItem}
        />
      ))}
      <ViewAndHideAll
        comment={comment}
        visible={visible}
        setVisible={setVisible}
        height={height}
      />
    </div>
  );
}

export default ReviewComment;
