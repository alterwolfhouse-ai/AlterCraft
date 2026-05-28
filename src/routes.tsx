import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { ProductGalleryPage } from "./components/ProductGalleryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/gallery",
    Component: ProductGalleryPage,
  },
  {
    path: "/products",
    Component: ProductGalleryPage,
  },
  {
    path: "/product/:id",
    Component: ProductDetail,
  },
  {
    path: "/products/:id",
    Component: ProductDetail,
  },
  {
    path: "*",
    Component: () => {
      return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#2C2419] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-4">404</h1>
            <p className="text-xl text-[#5A4D3F] mb-8">Page not found</p>
            <a
              href="/"
              className="inline-block bg-[#6B5D4F] text-[#FAF7F2] px-8 py-3 tracking-wide text-sm hover:bg-[#5A4D3F] transition-colors"
            >
              Go Home
            </a>
          </div>
        </div>
      );
    },
  },
]);
