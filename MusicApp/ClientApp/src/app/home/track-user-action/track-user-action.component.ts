import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Track } from "../../core/core.module";

@Component({
  selector: "track-user-action",
  templateUrl: "./track-user-action.component.html",
})
export class TrackUserActionComponent {
  @Input() track: Track;
  @Output() performAction = new EventEmitter<{
    id: number;
    action: { rating?: number; isFavorite?: boolean; isListened?: boolean };
  }>();

  onRating(rating: number) {
    this.track.rating = rating;

    var action = {
      id: this.track.id,
      action: { rating: this.track.rating },
    };

    this.performAction.emit(action);
  }

  onFavorite() {
    this.track.isFavorite = !this.track.isFavorite;

    var action = {
      id: this.track.id,
      action: { isFavorite: this.track.isFavorite },
    };

    this.performAction.emit(action);
  }

  onListened() {
    this.track.isListened = !this.track.isListened;

    var action = {
      id: this.track.id,
      action: { isListened: this.track.isListened },
    };

    this.performAction.emit(action);
  }
}
