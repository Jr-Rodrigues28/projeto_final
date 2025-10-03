import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

  ativarMenu(e: PointerEvent) {
    if (e.currentTarget === null)
      return;
    const menu = document.getElementById('navbarSupportedContent');
    console.log(menu);
    if (menu?.classList.contains("collapse")) {
      menu.classList.remove("collapse")
    }
    else {
      menu?.classList.add("collapse")
    }
  }
}
