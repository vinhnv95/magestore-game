<?php
/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Model\Source;

class Level extends \Magento\Eav\Model\Entity\Attribute\Source\AbstractSource
{
    /**
     *
     */
    const NONE = '';
    /**
     *
     */
    const LEVEL_1 = 1;
    /**
     *
     */
    const LEVEL_2 = 2;
    /**
     *
     */
    const LEVEL_3 = 3;

    /**
     * Get model option as array
     *
     * @return array
     */
    public function getAllOptions()
    {
        if (is_null($this->_options)) {
            $this->_options = array(
                array(
                    'label' => __('-- Please Select --'),
                    'value' => self::NONE
                ),
                array(
                    'label' => __('Level 1'),
                    'value' => self::LEVEL_1
                ),
                array(
                    'label' => __('Level 2'),
                    'value' => self::LEVEL_2
                ),
                array(
                    'label' => __('Level 3'),
                    'value' => self::LEVEL_3
                )
            );
        }
        return $this->_options;
    }
}
