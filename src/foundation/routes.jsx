import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Entrance = lazy(() => import('../pages/entrance/Entrance'));
const BlogHome = lazy(() => import('../pages/blog_home/BlogHome'));
const Entry = lazy(() => import('../pages/entry/Entry'));
const NotFound = lazy(() => import('../pages/not_found/NotFound'));

export function Routes() {
  const error = useSelector((state) => state.error);

  if (error.error !== undefined) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Switch>
        <Route exact path="/">
          <Entrance />
        </Route>
        <Route exact path="/:blogId">
          <BlogHome />
        </Route>
        <Route exact path="/:blogId/entry/:entryId">
          <Entry />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}
