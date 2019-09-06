import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  public trainers = [
    {
      firstName: 'Huy',
      lastName: 'Luong',
      experience: 5,
      specialization: 'fat loss',
      image: ''
    },
    {
      firstName: 'Kane',
      lastName: 'Lee',
      experience: 5,
      specialization: 'fat loss and muscle building',
      image: '../assets/pictures/69703589_369864427280414_3891600967040237568_n.jpg'
    }
  ];

  public headings = [
    'Photo',
    'First Name',
    'Last Name',
    'Years of Experience',
    'Specialization'
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public routeToProfile(): void {
    this.router.navigateByUrl('/trainers/profile/1');
  }

}
