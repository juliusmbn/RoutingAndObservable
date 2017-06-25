import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { NgModule } from '@angular/core'
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpModule } from '@angular/http';

let routing =  RouterModule.forRoot([     
      {
        path: '',
        redirectTo: '/employees',
        pathMatch: 'full'
      },           
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'products' ,
        component: ProductsComponent
      },
      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}
])

@NgModule({
  declarations: [    
    AppComponent,    
    CustomersComponent,
    EmployeesComponent,
    ProductsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
