export const handleSignupClick = () => {
    const url = new URL('https://app.rediredi.com/en/signup');
    const params = new URLSearchParams(window.location.search);

    let hasUtm = false;
    params.forEach((_, key) => {
        if (key.startsWith('utm_')) {
            hasUtm = true;
        }
    });

    if (!hasUtm) {
        params.set('utm_source', 'organic_lp');
    }

    url.search = params.toString();

    const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
    if (Array.isArray(dataLayer)) {
        dataLayer.push({
            event: 'signup_click',
            signup_url: url.toString(),
        });
    }

    window.open(url.toString(), '_blank');
};
