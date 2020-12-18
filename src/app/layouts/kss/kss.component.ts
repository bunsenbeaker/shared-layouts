import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import {filter, map} from 'rxjs/operators';
@Component({
  selector: 'app-kss',
  templateUrl: './kss.component.html',
  styleUrls: ['./kss.component.css']
})
export class KssComponent implements OnInit {

  isFullscreen = false;
  constructor(private router: Router) {

   
  }

  ngOnInit(): void {
  }

}
