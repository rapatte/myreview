import React from 'react';
import { NavBar } from '../../../components/organisms';

export default function MainLayout({ children }) {
  return (
    <div id="app">
      <div id="content-wrap">
        <NavBar />
        <main>
          <div id="content">{children}</div>
        </main>
      </div>
    </div>
  );
}
