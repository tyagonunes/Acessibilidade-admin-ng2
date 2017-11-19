import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ApiService {
    private url = 'http://localhost:5000/';
    private headers: Headers;
    constructor(private http: Http) {
       
    }

    createHeaders () {
        this.headers = new Headers();
    }

    getLocais() {
        this.createHeaders();

        return this.http
        .get(this.url + "locais", { headers: this.headers } )
        .map(res => res.json())
    }

    getUsers() {
        this.createHeaders();

        return this.http
        .get(this.url + "usuarios/listarAll", { headers: this.headers } )
        .map(res => res.json())
    }

    removeLocal(id) {
        return this.http
        .delete(this.url + "locais/"+ id, { headers: this.headers } )
        .map(res => res.json())
    }

    removeUser(id) {
        console.log(id);
        return this.http
        .delete(this.url + "usuarios/deleteUser/"+ id, { headers: this.headers } )
        .map(res => res.json())
    }

    editLocal(local) {
        this.createHeaders();

        return this.http
        .put(this.url + "locais", local, { headers: this.headers } )
        .map(res => res.json())
    }

}