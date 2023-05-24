import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { MenuItemsService } from '../services/menu-items.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private menuItems: MenuItemsService) { 
    this.menuItems.getMenuItems().pipe(
        tap(result => console.log(result))
      ).subscribe();
  }

  _menuItems = [ // This is the menu items array
    { name: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { name: 'Data', route: '/data', icon: 'data_usage' },
    { name: 'Settings', route: '/settings', icon: 'settings' },
  ];

  // menuItems$ = this.menuItems.getMenuItems();
  // this.menuItems.getMenuItems().pipe(
  //   tap(result => console.log(result))
  // ).subscribe();


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
