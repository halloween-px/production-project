import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <div>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    {Object.values(routConfig).map(({path, element}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRouter;