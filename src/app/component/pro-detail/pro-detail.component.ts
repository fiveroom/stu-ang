import { Component, OnInit, Input } from '@angular/core';

import { product } from '../../staData';

interface ProItem {
    name: string,
    price: number,
    description: string,
    id: number,
    fId: number,
}

@Component({
    selector: 'app-pro-detail',
    templateUrl: './pro-detail.component.html',
    styleUrls: ['./pro-detail.component.scss']
})
export class ProDetailComponent implements OnInit {
    @Input() proId: number;
    currPro: ProItem;

    constructor() { }

    findProById(proId: number, arrData: any[]) {
        for (let proItem of arrData) {
            if (proItem.children) {
                let obj = this.findProById(proId, proItem.children);
                if (obj) return obj
            } else if (proItem.id === proId) {
                return proItem
            }
        }
        return null
    }

    ngOnInit(): void {
        this.currPro = this.findProById(this.proId, product);

    }

}
