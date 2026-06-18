import React, { lazy } from "react";
import { Navigate, createBrowserRouter, useLocation } from "react-router";
import Home from "./pages/Home";
import { useAuth } from "./contexts/AuthContext";

const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const ProductGalleryPage = lazy(() =>
  import("./components/ProductGalleryPage").then((module) => ({ default: module.ProductGalleryPage }))
);
const ModularKitchenNearMe = lazy(() =>
  import("./pages/ModularKitchenNearMe").then((module) => ({ default: module.ModularKitchenNearMe }))
);
const ModularKitchenGhaziabad = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.ModularKitchenGhaziabad }))
);
const ModularKitchenNoida = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.ModularKitchenNoida }))
);
const CustomFurnitureGhaziabad = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.CustomFurnitureGhaziabad }))
);
const CustomFurnitureNoida = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.CustomFurnitureNoida }))
);
const CustomFurnitureGreaterNoida = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.CustomFurnitureGreaterNoida }))
);
const CustomFurnitureMakerNearMe = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.CustomFurnitureMakerNearMe }))
);
const AIInteriorDesignPlanner = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.AIInteriorDesignPlanner }))
);
const OfficeInteriorGhaziabad = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.OfficeInteriorGhaziabad }))
);
const OfficeInteriorNoida = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.OfficeInteriorNoida }))
);
const WardrobeDesignGhaziabad = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.WardrobeDesignGhaziabad }))
);
const WardrobeGhaziabad = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.WardrobeGhaziabad }))
);
const TVUnitGhaziabad = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.TVUnitGhaziabad }))
);
const OfficeFurnitureGhaziabad = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.OfficeFurnitureGhaziabad }))
);
const InteriorsGhaziabad = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.InteriorsGhaziabad }))
);
const BedManufacturerGhaziabad = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.BedManufacturerGhaziabad }))
);
const ShoeRackDesign = lazy(() =>
  import("./pages/LocalServicePages").then((module) => ({ default: module.ShoeRackDesign }))
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
const AdminLeads = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AdminLeads }))
);
const AdminProjectDetail = lazy(() =>
  import("./pages/AIPlanner").then((module) => ({ default: module.AdminProjectDetail }))
);
const ACOSDashboard = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSDashboard }))
);
const ACOSLogin = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSLogin }))
);
const ACOSSignUp = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSSignUp }))
);
const ACOSResetPassword = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSResetPassword }))
);
const ACOSForbidden = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSForbidden }))
);
const ACOSLeads = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSLeads }))
);
const ACOSProduction = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSProduction }))
);
const ACOSFinances = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSFinances }))
);
const ACOSMarketing = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSMarketing }))
);
const ACOSHR = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSHR }))
);
const ACOSMarketplace = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSMarketplace }))
);
const ACOSReports = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSReports }))
);
const ACOSUsers = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSUsers }))
);
const ACOSBackendGuide = lazy(() =>
  import("./pages/ACOS").then((module) => ({ default: module.ACOSBackendGuide }))
);
const ContractorDesk = lazy(() => import("./pages/ContractorDesk"));
const OperatorDesk = lazy(() => import("./pages/OperatorDesk"));

function AdminOnly({ children }: { children: React.ReactNode }) {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/forbidden" replace />;
  }

  return <>{children}</>;
}

const adminOnly = (children: React.ReactNode) => <AdminOnly>{children}</AdminOnly>;

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
    path: "/ContractorDesk",
    Component: ContractorDesk,
  },
  {
    path: "/contractor-desk",
    Component: ContractorDesk,
  },
  {
    path: "/OperatorDesk",
    element: <Navigate to="/operator-desk/dashboard" replace />,
  },
  {
    path: "/operator-desk",
    Component: OperatorDesk,
  },
  {
    path: "/operator-desk/:screen",
    Component: OperatorDesk,
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
    path: "/modular-kitchen-ghaziabad",
    Component: ModularKitchenGhaziabad,
  },
  {
    path: "/modular-kitchen-noida",
    Component: ModularKitchenNoida,
  },
  {
    path: "/custom-furniture-ghaziabad",
    Component: CustomFurnitureGhaziabad,
  },
  {
    path: "/custom-furniture-noida",
    Component: CustomFurnitureNoida,
  },
  {
    path: "/custom-furniture-greater-noida",
    Component: CustomFurnitureGreaterNoida,
  },
  {
    path: "/custom-furniture-maker-near-me",
    Component: CustomFurnitureMakerNearMe,
  },
  {
    path: "/ai-interior-design-planner",
    Component: AIInteriorDesignPlanner,
  },
  {
    path: "/office-interior-ghaziabad",
    Component: OfficeInteriorGhaziabad,
  },
  {
    path: "/office-interior-noida",
    Component: OfficeInteriorNoida,
  },
  {
    path: "/wardrobe-design-ghaziabad",
    Component: WardrobeDesignGhaziabad,
  },
  {
    path: "/wardrobe-ghaziabad",
    Component: WardrobeGhaziabad,
  },
  {
    path: "/tv-unit-ghaziabad",
    Component: TVUnitGhaziabad,
  },
  {
    path: "/office-furniture-ghaziabad",
    Component: OfficeFurnitureGhaziabad,
  },
  {
    path: "/interiors-ghaziabad",
    Component: InteriorsGhaziabad,
  },
  {
    path: "/bed-manufacturer-ghaziabad",
    Component: BedManufacturerGhaziabad,
  },
  {
    path: "/shoe-rack-design",
    Component: ShoeRackDesign,
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
    element: adminOnly(<ACOSDashboard />),
  },
  {
    path: "/admin/login",
    Component: ACOSLogin,
  },
  {
    path: "/admin/signup",
    Component: ACOSSignUp,
  },
  {
    path: "/admin/reset-password",
    Component: ACOSResetPassword,
  },
  {
    path: "/admin/forbidden",
    Component: ACOSForbidden,
  },
  {
    path: "/admin/leads",
    element: adminOnly(<ACOSLeads />),
  },
  {
    path: "/admin/design-requests",
    element: adminOnly(<AdminLeads />),
  },
  {
    path: "/admin/projects/:id",
    element: adminOnly(<AdminProjectDetail />),
  },
  {
    path: "/admin/production",
    element: adminOnly(<ACOSProduction />),
  },
  {
    path: "/admin/finances",
    element: adminOnly(<ACOSFinances />),
  },
  {
    path: "/admin/marketing",
    element: adminOnly(<ACOSMarketing />),
  },
  {
    path: "/admin/hr",
    element: adminOnly(<ACOSHR />),
  },
  {
    path: "/admin/marketplace",
    element: adminOnly(<ACOSMarketplace />),
  },
  {
    path: "/admin/reports",
    element: adminOnly(<ACOSReports />),
  },
  {
    path: "/admin/users",
    element: adminOnly(<ACOSUsers />),
  },
  {
    path: "/admin/backend-guide",
    element: adminOnly(<ACOSBackendGuide />),
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
