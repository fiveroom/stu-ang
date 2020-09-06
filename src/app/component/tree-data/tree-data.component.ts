import { Component, OnInit } from '@angular/core';

import { product } from '../../staData';

interface ProItem {
    name: string,
    price: number,
    description: string,
    id: number,
    fId: number,
}

interface ProFItem {
    title: string,
    id: number,
    fId: number,
    children: ProItem[]
}

@Component({
    selector: 'app-tree-data',
    templateUrl: './tree-data.component.html',
    styleUrls: ['./tree-data.component.scss']
})

export class TreeDataComponent implements OnInit {

    product = product;
    choiceId: number;
    choiceFIdArr: number[] = [];

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

    openChild(proItem: ProFItem) {
        let ind = this.choiceFIdArr.findIndex(it => it == proItem.id);
        ind != -1 ? this.choiceFIdArr.splice(ind, 1) : this.choiceFIdArr.push(proItem.id);
    }

    ngOnInit(): void {
        this.choiceId = this.findStartItem(this.product);
        this.product.forEach(it => {
            it.children && this.choiceFIdArr.push(it.id);
        })
    }
}
