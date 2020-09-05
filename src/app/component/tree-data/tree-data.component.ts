import { Component, OnInit } from '@angular/core';

import { product } from '../../staData';

@Component({
    selector: 'app-tree-data',
    templateUrl: './tree-data.component.html',
    styleUrls: ['./tree-data.component.scss']
})
export class TreeDataComponent implements OnInit {

    product = product;
    choiceId: number;

    constructor() { }

    findStartItem(arr: any[]): number {
        for (let item of arr) {
            if (item.children) {
                let id = this.findStartItem(item.children);
                if (id) return id;
            } else {
                return item.id
            }
        }
        return null
    }

    openChild(){

    }

    ngOnInit(): void {
        this.choiceId = this.findStartItem(this.product);
    }

}
