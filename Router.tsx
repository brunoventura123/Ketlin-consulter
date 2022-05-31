import { useRoutes } from "react-router-dom";
import { BiotypeAnalysis } from './src/pages/biotypeAnalysis';
import { ColorAnalysis } from './src/pages/colorAnalysis';
import { ClosetAnalysis } from "./src/pages/closetAnalysis";
import { PersonalShopper } from './src/pages/personalShopper';
import { LinkTree } from "./src/pages/linkTree";
import { LookMontages } from "./src/pages/lookMontages";
import { AllAnalisys } from "./src/pages/allAnalisys";
import { Store } from './src/pages/store'

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