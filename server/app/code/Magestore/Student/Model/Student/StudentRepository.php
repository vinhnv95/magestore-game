<?php
/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Model\Student;

use Magestore\Student\Api\Student\StudentRepositoryInterface;
use Magestore\Student\Api\Data\Student\StudentInterface as StudentInterface;
use Magestore\Student\Model\ResourceModel\Student as ResourceModel;

/**
 * Class StudentRepository
 * @package Magestore\Student\Model\Student
 */
class StudentRepository implements StudentRepositoryInterface
{
    /**
     * @var StudentInterface
     */
    protected $model;
    /**
     * @var ResourceModel
     */
    protected $resource;

    /**
     * StudentRepository constructor.
     * @param StudentInterface $model
     * @param ResourceModel $resource
     */
    public function __construct(
        StudentInterface $model,
        ResourceModel $resource
    )
    {
        $this->model = $model;
        $this->resource = $resource;
    }

    /**
     * @param StudentInterface $student
     * @return StudentInterface
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function save(StudentInterface $student)
    {
        try {
            if ($student->getEmail()) {
                $studentModel = $this->getByEmail($student->getEmail());
                if ($studentModel->getId()) {
                    $student->setId($studentModel->getId());
                }
            }
            $this->resource->save($student);
            return $student;
        } catch (\Exception $e) {
            throw new \Magento\Framework\Exception\CouldNotSaveException(__('Unable to save student'));
        }
        return $student;
    }

    /**
     * {@inheritdoc}
     */
    public function getById($id)
    {
        $model = $this->model;
        $this->resource->load($model, $id);
        if (!$model->getId()) {
            throw new \Magento\Framework\Exception\NoSuchEntityException(
                __(
                    'Student with id "%1" does not exist.',
                    $id
                )
            );
        } else {
            return $model;
        }
    }

    /**
     * Retrieve item.
     *
     * @param string $email
     * @return StudentInterface
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function getByEmail($email)
    {
        $model = $this->model;
        $this->resource->load($model, $email, 'email');
        return $model;
    }
}
