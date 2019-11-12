import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'as-contact.page',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    name: string = "";
    email: string = ""
}
