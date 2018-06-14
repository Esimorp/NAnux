const Koa = require('koa');
const app = new Koa();
const Minio = require('minio');
const fs = require('fs');

const minioClient = new Minio.Client({
    endPoint: '192.168.1.103',
    port: 9000,
    secure: false,
    accessKey: 'RYX1YD7WG3MW20G6QE7V',
    secretKey: 'Ey1eJmcq/Tj6uGem7EMDPlSKpckvkd+cP4bVIxVl'
});

minioClient.makeBucket('test', 'us-east-1', function (err) {
    if (err) return console.log(err)
    console.log('Bucket created successfully in local.')
    minioClient.fPutObject('test', 'test_file_key.jpg', '../testFileResource/test_image.jpg', {}, function (err, etag) {
        if (err) return console.log(err)
        console.log('File uploaded successfully.')
    });
});

// minioClient.getObject('test', 'test_file_key.jpg', function (err, dataStream) {
//     dataStream.pipe(fs.createWriteStream('../testFileResource/testDownload.jpg')).on('finish', function () {
//         this.end();
//     });
// });

// app.use(ctx => {
//
// });

app.listen(3000);