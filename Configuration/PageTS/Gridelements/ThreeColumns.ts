tx_gridelements.setup {
    ThreeColumns {
        title = Three Columns
        config {
            colCount = 3
            rowCount = 1
            rows {
                1 {
                    columns {
                        1 {
                            name = Left
                            colPos = 401
                        }
                        2 {
                            name = Middle
                            colPos = 402
                        }
                        3 {
                            name = Right
                            colPos = 403
                        }
                    }
                }
            }
        }
        #icon = EXT:nxbase/ext_icon.gif
        flexformDS = FILE:EXT:dsgsitepackage/Configuration/FlexForms/Gridelements/ThreeColumns.xml
    }
}