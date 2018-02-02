<?php
namespace FalkRoeder\Dsgsitepackage\Domain\Model;

class FileReference extends \TYPO3\CMS\Extbase\Domain\Model\FileReference {

    /**
     * Returns the quell text to this image
     *
     * @todo Possibly move this to the image domain object instead
     *
     * @return string
     */
    public function getQuell()
    {
        return $this->getProperty('quell');
    }

}

?>