import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
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
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import AdminBlogs from './pages/admin/blogs/AdminBlogs';
import CreateBlog from './pages/admin/blogs/CreateBlog';
import EditBlogs from './pages/admin/blogs/EditBlogs';
import BlogDetails from './pages/BlogDetails';
import Seo from './components/shared/Seo';

const SITE_URL = 'https://finixltd.uk';

const RouteSeo = () => {
    const { pathname } = useLocation();

    if (pathname.startsWith('/time-admin')) {
        return (
            <Seo
                title="Admin"
                description="FINIX LTD administration panel."
                canonical={`${SITE_URL}${pathname}`}
                robots="noindex,nofollow"
            />
        );
    }

    if (pathname.startsWith('/blogs/')) {
        return (
            <Seo
                title="Blog Details"
                description="Read insights and updates from FINIX LTD."
                canonical={`${SITE_URL}${pathname}`}
            />
        );
    }

    const routeMap = {
        '/': {
            title: 'FINIX LTD — UK Corporate Financial Management Since 2017',
            description: 'FINIX LTD offers trusted corporate financial management and strategic business solutions.',
        },
        '/about': {
            title: 'About',
            description: 'Learn about FINIX LTD, our mission, and our commitment to trusted financial excellence.',
        },
        '/company-details': {
            title: 'Company Details',
            description: 'View FINIX LTD official company details, registration data, and corporate information.',
        },
        '/directors': {
            title: 'Directors',
            description: 'Meet the leadership team behind FINIX LTD and our long-term business vision.',
        },
        '/services': {
            title: 'Services',
            description: 'Explore FINIX LTD services in corporate finance, growth strategy, and advisory support.',
        },
        '/global-expansion': {
            title: 'Global Expansion',
            description: 'Discover how FINIX LTD supports sustainable international growth and expansion planning.',
        },
        '/finix-ai-bot': {
            title: 'Finix AI Bot',
            description: 'Learn about the FINIX AI Bot and how it supports modern financial operations.',
        },
        '/compliance': {
            title: 'Compliance',
            description: 'Read FINIX LTD compliance information, legal commitments, and corporate governance.',
        },
        '/contact': {
            title: 'Contact',
            description: 'Contact FINIX LTD for partnership, advisory, and corporate service inquiries.',
        },
        '/blogs': {
            title: 'Blogs',
            description: 'Read FINIX LTD insights, updates, and thought leadership on finance and business.',
        },
    };

    const matched = routeMap[pathname] || {
        title: 'FINIX LTD',
        description: 'FINIX LTD corporate website.',
    };

    return <Seo title={matched.title} description={matched.description} canonical={`${SITE_URL}${pathname}`} />;
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <RouteSeo />
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
                    <Route path="blogs/:id" element={<BlogDetails />} />
                    
                </Route>
                <Route path="time-admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="blogs" element={<AdminBlogs />} />
                    <Route path="blogs/create" element={<CreateBlog />} />
                    <Route path="blogs/:id" element={<EditBlogs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
