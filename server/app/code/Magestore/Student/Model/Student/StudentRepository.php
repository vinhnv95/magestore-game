<?php
/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Model\Student;

use Magestore\Student\Api\Data\Student\AnswerInterface;
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
     * @var \Magento\Catalog\Model\ResourceModel\Product\CollectionFactory
     */
    protected $collectionFactory;

    /**
     * StudentRepository constructor.
     * @param StudentInterface $model
     * @param ResourceModel $resource
     */
    public function __construct(
        StudentInterface $model,
        ResourceModel $resource,
        \Magento\Catalog\Model\ResourceModel\Product\CollectionFactory $collectionFactory
    )
    {
        $this->model = $model;
        $this->resource = $resource;
        $this->collectionFactory = $collectionFactory;
    }

    /**
     * @inheritDoc
     */
    public function save(StudentInterface $student)
    {
        try {
            if ($student->getMssv()) {
                $studentModel = $this->getByMssv($student->getMssv());
                if ($studentModel->getId()) {
                    return $studentModel;
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
     * @inheritDoc
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
     * @inheritDoc
     */
    public function getByMssv($mssv)
    {
        $model = $this->model;
        $this->resource->load($model, $mssv, 'mssv');
        return $model;
    }

    /**
     * @inheritDoc
     */
    public function getByEmail($email)
    {
        $model = $this->model;
        $this->resource->load($model, $email, 'email');
        return $model;
    }

    /**
     * Submit
     *
     * @param AnswerInterface $answer
     * @return StudentInterface
     */
    public function submit($answer)
    {
        $studentId = $answer->getId();
        $isAnswerCorrect = $answer->getIsCorrectAnswer();
        $time = $answer->getTime();
        if ($studentId) {
            $student = $this->getById($studentId);
        }
        if ($isAnswerCorrect) {
//            $level = $student->getLevel();
//            if ($level === 'beginer') {
//                $product = $this->collectionFactory->create()
//                    ->addFieldToFilter('type_id', 'simple')
//                    ->addAttributeToFilter('level', \Magestore\Student\Model\Source\Level::LEVEL_1)
//                    ->getFirstItem();
//            } else if ($level === 'junior') {
//                $product = $this->collectionFactory->create()
//                    ->addFieldToFilter('type_id', 'simple')
//                    ->addAttributeToFilter('level', \Magestore\Student\Model\Source\Level::LEVEL_2)
//                    ->getFirstItem();
//            } else if ($level === 'expert') {
//                $product = $this->collectionFactory->create()
//                    ->addFieldToFilter('type_id', 'simple')
//                    ->addAttributeToFilter('level', \Magestore\Student\Model\Source\Level::LEVEL_3)
//                    ->getFirstItem();
//            }
            $barcode = "SUCCESS";
            $student->setBarcode($barcode);
        } else {
            $student->setBarcode('');
        }
        if ($time) {
            $student->setTime($time);
        }
        $student->setIsAnswer(true);
        $student->save();
        return $student;
    }

    /**
     * @inheritDoc
     */
    public function getPresent($id)
    {
        if ($id) {
            $student = $this->getById($id);
        }
        $student->setHasTakenTheGift(true);
        $student->save();
        return $student;
    }
}
