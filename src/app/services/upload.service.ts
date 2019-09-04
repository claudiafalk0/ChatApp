import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import {environment} from "@src/environments/environment";

export class UploadFileService {
    FOLDER = 'profile';

    uploadFile(file, name) {
        const contentType = file.type;
        const bucket = new S3(
            {
                accessKeyId: environment.AWS.AWSAccessKeyId,
                secretAccessKey: environment.AWS.AWSSecretKey,
                region: 'us-east-2'
            }
        );
        const params = {
            Bucket: environment.AWS.Bucket,
            Key: name + this.FOLDER,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
//for upload progress
        /*bucket.upload(params).on('httpUploadProgress', function (evt) {
                  console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
              }).send(function (err, data) {
                  if (err) {
                      console.log('There was an error uploading your file: ', err);
                      return false;
                  }
                  console.log('Successfully uploaded file.', data);
                  return true;
              });*/
    };
}
