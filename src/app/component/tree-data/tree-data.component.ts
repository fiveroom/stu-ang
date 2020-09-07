import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { product } from '../../staData';
import {IProFItem} from '../../DataStru/proAbout';

@Component({
    selector: 'app-tree-data',
    templateUrl: './tree-data.component.html',
    styleUrls: ['./tree-data.component.scss']
})

export class TreeDataComponent implements OnInit {

    @Output() outProID = new EventEmitter();

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
    chliceCPId(id: number) {
        this.choiceId = id;
        this.outProID.emit(id);
    }
    openChild(proItem: IProFItem) {
        let ind = this.choiceFIdArr.findIndex(it => it == proItem.id);
        ind != -1 ? this.choiceFIdArr.splice(ind, 1) : this.choiceFIdArr.push(proItem.id);
    }

    ngOnInit(): void {
        this.choiceId = this.findStartItem(this.product);
        this.outProID.emit(this.choiceId);
        this.product.forEach(it => {
            it.children && this.choiceFIdArr.push(it.id);
        })
    }
}
