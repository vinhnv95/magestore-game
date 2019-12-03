<?php
/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Model;

use Magestore\Student\Api\Data\Student\AnswerInterface;

class Answer extends \Magento\Framework\DataObject implements AnswerInterface
{
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
    public function getIsCorrectAnswer()
    {
        return $this->getData(self::IS_CORRECT_ANSWER);
    }

    /**
     * Set isCorrectAnswer
     *
     * @param string|null $isCorrectAnswer
     * @return $this
     */
    public function setIsCorrectAnswer($isCorrectAnswer)
    {
        return $this->setData(self::IS_CORRECT_ANSWER, $isCorrectAnswer);
    }
}
