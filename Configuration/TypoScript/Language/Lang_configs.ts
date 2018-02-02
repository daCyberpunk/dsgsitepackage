## text translations for content
#
# bei neuen Sprachen hier und in der constants bei cs_seo Konfigruation ergänzen
#
#
# de
lib.meetusArticlesLang.value = Weitere Termine
lib.mobileMenuBack.value = Zurück
lib.registerNowLang.value = Jetzt registrieren
lib.slogan.value = Das ist keine keine Webseite. Das ist ein Platzhalter mit nützlichen Informationen!
page.10.dataProcessing.40.special.value = 0,1


# en
[globalVar = GP:L=1]
    lib.meetusArticlesLang.value = More dates
    lib.registerNowLang.value = Register Now
    lib.mobileMenuBack.value = Back
    lib.slogan.value = This is not a Website. It's a placeholder which contains some useful information!
#    page.footerData.667.value = <script src="/fileadmin/template/js/js-webshim/en.WebshimForm.js" type="text/javascript"></script>

[global]

## sitemaps for different languages, always add linebreaks between each sitemap
plugin.tx_csseo.robots{
    11 < linebreak

    20 < lib.robotsHost
    20.wrap2 = Sitemap: |/de/sitemap.xml

    25 < linebreak

    30 < lib.robotsHost
    30.wrap2 = Sitemap: |/en/sitemap.xml
}