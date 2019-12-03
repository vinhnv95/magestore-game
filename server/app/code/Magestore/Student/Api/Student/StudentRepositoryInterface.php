<?php
/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Api\Student;
use Magestore\Student\Api\Data\Student\StudentInterface;
use Magestore\Student\Api\Data\Student\AnswerInterface;

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

    /**
     * Retrieve item.
     *
     * @param int $id
     * @return StudentInterface
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function getById($id);

    /**
     * Retrieve item.
     *
     * @param string $email
     * @return StudentInterface
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function getByEmail($email);

    /**
     * Submit
     *
     * @param AnswerInterface $answer
     * @return StudentInterface
     */
    public function submit($answer);
}
