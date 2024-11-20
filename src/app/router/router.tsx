import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";
import { MainPage } from "../../pages/mainPage";
import { ProfilePage } from "../../pages/profilePage";
import { ContactsPage } from "../../pages/contactsPage";

const username = localStorage.getItem('username')

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: `/personal_account/${username}`,
          element: <ProfilePage />,
        },
        {
          path: "/contacts",
          element: <ContactsPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
