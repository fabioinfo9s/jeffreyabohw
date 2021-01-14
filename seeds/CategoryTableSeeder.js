var categorySchema = require('../schema/CategoriesSchema');

function run() {
    const table = {
        name: 'Computing and ICT'
    }
    categorySchema.findOne({ name: table.name }, function(reject, resolve) {
        if (!resolve) {
            var saveTable = new categorySchema(table);
            saveTable.save();
        }
    })

}