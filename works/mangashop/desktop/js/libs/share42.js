/* share42.com | 28.05.2014 | (c) Dimox */
window.onload = function() {
    var e = document.getElementsByTagName('div');
    for (var k = 0; k < e.length; k++) {
        if (e[k].className.indexOf('js-product-share') != -1) {
            if (e[k].getAttribute('data-url') != -1) var u = e[k].getAttribute('data-url');
            if (e[k].getAttribute('data-title') != -1) var t = e[k].getAttribute('data-title');
            if (e[k].getAttribute('data-image') != -1) var i = e[k].getAttribute('data-image');
            if (e[k].getAttribute('data-description') != -1) var d = e[k].getAttribute('data-description');
            if (e[k].getAttribute('data-path') != -1) var f = e[k].getAttribute('data-path');
            if (e[k].getAttribute('data-icons-file') != -1) var fn = e[k].getAttribute('data-icons-file');
            if (!f) {
                function path(name) {
                    var sc = document.getElementsByTagName('script'),
                        sr = new RegExp('^(.*/|)(' + name + ')([#?]|$)');
                    for (var p = 0, scL = sc.length; p < scL; p++) {
                        var m = String(sc[p].src).match(sr);
                        if (m) {
                            if (m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/)) return m[1];
                            if (m[1].indexOf("/") == 0) return m[1];
                            b = document.getElementsByTagName('base');
                            if (b[0] && b[0].href) return b[0].href + m[1];
                            else return document.location.pathname.match(/(.*[\/\\])/)[0] + m[1];
                        }
                    }
                    return null;
                }
                f = path('share42.js');
            }
            if (!u) u = location.href;
            if (!t) t = document.title;
            if (!fn) fn = 'icons.png';

            function desc() {
                var meta = document.getElementsByTagName('meta');
                for (var m = 0; m < meta.length; m++) {
                    if (meta[m].name.toLowerCase() == 'description') {
                        return meta[m].content;
                    }
                }
                return '';
            }
            if (!d) d = desc();
            u = encodeURIComponent(u);
            t = encodeURIComponent(t);
            t = t.replace(/\'/g, '%27');
            i = encodeURIComponent(i);
            d = encodeURIComponent(d);
            d = d.replace(/\'/g, '%27');
            var fbQuery = 'u=' + u;
            if (i != 'null' && i != '') fbQuery = 's=100&p[url]=' + u + '&p[title]=' + t + '&p[summary]=' + d + '&p[images][0]=' + i;
            var vkImage = '';
            if (i != 'null' && i != '') vkImage = '&image=' + i;
            var s = new Array('"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url=' + u + '&title=' + t + vkImage + '&description=' + d + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"', '"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&' + fbQuery + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"', '"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text=' + t + '&url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"', '"#" data-count="odkl" onclick="window.open(\'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=' + u + '&title=' + t + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Одноклассники"', '"#" data-count="gplus" onclick="window.open(\'https://plus.google.com/share?url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Google+"');
            var l = '';
            for (j = 0; j < s.length; j++) l += '<a rel="nofollow" style="display:inline-block;vertical-align:bottom;width:24px;height:24px;margin:0 6px 6px 0;padding:0;outline:none;background:url(' + f + fn + ') -' + 24 * j + 'px 0 no-repeat" href=' + s[j] + ' target="_blank"></a>';
            
            var vkLink="<a href="+s[0]+" class='share__button share__button_color_vk'><i class='icon-share-vk'></i></a>";
            var fbLink="<a href="+s[1]+" class='share__button share__button_color_fb'><i class='icon-share-fb'></i></a>";
            var twLink="<a href="+s[2]+" class='share__button share__button_color_tw'><i class='icon-share-tw'></i></a>";
            var odLink="<a href="+s[3]+" class='share__button share__button_color_od'><i class='icon-share-od'></i></a>";
            var gpLink="<a href="+s[4]+" class='share__button share__button_color_gp'><i class='icon-share-gp'></i></a>";
            
            //e[k].innerHTML = '<span id="share42">' + l + '</span>';
            //e[k].innerHTML = vkLink+fbLink+twLink+odLink+gpLink;
            e[k].innerHTML = vkLink+fbLink+twLink;
        }
    };
};