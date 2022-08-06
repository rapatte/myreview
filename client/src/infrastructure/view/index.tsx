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
import {
  NotFound,
  Home,
  AddMissions,
  Missions,
  AddCooperators,
  Cooperators,
  UpdateCooperators,
  UpdateMissions,
} from './pages';

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
          <Route exact path="/missions/" component={Missions} />
          <Route exact path="/missions/ajouter" component={AddMissions} />
          <Route exact path="/missions/ajouter/:id" component={AddMissions} />
          <Route
            exact
            path="/missions/modifier/:id"
            component={UpdateMissions}
          />
          <Route exact path="/cooperateurs/" component={Cooperators} />
          <Route
            exact
            path="/cooperateurs/ajouter"
            component={AddCooperators}
          />
          <Route
            exact
            path="/cooperateurs/modifier/:id"
            component={UpdateCooperators}
          />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}
