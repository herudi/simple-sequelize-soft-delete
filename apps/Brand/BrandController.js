const { Router } = require("baskom");
const BrandService = require("./BrandService");

class BrandController extends Router {
    constructor() {
        super();
        this.service = new BrandService();
        this.get('/brand', _ => this.service.findAll());
        this.get('/brand/:id', (req, res) => this.service.findById(req.params.id));
        this.get('/brand-search', (req, res) => this.service.search(req.query));
        this.post('/brand', (req, res) => {
            res.status(201);
            return this.service.save(req.body);
        });
        this.put('/brand/:id', (req, res) => this.service.update(req.params.id, req.body));
        this.delete('/brand/:id', (req, res) => this.service.delete(req.params.id));
    }
}

module.exports = new BrandController();