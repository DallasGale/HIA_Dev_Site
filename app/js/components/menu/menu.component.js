const ID = '#menu';

const MenuComponent = () => {
  $(ID).append(`
    <div class="container-fluid">
      <nav id="nav" class="menu__nav">
        <ul class="menu__nav-list">
            <li>
              <a href="#" id="aboutLink">
                About HIA
              </a>
            </li>
            <li>
              <a href="#" id="mediaLink">
                In The Media
              </a>
            </li>
            <li>
              <a href="#" id="leadershipLink">
                Leadership Team
              </a>
            </li>
            <li>
              <a href="#" id="advisoryLink">
                Advisory Team
              </a>
            </li>
            <li>
              <a href="#" id="getInTouchLink">
                Get In Touch
              </a>
            </li>
        </ul>
      </nav>
    </div>
`);
};

export default MenuComponent;
