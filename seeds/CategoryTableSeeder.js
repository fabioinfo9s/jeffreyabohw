const { ModelBuildInstance } = require('twilio/lib/rest/autopilot/v1/assistant/modelBuild');
var categorySchema = require('../schema/CategoriesSchema');
var categoryData = [
    {
        name: 'Computing and ICT'
    }
]

module.exports = {
    run: function run() {
        console.log('function is running')
        categorySchema.find({}, function(reject, resolve) {
            if (resolve) {
                resolve.forEach((data) => {
                    categoryData.forEach((category) => {
                        if (data.name != category.name) {
                            var newData = new categorySchema (category);
                            newData.save();
                            console.log('saved to database!')
                        }
                    })
                })
            }
            if (!resolve) {
                var newData = new categorySchema (categoryData);
                newData.save();
                console.log('saved new to database!')
            }
        })
    
    }
}
