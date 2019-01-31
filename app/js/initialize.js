// Components
import AboutComponent from './components/about/about.component';
import AdvisoryComponent from './components/team/advisory/advisory.component';
import ContactFormJS from './contactForm';
import FooterComponent from '../js/components/footer/footer.component';
import HamburgerComponent from './components/hamburger/hamburger.component';
import HeroComponent from './components/hero/hero.component';
import HeroJS from './hero';
import InTheMediaComponent from './components/inTheMedia/inTheMedia.component';
import LeadershipComponent from './components/team/leadership/leadership.component';
import MouseDownComponent from './components/mouseDown/mouseDown.component';
import MenuComponent from './components/menu/menu.component';
import NavigationJS from './navigation';
// import SkipToContent from './components/a11y/skipToContent.component';
import VideoComponent from './components/video/video.component';

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  AboutComponent();
  AdvisoryComponent();
  ContactFormJS();
  FooterComponent();
  HamburgerComponent();
  HeroComponent();
  HeroJS();
  InTheMediaComponent();
  LeadershipComponent();
  MenuComponent();
  MouseDownComponent();
  NavigationJS();
  // SkipToContent();
  VideoComponent();

  // Toggle menu visibility
  const ID = '#menu-hamburger';
  const MENU_DIV = '#menu';
  const NAV = '#nav.menu__nav';

  $(ID).click(() => {
    $(NAV).toggleClass('toggled');
    $(MENU_DIV).toggleClass('toggled');
    $(ID).toggleClass('toggled');
  });
});
