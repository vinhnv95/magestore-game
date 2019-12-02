<?php
/**
 * Copyright © 2019 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 *
 */

namespace Magestore\Student\Model\ResourceModel\Student\Grid;

use Magento\Framework\Data\Collection\Db\FetchStrategyInterface as FetchStrategy;
use Magento\Framework\Data\Collection\EntityFactoryInterface as EntityFactory;
use Magento\Framework\Event\ManagerInterface as EventManager;
use Psr\Log\LoggerInterface as Logger;

class Collection extends \Magento\Framework\View\Element\UiComponent\DataProvider\SearchResult
{

    /**
     * Initialize dependencies.
     *
     * @param EntityFactory $entityFactory
     * @param Logger $logger
     * @param FetchStrategy $fetchStrategy
     * @param EventManager $eventManager
     * @param string $mainTable
     * @param string $resourceModel
     */
    public function __construct(
        EntityFactory $entityFactory,
        Logger $logger,
        FetchStrategy $fetchStrategy,
        EventManager $eventManager,
        $mainTable = 'student',
        $resourceModel = \Magestore\Student\Model\ResourceModel\Student::class
    ) {
        parent::__construct($entityFactory, $logger, $fetchStrategy, $eventManager, $mainTable, $resourceModel);
    }
}