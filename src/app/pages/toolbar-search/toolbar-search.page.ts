import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.page.html',
  styleUrls: ['./toolbar-search.page.scss'],
})
export class ToolbarSearchPage implements OnInit {

  searchInput: string;

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

}
