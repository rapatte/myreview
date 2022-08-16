/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainLayout } from './components/templates';
import { NotFound, Home, AddReviews, Reviews, UpdateReviews } from './pages';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <MainLayout>
        <Helmet
          titleTemplate="%s - MyReview"
          defaultTitle="MyReview"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="application" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reviews/" component={Reviews} />
          <Route exact path="/reviews/add" component={AddReviews} />
          <Route exact path="/reviews/add/:id" component={AddReviews} />
          <Route exact path="/reviews/update/:id" component={UpdateReviews} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}
