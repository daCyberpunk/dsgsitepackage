tx_gridelements.setup {
    TwoColumns {
        title = Two Columns
        config {
            colCount = 2
            rowCount = 1
            rows {
                1 {
                    columns {
                        1 {
                            name = Left
                            colPos = 401
                        }
                        2 {
                            name = Right
                            colPos = 402
                        }
                    }
                }
            }
        }
        #icon = EXT:nxbase/ext_icon.gif
        flexformDS = FILE:EXT:dsgsitepackage/Configuration/FlexForms/Gridelements/TwoColumns.xml
    }
}