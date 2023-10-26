import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import dependancies & styling
import App from "./App.jsx";
import "./index.css";

// import pages
import Welcome from "./pages/welcome/Welcome.jsx";
import About from "./pages/about/About.jsx";
import Resume from "./pages/resume/Resume.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <About /> },
      { path: "/welcome", element: <Welcome /> },
      // welcome page will be default after grading
      // { index: true, element: <Welcome /> },
      // { path: "/about", element: <About /> },
      { path: "/resume", element: <Resume /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
