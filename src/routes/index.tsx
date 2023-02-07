import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Dashboard from "../pages/dashboard";
import Team from "../pages/team";
import Invoices from "../pages/invoices";
import Contacts from "../pages/contacts";
import Calendar from "../pages/calendar";
import Bar from "../pages/bar";
import UserForm from "../pages/form";
import Line from "../pages/line";
import Pie from "../pages/pie";
import Faq from "../pages/faq";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "invoices",
          element: <Invoices />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "form",
          element: <UserForm />,
        },
        {
          path: "bar",
          element: <Bar />,
        },
        {
          path: "pie",
          element: <Pie />,
        },
        {
          path: "line",
          element: <Line />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
      ],
    },
  ],
  {
    basename: "/react-admin/",
  }
);
