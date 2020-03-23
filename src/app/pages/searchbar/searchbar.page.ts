import { DrawerState, FivSearchbar } from '@fivethree/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss']
})
export class SearchbarPage implements OnInit {
  searchInput: string;
  small = false;
  states = DrawerState;
  state: DrawerState = DrawerState.Bottom;
  @ViewChild('search', { static: false }) search: FivSearchbar;

  constructor() {}

  ngOnInit() {}

  onSearchInputChanged(event) {
    this.searchInput = event.detail.value;
  }

  closeSearch() {
    this.searchInput = '';
  }

  bottomSheetClose(search: FivSearchbar) {
    search.closeSearchbar();
  }

  checkChanged(event) {
    this.small = event.detail.checked;
  }
}
