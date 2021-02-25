import {getCookie} from "./utils.js";

(function () {
    if (window.location.pathname.indexOf('/blog/posts/') !== -1 && window.location.host.indexOf("127.0.0.1")===-1) {
        let lang = getCookie('lang');
        if (lang === 'English') {
            lang = 'en'
        } else {
            lang = 'zh-CN'
        }
        var gitalk = new Gitalk({
            clientID: '05baae5d0310820999a4',
            clientSecret: '60e29410a12dc3410ca082aafe56e3ffafb05955',
            repo: 'blog',
            owner: 'Juneju',
            admin: ['Juneju'],
            id: md5(location.pathname),      // Ensure uniqueness and length less than 50
            distractionFreeMode: false, // Facebook-like distraction free mode
            language: lang
        })
        gitalk.render('gitalk-container')
    }
})
();
