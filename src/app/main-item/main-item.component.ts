import { Component, Input, OnChanges } from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.scss']
})
export class MainItemComponent implements OnChanges {
  @Input() subItemTitle?: string;
  @Input() first?: boolean = true;
  @Input() items?: NavItem[];
  @Input() displayName?: string;
  selectedItem?: NavItem;

  onClicked(item: NavItem): void {
    this.selectedItem! = Object.assign({}, item);
    this.subItemTitle = this.selectedItem.displayName;
  }

  ngOnInit() {
    if (this.first) {
      // this.items = this.navItems;
      this.displayName = 'Main';
    }
  }

  ngOnChanges(): void {
    if (!this.first) {
      this.selectedItem = undefined;
    }
  }


}
