var usersSchema = require('../schema/UsersSchema');
var userdata = [
    {
        first_name :  'John',
        last_name :  "Doe",
        email :  'johndoe@gmail.com',
        phone :  '08099999999',
        description :  "Not important",
        availability :  "online",
        email_verified_at :  now(),
        phone_verified_at :  now(),
        address :  "Lagos",
        lng :  "124",
        lat :  "134",
        password :  '123456', // secret
        remember_token : random(10),
        country_id :  1,
        state_id :  1,
        city_id :  1,        
    }
]

function run() {
    
}