'use strict';
/**
 * Remove garbage params
 *
 * @param {String} url
 *
 * @returns {String}
 */
module.exports = function(url) {
    return url.replace(/(?:&?utm_[^&]+)|(?:&?from=rss)/g, '').replace(/\?$/, '');
};
