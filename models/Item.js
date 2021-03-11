const { Model } = require("sequelize");

class Item extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    primaryKey: true,
                    allowNull: false,
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4
                },
                brand_id: {
                    allowNull: false,
                    type: DataTypes.UUID,
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
                    type: DataTypes.STRING(100)
                },
                price: {
                    allowNull: false,
                    type: DataTypes.DECIMAL
                },
                status: {
                    allowNull: false,
                    type: DataTypes.INTEGER
                },
                description: {
                    allowNull: true,
                    type: DataTypes.STRING(200)
                },
                created_at: {
                    allowNull: false,
                    type: DataTypes.DATE
                },
                updated_at: {
                    allowNull: false,
                    type: DataTypes.DATE
                },
                deleted_at: {
                    allowNull: true,
                    type: DataTypes.DATE
                }
            }, 
            {
                tableName: 'item',
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                deletedAt: 'deleted_at',
                timestamps: true,
                paranoid: true,
                sequelize 
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'brand_id'
        });
    }
}

module.exports = Item;