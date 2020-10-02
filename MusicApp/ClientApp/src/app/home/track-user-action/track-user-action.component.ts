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
}
