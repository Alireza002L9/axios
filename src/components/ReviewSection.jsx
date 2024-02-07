import React, { useState } from 'react';
import Comment from './Comment';
import Reviews from './Reviews';
import './reviewSection.css';

const ReviewSection = () => {
  const [commentActive, setCommentActive] = useState(true);
  const [reviewActive, setReviewActive] = useState(false);
  return (
    <div className="review-section">
      <div className="btns-section">
        <button
          className={commentActive ? 'active' : null}
          onClick={() => {
            setCommentActive(true);
            setReviewActive(false);
          }}
        >
          Comment
        </button>
        <button
          className={reviewActive ? 'active' : null}
          onClick={() => {
            setCommentActive(false);
            setReviewActive(true);
          }}
        >
          Review
        </button>
      </div>
      <div className="review-parts">
        {commentActive && !reviewActive ? <Comment /> : <Reviews />}
      </div>
    </div>
  );
};

export default ReviewSection;
