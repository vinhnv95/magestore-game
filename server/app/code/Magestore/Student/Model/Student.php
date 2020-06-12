<?php
/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Model;

use Magestore\Student\Api\Data\Student\StudentInterface;

class Student extends \Magento\Framework\Model\AbstractModel implements StudentInterface
{
    /**
     * Constructor
     *
     * @return void
     */
    protected function _construct()
    {
        parent::_construct();
        $this->_init(\Magestore\Student\Model\ResourceModel\Student::class);
    }

    /**
     * Get Id
     *
     * @return int|null
     */
    public function getId()
    {
        return $this->getData(self::ID);
    }

    /**
     * Set Id
     *
     * @param int|null $id
     * @return $this
     */
    public function setId($id)
    {
        return $this->setData(self::ID, $id);
    }

    /**
     * Get Name
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->getData(self::NAME);
    }

    /**
     * Set Name
     *
     * @param string|null $name
     * @return $this
     */
    public function setName($name)
    {
        return $this->setData(self::NAME, $name);
    }

    /**
     * @inheritDoc
     */
    public function getEmail()
    {
        return $this->getData(self::EMAIL);
    }

    /**
     * @inheritDoc
     */
    public function setEmail($email)
    {
        return $this->setData(self::EMAIL, $email);
    }

    /**
     * @inheritDoc
     */
    public function getPhone()
    {
        return $this->getData(self::PHONE);
    }

    /**
     * @inheritDoc
     */
    public function setPhone($phone)
    {
        return $this->setData(self::PHONE, $phone);
    }

    /**
     * @inheritDoc
     */
    public function getMssv()
    {
        return $this->getData(self::MSSV);
    }

    /**
     * @inheritDoc
     */
    public function setMssv($mssv)
    {
        return $this->setData(self::MSSV, $mssv);
    }

    /**
     * Get Is Answer
     *
     * @return string|null
     */
    public function getIsAnswer()
    {
        return $this->getData(self::IS_ANSWER);
    }

    /**
     * Set Is Answer
     *
     * @param boolean|null $isAnswer
     * @return $this
     */
    public function setIsAnswer($isAnswer)
    {
        return $this->setData(self::IS_ANSWER, $isAnswer);
    }

    /**
     * Get Barcode
     *
     * @return string|null
     */
    public function getBarcode()
    {
        return $this->getData(self::BARCODE);
    }

    /**
     * Set Barcode
     *
     * @param string|null $barcode
     * @return $this
     */
    public function setBarcode($barcode)
    {
        return $this->setData(self::BARCODE, $barcode);
    }

    /**
     * Get Level
     *
     * @return string|null
     */
    public function getLevel()
    {
        return $this->getData(self::LEVEL);
    }

    /**
     * Set Level
     *
     * @param string|null $level
     * @return $this
     */
    public function setLevel($level)
    {
        return $this->setData(self::LEVEL, $level);
    }

    /**
     * @inheritDoc
     */
    public function getTime()
    {
        return $this->getData(self::TIME);
    }

    /**
     * @inheritDoc
     */
    public function setTime($time)
    {
        return $this->setData(self::TIME, $time);
    }

    /**
     * @inheritDoc
     */
    public function getHasTakenTheGift()
    {
        return $this->getData(self::HAS_TAKEN_THE_GIFT);
    }

    /**
     * @inheritDoc
     */
    public function setHasTakenTheGift($hasTakenTheGift)
    {
        return $this->setData(self::HAS_TAKEN_THE_GIFT, $hasTakenTheGift);
    }
}
