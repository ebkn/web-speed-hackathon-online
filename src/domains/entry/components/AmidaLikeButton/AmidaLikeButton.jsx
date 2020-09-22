import React from 'react';
import ThumbsUpImage from '../../../../assets/thumbs-up-solid.svg';

export function AmidaLikeButton({ likeCount, onClick }) {
  return (
    <button type="button" className="entry-AmidaLikeButton" onClick={onClick}>
      <img src={ThumbsUpImage} alt="thumbs up" loading="lazy" />
      <span className="entry-AmidaLikeButton__count">{likeCount}</span>
    </button>
  );
}
