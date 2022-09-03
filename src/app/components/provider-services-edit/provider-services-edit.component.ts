import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from 'src/app/models/service';
import { ProviderAuthService } from 'src/app/services/provider-auth.service';
import { ProviderServicesService } from 'src/app/services/provider-services.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-provider-services-edit',
  templateUrl: './provider-services-edit.component.html',
  styleUrls: ['./provider-services-edit.component.scss']
})
export class ProviderServicesEditComponent implements OnInit {

  serviceForm!: FormGroup

  service!: ProviderService;

  constructor(private formbuilder: FormBuilder, private providerService: ProviderServicesService, private auth: ProviderAuthService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.serviceForm = this.formbuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [''],
      category: ['', Validators.required],
      cost: ['', Validators.required],
      time: ['', Validators.required],
      provider: ['', Validators.required]
    })

    this.findService()

  }

  submit(){
    // console.log(this.auth._authenticatedUser);
    // this.serviceForm.get('provider')?.setValue(this.auth._authenticatedUser?._id)
    if( this.serviceForm.valid) {
      // console.log(this.serviceForm.value);
      this.providerService.update( this.activeRoute.snapshot.params['id'], this.serviceForm.value).subscribe({
        next: ( res) => {
          if ( res) {
            Swal.fire('Service Upddated', 'Your  service was updated successfully', 'success')
            this.serviceForm.reset()
            this.router.navigate(['..'])
          }
        },
        error: ( err) => {
          alert( err)
        }
      })
    }
  }

  findService(){
    this.providerService.findOne( this.activeRoute.snapshot.params['id']).subscribe({
      next: ( resp: any) => {
        // console.log(resp);
        // this.service = resp.data.service
        this.serviceForm.controls['name'].setValue(resp.data.service.name)
        this.serviceForm.controls['description'].setValue(resp.data.service.description)
        this.serviceForm.controls['imageUrl'].setValue(resp.data.service.imageUrl)
        this.serviceForm.controls['category'].setValue(resp.data.service.category)
        this.serviceForm.controls['cost'].setValue(resp.data.service.cost)
        this.serviceForm.controls['time'].setValue(resp.data.service.time)
        this.serviceForm.controls['provider'].setValue(resp.data.service.provider)
        console.log(this.service);
        
      }
    })
  }
}
