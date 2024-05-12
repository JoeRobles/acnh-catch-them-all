import { Component, OnInit } from '@angular/core';

import { ArtCertEnum } from '../../../../acnhapi/models/art-cert.enum';
import { ArtModel } from '../../../../acnhapi/art/models/art.model';
import { PreferencesService } from '../../../../shared/services/preferences.service';
import { CritterService } from '../../../../acnhapi/services/critter.service';
import { CritterTypeEnum } from '../../../../acnhapi/models/critter-type.enum';

@Component({
  selector: 'app-toggle-art-cert',
  templateUrl: './toggle-art-cert.component.html'
})
export class ToggleArtCertComponent implements OnInit {

  protected readonly critterTypeEnum = CritterTypeEnum;
  artCertFilter: boolean[] = [
    true,
    false
  ];
  artCertEnum = ArtCertEnum;
  artList: ArtModel[] = [];

  constructor(
    public critterService: CritterService,
    public preferencesService: PreferencesService
  ) { }

  ngOnInit(): void {
    this.critterService.art$.subscribe(art => this.artList = art);
    this.critterService.artCertFilter$.subscribe(filter => this.artCertFilter = filter);
  }

  toggleCertAll(): void {
    let artFiltered: ArtModel[] = [];
    if (this.artCertFilter.length === 0) {
      this.artCertFilter = [
        true,
        false
      ];
      artFiltered = this.artList;
    } else {
      this.artCertFilter = [];
      artFiltered = [];
    }
    this.critterService.artCertFilter$.next(this.artCertFilter);
    this.critterService.artsGrid$.next(artFiltered);
  }

  toggleCert(cert: boolean): void {
    let filtered: ArtModel[] = [];
    const certIndex = this.artCertFilter.indexOf(cert);
    if (certIndex > -1) {
      this.artCertFilter.splice(certIndex, 1);
      filtered = this.critterService.art$.getValue().filter(art => this.artCertFilter.includes(art.hasFake));
    } else {
      this.artCertFilter.push(cert);
      filtered = this.artList.filter(art => this.artCertFilter.includes(art.hasFake));
    }
    this.critterService.artCertFilter$.next(this.artCertFilter);
    this.critterService.artsGrid$.next(filtered);
  }
}
