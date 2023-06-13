import { Component, Input } from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'app-main-mobile',
  templateUrl: './main-mobile.component.html',
  styleUrls: ['./main-mobile.component.scss']
})
export class MainMobileComponent {
  @Input() items?: NavItem[];
  @Input() displayName?: string;
  @Input() subItemTitle?: string;
  @Input() first?: boolean = true;
  selectedItem?: NavItem;
  showMenu = false;

  onClicked(item: NavItem): void {
    this.selectedItem! = Object.assign({}, item);
    this.subItemTitle = this.selectedItem.displayName;
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    if (this.first) {
      this.displayName = 'Main';
    }
  }
}
