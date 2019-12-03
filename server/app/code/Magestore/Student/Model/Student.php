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
     * Get Email
     *
     * @return string|null
     */
    public function getEmail()
    {
        return $this->getData(self::EMAIL);
    }

    /**
     * Set Email
     *
     * @param string|null $description
     * @return $this
     */
    public function setEmail($email)
    {
        return $this->setData(self::EMAIL, $email);
    }

    /**
     * Get Phone
     *
     * @return string|null
     */
    public function getPhone()
    {
        return $this->getData(self::PHONE);
    }

    /**
     * Set Phone
     *
     * @param string|null $phone
     * @return $this
     */
    public function setPhone($phone)
    {
        return $this->setData(self::PHONE, $phone);
    }

    /**
     * Get Birthday
     *
     * @return string|null
     */
    public function getBirthday()
    {
        return $this->getData(self::BIRTHDAY);
    }

    /**
     * Set Birthday
     *
     * @param string|null $birthday
     * @return $this
     */
    public function setBirthday($birthday)
    {
        return $this->setData(self::BIRTHDAY, $birthday);
    }

    /**
     * Get Grade
     *
     * @return string|null
     */
    public function getGrade()
    {
        return $this->getData(self::BIRTHDAY);
    }

    /**
     * Set Grade
     *
     * @param string|null $grade
     * @return $this
     */
    public function setGrade($grade)
    {
        return $this->setData(self::GRADE, $grade);
    }

    /**
     * Get Faculty
     *
     * @return string|null
     */
    public function getFaculty()
    {
        return $this->getData(self::FACULTY);
    }

    /**
     * Set Faculty
     *
     * @param string|null $faculty
     * @return $this
     */
    public function setFaculty($faculty)
    {
        return $this->setData(self::FACULTY, $faculty);
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
     * Get GPA
     *
     * @return string|null
     */
    public function getGpa()
    {
        return $this->getData(self::GPA);
    }

    /**
     * Set GPA
     *
     * @param string|null $gpa
     * @return $this
     */
    public function setGpa($gpa)
    {
        return $this->setData(self::GPA, $gpa);
    }

    /**
     * Get Programing Language
     *
     * @return string|null
     */
    public function getProgramingLanguage()
    {
        return $this->getData(self::PROGRAMING_LANGUAGE);
    }

    /**
     * Set Programing Language
     *
     * @param string|null $programing_language
     * @return $this
     */
    public function setProgramingLanguage($programing_language)
    {
        return $this->setData(self::PROGRAMING_LANGUAGE, $programing_language);
    }
}
