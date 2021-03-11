const { Model } = require("sequelize");

class Brand extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    primaryKey: true,
                    allowNull: false,
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4
                },
                name: {
                    allowNull: false,
                    type: DataTypes.STRING(100)
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
                tableName: 'brand',
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                deletedAt: 'deleted_at',
                timestamps: true,
                paranoid: true,
                sequelize 
            }
        );
    }
}

module.exports = Brand;