import React from 'react';
import { Header } from '../../../components/organisms';

export default function MainLayout({ children }) {
  return (
    <div id="app">
      <div id="content-wrap">
        <Header />
        <main>
          <div id="content">{children}</div>
        </main>
      </div>
    </div>
  );
}
