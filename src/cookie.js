/**
 * Browser cookie wrapper
 */
class Cookie {
    /**
     * Process raw cookie data
     *
     * @return {Array}
     */
    processRawCookieData() {
        var rawData = document.cookie ? document.cookie.split('; ') : [];
        var cookies = [];

        rawData.forEach(function(cookie) {
            var parts = cookie.split('=');
            var key = decodeURIComponent(parts[0]);
            var value = decodeURIComponent(parts[1]);

            // Remove double quotes
            if (value.charAt(0) === '"' && value[value.length - 1] === '"')
                value = value.slice(1, -1)

            cookies.push({
                key: key,
                value: value,
            });
        });

        return cookies;
    }

    /**
     * Get cookie by key
     *
     * @param  {String} key
     * @return {Object|Null}
     */
    get(key) {
        var cookies = this.processRawCookieData();

        var found = cookies.find(function(cookie) {
            return cookie.key === key;
        });

        if (found)
            return found;

        return null;
    }

    /**
     * Set cookie
     *
     * @param  {String} key
     * @param  {Mixed}  value
     * @param  {Object} options
     * @return {Void}
     */
    set(key, value, options) {
        if (typeof key === 'undefined' || key === '')
            return;

        options = Object.assign(this._defaults, options || {});

        var date = new Date;
        date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);

        document.cookie = key + '=' + value + ';path=/;expires=' + date.toGMTString();
    }

    /**
     * Remove cookie
     *
     * @param  {String} key
     * @return {Void}
     */
    delete(key) {
        this.set(key, '', { expires: -1 });
    }
}

/**
 * Cookie default options
 * Used for setting cookie.
 */
Cookie.prototype._defaults =  {
    expires: 30,  // Cookie lifetime in days
    path: '/',    // Cookie path
}

export default Cookie