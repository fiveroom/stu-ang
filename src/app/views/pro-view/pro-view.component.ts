import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pro-view',
    templateUrl: './pro-view.component.html',
    styleUrls: ['./pro-view.component.scss']
})
export class ProViewComponent implements OnInit {
    proId: number;
    constructor() { }

    ngOnInit(): void {
    }

}
