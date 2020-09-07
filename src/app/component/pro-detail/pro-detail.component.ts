import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { product } from '../../staData';
import { IProItem } from '../../DataStru/proAbout';
import { ProListService } from '../../service/pro-list.service';

@Component({
    selector: 'app-pro-detail',
    templateUrl: './pro-detail.component.html',
    styleUrls: ['./pro-detail.component.scss']
})
export class ProDetailComponent implements OnInit, OnChanges {
    @Input() proId: number;
    currPro: IProItem;

    constructor(private proService: ProListService) { }

    findProById(proId: number, arrData: any[]): IProItem {
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

    addProToSer() {
        this.proService.addProList(this.currPro);
    }

    proSerHas(){
        return this.proService.hasProInList(this.currPro.id) != -1
        // return false
    }

    ngOnInit(): void {
        // this.currPro = this.findProById(this.proId, product);
    }

    ngOnChanges(changes: SimpleChanges) {
        let proID = changes['proId'];
        if (proID.currentValue) {
            this.currPro = this.findProById(this.proId, product);
        }
    }

}
