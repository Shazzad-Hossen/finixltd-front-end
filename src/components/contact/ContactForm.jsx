import React, { useState } from 'react';

const initial = { name: '', email: '', subject: '', message: '' };

const ContactForm = () => {
    const [form, setForm] = useState(initial);
    const [sent, setSent] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-background/80 p-6 light:bg-background sm:p-8"
            noValidate
        >
            <h2 className="font-heading text-lg font-semibold text-text-white">Send a message</h2>
            <p className="mt-2 text-sm text-text-secondary">
                For general enquiries. We aim to respond within business hours; this form does not create a client
                relationship until confirmed in writing.
            </p>

            {sent ? (
                <p className="mt-6 rounded-lg border border-primary-green/30 bg-primary-green/10 px-4 py-3 text-sm text-text-white">
                    Thank you. In a production deployment this would be sent to your backend or email service. Your
                    message has been captured locally for demonstration.
                </p>
            ) : null}

            <div className="mt-6 space-y-4">
                <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-text-secondary">
                        Name
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={onChange}
                        className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-text-white outline-none transition focus:border-accent-blue light:bg-white"
                    />
                </div>
                <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary">
                        Email
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={onChange}
                        className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-text-white outline-none transition focus:border-accent-blue light:bg-white"
                    />
                </div>
                <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-text-secondary">
                        Subject
                    </label>
                    <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={onChange}
                        className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-text-white outline-none transition focus:border-accent-blue light:bg-white"
                    />
                </div>
                <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-text-secondary">
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={onChange}
                        className="mt-1.5 w-full resize-y rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-text-white outline-none transition focus:border-accent-blue light:bg-white"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary-gradient py-3 text-sm font-semibold text-[#0B0F1A] shadow-md shadow-primary-green/15 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue sm:w-auto sm:px-10"
            >
                Submit enquiry
            </button>
        </form>
    );
};

export default ContactForm;
