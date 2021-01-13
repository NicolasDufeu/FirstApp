import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
    
  gallery = [
      {
          image: '../../../assets/madison.jpg',
          subtitle: 'Destination',
          title: 'Madison, WI',
          content: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
      },
      {
          image: '../../../assets/forêt.png',
          subtitle: 'Destination',
          title: 'France',
          content: 'Duis metus quam, porttitor non orci quis, varius gravida nulla. In vehicula arcu vitae dolor sodales, vitae facilisis tortor viverra. Etiam sed felis ut libero fermentum consectetur.'
      },
      {
          image: '../../../assets/jardin-jap.jpg',
          subtitle: 'Destination',
          title: 'France',
          content: 'Duis metus quam, porttitor non orci quis, varius gravida nulla. In vehicula arcu vitae dolor sodales, vitae facilisis tortor viverra. Etiam sed felis ut libero fermentum consectetur.'
      },
      {
          image: '../../../assets/lac.jpg',
          subtitle: 'Destination',
          title: 'Canada',
          content: 'Duis metus quam, porttitor non orci quis, varius gravida nulla. In vehicula arcu vitae dolor sodales, vitae facilisis tortor viverra. Etiam sed felis ut libero fermentum consectetur.'
      },
      
  ]

  constructor() { }

  ngOnInit() {
  }

}
