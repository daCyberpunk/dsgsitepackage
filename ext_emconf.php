<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "dsgsitepackage".
 *
 * Auto generated 07-06-2016 09:09
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
    'title' => 'RWB DSG Sitepackage',
    'description' => 'Röder Webdesign Berlin Sitepackage based on Dead Simple Grid contains basic configurations for a TYPO3 Website',
    'category' => 'templates',
    'constraints' =>
        array(
            'depends' =>
                array(
                    'typo3' => '8.6.1-8.99.99',
                    'realurl' => '*',
                    'unroll' => '*',
                    'vhs' => '*',
                    'cs_seo' => '*'
                ),
            'conflicts' =>
                array(
                    'css_styled_content' => '*',
                    'themes' => '*',
                    'fluidpages' => '*',
                    'dyncss' => '*',
                ),
            'suggests' =>
                array(),
        ),
    'state' => 'stable',
    'uploadfolder' => false,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Falk Röder',
    'author_email' => 'mail@falk-roeder.de',
    'author_company' => 'Röder Webdesign Berlin',
    'version' => '1.0.0',
    'clearcacheonload' => true,
);

