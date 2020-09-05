import { Component, OnInit } from '@angular/core';

import { product } from '../../staData';

@Component({
    selector: 'app-tree-data',
    templateUrl: './tree-data.component.html',
    styleUrls: ['./tree-data.component.scss']
})
export class TreeDataComponent implements OnInit {

    product = product;

    constructor() { }

    ngOnInit(): void {
    }

}
