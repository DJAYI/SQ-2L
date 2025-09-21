import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: () => <div>Home</div>,
        children: [
            {
                path: "stages",
                Component: () => <div>Stages</div>,
                index: true,
            },
            {
                path: "stages/:stageId/levels",
                Component: () => <div>Levels</div>,
            }, {
                path: "stages/:stageId/levels/:levelId/playground",
                Component: () => <div>Playground</div>,
            }
        ]
    },
])