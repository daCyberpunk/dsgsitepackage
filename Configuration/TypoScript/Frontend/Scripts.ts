#css

page {
    includeCSS {
        sitepackage = EXT:dsgsitepackage/Resources/Public/Css/Screen.min.css
#        cookieconsent = EXT:dsgsitepackage/Resources/Public/Css/Cookieconsent.min.css
    }

    includeJS {
#        cookies = EXT:dsgsitepackage/Resources/Public/JavaScript/Vendor/Cookieconsent.js
    }

    includeJSFooter {
        vendor = EXT:dsgsitepackage/Resources/Public/JavaScript/Dist/Vendor.min.js
        vendor.forceOnTop = 1
        vendor.async = 1
        main = EXT:dsgsitepackage/Resources/Public/JavaScript/Dist/Modules.min.js
    }

    jsFooterInline {
        # Google Analytics
        10 = COA
        10 {
            if {
                isTrue = {$page.tracking.google.trackingID}
            }
            10 = TEXT
            10.value (
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', '{$page.tracking.google.trackingID}', 'auto');
        ga('send', 'pageview');

        function gtag_report_conversion(url) {
            var callback = function () {
                if (typeof(url) != 'undefined') {
                    window.location = url;
                }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-983822759/aSdaCIrp63sQp-OP1QM',
                'event_callback': callback
            });
            return false;
        }
            )
            20 = TEXT
            20 {
                if {
                    isTrue = {$page.tracking.google.anonymizeIp}
                }

                value (

    ga('set', 'anonymizeIp', true);
                )
            }

            90 = TEXT
            90.value (

    ga('send', 'pageview');
            )
        }
    }
}

