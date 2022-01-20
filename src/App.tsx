import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import TheLayout from './components/containers/TheLayout';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route path="*" element={<TheLayout />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
