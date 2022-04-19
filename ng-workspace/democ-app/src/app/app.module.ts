import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BookformComponent } from './bookform/bookform.component';
// import { BooksdaoService } from './booksdao.service'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'books', component: BookCatlogComponent },
  { path: 'addBook', component: BookformComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PriceDiscountPipe,
    BookComponent,
    TabComponent,
    BookCatlogComponent,
    NewsComponent,
    MenuComponent,
    HomeComponent,
    BookformComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
