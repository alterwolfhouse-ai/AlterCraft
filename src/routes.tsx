import { Navigate, createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { ProductGalleryPage } from "./components/ProductGalleryPage";
import {
  DesignerBeds,
  FlushDoors,
  ModularKitchen,
  OfficeCommercial,
  Wardrobes,
} from "./pages/servicePages";
import { About, Contact, NotFound, WarrantyQuality } from "./pages/InfoPages";
import {
  AIPlannerConfirm,
  AIPlannerDimensions,
  AIPlannerLanding,
  AIPlannerRequirements,
  AIPlannerStart,
  AIPlannerSubmitted,
  AIPlannerUpload,
  AdminDashboard,
  AdminLeads,
  AdminProjectDetail,
  MyProjectDetail,
  MyProjects,
} from "./pages/AIPlanner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/false",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/gallery",
    Component: ProductGalleryPage,
  },
  {
    path: "/portfolio",
    Component: ProductGalleryPage,
  },
  {
    path: "/products",
    Component: ProductGalleryPage,
  },
  {
    path: "/modular-kitchen",
    Component: ModularKitchen,
  },
  {
    path: "/kitchen",
    Component: ModularKitchen,
  },
  {
    path: "/designer-beds",
    Component: DesignerBeds,
  },
  {
    path: "/beds",
    Component: DesignerBeds,
  },
  {
    path: "/flush-doors",
    Component: FlushDoors,
  },
  {
    path: "/doors",
    Component: FlushDoors,
  },
  {
    path: "/wardrobes",
    Component: Wardrobes,
  },
  {
    path: "/storage",
    Component: Wardrobes,
  },
  {
    path: "/office-commercial",
    Component: OfficeCommercial,
  },
  {
    path: "/office",
    Component: OfficeCommercial,
  },
  {
    path: "/warranty-quality",
    Component: WarrantyQuality,
  },
  {
    path: "/warranty",
    Component: WarrantyQuality,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/get-quote",
    Component: Contact,
  },
  {
    path: "/ai-planner",
    Component: AIPlannerLanding,
  },
  {
    path: "/ai-planner/start",
    Component: AIPlannerStart,
  },
  {
    path: "/ai-planner/upload",
    Component: AIPlannerUpload,
  },
  {
    path: "/ai-planner/dimensions",
    Component: AIPlannerDimensions,
  },
  {
    path: "/ai-planner/requirements",
    Component: AIPlannerRequirements,
  },
  {
    path: "/ai-planner/confirm",
    Component: AIPlannerConfirm,
  },
  {
    path: "/ai-planner/submitted",
    Component: AIPlannerSubmitted,
  },
  {
    path: "/my-projects",
    Component: MyProjects,
  },
  {
    path: "/my-projects/:id",
    Component: MyProjectDetail,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/admin/leads",
    Component: AdminLeads,
  },
  {
    path: "/admin/projects/:id",
    Component: AdminProjectDetail,
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
    Component: NotFound,
  },
]);
