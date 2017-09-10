var removeUrlGarbage = require('.');

require('chai/register-assert');

describe('removeUrlGarbage()', function() {
    it('Should remove utm_* params', function() {
        var url = 'https://developers.google.com/web/updates/2016/10/navigator-share?foo=bar&utm_source=feed&utm_medium=feed&utm_campaign=updates_feed';

        var res = removeUrlGarbage(url);

        assert.equal(res, 'https://developers.google.com/web/updates/2016/10/navigator-share?foo=bar')
    });

    it('Should remove from=rss', function() {
        var url = 'https://developers.google.com/web/updates/2016/10/navigator-share?foo=bar&utm_source=feed&utm_medium=feed&utm_campaign=updates_feed&from=rss';

        var res = removeUrlGarbage(url);

        assert.equal(res, 'https://developers.google.com/web/updates/2016/10/navigator-share?foo=bar')
    });

    it('Should remove trailing "?"', function() {
        var url = 'https://developers.google.com/web/updates/2016/10/navigator-share?utm_source=feed&utm_medium=feed&utm_campaign=updates_feed&from=rss';

        var res = removeUrlGarbage(url);

        assert.equal(res, 'https://developers.google.com/web/updates/2016/10/navigator-share')
    });
});
