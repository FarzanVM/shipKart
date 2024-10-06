import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import { ToastrService } from 'ngx-toastr';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../core/services/userservice/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  fapentosquare = faPenToSquare;
  farotateleft=faRotateLeft;
  readOnly: Boolean = true;

  profileForm: FormGroup | any;
  constructor(private userservice: UserService, private toastrservice: ToastrService) {
    this.profileForm = new FormGroup({
      name: new FormControl('farzan'),
      contactno: new FormControl('343543534'),
      address: new FormControl('Choikappi')
    })
  }

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (username) {
      this.userservice.getUser(username).subscribe((user: any) => {
        this.profileForm.patchValue({ name: user.name, address: user.address, contactno: user.contactno })
      })
    }

  }
  goBack(){
    this.readOnly=!this.readOnly
  }

  editProfile() {
    this.readOnly = !this.readOnly;
    console.log(this.readOnly)
  }
  updateProfile() {
    const email = localStorage.getItem('username');
    const user = {
      ...this.profileForm.value,
      email: email
    }

    this.userservice.updateUser(user).subscribe((res: any) => {
      this.toastrservice.success(res.message)
      this.readOnly=!this.readOnly
    },
      error => {
        this.toastrservice.error(error.error.message)
        this.readOnly=!this.readOnly
      })

  
  }
}
