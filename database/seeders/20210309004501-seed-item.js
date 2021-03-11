'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('item', [
            {
                id: 'fbbf27ab-56e2-42ad-b75f-53dcff32a335',
                brand_id: '249bc87b-d9be-44f3-a3a3-f80c08bb1937',
                name: 'Pepsodent',
                price: 2000,
                status: 1,
                description: null,
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: null
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('item', null, {});
    }
};
