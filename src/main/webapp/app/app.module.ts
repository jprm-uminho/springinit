import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SampleopenshiftSharedModule } from 'app/shared/shared.module';
import { SampleopenshiftCoreModule } from 'app/core/core.module';
import { SampleopenshiftAppRoutingModule } from './app-routing.module';
import { SampleopenshiftHomeModule } from './home/home.module';
import { SampleopenshiftEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SampleopenshiftSharedModule,
    SampleopenshiftCoreModule,
    SampleopenshiftHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SampleopenshiftEntityModule,
    SampleopenshiftAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SampleopenshiftAppModule {}
