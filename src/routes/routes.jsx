import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { DubaiAreas, DubaiDeveloper, DubaiDevelopers, Home, Navigation, NotFound } from "../pages";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'dubai-developers',
                element: <DubaiDevelopers />
            },
            {
                path: 'dubai-developer',
                element: <DubaiDeveloper />
            },
            {
                path: 'dubai-areas',
                element: <DubaiAreas />
            },
            {
                path: 'navigation',
                element: <Navigation />
            }
        ]
    }
])