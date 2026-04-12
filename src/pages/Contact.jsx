import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="FINIX LTD"
                title="Contact"
                gradientLastWord="us"
                description="UK registered address, email support, and a simple enquiry form."
            />
            <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start">
                <ContactDetails />
                <ContactForm />
            </div>
        </PageShell>
    );
};

export default Contact;
