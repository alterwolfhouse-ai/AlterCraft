import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CreativeMotion } from './components/visual/CreativeMotion';

export default function App() {
  return (
    <>
      <CreativeMotion />
      <Suspense fallback={<div className="route-loading">Loading AlterCraft...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
