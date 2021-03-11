const { Application } = require("baskom");
const BrandController = require("./apps/Brand/BrandController");
const ItemController = require("./apps/Item/ItemController");

class App extends Application {
    constructor(){
        super();
        this.use('/api/v1', [BrandController, ItemController]);
    }
}

module.exports = App;