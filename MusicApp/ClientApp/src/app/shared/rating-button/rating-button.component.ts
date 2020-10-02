import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "rating-button",
  templateUrl: "./rating-button.component.html",
})
export class RatingButtonComponent {
  @Input() rating: number;
  @Output() ratingChanged = new EventEmitter<number>();

  like() {
    if (this.rating > 0) this.rating = 0;
    else this.rating = 1;
    this.ratingChanged.emit(this.rating);
  }

  dislike() {
    if (this.rating < 0) this.rating = 0;
    else this.rating = -1;
    this.ratingChanged.emit(this.rating);
  }

  isLike(): boolean {
    return this.rating > 0;
  }

  isDislike(): boolean {
    return this.rating < 0;
  }
}
