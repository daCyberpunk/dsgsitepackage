lib.news = COA 
lib.news {
    table = tx_news_domain_model_news
    # dieser Parameter wird mit in der URL mit der UID verknüpft, davor sind mehr Parameter
    additionalParams = tx_news_pi1[controller]=News&tx_news_pi1[action]=detail&tx_news_pi1[news]
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
    pages.languageUids = 0
    extensions {
#        news >
        # configuration for an extension
        datednews < lib.news
        datednews.storagePid = 12
        datednews.detailPid = 15


    }
}
