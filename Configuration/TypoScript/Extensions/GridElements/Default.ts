tt_content.gridelements_pi1.20.10.setup {
    Default < lib.gridelements.defaultGridSetup
    Default {
        cObject = FLUIDTEMPLATE
        cObject {
            file = typo3conf/ext/dsgsitepackage/Resources/Private/Templates/Gridelements/ContainerRow.html
            partialRootPath = typo3conf/ext/dsgsitepackage/Resources/Private/Partials/Gridelements
            layoutRootPath = typo3conf/ext/dsgsitepackage/Resources/Private/Layouts/Gridelements
        }
    }
}