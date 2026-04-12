import React from 'react';
import DirectorCard from './DirectorCard';

const DIRECTORS = [
    {
        name: 'Sonja Musialovich',
        role: 'Director',
        nationality: 'British',
        appointed: '20 January 2025',
    },
    {
        name: 'Lukasz Musialowicz',
        role: 'Director',
        nationality: 'British / Polish',
        appointed: '10 January 2017',
    },
];

const DirectorsList = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {DIRECTORS.map((d) => (
                <DirectorCard key={d.name} {...d} />
            ))}
        </div>
    );
};

export default DirectorsList;
