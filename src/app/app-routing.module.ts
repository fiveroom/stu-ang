import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProViewComponent } from './views/pro-view/pro-view.component';
import { OtherViewComponent } from './views/oteherView/other-view/other-view.component';
import { PageNoComponent } from './views/page-no/page-no.component';
import { OterChildOneComponent } from './views/oteherView/oter-child-one/oter-child-one.component';
import { OterChildTwoComponent } from './views/oteherView/oter-child-two/oter-child-two.component';

const routes: Routes = [
    { path: '', component: ProViewComponent },
    {
        path: 'other', component: OtherViewComponent,
        children: [
            { path: 'other/one', component: OterChildOneComponent },
            { path: 'other/two', component: OterChildTwoComponent },
        ]
    },
    { path: '**', component: PageNoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
