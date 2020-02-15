import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { SecendComponent } from './secend/secend.component';
import { FormsModule } from '@angular/forms';

import { MobileDataService } from './all-data.service';
import { BrandFilterPipe } from './brand-filter.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { ImgViewComponent } from './img-view/img-view.component';
import { MobileCardComponent } from './mobile-card/mobile-card.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SearchInputService } from './search-input.service';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { UniquePipe } from './unique.pipe';
import { MinMaxPipePipe } from './min-max-pipe.pipe';
import { CategoryFilterPipe } from './category-filter.pipe';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal.directive';
import { FilterInMobileComponent } from './filter-in-mobile/filter-in-mobile.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { RamFilterPipe } from './ram-filter.pipe';
import { OrderByPipe } from './order-by.pipe';
import { RomFilterPipe } from './rom-filter.pipe';
import { CustomFilterPipe } from './custom-filter.pipe';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    MainComponent,
    SecendComponent,
    BrandFilterPipe,
    CapitalizePipe,
    ImgViewComponent,
    MobileCardComponent,
    RangeSliderComponent,
    CheckOutComponent,
    DynamicTableComponent,
    UniquePipe,
    MinMaxPipePipe,
    CategoryFilterPipe,
    ModalComponent,
    ModalDirective,
    FilterInMobileComponent,
    MobileListComponent,
    RamFilterPipe,
    OrderByPipe,
    RomFilterPipe,
    CustomFilterPipe,
    UserFormComponent,
    UserLoginComponent,
    UserDetailComponent

  ],
  entryComponents: [
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [MobileDataService, SearchInputService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

