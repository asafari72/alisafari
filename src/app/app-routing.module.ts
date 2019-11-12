import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { ContactPage } from './pages/contact/contact.page';
import { BlogPage } from './pages/blog/blog.page';
import { PortfolioPage } from './pages/portfolio/portfolio.page';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'blog', component: BlogPage },
  { path: 'portfolio', component: PortfolioPage },
  { path: 'about', component: AboutPage },
  { path: 'contact', component: ContactPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
