import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CreativeMotion } from './components/visual/CreativeMotion';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <CreativeMotion />
      <Suspense fallback={<div className="route-loading">Loading AlterCraft...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  );
}
