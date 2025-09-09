import React from 'react';
import ReactDOM from 'react-dom/client';

// App 1 또는 App 2 중 원하는 것만 import
import PackingListOne from './App-8';
// import PackingListTwo from './app-2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PackingListOne />
    {/* <PackingListTwo /> */}
  </React.StrictMode>
);