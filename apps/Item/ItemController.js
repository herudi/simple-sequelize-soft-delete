const { Router } = require("baskom");
const ItemService = require("./ItemService");

class ItemController extends Router {
    constructor(){
        super();
        this.service = new ItemService();
        this.get('/item', _ => this.service.findAll());
        this.get('/item/:id', (req, res) => this.service.findById(req.params.id));
        this.get('/item-search', (req, res) => this.service.search(req.query));
        this.post('/item', (req, res) => {
            res.status(201);
            return this.service.save(req.body);
        });
        this.put('/item/:id', (req, res) => this.service.update(req.params.id, req.body));
        this.delete('/item/:id', (req, res) => this.service.delete(req.params.id));
    }
}

module.exports = new ItemController();