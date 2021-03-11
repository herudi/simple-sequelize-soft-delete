'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('item', {
            id: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            brand_id: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: {
                        tableName: 'brand'
                    },
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(255)
            },
            price: {
                allowNull: false,
                type: Sequelize.DECIMAL
            },
            status: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            description: {
                allowNull: true,
                type: Sequelize.STRING(200)
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            deleted_at: {
              allowNull: true,
              type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('item');
    }
};
