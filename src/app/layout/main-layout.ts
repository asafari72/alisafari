import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'main-layout',
    templateUrl: './main-layout.html',
    styleUrls: ['./main-layout.scss'],
    encapsulation:ViewEncapsulation.None
})
export class MainLayoutComponet implements OnInit {
    constructor() { }

    ngOnInit(): void { 
        
    }
}
