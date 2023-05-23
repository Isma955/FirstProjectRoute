module.exports.brandsController = {

    getBrands : (req, res) => {
        res.json(`получить продукт`)
    },
    postBrands : (req, res) => {
        res.json(`Добавить продукт`)
    },
    deleteBrands : (req, res) => {
        res.json(`удалить продукт`)
    }

}


