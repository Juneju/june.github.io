/**
 * import from huxpro.github.io
 */
import {getCookie} from "./utils.js";
(function () {
    if (window.location.pathname.indexOf('/blog/posts/') !== -1) {
        function generateCatalog(selector) {
            let lang = getCookie('lang');
            if (lang === 'English') {
                $('#catalog')[0].innerHTML="CATALOG";
            }else{
                $('#catalog')[0].innerHTML="目录";
            }
            let _containerSelector;
            // interop with multilangual
            if ('' == 'true') {
                _containerSelector = 'div.post-container.active'
            } else {
                _containerSelector = 'div.post-container'
            }

            // init
            var P = $(_containerSelector), a, n, t, l, i, c;
            a = P.find('h1,h2,h3,h4,h5,h6');

            // clean
            $(selector).html('')

            // appending
            a.each(function () {
                n = $(this).prop('tagName').toLowerCase();
                i = "#" + $(this).prop('id');
                t = $(this).text();
                c = $('<a href="' + i + '" rel="nofollow">' + t + '</a>');
                l = $('<li class="' + n + '_nav"></li>').append(c);
                $(selector).append(l);
            });
            $($('.catalog-body li')[0]).addClass('active')

            return true;
        }

        generateCatalog(".catalog-body");

        // toggle side catalog
        $(".catalog-toggle").click((function (e) {
            e.preventDefault();
            $('.side-catalog').toggleClass("fold")
        }))

        function async(u, c) {
            var d = document, t = 'script',
                o = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            o.src = u;
            if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
            s.parentNode.insertBefore(o, s);
        }
        /*
        * Doc: https://github.com/davist11/jQuery-One-Page-Nav
        * Fork by Hux to support padding
        */
        async("/blog/js/jquery.nav.js", function () {
            $('.catalog-body').onePageNav({
                currentClass: "active",
                changeHash: !1,
                easing: "swing",
                filter: "",
                scrollSpeed: 700,
                scrollOffset: 0,
                scrollThreshold: .2,
                begin: null,
                end: null,
                scrollChange: null,
                padding: 80
            });
        });

    }
})
();