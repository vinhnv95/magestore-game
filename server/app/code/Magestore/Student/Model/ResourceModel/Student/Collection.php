<?php

/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Model\ResourceModel\Student;
/**
 * Class Collection
 * @package Magestore\Student\Model\ResourceModel\Student
 */
class Collection extends \Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection {

    /**
     *
     * @var string
     */
    protected $_idFieldName = 'id';

    /**
     * Initialize collection resource model
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init(\Magestore\Student\Model\Student::class, \Magestore\Student\Model\ResourceModel\Student::class);
    }
}