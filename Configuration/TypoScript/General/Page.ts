page = PAGE
page {
    typeNum = 0
    shortcutIcon = {$page.favicon}

    headerData {
        // Flip ahead browsing for IE10/11
        // http://msdn.microsoft.com/en-us/library/ie/jj883726(v=vs.85).aspx
        10 = HMENU
        10 {
            special = browse
            special {
                items = prev|next
            }
            1 = TMENU
            1.NO {
                allWrap = <link rel="prev" href="|"> |*| <link rel="next" href="|">
                doNotLinkIt = 1
                stdWrap {
                    typolink {
                        parameter.data = field:uid
                        useCacheHash = 1
                        returnLast = url
                    }
                }
            }
        }
    }

    5 < styles.content.editPanelPage
    5 {
        stdWrap.wrap = <div class="typo3-feedit-page">|</div>
        stdWrap.required = 1
    }

    10 = FLUIDTEMPLATE
    10 {
        templateName = TEXT
        templateName.stdWrap.cObject = CASE
        templateName.stdWrap.cObject {
            key.data = pagelayout

            pagets__default_clean = TEXT
            pagets__default_clean.value = DefaultClean

            default = TEXT
            default.value = Default
        }

        templateRootPaths {
            0 = EXT:dsgsitepackage/Resources/Private/Templates/Page/
        }
        partialRootPaths {
            0 = EXT:dsgsitepackage/Resources/Private/Partials/Page/
        }
        layoutRootPaths {
            0 = EXT:dsgsitepackage/Resources/Private/Layouts/Page/
        }

        dataProcessing {
            10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            10 {
                levels = 3
                includeSpacer = 1
                as = mainnavigation
            }
            20 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            20 {
                entryLevel = 1
                levels = 2
                expandAll = 0
                includeSpacer = 1
                as = subnavigation
            }
            30 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            30 {
                special = rootline
                special.range = 0|-1
                includeNotInMenu = 1
                as = breadcrumb
                if {
                    value = {$page.theme.breadcrumbEnableLevel}
                    value {
                        insertData = 1
                        prioriCalc = 1
                        stdWrap.wrap = |-1
                    }
                    isGreaterThan {
                        data = level
                    }
                }
            }
            40 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            40 {
                special = language
                special.value = {$page.theme.language.languageValue}
                as = languagenavigation
                if {
                    isTrue = {$page.theme.language.languageValue}
                }
            }
            50 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            50 {
                special = {$page.theme.meta.navigationType}
                special.value = {$page.theme.meta.navigationValue}
                includeNotInMenu = {$page.theme.meta.includeNotInMenu}
                as = metanavigation
                if {
                    isTrue = {$page.theme.meta.navigationValue}
                }
            }
            60 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
            60 {
                references.fieldName = media
                as = medias
            }
        }

        settings {
            logo {
                file = {$page.logo.file}
                alt = {$page.logo.alt}

                height = {$page.logo.height}
                width = {$page.logo.width}
                linktitle = {$page.logo.linktitle}
            }
            breadcrumb {
                enable = {$page.theme.breadcrumb}
            }
            navigation {
                style = {$page.theme.navigationstyle}
                type = {$page.theme.navigationtype}
            }
            copyright {
                enable = {$page.theme.copyright.enable}
                text = {$page.theme.copyright.text}
            }
            meta {
                enable = {$page.theme.meta.enable}
            }
            language {
                enable = {$page.theme.language.enable}
            }
        }

        variables {
            pageTitle = TEXT
            pageTitle.data = page:title
            siteTitle = TEXT
            siteTitle.data = TSFE:tmpl|setup|sitetitle
            rootPage = TEXT
            rootPage.data = leveluid:0
            logoAlt = COA
            logoAlt {
                10 = TEXT
                10 {
                    data = TSFE:tmpl|setup|sitetitle
                    noTrimWrap = || logo|
                    if.isFalse = {$page.logo.alt}
                }
                20 = TEXT
                20 {
                    value = {$page.logo.alt}
                    if.isTrue = {$page.logo.alt}
                }
            }
            pageClass < lib.page.class
        }

    }
}