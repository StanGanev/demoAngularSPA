import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string;

    constructor(private toastr: ToastrService, private router: Router) { }

    login(email: string, password: string) {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((data) => {
                firebase.auth()
                    .currentUser
                    .getIdToken()
                    .then((token: string) => {
                        this.token = token;
                        sessionStorage.setItem('authtoken', this.token);
                    })
                this.router.navigate(['/cars']);
                this.toastr.success('Successfully Logged In!', 'Success');
            })
            .catch((err) => {
                this.toastr.error(err.message, 'Warning');
            })

    }

    register(email: string, password: string) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((data) => {
                this.router.navigate(['/login']);
                this.toastr.success('Successfully Registered In!', 'Success')
            })
            .catch((err) => {
                this.toastr.error(err.message, 'Warning');
            })
    }

    logout() {
        firebase.auth().signOut()
            .then(() => {
                this.token = null;
                sessionStorage.clear();
                this.router.navigate(['/index']);
                this.toastr.success('Successfully Logged Out!', 'Success');
            });
    }

    getUserId() {
        return firebase.auth().currentUser.uid;
    }

    getToken() {
        this.token = sessionStorage.getItem('authtoken')
        return this.token;
    }

    isAuth(): boolean {
        return this.token != null;
    }

    isOwner(id): boolean {
        if(id === this.getUserId()) {
            return true;
        }
        return false;
    }
}