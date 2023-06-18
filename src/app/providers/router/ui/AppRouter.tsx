import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    return (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {Object.values(routConfig).map(({ path, element }) => (
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
