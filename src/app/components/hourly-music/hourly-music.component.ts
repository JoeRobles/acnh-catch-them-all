import { Component } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { ClockService } from '../../shared/services/clock.service';
import { MusicModel } from '../../acnhapi/music/models/music.model';
import { HourlyMusicService } from '../../shared/services/hourly-music.service';

@Component({
  selector: 'app-hourly-music',
  templateUrl: './hourly-music.component.html',
  styleUrls: ['./hourly-music.component.scss']
})
export class HourlyMusicComponent {
  datetime: Date = new Date();
  hour = 1;
  musicList: MusicModel[] = [];
  mood = 2;

  constructor(
    private clockService: ClockService,
    public hourlyMusicService: HourlyMusicService
  ) {
  }

  ngOnInit() {
    this.hourlyMusicService.music$.subscribe(music => this.musicList = music);
    this.clockService.datetime$.subscribe(d => this.datetime = d);
    this.clockService.hours$.subscribe(h => {
      this.hour = h;
      const music = this.musicList.filter(m => m.hour === h);
      this.hourlyMusicService.musicUri$.next(music[this.mood].musicUri);
    });
  }
  onAutoplayChange(autoplay: MatSlideToggleChange) {
    this.hourlyMusicService.autoplay$.next(autoplay.checked);
  }
  onMoodChange(mood: MatChipListboxChange) {
    switch (mood.value) {
      case 'Rainy':
        this.mood = 0;
        break;
      case 'Snowy':
        this.mood = 1;
        break;
      default:
        this.mood = 2;
        break;
    }
    this.hourlyMusicService.mood$.next(this.mood);
    console.log('mood: ', mood.value);
    const music = this.musicList.filter(m => m.hour === this.hour);
    console.log('music: ', music);
    console.log('music[mood.value].musicUri: ', music[this.mood].musicUri);
    this.hourlyMusicService.musicUri$.next(music[this.mood].musicUri);
  }
}
