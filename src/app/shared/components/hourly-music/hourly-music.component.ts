import { Component } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { ClockService } from '../../services/clock.service';
import { MusicModel } from '../../../acnhapi/music/models/music.model';
import { HourlyMusicService } from '../../services/hourly-music.service';
import { PreferencesService } from '../../services/preferences.service';
import { PreferenceTypeEnum } from '../../models/preference-type.enum';
import { HourlyMusicMoodEnum } from "./models/hourly-music-mood.enum";

@Component({
  selector: 'app-hourly-music',
  templateUrl: './hourly-music.component.html'
})
export class HourlyMusicComponent {
  datetime: Date = new Date();
  hour = 1;
  musicList: MusicModel[] = [];
  hourlyMusicMoodEnum = HourlyMusicMoodEnum;

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
    this.preferencesService.updatePreferences(autoplay.checked, PreferenceTypeEnum.Autoplay);
  }
  onMoodChange(mood: MatChipListboxChange) {
    let moodValue = 2;
    switch (mood.value) {
      case HourlyMusicMoodEnum.Rainy:
        moodValue = 0;
        break;
      case HourlyMusicMoodEnum.Snowy:
        moodValue = 1;
        break;
      case HourlyMusicMoodEnum.Sunny:
        moodValue = 2;
        break;
      default:
        moodValue = 2;
        break;
    }
    this.preferencesService.updatePreferences(moodValue, PreferenceTypeEnum.Mood);
    const music = this.musicList.filter(m => m.hour === this.hour);
    this.hourlyMusicService.musicUri$.next(music[moodValue].musicUri);
  }
}
