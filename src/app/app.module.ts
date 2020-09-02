import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeDataComponent } from './component/tree-data/tree-data.component';

@NgModule({
	declarations: [
		AppComponent,
		TreeDataComponent,
	],  // 该应用所拥有的组件
	imports: [
		BrowserModule,
		AppRoutingModule
	],  // 导入服务
	providers: [],  // 各种服务提供者
	bootstrap: [AppComponent]  // 根组件
})
export class AppModule { }
