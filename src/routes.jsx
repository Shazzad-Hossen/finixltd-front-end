import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import About from './pages/About';
import CompanyDetails from './pages/CompanyDetails';
import Directors from './pages/Directors';
import Services from './pages/Services';
import GlobalExpansion from './pages/GlobalExpansion';
import FinixAIBot from './pages/FinixAIBot';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Login from './pages/admin/Login';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Landing />} />
                    <Route path="about" element={<About />} />
                    <Route path="company-details" element={<CompanyDetails />} />
                    <Route path="directors" element={<Directors />} />
                    <Route path="services" element={<Services />} />
                    <Route path="global-expansion" element={<GlobalExpansion />} />
                    <Route path="finix-ai-bot" element={<FinixAIBot />} />
                    <Route path="compliance" element={<Compliance />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blogs" element={<Blogs />} />
                    
                </Route>
                <Route path="time-admin" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
