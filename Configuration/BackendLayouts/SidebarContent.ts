backendlayouts {
    SidebarContent {
        icon = EXT:themes_gridelements/Resources/Public/Icons/BackendLayouts/SidebarContent.jpg
        name = SidebarContent
        backend_layout (
		    colCount = 4
            rowCount = 4
            rows {
                1 {
                    columns {
                        1 {
                            name = LLL:EXT:themes_gridelements/Resources/Private/Language/BackendLayouts.xlf:area_feature
                            rowspan = 1
                            colspan = 4
                            colPos = 3
                        }
                    }
                }
                2 {
                    columns {
                        1 {
                            name = LLL:EXT:themes_gridelements/Resources/Private/Language/BackendLayouts.xlf:area_sidebar
                            rowspan = 1
                            colspan = 1
                            colPos = 2
                        }
                        2 {
                            name = LLL:EXT:themes_gridelements/Resources/Private/Language/BackendLayouts.xlf:area_content
                            rowspan = 1
                            colspan = 3
                            colPos = 0
                        }
                    }
                }
                3 {
                    columns {
                        1 {
                            name = LLL:EXT:themes_gridelements/Resources/Private/Language/BackendLayouts.xlf:area_extended
                            rowspan = 1
                            colspan = 4
                            colPos = 4
                        }
                    }
                }
                4 {
                    columns {
                        1 {
                            name = LLL:EXT:themes_gridelements/Resources/Private/Language/BackendLayouts.xlf:area_unused
                            rowspan = 1
                            colspan = 4
                            colPos = -2
                        }
                    }
                }
            }
        )
    }
}