import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faArrowRight, faArrowUp, faBars, faCalendarDay, faCalendarDays, faCar, faChartPie, faChevronDown, faChevronLeft, faChevronRight, faDollarSign, faFileInvoiceDollar, faGamepad, faGlobe, faGraduationCap, faHouse, faMask, faMoon, faObjectUngroup, faPiggyBank, faPizzaSlice, faShirt, faSpinner, faSquarePlus, faSun, faUser, faUtensils, faXmark } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule]
})
export class IconsModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(
      faGoogle, 
      faDollarSign, 
      faArrowDown, 
      faArrowUp, 
      faPizzaSlice, 
      faDollarSign, 
      faHouse, 
      faChartPie, 
      faUser,
      faCar,
      faUtensils,
      faShirt,
      faFileInvoiceDollar,
      faGraduationCap,
      faGamepad,
      faPiggyBank,
      faCalendarDays,
      faChevronDown,
      faChevronLeft,
      faChevronRight,
      faSquarePlus,
      faMoon,
      faSun
    );
  }
}
