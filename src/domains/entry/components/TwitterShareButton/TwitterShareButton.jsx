import React, { useEffect } from 'react';

const TWITTER_SDK = 'https://platform.twitter.com/widgets.js';

export function TwitterShareButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', TWITTER_SDK);
    script.setAttribute('id', 'twitter-sdk');
    document.body.appendChild(script);

    return () => {
      const script = document.getElementById('twitter-sdk');
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="entry-TwitterShareButton">
      <a
        className="twitter-share-button"
        href="https://twitter.com/intent/tweet"
      >
        Tweet
      </a>
    </div>
  );
}
