<?php

/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Api\Data\Student;

interface StudentInterface
{

    const ID = 'ID';
    const NAME = 'name';
    const EMAIL = 'email';
    const PHONE = 'phone';
    const BIRTHDAY = 'birthday';
    const GRADE = 'grade';
    const FACULTY = 'faculty';
    const IS_ANSWER = 'is_answer';
    const BARCODE = 'barcode';

    /**
     * Get Id
     *
     * @return int|null
     */
    public function getId();

    /**
     * Set Id
     *
     * @param int|null $id
     * @return $this
     */
    public function setId($id);

    /**
     * Get Name
     *
     * @return string|null
     */
    public function getName();

    /**
     * Set Name
     *
     * @param string|null $name
     * @return $this
     */
    public function setName($name);

    /**
     * Get Email
     *
     * @return string|null
     */
    public function getEmail();

    /**
     * Set Email
     *
     * @param string|null $description
     * @return $this
     */
    public function setEmail($email);

    /**
     * Get Phone
     *
     * @return string|null
     */
    public function getPhone();

    /**
     * Set Phone
     *
     * @param string|null $phone
     * @return $this
     */
    public function setPhone($phone);

    /**
     * Get Birthday
     *
     * @return string|null
     */
    public function getBirthday();

    /**
     * Set Birthday
     *
     * @param string|null $birthday
     * @return $this
     */
    public function setBirthday($birthday);

    /**
     * Get Grade
     *
     * @return string|null
     */
    public function getGrade();

    /**
     * Set Grade
     *
     * @param string|null $grade
     * @return $this
     */
    public function setGrade($grade);

    /**
     * Get Faculty
     *
     * @return string|null
     */
    public function getFaculty();

    /**
     * Set Faculty
     *
     * @param string|null $faculty
     * @return $this
     */
    public function setFaculty($faculty);

    /**
     * Get Is Answer
     *
     * @return string|null
     */
    public function getIsAnswer();

    /**
     * Set Is Answer
     *
     * @param boolean|null $isAnswer
     * @return $this
     */
    public function setIsAnswer($isAnswer);

    /**
     * Get Barcode
     *
     * @return string|null
     */
    public function getBarcode();

    /**
     * Set Barcode
     *
     * @param string|null $barcode
     * @return $this
     */
    public function setBarcode($barcode);
}