<?php

/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Api\Data\Student;

interface StudentInterface
{

    const ID = 'id';
    const NAME = 'name';
    const EMAIL = 'email';
    const MSSV = 'mssv';
    const IS_ANSWER = 'is_answer';
    const BARCODE = 'barcode';
    const LEVEL = 'level';
    const TIME = 'time';
    const HAS_TAKEN_THE_GIFT = 'has_taken_the_gift';

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
     * @param string|null $email
     * @return $this
     */
    public function setEmail($email);

    /**
     * Get MSSV
     *
     * @return string|null
     */
    public function getMssv();

    /**
     * Set Email
     *
     * @param string|null $mssv
     * @return $this
     */
    public function setMssv($mssv);

    /**
     * Get Is Answer
     *
     * @return boolean|int|null
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

    /**
     * Get Level
     *
     * @return string|null
     */
    public function getLevel();

    /**
     * Set Level
     *
     * @param string|null $level
     * @return $this
     */
    public function setLevel($level);

    /**
     * Get Time
     *
     * @return float|null
     */
    public function getTime();

    /**
     * Set Time
     *
     * @param float $time
     * @return $this
     */
    public function setTime($time);

    /**
     * Get Has Taken The Gift
     *
     * @return boolean|int|null
     */
    public function getHasTakenTheGift();

    /**
     * Set Has Taken The Gift
     *
     * @param boolean|null $hasTakenTheGift
     * @return $this
     */
    public function setHasTakenTheGift($hasTakenTheGift);
}
