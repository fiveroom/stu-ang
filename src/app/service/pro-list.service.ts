import { Injectable } from '@angular/core';

import { IProItem } from '../DataStru/proAbout';

@Injectable({
    providedIn: 'root'
})
export class ProListService {

    proList: IProItem[] = [];

    constructor() {
    }

    addProList(proItem: IProItem) {
        this.proList.push(proItem);
    }

    hasProInList(proId: number) {
        return this.proList.findIndex(it => it.id == proId);
    }
    dealPro(proId: number){
        this.proList.splice(this.hasProInList(proId), 1);
    }
    clearPro() {
        this.proList = [];
    }

    getPro() {
        return this.proList
    }
}
