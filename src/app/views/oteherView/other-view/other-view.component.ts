import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-other-view',
  templateUrl: './other-view.component.html',
  styleUrls: ['./other-view.component.scss']
})
export class OtherViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      console.log(this.route)
  }

}
