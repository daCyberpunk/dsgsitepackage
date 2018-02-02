config {
    htmlTag_langKey =  < config.language
    sys_language_uid = 0
    language = de
    locale_all = de_DE.utf-8
    linkVars = L(0-1)
    defaultGetVars.L  = 0
    ## mehrsprachigkeit fallbacks
    # sys_language_mode = content_fallback
    sys_language_mode = strict

    htmlTag_setParams = lang="de" dir="ltr" class="no-js" prefix="og: http://ogp.me/ns#" xmlns:fb="http://ogp.me/ns/fb#"
}


[globalVar = GP:tx_news_pi1|news > 0]
    config.sys_language_mode = content_fallback
[end]
[globalVar = GP:L=1]
    config{
        sys_language_uid = 1
        language = en
        locale_all = en_UK
        htmlTag_langKey = en_UK
        htmlTag_setParams = lang="en" dir="ltr" class="no-js" prefix="og: http://ogp.me/ns#" xmlns:fb="http://ogp.me/ns/fb#"
    }
[global]




# init text translations
lib.meetusArticlesLang = TEXT
lib.mobileMenuBack = TEXT
lib.registerNowLang = TEXT
lib.slogan = TEXT