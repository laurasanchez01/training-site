import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { PersonalTrainingLayout } from './personal-training/layout/layout';
import HomePage from './personal-training/pages/page';
import { InfoPage } from './personal-training/pages/info';

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/home" element={<PersonalTrainingLayout />}> {/* default path (index) */}
                    {/* <Route index element={<HomePage />} /> */}
                    <Route index element={<HomePage />} />
                    {/* <Route path="/auth/register" element={<RegisterPage />} /> */}
                </Route>
                <Route path="/info" > {/* default path (index) */}
                    {/* <Route index element={<HomePage />} /> */}
                    <Route index element={<InfoPage />} />
                    {/* <Route path="/auth/register" element={<RegisterPage />} /> */}
                </Route>


                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )
}