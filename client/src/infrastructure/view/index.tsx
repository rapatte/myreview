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
import { HomePage } from './pages/homePage/Loadable';
import { NotFoundPage } from './pages/notFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { CooperatorsList } from './pages/cooperatorPage';
import { MainMissionList } from './pages/missionList/Loadable';
import { MainLayout } from './components';
import AddMissionPage from './pages/addMissionPage/AddMissionPage';
import { Missions } from './pages/missionList/missions/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <MainLayout>
        <Helmet
          titleTemplate="%s - WeLab"
          defaultTitle="WeLab"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="application" />
        </Helmet>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/missions/" component={Missions} />
          <Route exact path="/missions/ajouter" component={AddMissionPage} />
          <Route exact path="/cooperateurs/" component={CooperatorsList} />

          <Route component={NotFoundPage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}
