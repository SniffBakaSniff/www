import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about', component: AboutComponent},

    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];