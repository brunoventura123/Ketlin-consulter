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
        { path: "/ketlin/src/pages/biotypeAnalysis", element: <BiotypeAnalysis /> },
        { path: "/ketlin/src/pages/personalShopper", element: <PersonalShopper /> },
        { path: "/ketlin/src/pages/colorAnalysis", element: <ColorAnalysis /> },
        { path: "/ketlin/src/pages/closetAnalysis", element: <ClosetAnalysis /> },
        { path: "/ketlin/src/pages/lookMontages", element: <LookMontages /> },
        { path: "/ketlin/src/pages/allanalisys", element: <AllAnalisys /> },
        { path: "/ketlin/src/pages/store", element: <Store /> }

    ]
    )
}