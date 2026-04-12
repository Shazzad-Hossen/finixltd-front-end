import React from 'react';

const ROWS = [
    { label: 'Company name', value: 'FINIX LTD' },
    { label: 'Company number', value: '10556457' },
    {
        label: 'Registered address',
        value: '30 Edison Court, Warple Way, London, W3 7HJ',
    },
    { label: 'Company type', value: 'Private Limited Company' },
    { label: 'Status', value: 'Active' },
    { label: 'Incorporated', value: '10 January 2017' },
];

const SIC = [
    'Accounting & Auditing',
    'Bookkeeping',
    'Financial Management',
    'Management Consultancy',
];

const CompanyDetailsTable = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-surface/50 light:bg-white/90">
            <table className="w-full text-left text-sm">
                <tbody>
                    {ROWS.map(({ label, value }) => (
                        <tr key={label} className="border-b border-border last:border-0">
                            <th
                                scope="row"
                                className="w-[min(40%,220px)] whitespace-normal align-top px-4 py-3 font-medium text-text-secondary sm:px-6 sm:py-4"
                            >
                                {label}
                            </th>
                            <td className="px-4 py-3 font-medium text-text-white sm:px-6 sm:py-4">{value}</td>
                        </tr>
                    ))}
                    <tr className="border-b border-border last:border-0">
                        <th
                            scope="row"
                            className="align-top px-4 py-3 font-medium text-text-secondary sm:px-6 sm:py-4"
                        >
                            Nature of business (SIC activities)
                        </th>
                        <td className="px-4 py-3 text-text-white sm:px-6 sm:py-4">
                            <ul className="list-inside list-disc space-y-1 text-text-secondary marker:text-accent-blue">
                                {SIC.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CompanyDetailsTable;
