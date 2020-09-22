import React from 'react';
import classNames from 'classnames';

export function ProportionalImage({
  boxAspectRatio,
  roundedAsCardThumbnail,
  src,
  srcSet,
  alt,
}) {
  return (
    <div
      className={classNames('foundation-ProportionalImage', {
        ['foundation-ProportionalImage--rounded-as-card-thumbnail']: roundedAsCardThumbnail,
      })}
      style={{ paddingTop: `calc(100% * ${boxAspectRatio})` }}
    >
      <div className="foundation-ProportionalImage__inner">
        <picture>
          <source className="foundation-ProportionalImage__img" srcSet={srcSet} alt={alt} loading="lazy" />
          <img className="foundation-ProportionalImage__img" src={src} alt={alt} loading="lazy" />
        </picture>
      </div>
    </div>
  );
}
