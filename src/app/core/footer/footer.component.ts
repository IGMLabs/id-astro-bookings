import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  public subtitle = 'Welcome on board';
  public author = 'Iván Doce';
  public authorUrl = 'https://twitter.com/idr121212';
  constructor() { }

  ngOnInit(): void {
  }

}
