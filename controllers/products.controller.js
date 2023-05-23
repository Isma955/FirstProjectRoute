module.exports.productsController = {
    getProduct: (req, res) => {
      res.json('вывести продукт')

    },
  
    getProductById: (req, res) => {
      res.json(`Продукт с ID ${req.params.id}`)

    },

    postProduct : (req,res) => {
      res.json(`Добавляем продукт`)
    },

    deleteProduct : (req, res) => {
      res.json(`Удаляем продукт c ID ${req.params.id}`)
    }
  };

