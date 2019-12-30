import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PlayersService } from '../services/players.service';

export interface Player {
  name: string;
  pa: number;
  ba: number;
  slg: number;
  obp: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  players;
  $playersSub: Subscription;
  displayedColumns: string[] = [
    'name',
    'pa',
    'ba',
    'slg',
    'obp',
    'runsCreated'
  ];

  constructor(
    private playersService: PlayersService
  ) {}

  ngOnInit() {
    this.$playersSub = this.playersService.getAll()
      .subscribe(players => {
        this.players = players;
      });
  }

}
