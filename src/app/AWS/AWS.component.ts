import {Component, Directive, Input, OnInit} from '@angular/core';
import {UploadFileService} from '../services/upload.service';
import {Subscription} from "rxjs";
import {AuthService} from '@src/app/auth/auth.service';

@Component({
    selector: 'app-AWS',
    templateUrl: './AWS.component.html',
    styleUrls: ['./AWS.component.css'],
    // directives: [DefaultImage]
})

export class FormUploadComponent implements OnInit {

    selectedFiles: FileList;
    // cacheBuster: Date = new Date();
    username: Subscription = this.auth
        .getUser$()
        .subscribe(user => this.username = user.nickname);

    constructor(private uploadService: UploadFileService, private auth: AuthService) {
    }

    ngOnInit() {
    }

    upload() {
        const file = this.selectedFiles.item(0);
        this.uploadService.uploadFile(file, this.username);
        this.delay(3000).then(() => document.getElementById('profileImg').setAttribute('src',
            'https://bubblechat.s3.us-east-2.amazonaws.com/' + this.username + 'profile?cb=' + Date()));

    }

    selectFile(event) {
        this.selectedFiles = event.target.files;
    }

    private delay(ms: number)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
