import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ProductDetail from "./pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/gallery",
    Component: Gallery,
  },
  {
    path: "/products",
    Component: Gallery,
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
        <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-black mb-4 text-[#FFB800]">404</h1>
            <p className="text-xl text-[#A1A1AA] mb-8">Page not found</p>
            <a
              href="/"
              className="inline-block bg-[#FFB800] text-black px-8 py-3 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
            >
              Go Home
            </a>
          </div>
        </div>
      );
    },
  },
]);
