import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { ProviderAuthService } from 'src/app/services/provider-auth.service';
import { ProviderServicesService } from 'src/app/services/provider-services.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-provider-services',
  templateUrl: './provider-services.component.html',
  styleUrls: ['./provider-services.component.scss']
})
export class ProviderServicesComponent implements OnInit {

  constructor(private auth: ProviderAuthService, private providerService: ProviderServicesService, private router: Router) { }

  user: any = this.auth._authenticatedUser

  ngOnInit(): void {
    console.log(this.user);
    this.user = this.auth._authenticatedUser

  }

  transform(mins: number): string {
    const hours = Math.floor(mins / 60)
    const minutes = mins % 60;
    return `${hours}h${minutes > 0 ? `${minutes}mins` : ''}`
  }

  confirmDelete(id: string, name: string) {
    Swal.fire({
      title: `Are you sure want to delete ${name}?`,
      text: 'This action is irreversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',

    }).then((result) => {
      if (result.value) {
        this.delete( id)
        this.router.navigate(['services'])
        Swal.fire(
          'Deleted!',
          `${name} has been deleted.`,
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your service is safe',
          'error'
        )
      }
    })
  }

  delete( id: string){
    this.providerService.delete( id).subscribe()
  }

}
