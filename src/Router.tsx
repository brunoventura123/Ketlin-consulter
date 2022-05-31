import { useRoutes } from "react-router-dom";
import { BiotypeAnalysis } from './pages/biotypeAnalysis';
import { ColorAnalysis } from './pages/colorAnalysis';
import { ClosetAnalysis } from "./pages/closetAnalysis";
import { PersonalShopper } from './pages/personalShopper';
import { LinkTree } from "./pages/linkTree";
import { LookMontages } from "./pages/lookMontages";
import { AllAnalisys } from "./pages/allAnalisys";
import { Store } from './pages/store'

export const Router = () => {

    return useRoutes([
        { path: "/", element: <LinkTree /> },
        { path: "/biotypeAnalysis", element: <BiotypeAnalysis /> },
        { path: "/personalShopper", element: <PersonalShopper /> },
        { path: "/colorAnalysis", element: <ColorAnalysis /> },
        { path: "/closetAnalysis", element: <ClosetAnalysis /> },
        { path: "/lookMontages", element: <LookMontages /> },
        { path: "/allanalisys", element: <AllAnalisys /> },
        { path: "/store", element: <Store /> }

    ]
    )
}