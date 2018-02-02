lib.news = COA 
lib.news {
    table = tx_news_domain_model_news
    # dieser Parameter wird mit in der URL mit der UID verknüpft, davor sind mehr Parameter
    additionalParams = tx_news_pi1[controller]=News&tx_news_pi1[action]=eventDetail&tx_news_pi1[news]
    # Seiten-ID, wo die Datensätze im Backend gespeichert sind
    #storagePid = 205,209,314
    # Seiten-ID wo einzelne Datensätze im Frontend angezeigt werden. Pflichtangabe!
    #detailPid = 199
    # in welchen Sprachen sind die Datensätze gepflegt
    languageUids = 0
    # nur Datensätze die einer der Kategorien zugeordnet sind, werden angzeigt
    categories =
    # falls die Kategorien in der selben Tabelle gespeichert werden, dieses Feld hier angeben
    categoryField =
    # falls die Kategorien in einer MM-Tabelle gespeichert werden, den Name hier eintragen
    categoryMMTable = sys_category_record_mm
    # wenn die MM-Tabelle ein Feld für den Tabellennamen (tablenames) hat
    categoryMMTablenames = 1
    # die MM-Tabelle hat eine Spalte 'fieldname' welche diesen Wert beinhalten muss
    categoryMMFieldname = categories
}
plugin.tx_csseo.sitemap {
    pages.languageUids = 0,1
    extensions {
        news >
        # configuration for an extension
       #aktuelles < lib.news
       #aktuelles.storagePid = 205,207,208,209,210,211,212
       #aktuelles.detailPid = 199
       #treffensieuns < lib.news
       #treffensieuns.storagePid = 314
       #treffensieuns.detailPid = 366
       #memoqschulung < lib.news
       #memoqschulung.storagePid = 278
       #memoqschulung.detailPid = 280
       #memsourceschulung < lib.news
       #memsourceschulung.storagePid = 310
       #memsourceschulung.detailPid = 301
       #multitermschulung < lib.news
       #multitermschulung.storagePid = 313
       #multitermschulung.detailPid = 303
       #passolo < lib.news
       #passolo.storagePid = 312
       #passolo.detailPid = 305
       #trados < lib.news
       #trados.storagePid = 311
       #trados.detailPid = 306

    }
}
