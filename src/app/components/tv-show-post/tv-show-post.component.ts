import {Component, Input, OnInit} from '@angular/core';
import {TvShow} from '../../models/tvShow';
import {Genre} from '../../models/genre';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {DataThemeService} from '../../services/data-theme.service';

@Component({
  selector: 'app-tv-show-post',
  templateUrl: './tv-show-post.component.html',
  styleUrls: ['./tv-show-post.component.css']
})
export class TvShowPostComponent implements OnInit {
  @Input()
  tvShow: TvShow;
  @Input()
  genres: Genre[];
  imgUrl: string;

  constructor(private actionStoreService: ActionStoreService, private dataThemeService: DataThemeService) {
  }

  ngOnInit(): void {
    this.imgUrl = `https://image.tmdb.org/t/p/w200${this.tvShow.poster_path}`;
  }

  onGetShowDetail(id: number): void {
    this.dataThemeService.data.value.isShowDetailLoading = false;
    this.actionStoreService.getTvShowsDetail(id);
    this.actionStoreService.getTvShowCredit(id);
    this.actionStoreService.getTvShowTrailers(id);
    this.actionStoreService.getShowsComment(id);
  }
}
