import React from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'react-router-dom';

import { AmidaLikeButton } from '../AmidaLikeButton';
import { TwitterShareButton } from '../TwitterShareButton';
import { FacebookShareButton } from '../FacebookShareButton';
import { HatenaBookmarkButton } from '../HatenaBookmarkButton';

dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.tz.setDefault('Asia/Tokyo');

export function EntryFooter({ location, likeCount, publishedAt, onClickLike }) {
  return (
    <div className="entry-EntryFooter">
      <Link to={location.pathname} className="entry-EntryFooter__published-at">
        <time dateTime={dayjs(publishedAt).toISOString()}>
          {dayjs(publishedAt).fromNow()}
        </time>
      </Link>
      <div className="entry-EntryFooter__share">
        <div className="entry-EntryFooter__share-item">
          <AmidaLikeButton likeCount={likeCount} onClick={onClickLike} />
        </div>
        <div className="entry-EntryFooter__share-item">
          <TwitterShareButton />
        </div>
        <div className="entry-EntryFooter__share-item">
          <FacebookShareButton />
        </div>
        <div className="entry-EntryFooter__share-item">
          <HatenaBookmarkButton />
        </div>
      </div>
    </div>
  );
}
