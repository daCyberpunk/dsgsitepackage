<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

// Adds the content element to the "Type" dropdown

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
array(
    'LLL:EXT:dsgsitepackage/Resources/Private/Language/Dsgsitepackage_cookies.xlf:dsgsitepackage_cookies',
    'dsgsitepackage_cookies',
    'EXT:dsgsitepackage/Resources/Public/Icons/ContentElements/Dsgsitepackage_cookies.gif'
    ),
    'CType',
    'dsgsitepackage'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
array(
    'LLL:EXT:dsgsitepackage/Resources/Private/Language/Dsgsitepackage_totop.xlf:dsgsitepackage_totop',
    'dsgsitepackage_totop',
    'EXT:dsgsitepackage/Resources/Public/Icons/ContentElements/Dsgsitepackage_totop.gif'
    ),
    'CType',
    'dsgsitepackage'
);



$temp_column = [
    'dsg_flex_layout' => [
        'exclude' => true,
        'label' => 'LLL:EXT:dsgsitepackage/Resources/Private/Language/Backend.xlf:dsg_flex_layout',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectSingle',
            'itemsProcFunc' => FalkRoeder\Dsgsitepackage\UserFunc\Tca::class . '->flexLayoutItems',
            'items' => [
                [
                    'Defaults',
                    '--div--'
                ],
                [
                    'LLL:EXT:dsgsitepackage/Resources/Private/Language/Backend.xlf:dsg_flex_layout.100',
                    '100'
                ],
                [
                    'LLL:EXT:dsgsitepackage/Resources/Private/Language/Backend.xlf:dsg_flex_layout.25',
                    '25'
                ],
                [
                    'LLL:EXT:dsgsitepackage/Resources/Private/Language/Backend.xlf:dsg_flex_layout.33',
                    '33'
                ],
                [
                    'LLL:EXT:dsgsitepackage/Resources/Private/Language/Backend.xlf:dsg_flex_layout.50',
                    '50'
                ],
                [
                    'LLL:EXT:dsgsitepackage/Resources/Private/Language/Backend.xlf:dsg_flex_layout.66',
                    '66'
                ],
                [
                    'LLL:EXT:dsgsitepackage/Resources/Private/Language/Backend.xlf:dsg_flex_layout.75',
                    '75'
                ],
                [
                    'all items',
                    '--div--'
                ],

            ],
            'default' => 100
        ]
    ],
];



\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $temp_column);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'frames', 'dsg_flex_layout', 'after:layout');
