import React from 'react';
import { SGGS_RAAGS, RaagInfo } from './raagData';

interface RaagDropdownProps {
    selectedRaagId: string;
    onSelectRaag: (raag: RaagInfo) => void;
}

export const RaagDropdown: React.FC<RaagDropdownProps> = ({
    selectedRaagId,
    onSelectRaag,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const found = SGGS_RAAGS.find((r) => r.id === e.target.value);
        if (found) onSelectRaag(found);
    };

    return (
        <div className="flex flex-col gap-1.5 w-full max-w-xs">
            <label htmlFor="raag-select" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Select Raag
            </label>
            <select
                id="raag-select"
                value={selectedRaagId}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-medium cursor-pointer"
            >
                {SGGS_RAAGS.map((raag) => (
                    <option key={raag.id} value={raag.id}>
                        {raag.name} ({raag.gurmukhi})
                    </option>
                ))}
            </select>
        </div>
    );
};