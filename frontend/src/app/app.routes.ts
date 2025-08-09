import { Routes } from '@angular/router';
import { HomeScreen } from './home-screen/home-screen';
import { SplashScreenComponent } from './splash-screen/splash-screen';

export const routes: Routes = [
    {path: '', component: SplashScreenComponent},
    {path: 'home', component: HomeScreen},
    { path: '**', redirectTo: '' }
];
