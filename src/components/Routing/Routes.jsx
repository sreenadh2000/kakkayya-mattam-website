import { lazy } from "react";

// Lazy load components
const LandingPage = lazy(() =>
  import("../Sections/LandingPage/LandingPage").then((module) => ({
    default: module.LandingPage,
  }))
);
const Information = lazy(() =>
  import("../Sections/Information/Information").then((module) => ({
    default: module.Information,
  }))
);
const About = lazy(() =>
  import("../Sections/About/About").then((module) => ({
    default: module.About,
  }))
);
const Contact = lazy(() =>
  import("../Sections/Contact/Contact").then((module) => ({
    default: module.Contact,
  }))
);
const Story = lazy(() =>
  import("../Sections/Story/Story").then((module) => ({
    default: module.Story,
  }))
);
const Donation = lazy(() =>
  import("../Sections/Donation/Donation").then((module) => ({
    default: module.Donation,
  }))
);

const routes = [
  { path: "/", element: <LandingPage />, name: "Home" },
  { path: "/about", element: <About />, name: "About" },
  { path: "/contact", element: <Contact />, name: "Contact" },
  { path: "/information", element: <Information />, name: "Information" },
  { path: "/story", element: <Story />, name: "Story" },
  { path: "/donation", element: <Donation />, name: "Donation" },
];
export const navRoutes = [
  { path: "/", element: <LandingPage />, name: "nav.home" },
  { path: "/about", element: <About />, name: "nav.about" },
  { path: "/contact", element: <Contact />, name: "nav.contact" },
  // { path: "/information", element: <Information />, name: "Information" },
  { path: "/donation", element: <Donation />, name: "nav.donation" },
];

export default routes;
