import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Subscription} from "rxjs";

@Injectable({
    providedIn: "root"
})

export class UploadFileService {

    constructor(private http: HttpClient) {
    }

// export class UploadFileService {
    // FOLDER = 'profile';

    // uploadFile(file, name) {
    //     const contentType = file.type;
    //     const bucket = new S3(
    //         {
    //             accessKeyId: environment.AWS.AWSAccessKeyId,
    //             secretAccessKey: environment.AWS.AWSSecretKey,
    //             region: 'us-east-2'
    //         }
    //     );
    //     const params = {
    //         Bucket: environment.AWS.Bucket,
    //         Key: name + this.FOLDER,
    //         Body: file,
    //         ACL: 'public-read',
    //         ContentType: contentType
    //     };
    //     bucket.upload(params, function (err, data) {
    //         if (err) {
    //             console.log('There was an error uploading your file: ', err);
    //             return false;
    //         }
    //         console.log('Successfully uploaded file.', data);
    //         return true;
    //     });
    uploadFile = (file: File, name: Subscription) => {
        return this.http
            .post("https://protected-chamber-61114.herokuapp.com/sign_s3", {
                fileName: name + 'profile',
                fileType: file.type
            })
            .subscribe((data: any) => {
                    const {signedRequest} = data.data.returnData;
                    const options = {
                        headers: {
                            'Content-Type': file.type
                        }
                    };

                    console.log("POST SUCCESS");
                    this.http.put(signedRequest, file, options)
                        .subscribe((data: any) => {
                                console.log("PUT SUCCESS:", data)
                            },
                            (data) => {
                                console.log("PUT ERROR:", data)
                            },
                            () => console.log("PUT COMPLETE"))
                },
                (data) => {
                    console.log("POST ERROR:", data)
                },
                () => console.log("POST COMPLETE"))

        // .toPromise()
        // .then((response: any) => {
        //     const returnData = response.data.data.returnData;
        //     const signedRequest = returnData.signedRequest;
        //     const options = {
        //         headers: {
        //             'Content-Type': file.type
        //         }
        //     };
        //     console.log("signedRequest: " + signedRequest);
        //     this.http.put(signedRequest, file, options)
        //         .toPromise()
        //         .then(result => {
        //             console.log("Response from S3: " + result)
        //         })
        //         .catch(error => alert("ERROR " + JSON.stringify(error)))
        // })
        // .catch(error => alert(JSON.stringify(error)));
    }
}
