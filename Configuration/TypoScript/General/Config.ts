
config.tx_realurl_enable = 1
config.index_enable = 1
config.index_externals = 1
config.removeDefaultJS = 1

[applicationContext = Development,Production/Staging]
    #full stack on TYPO3 Error
    config.contentObjectExceptionHandler = 0
[end]
[applicationContext = Development]
    config.admPanel = 1
[end]
[applicationContext = Production*]
    config.concatenateJs = 1
    config.concatenateCss = 1
    config.compressJs = 1
    config.compressCss = 1
    config.sendCacheHeaders = 1
    config.admPanel = 0
[end]

page.10.variables.footerPageUid = TEXT
page.10.variables.footerPageUid.value = {$page.theme.footerPageUid}
page.theme.footerSitemapShowLang = TEXT
page.theme.footerSitemapShowLang.value = {$page.theme.footerSitemapShowLang}
page.shortcutIcon = {$page.favicon}

config.extTarget = _blank

[globalVar = TSFE:id = 2822220,342222228]
    config{
        sendCacheHeaders = 0
        cache_period = 0
    }
[end]

config.spamProtectEmailAddresses = 1