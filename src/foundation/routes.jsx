import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Entrance = lazy(() => import(
  /* webpackChunkName: "entrance" */
  /* webpackPrefetch: true */
  '../pages/entrance/Entrance'
));
const BlogHome = lazy(() => import(
  /* webpackChunkName: "bloghome" */
  '../pages/blog_home/BlogHome'
));
const Entry = lazy(() => import(
  /* webpackChunkName: "entry" */
  '../pages/entry/Entry'
));
const NotFound = lazy(() => import(
  /* webpackChunkName: "notfound" */
  '../pages/not_found/NotFound'
));

export function Routes() {
  const error = useSelector((state) => state.error);

  if (error.error !== undefined) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Switch>
        <Route exact path="/" component={<Entrance />} />
        <Route exact path="/:blogId" component={<BlogHome />} />
        <Route exact path="/:blogId/entry/:entryId" component={<Entry />} />
        <Route path="*" component={<NotFound />} />
      </Switch>
    </Suspense>
  );
}
