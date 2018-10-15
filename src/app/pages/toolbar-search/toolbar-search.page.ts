import { DrawerState } from 'core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarSearchComponent } from 'projects/core/src/lib/toolbar-search/toolbar-search.component';

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.page.html',
  styleUrls: ['./toolbar-search.page.scss'],
})
export class ToolbarSearchPage implements OnInit {

  searchInput: string;
  small = true;
  states = DrawerState;
  state: DrawerState = DrawerState.Bottom;
  @ViewChild('search') search: ToolbarSearchComponent;

  constructor() { }

  ngOnInit() {
  }

  onSearchInputChanged(event) {
    this.searchInput = event.detail.value;
    console.log(event.detail.value);
  }

  closeSearch() {
    this.searchInput = '';
  }

  smallChange() {
    if (this.small) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    if (this.small) {
      this.search.grow();
    }
    console.log('open !!!!');
    this.state = DrawerState.Top;
  }

  close() {
    console.log('open !!!!');
    if (this.small) {
      this.search.shrink();
    }
    this.state = DrawerState.Bottom;
  }

  bottomSheetClose(search: ToolbarSearchComponent) {
    console.log('bottomSheetClose !!!!');

    search.closeSearchbar();
  }

}
