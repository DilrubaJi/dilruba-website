import React, { useState } from 'react';
import { RaagInfo } from './raagData';
import styles from './SargamStudio.module.css';

interface RaagDetailsAccordionProps {
    raag: RaagInfo;
}

export const RaagDetailsAccordion: React.FC<RaagDetailsAccordionProps> = ({ raag }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.raagAccordionContainer}>
            {/* Collapsed Toggle Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-4 py-3 flex items-center justify-between text-left font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/40 rounded-xl"
                aria-expanded={isExpanded}
            >
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-amber-600 dark:text-amber-400">Raag Details</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                        — {raag.name} ({raag.gurmukhi})
                    </span>
                </div>

                {/* Chevron Indicator */}
                <svg
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Expanded Content Section */}
            {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-sm space-y-3">
                    {/* Mood Description */}
                    <div>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Mood / Character: </span>
                        <span className="text-slate-700 dark:text-slate-300">{raag.mood}</span>
                    </div>

                    {/* Arohana / Avrohana */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700/60 shadow-sm">
                            <span className="font-semibold block text-slate-900 dark:text-slate-100 mb-0.5 text-xs uppercase tracking-wider text-slate-500">
                                Aroh (Ascending)
                            </span>
                            <span className="font-mono text-base font-medium text-amber-600 dark:text-amber-400">
                                {raag.aroh}
                            </span>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700/60 shadow-sm">
                            <span className="font-semibold block text-slate-900 dark:text-slate-100 mb-0.5 text-xs uppercase tracking-wider text-slate-500">
                                Avroh (Descending)
                            </span>
                            <span className="font-mono text-base font-medium text-amber-600 dark:text-amber-400">
                                {raag.avroh}
                            </span>
                        </div>
                    </div>

                    {/* Key Parameters */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                        <div className="bg-white dark:bg-slate-800 p-2 rounded-md border border-slate-200 dark:border-slate-700/60">
                            <span className="text-slate-500 dark:text-slate-400 block font-medium">Vadi (Primary)</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">{raag.vadi}</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-2 rounded-md border border-slate-200 dark:border-slate-700/60">
                            <span className="text-slate-500 dark:text-slate-400 block font-medium">Samvadi (Secondary)</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">{raag.samvadi}</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-2 rounded-md border border-slate-200 dark:border-slate-700/60">
                            <span className="text-slate-500 dark:text-slate-400 block font-medium">Niyaas (Resting)</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">{raag.niyaas}</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-2 rounded-md border border-slate-200 dark:border-slate-700/60">
                            <span className="text-slate-500 dark:text-slate-400 block font-medium">Anuvadi / Vivadi</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">
                                {raag.anuvadi || 'N/A'} {raag.vivadi ? `(Vivadi: ${raag.vivadi})` : ''}
                            </span>
                        </div>
                    </div>

                    {/* Microtones / Shrutis */}
                    {raag.microtones && (
                        <div className="pt-1 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200/40 dark:border-slate-800/40 mt-2">
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Shrutis / Microtones: </span>
                            <span>{raag.microtones}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};