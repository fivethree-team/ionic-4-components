import { DrawerState, FivSearchbar } from '@fivethree/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.page.html',
  styleUrls: ['./toolbar-search.page.scss']
})
export class ToolbarSearchPage implements OnInit {
  searchInput: string;
  small = true;
  states = DrawerState;
  state: DrawerState = DrawerState.Bottom;
  @ViewChild('search') search: FivSearchbar;

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
