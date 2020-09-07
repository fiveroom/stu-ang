import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import { NzListModule } from 'ng-zorro-antd/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeDataComponent } from './component/tree-data/tree-data.component';
import { ProDetailComponent } from './component/pro-detail/pro-detail.component';
import { ProListService } from './service/pro-list.service';
import { ProListComponent } from './component/pro-list/pro-list.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { ProViewComponent } from './views/pro-view/pro-view.component';
import { OtherViewComponent } from './views/oteherView/other-view/other-view.component';
import { PageNoComponent } from './views/page-no/page-no.component';
import { OterChildOneComponent } from './views/oteherView/oter-child-one/oter-child-one.component';
import { OterChildTwoComponent } from './views/oteherView/oter-child-two/oter-child-two.component';

@NgModule({
    declarations: [
        AppComponent,
        TreeDataComponent,
        ProDetailComponent,
        ProListComponent,
        TopBarComponent,
        ProViewComponent,
        OtherViewComponent,
        PageNoComponent,
        OterChildOneComponent,
        OterChildTwoComponent,

    ],  // 该应用所拥有的组件
    imports: [
        BrowserModule,
        AppRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzDescriptionsModule,
        NzListModule
    ],  // 导入服务
    providers: [ProListService],  // 各种服务提供者
    bootstrap: [AppComponent]  // 根组件
})
export class AppModule { }
