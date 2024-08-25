import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  item: any;
  reservationForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        const name = params['name'];
  
        this.route.queryParams.subscribe(queryParams => {
            this.item = {
                name,
                description: queryParams['description'],
                email: queryParams['email'],
                phone: queryParams['phone'],
                address: queryParams['address'],
                reservation: queryParams['reservation'] === 'true',
                imageUrl: queryParams['imageUrl'],
                category: queryParams['category'],
                type: queryParams['type']
            };

            this.reservationForm = this.fb.group({
                name: ['', Validators.required],
                phone: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]]
            });

            if (this.item.type === 'Restaurant') {
                this.reservationForm.addControl('sizeOfParty', this.fb.control('', Validators.required));
                this.reservationForm.addControl('date', this.fb.control('', Validators.required));
                this.reservationForm.addControl('time', this.fb.control('', Validators.required));
            }

            if (this.item.category === 'Lodging') {
                this.reservationForm.addControl('checkInDate', this.fb.control('', Validators.required));
                this.reservationForm.addControl('checkOutDate', this.fb.control('', Validators.required));
            }

            if (this.item.type === 'Rental Car') {
                this.reservationForm.addControl('carType', this.fb.control('', Validators.required));
                this.reservationForm.addControl('pickUpDate', this.fb.control('', Validators.required));
                this.reservationForm.addControl('dropOffDate', this.fb.control('', Validators.required));
            }
        });
    });
}


  onSubmit(){
    if(this.reservationForm.valid){
      alert('Your reservation has been confirmed!');
      console.log('Reservation Data:', this.reservationForm.value);
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
