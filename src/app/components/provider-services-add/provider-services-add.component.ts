import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderAuthService } from 'src/app/services/provider-auth.service';
import { ProviderServicesService } from 'src/app/services/provider-services.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-provider-services-add',
  templateUrl: './provider-services-add.component.html',
  styleUrls: ['./provider-services-add.component.scss']
})
export class ProviderServicesAddComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private providerService: ProviderServicesService, private auth: ProviderAuthService, private router: Router) { }

  serviceForm!: FormGroup

  selectedFile: any[] = [];

  onFileSelected(event: any): void {
    //Iterate over selected files
    for( let file of event.target.files) {
      this.selectedFile.push(file.name)
    }
    console.log(this.selectedFile);
  }

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
  }
  
  submit(){
    // console.log(this.auth._authenticatedUser);
    this.serviceForm.get('provider')?.setValue(this.auth._authenticatedUser?._id)
    if( this.serviceForm.valid) {
      // console.log(this.serviceForm.value);
      this.providerService.create( this.serviceForm.value).subscribe({
        next: ( res) => {
          if ( res) {
            Swal.fire('Service added', 'Your new service was added successfully', 'success')
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
}
