// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-client',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './client.component.html',
//   styleUrl: './client.component.css'
// })
// export class ClientComponent  {
//   testimonials = [
//     {
//       image: 'https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp',
//       text: '"Throughout our collaboration, MSL exhibited an unwavering commitment to understanding our unique business needs. Their ability to translate complex technical jargon into accessible language allowed us to make informed decisions that aligned perfectly with our goals. Their attention to detail, along with their ability to adapt to changing requirements, ensured a seamless implementation process."',
//       author: 'Pawan Sir, CEO of Company XYZ'
//     },
//     {
//       image: 'https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=uKfBCoTeP54nA8KOzXDLIyoU31nZ4a4UreFE4p_x_3A=',
//       text: '"MSL Boasts an exceptional team of professionals who possess a rare combination of technical prowess and genuine dedication. Their expertise is evident in the flawless execution of projects, and their commitment to customer satisfaction is unmatched"',
//       author: 'Sarita Maam CEO of Company XYZ'
//     }
//     // Add more testimonials as needed
//   ];

//   currentSlide = 0;

//   previous() {
//     this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
//   }

//   next() {
//     this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
//   }
// }