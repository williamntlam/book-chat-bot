import { authGuard } from './../../core/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CharacterProfileComponent } from '../character-profile/character-profile.component';

const routes: Routes = [
  {
    path: 'character',
    component: CharacterProfileComponent,
    canActivate: [authGuard],
  },
];

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
})
export class HomeLayoutComponent {
  characters_row_one = [
    { name: 'Sonic The Hedgehog', image: '/sonic.jpg' },
    { name: 'Mario', image: '/mario.avif' },
    { name: 'Harry Potter', image: 'utkarsh.jpg' },
    { name: 'Homer Simpson', image: '/homer.avif' },
    { name: 'Spongebob Squarepants', image: '/spongebob.avif' },
    { name: 'Mike Wazowski', image: '/mikew.webp' },
    { name: 'Mr. Krabs', image: '/mrkrabs.png' },
    { name: 'Spiderman', image: '/spiderman.jpg' },
  ];
  characters_row_two = [
    { name: 'Batman', image: '/batman.jpg' },
    { name: 'Peter Griffin', image: '/pettergriffin.webp' },
    { name: 'Sheriff Woody', image: '/woody.webp' },
    { name: 'Buzz Lightyear', image: '/buzzlightyear.webp' },
    { name: 'Megamind', image: '/megamind.png' },
    { name: 'Naruto Uzumaki', image: '/naruto.webp' },
  ];
}
