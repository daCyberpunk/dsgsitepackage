################################
#### BACKENDLAYOUT: DEFAULT ####
################################
mod {
    web_layout {
        BackendLayouts {
            default {
                title = LLL:EXT:dsgsitepackage/Resources/Private/Language/Backend.xlf:backend_layout.default
                config {
                    backend_layout {
                        colCount = 1
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = LLL:EXT:dsgsitepackage/Resources/Private/Language/Backend.xlf:backend_layout.column.main
                                        colPos = 1
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:dsgsitepackage/Resources/Public/Images/BackendLayouts/default.gif
            }
        }
    }
}