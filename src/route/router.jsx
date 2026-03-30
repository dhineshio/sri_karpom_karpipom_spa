import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Portfolio from "../pages/portfolio";
import ContactUs from "@/pages/contact-us";
import AboutUs from "@/pages/about-us";
import Services from "@/pages/services";
import Faq from "@/pages/faq";
import HomeOne from "@/pages/home-1";
import LayoutThree from "@/layout/layoutThree";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomeOne />
            },
        ]
    },
    {
        path: "/",
        element: <LayoutThree />,
        children: [
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/faq",
                element: <Faq />
            },
        ]
    },
])