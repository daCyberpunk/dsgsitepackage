<?php

namespace FalkRoeder\Dsgsitepackage\UserFunc;

/***
 *
 * This file is part of the "" Extension for TYPO3 CMS.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2017
 *
 * Author Falk Röder <mail@falk-roeder.de>
 *
 ***/

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface;


/**
 * Tca.
 */
class Tca
{

    protected $objectManager = null;


    /**
     * flexLayoutItems
     *
     * @param $conf
     * @return array
     */
    public function flexLayoutItems(&$conf)
    {
        $items = [
            ['Defaults', '--div--'],
            ['25%', '25'],
            ['33%', '33'],
            ['50%', '50'],
            ['66%', '66'],
            ['75%', '75'],
            ['100%', '100'],
           [ 'all items', '--div--']
        ];

        for ($i=0;$i < 101; $i++) {
            $items[] = [$i . '%', $i];
        }
        $conf['items'] = $items;
        return $conf;
    }

    /**
     * columnClassItems
     *
     * @param $conf
     * @return array
     */
    public function columnClassItems(&$conf)
    {
        $items = [
            ['','']
        ];
        $settings = $this->getSettings();
        $classList = explode(',', $settings['gridlemenents.']['columnClasses']);

        foreach ( $classList as $className ) {

            $items[] = [trim($className),trim($className)];
        }
        $conf['items'] = $items;
        return $conf;
        
    }

    protected function getSettings() {
        if(!($this->objectManager instanceof \TYPO3\CMS\Extbase\Object\ObjectManagerInterface)) {
            $this->objectManager = GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Object\\ObjectManager');
        }

        $configurationManager = $this->objectManager->get('TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManagerInterface');
        $settings             = $configurationManager->getConfiguration(ConfigurationManagerInterface::CONFIGURATION_TYPE_FULL_TYPOSCRIPT);
        return $settings['plugin.']['tx_dsgsitepackage.']['settings.'];
    }
}
