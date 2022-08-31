import { Injectable } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(private sidenav: MatSidenav) { }

  

  public setSidenav( sidenav: MatSidenav) {
    this.sidenav = sidenav
  }

  public open() {
    this.sidenav.opened = true
    return this.sidenav.open()
  }

  public close() {
    return this.sidenav.close()
  }

  public toggle() {
    this.sidenav.toggle()
  }
}
