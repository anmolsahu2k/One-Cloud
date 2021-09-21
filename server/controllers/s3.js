import dotenv from 'dotenv'
import fs from 'fs'
import S3 from 'aws-sdk/clients/s3.js';
dotenv.config();
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

function uploadFile(file, post) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: `${post.name}/${file.filename}`,
    }

    return s3.putObject(uploadParams).promise()
}

function deleteFile(fileKey) {
    const deleteParams = {
        Bucket: bucketName,
        Key: fileKey
    }

    return s3.deleteObject(deleteParams).promise();
}
export { uploadFile, deleteFile }