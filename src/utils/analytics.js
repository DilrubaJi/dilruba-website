
export const initGA = () => {
    if (!window.gtag) {
        console.error('Google Analytics is not loaded');
        return;
    }
    window.gtag('config', 'G-9XB8FQMBVY', {
        page_path: window.location.pathname,
    });
};

export const logPageView = () => {
    if (!window.gtag) {
        console.error('Google Analytics is not loaded');
        return;
    }
    window.gtag('config', 'G-9XB8FQMBVY', {
        page_path: window.location.pathname,
    });
};

export const logEvent = (category, action, label) => {
    if (!window.gtag) {
        console.error('Google Analytics is not loaded');
        return;
    }
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
    });
};
