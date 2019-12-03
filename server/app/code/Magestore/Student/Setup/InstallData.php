<?php

/**
 * Copyright © 2017 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Magestore\Student\Setup;

use Magento\Framework\Setup\InstallDataInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;

/**
 * Class InstallData
 * @package Magestore\Student\Setup
 */
class InstallData implements InstallDataInterface
{

    /**
     * @var \Magento\Eav\Model\Entity\Type
     */
    protected $_entityTypeModel;

    /**
     * @var \Magento\Eav\Model\Entity\Attribute
     */
    protected $_catalogAttribute;

    /**
     * @var \Magento\Eav\Setup\EavSetup
     */
    protected $_eavSetup;

    /**
     *
     * @param \Magento\Eav\Setup\EavSetup $eavSetup
     * @param \Magento\Eav\Model\Entity\Type $entityType
     * @param \Magento\Eav\Model\Entity\Attribute $catalogAttribute
     */
    public function __construct(
        \Magento\Eav\Setup\EavSetup $eavSetup,
        \Magento\Eav\Model\Entity\Type $entityType,
        \Magento\Eav\Model\Entity\Attribute $catalogAttribute
    ) {
        $this->_eavSetup = $eavSetup;
        $this->_entityTypeModel = $entityType;
        $this->_catalogAttribute = $catalogAttribute;
    }

    /**
     * Installs data for a module
     *
     * @param ModuleDataSetupInterface $setup
     * @param ModuleContextInterface $context
     * @return void
     */
    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $entityTypeModel = $this->_entityTypeModel;
        $catalogAttributeModel = $this->_catalogAttribute;
        $installer = $this->_eavSetup;

        $setup->startSetup();

        $data['group'] = 'General';
        $data['type'] = 'int';
        $data['input'] = 'select';
        $data['label'] = 'Level';
        $data['backend'] = '';
        $data['required'] = 1;
        $data['visible'] = 1;
        $data['source'] = 'Magestore\Student\Model\Source\Level';
        $installer->addAttribute(
            $entityTypeModel->loadByCode('catalog_product')->getData('entity_type_id'),
            'level',
            $data
        );
        $level = $catalogAttributeModel->loadByCode('catalog_product', 'level');
        $level->addData($data)->save();

        $setup->endSetup();
    }
}
