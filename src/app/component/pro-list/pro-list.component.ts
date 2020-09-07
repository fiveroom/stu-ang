import { Component, OnInit } from '@angular/core';

import { ProListService } from '../../service/pro-list.service';

@Component({
    selector: 'app-pro-list',
    templateUrl: './pro-list.component.html',
    styleUrls: ['./pro-list.component.scss']
})
export class ProListComponent implements OnInit {

    constructor(private proServe: ProListService) { }

    get proList(){
        return this.proServe.getPro()
    }
    removePro(id:number){
        this.proServe.dealPro(id)
    }
    ngOnInit(): void {
    }

}
