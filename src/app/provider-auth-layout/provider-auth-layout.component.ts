import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-auth-layout',
  templateUrl: './provider-auth-layout.component.html',
  styleUrls: ['./provider-auth-layout.component.scss']
})
export class ProviderAuthLayoutComponent implements OnInit {

  constructor() { }

  showFirst: boolean = true;

  toggle(){
    this.showFirst = !this.showFirst;
  }

  ngOnInit(): void {
  }

}
