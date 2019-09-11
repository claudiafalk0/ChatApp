import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UploadFileService {

    constructor(private http: HttpClient) {
    }

    uploadFile = (file: File, name: Subscription) => {
        return this.http
            .post('https://protected-chamber-61114.herokuapp.com/sign_s3', {
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

                    console.log('POST SUCCESS');
                    this.http.put(signedRequest, file, options)
                        .subscribe((next: any) => {
                                console.log('PUT SUCCESS:', next);
                            },
                            (error) => {
                                console.log('PUT ERROR:', error);
                            },
                            () => console.log('PUT COMPLETE'));
                },
                (data) => {
                    console.log('POST ERROR:', data);
                },
                () => console.log('POST COMPLETE'));
    }
}
