lib.robotsHost = TEXT
lib.robotsHost.data = getIndpEnv : TYPO3_REQUEST_HOST
lib.robotsHost.noTrimWrap = | ||
linebreak = TEXT
linebreak.value(


)

plugin.tx_csseo.robots{
    data = getIndpEnv : TYPO3_REQUEST_HOST
    noTrimWrap = | ||
    wrap2 (
User-Agent: *
Allow: /

# folders
Disallow: /t3lib/
Disallow: /typo3/
Disallow: /typo3conf/
Allow: /typo3conf/ext/
Allow: /typo3temp/

# parameters
Disallow: /*?id=*               # non-realurl URLs
Disallow: /*cHash               # no cHash
Disallow: /*tx_powermail_pi1    # no powermail thanks pages
Disallow: /*tx_form_formframework    # no forms


# sitemap
    |/sitemap.xml
    )
}
[applicationContext = Development,Production/Staging]
    plugin.tx_csseo.robots >
    plugin.tx_csseo.robots = TEXT
    plugin.tx_csseo.robots.value(
User-Agent: *
Disallow: /
    )
[end]

