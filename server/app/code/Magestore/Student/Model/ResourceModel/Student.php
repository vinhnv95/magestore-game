<?php

/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Model\ResourceModel;
/**
 * Class Student
 * @package Magestore\Student\Model\ResourceModel
 */
class Student extends \Magento\Framework\Model\ResourceModel\Db\AbstractDb {

    /**
     * Initialize resource model
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init('student', 'id');
    }
}