var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'keyedin-service-provider-ltd', 
    api_key: '832135497729216', 
    api_secret: 'PqM3NjHPUJ1cYBSNa787uJd1950' 
  });
var fs = require('fs');


module.exports = {


decodeBase64: function decodeBase64(base64String, url) {
    let image = base64String.split(';base64,').pop();
    const fileUrl = __dirname + '/temp_files/' + generateToken(10) + '.jpg';
    fs.writeFile(fileUrl, image, {encoding: 'base64'}, function(err) {
        return url(fileUrl)
    });
},

uploadImage: function uploadImage(image, callback) {
    cloudinary.uploader.upload(image, function(error, result) {
        if (error) {
            console.log(error)
        }
        if (result) {
            fs.unlinkSync(image)
            return  callback(url = result.secure_url)
        }
    });
},

uploadVideo: function uploadVideo(video, callback) {
    cloudinary.uploader.upload(video, { 
      resource_type: "video", 
      public_id: "KeyedIn",
      chunk_size: 6000000,
      eager: [
        { width: 300, height: 300, crop: "pad", audio_codec: "none" }, 
        { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],                                   
      eager_async: true,
      //eager_notification_url: "" 
    }, function(error, result) {
        if (error) {
            console.log(error)
        }
        if (result) {
            return  callback(url = result.secure_url)
        }
    });
}

}

function generateToken(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }