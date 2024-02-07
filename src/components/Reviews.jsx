import React, { useContext, useEffect, useState } from 'react';
import { appContext } from '../context/Context';

const Reviews = () => {
  const { commentData } = useContext(appContext);
  return (
    <div className="reviews-parent">
      {commentData.length ? (
        commentData.map((obj, index) => {
          return (
            <div
              key={index}
              className="review-body"
            >
              <h3>{obj.name}</h3>
              <p className="date">{obj.date}</p>
              <p className="commentBody">{obj.body}</p>
            </div>
          );
        })
      ) : (
        <div>There is No Comment!</div>
      )}
    </div>
  );
};

export default Reviews;
