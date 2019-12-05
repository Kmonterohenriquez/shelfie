module.exports = {
	//============ CREATE ONE PRODUCT ================/

	create(req, res, next) {
		const dbInstance = req.app.get('db');
		const { image_url, product_name, price } = req.body;

		dbInstance
			.create_product([image_url, product_name, price])
			.then(() => res.sendStatus(200))
			.catch(err => {
				res.status(500).send({
					errorMessage:
						'Oops! Something went wrong. Our engineers have been informed!'
				});
				console.log(err);
			});
	},

	//============ DELETE ONE PRODUCT ================/

	delete(req, res, next) {
		const dbInstance = req.app.get('db');
		const { id } = req.params;

		dbInstance
			.delete_product(id)
			.then(() => res.sendStatus(200))
			.catch(err => {
				res.status(500).send({
					errorMessage:
						'Oops! Something went wrong. Our engineers have been informed!'
				});
				console.log(err);
			});
	},

	//============ UPDATE ONE PRODUCT ================/

	update(req, res, next) {
		const dbInstance = req.app.get('db');
        const { params, query } = req;

        dbInstance.update_product([params.id, query.image_url, query.product_name,  query.price])
        .then(()=> res.sendStatus(200))
        .catch( err => {
            res.status(500).send({
                errorMessage:'Oops! Something went wrong. Our engineers have been informed!'
            })
            console.log(err)
        })
	},

	//============ GET ONE PRODUCT ================//

	getOne(req, res, next) {
		const dbInstance = req.app.get('db');
		const { id } = req.params;
		dbInstance
			.read_product(id)
			.then(product => res.status(200).send(product))
			.catch(err => {
				res.status(500).send({
					errorMessage:
						'Oops! Something went wrong. Our engineers have been informed!'
				});
				console.log(err);
			});
	},

	//============ GET ALL PRODUCTS ================/
	getAll(req, res, next) {
        const dbInstance = req.app.get('db');
        
		dbInstance.read_products()
			.then(products => {res.status(200).send(products)})
			.catch(err => {
				res.status(500).send({
					errorMessage:
						'Oops! Something went wrong. Our engineers have been informed!'
				});
				console.log(err);
			});
	}
};
