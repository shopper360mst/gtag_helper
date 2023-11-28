export default class GtagHelper {
    /**
     * Creates a custom tag for third party.
     * @param {String} location the page name. 
     * @example
     *      GtagHelper.setGoogleTag('Login Popup');
     */
    static setGoogleTag(location) {
        try {
            if (gtag) {
                gtag('event', 'page_view', {"page_title": location,});
            }    
        } catch(e) {
            console.log(e);
        }
    }
    static setMatomoTag(location) {
        if (window._mtm) {
            window._mtm.push({'event': location});
        }
    }
} 