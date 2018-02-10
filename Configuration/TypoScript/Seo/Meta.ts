lib.generalMeta = TEXT
lib.generalMeta.value (
 <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="apple-mobile-web-app-capable" content="no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="distribution" content="local">
    <meta name="rating" content="general">
    <meta name="revisit-after" content="10 days">
)

lib.robots = COA
lib.robots {
    1 = TEXT
    1.value = <meta name="robots" content="index,follow">
    1.if.isFalse.field = tx_csseo_no_index

    2 = TEXT
    2.value = <meta name="robots" content="noindex,nofollow">
    2.if.isTrue.field = tx_csseo_no_index
}


[globalVar = GP:tx_news_pi1|news > 0]
    config.noPageTitle = 0
    page.headerData.654 >
    page.headerData.655 = COA
    page.headerData.655 {
        30 < lib.robots
        40 < lib.generalMeta
        10 =< lib.currentUrl
        10 {
            wrap = <link rel="canonical" href="|" />
            if.isFalse.field = tx_csseo_no_index
        }
    }
    page.meta.og:image >
    config.titleTagFunction >
[end]
#keine meta auf dieser Seite
[globalVar = TSFE:id = 281]
    page.headerData.654 >
[end]

page.meta {
    og:title >
    og:site_name >
    og:description >
}

[applicationContext = Production]
    page.headerData.654{
        30 < lib.robots
    }
[end]
[applicationContext = Production/Staging, Development]
    page.headerData.654{
        30 = COA
        30 {
            1 = TEXT
            1.value = <meta name="robots" content="noindex,nofollow">
        }
    }
    page.meta.robots = noindex,follow
[end]

page.headerData.654 {
    ### Twitter ###
    35 >
    ### Google ###
    36 = COA
    36 {
        ### og:title ###
        10 = TEXT
        10 {
            data = page:tx_csseo_og_title // page:title
            htmlSpecialChars = 1
            wrap = <meta itemprop="name" content="|"/>
        }

        ### og:description ###
        20 = TEXT
        20 {
            data = page:tx_csseo_og_description // page:description
            htmlSpecialChars = 1
            wrap = <meta itemprop="description" content="|" />
            required = 1
        }

        ### og:image ###
        50 = TEXT
        50 {
            stdWrap.typolink {
                parameter.stdWrap {
                    cObject = IMG_RESOURCE
                    cObject.file {
                        import {
                            preUserFunc = Clickstorm\CsSeo\UserFunc\HeaderData->getSocialMediaImage
                            preUserFunc.field = tx_csseo_og_image
                            ifEmpty.data = path:{$plugin.tx_csseo.social.defaultImage}
                        }
                        height < plugin.tx_csseo.social.openGraph.image.height
                        width < plugin.tx_csseo.social.openGraph.image.width
                    }
                }
                returnLast = url
                forceAbsoluteUrl = 1
            }
            required = 1
            wrap = <meta itemprop="image" content="|" />
        }
    }


    40 < lib.generalMeta
    45 = TEXT
    45 {
        field = lastUpdated
        htmlSpecialChars = 1
        strftime = %Y-%m-%d
        wrap = <meta name="date" content="|">
    }
}