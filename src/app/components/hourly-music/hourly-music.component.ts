import { Component } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { ClockService } from '../../shared/services/clock.service';
import { MusicModel } from '../../acnhapi/music/models/music.model';
import { HourlyMusicService } from '../../shared/services/hourly-music.service';
import { PreferencesService } from '../../shared/services/preferences.service';

@Component({
  selector: 'app-hourly-music',
  templateUrl: './hourly-music.component.html',
  styleUrls: ['./hourly-music.component.scss']
})
export class HourlyMusicComponent {
  datetime: Date = new Date();
  hour = 1;
  musicList: MusicModel[] = [];

  constructor(
    private clockService: ClockService,
    public hourlyMusicService: HourlyMusicService,
    public preferencesService: PreferencesService
  ) {
  }

  ngOnInit() {
    this.hourlyMusicService.music$.subscribe(music => this.musicList = music);
    this.clockService.datetime$.subscribe(d => this.datetime = d);
    this.clockService.hours$.subscribe(h => {
      this.hour = h;
      const music = this.musicList.filter(m => m.hour === h);
      this.hourlyMusicService.musicUri$.next(music[this.preferencesService.mood$.value].musicUri);
    });
  }
  onAutoplayChange(autoplay: MatSlideToggleChange) {
    this.preferencesService.updatePreferences(autoplay.checked, 'autoplay');
  }
  onMoodChange(mood: MatChipListboxChange) {
    let moodValue = 2;
    switch (mood.value) {
      case 'Rainy':
        moodValue = 0;
        break;
      case 'Snowy':
        moodValue = 1;
        break;
      default:
        moodValue = 2;
        break;
    }
    this.preferencesService.updatePreferences(moodValue, 'mood');
    const music = this.musicList.filter(m => m.hour === this.hour);
    this.hourlyMusicService.musicUri$.next(music[moodValue].musicUri);
  }
}
