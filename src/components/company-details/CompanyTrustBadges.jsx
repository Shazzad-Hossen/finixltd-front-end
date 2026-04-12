import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

const BADGES = ['Verified UK Registered Company', 'Active Status Confirmed'];

const CompanyTrustBadges = () => {
    return (
        <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {BADGES.map((label) => (
                <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-green/35 bg-primary-green/10 px-4 py-2 text-sm font-medium text-text-white light:border-border light:bg-surface"
                >
                    <IoCheckmarkCircle className="h-5 w-5 shrink-0 text-primary-green" aria-hidden />
                    {label}
                </li>
            ))}
        </ul>
    );
};

export default CompanyTrustBadges;
