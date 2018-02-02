<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

### Custom Content Elements
/**
 * Cookie Warning
 */
$TCA['tt_content']['types']['dsgsitepackage_cookies']['showitem'] = "
--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,
bodytext;Warning Text,
header_link;Link,
header;More Link Text,
rowDescription;Button Text,
--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.appearance,
--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.frames;frames,
--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,

";
$TCA['tt_content']['types']['dsgsitepackage_cookies']['columnsOverrides'] = [
    'header_link' => [
        'config' => [
            'wizards' => [
                'link' => [
                    'params' => [
                        'blindLinkOptions' => 'url, mail, spec, folder, file'
                    ]
                ]
            ]
        ]
    ],
    'rowDescription' => [
        'config' => ['rows' => 1]
    ]
];

/**
 * To Top Link
 */
$TCA['tt_content']['types']['dsgsitepackage_totop']['showitem'] = "
--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,
--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.appearance,
--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.frames;frames,
--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,

";


/** *************
* Add Content Elements to List
 */
$backupCTypeItems = $GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'];

$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'] = array(
    array(
        'Custom Elements',
        '--div--'
    ),
    array(
        'Cookie Warning',
        'dsgsitepackage_cookies',
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'ext_icon.gif'
    ),
    array(
        'Link To Top',
        'dsgsitepackage_totop',
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'ext_icon.gif'
    ),

);
foreach ($backupCTypeItems as $key => $value) {
    $GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = $value;
}
unset($key);
unset($value);
unset($backupCTypeItems);







### extend TCA for file metadata
$tempColumns = Array (
    "quell" => Array (
        'exclude' => 1,
        'label' => 'Quellnachweis',
        'config' => array(
            'type' => 'input',
            'size' => 30,
            'eval' => 'trim,required'
        ),
    ),
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns("sys_file_metadata",$tempColumns,1);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('sys_file_metadata', 'quell','',
    'after:alternative');





### include static template
TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Flexbox provider extension of Röder Webdesign Berlin');



### entfernen "Translate to ..." Nachricht beim kopieren ovn CE in andere Sprachen
$TCA['tt_content']['columns']['header']['l10n_mode'] = '';
$TCA['tt_content']['columns']['bodytext']['l10n_mode'] = '';



### Section Index defaults now to zero. helpfull when menurendering based on content elements with sectionindex 1
$GLOBALS['TCA']['tt_content']['columns']['sectionIndex']['config']['default'] = 0;