import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router";
import Home from "./pages/Home";

const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const ProductGalleryPage = lazy(() =>
  import("./components/ProductGalleryPage").then((module) => ({ default: module.ProductGalleryPage }))
);
const ModularKitchenNearMe = lazy(() =>
  import("./pages/ModularKitchenNearMe").then((module) => ({ default: module.ModularKitchenNearMe }))
);
const ModularKitchen = lazy(() =>
  import("./pages/servicePages").then((module) => ({ default: module.ModularKitchen }))
);
const DesignerBeds = lazy(() =>
  import("./pages/servicePages").then((module) => ({ default: module.DesignerBeds }))
);
const FlushDoors = lazy(() =>
  import("./pages/servicePages").then((module) => ({ default: module.FlushDoors }))
);
const Wardrobes = lazy(() =>
  import("./pages/servicePages").then((module) => ({ default: module.Wardrobes }))
);
const OfficeCommercial = lazy(() =>
  import("./pages/servicePages").then((module) => ({ default: module.OfficeCommercial }))
);
const WarrantyQuality = lazy(() =>
  import("./pages/InfoPages").then((module) => ({ default: module.WarrantyQuality }))
);
const About = lazy(() =>
  import("./pages/InfoPages").then((module) => ({ default: module.About }))
);
const Contact = lazy(() =>
  import("./pages/InfoPages").then((module) => ({ default: module.Contact }))
);
const NotFound = lazy(() =>
  import("./pages/InfoPages").then((module) => ({ default: module.NotFound }))
);
const AIPlannerLanding = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AIPlannerLanding }))
);
const AIPlannerStart = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AIPlannerStart }))
);
const AIPlannerUpload = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AIPlannerUpload }))
);
const AIPlannerDimensions = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AIPlannerDimensions }))
);
const AIPlannerRequirements = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AIPlannerRequirements }))
);
const AIPlannerConfirm = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AIPlannerConfirm }))
);
const AIPlannerSubmitted = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AIPlannerSubmitted }))
);
const MyProjects = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.MyProjects }))
);
const MyProjectDetail = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.MyProjectDetail }))
);
const AdminDashboard = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AdminDashboard }))
);
const AdminLeads = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AdminLeads }))
);
const AdminProjectDetail = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AdminProjectDetail }))
);

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
    path: "/modular-kitchen-near-me",
    Component: ModularKitchenNearMe,
  },
  {
    path: "/modular-kitchen-near-me/",
    Component: ModularKitchenNearMe,
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
