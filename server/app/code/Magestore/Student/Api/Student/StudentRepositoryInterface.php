<?php
/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Api\Student;
use Magestore\Student\Api\Data\Student\StudentInterface;

/**
 * Interface StudentInterface
 * @package Magestore\Student\Api\Student
 */
interface StudentRepositoryInterface {

    /**
     * @param StudentInterface $student
     * @return StudentInterface
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function save(StudentInterface $student);
}
