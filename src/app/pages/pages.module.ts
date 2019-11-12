import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import { AboutPage } from './about/about.page';
import { ContactPage } from './contact/contact.page';
import { BlogPage } from './blog/blog.page';
import { PortfolioPage } from './portfolio/portfolio.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

const Pages = [HomePage, BlogPage, PortfolioPage, AboutPage, ContactPage]

const Modules = [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
]


@NgModule({
    declarations: [...Pages],
    imports: [...Modules],
    exports: [...Pages],
    providers: [],
})
export class PagesModule { }