import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Parish } from 'src/app/models/parish';
import { ProviderServicesService } from 'src/app/services/provider-services.service';

@Component({
  selector: 'app-web-banner',
  templateUrl: './web-banner.component.html',
  styleUrls: ['./web-banner.component.scss']
})
export class WebBannerComponent implements OnInit {

  constructor(private service: ProviderServicesService, private router: Router) { }


  parishes: any[] = Parish
  services!: any[]
  services$!: Observable<any[]>
  keyword: string = "name"
  searchParish!: string
  searchService!: string

  ngOnInit(): void {
    // console.log(this.parishes);
    this.populateServicesArray()
    this.searchParish = this.parishes[0].name
    this.searchService = this.services[0].name
    console.log(this.searchService, this.searchParish);
    
  }

  populateServicesArray() {
    this.services$ = this.service.getAll().pipe(
      map((resp: any) => {
        console.log(resp);
        return resp.data.services.map((service: any) => {
          

          return {
            id: service._id,
            name: service.name
          }
        })
      })
    )

    this.services$.subscribe(resp => {
      this.services = resp
      this.searchService = resp[0].name
      console.log(this.services);
      
    })    
  }

  updateServiceVal( item: any){
    this.searchService = item.name
  }

  updateParishVal( item: any){
    // console.log(this.searchParish);
    
    this.searchParish = item.name
  
    // console.log(this.searchParish);
    
    
  }

  search(){
    this.router.navigate(['../', 'search', this.searchParish, this.searchService])
  }
}
