import React from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import { Link } from 'react-router-dom';

dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

export function EntryHeader({ title, publishedAt, location }) {
  return (
    <div className="entry-EntryHeader">
      <h2 className="entry-EntryHeader__title">
        <Link to={location.pathname} className="entry-EntryHeader__title-link">
          {title}
        </Link>
      </h2>
      <time
        className="entry-EntryHeader__published-at"
        dateTime={dayjs(publishedAt).toISOString()}
        title={dayjs(publishedAt).toISOString()}
      >
        {dayjs(publishedAt, 'YYYY-MM-DD')}
      </time>
    </div>
  );
}
