import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CreativeMotion } from './components/visual/CreativeMotion';

export default function App() {
  return (
    <>
      <CreativeMotion />
      <RouterProvider router={router} />
    </>
  );
}
