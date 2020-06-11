<?php

/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Api\Data\Student;

interface AnswerInterface
{
    const ID = 'id';
    const IS_CORRECT_ANSWER = 'is_correct_answer';
    const TIME = 'time';
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
     * @return boolean|null
     */
    public function getIsCorrectAnswer();

    /**
     * Set isCorrectAnswer
     *
     * @param boolean|null $isCorrectAnswer
     * @return $this
     */
    public function setIsCorrectAnswer($isCorrectAnswer);

    /**
     * Get Name
     *
     * @return float|null
     */
    public function getTime();

    /**
     * Set isCorrectAnswer
     *
     * @param float $time
     * @return $this
     */
    public function setTime($time);
}