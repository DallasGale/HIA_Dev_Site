const ID = '#menu-hamburger';

const HamburgerComponent = () => {
  $(ID).append(`
        <button class="hamburger__button" id="menu-toggler">
            Toggle Me
        </button>   
    `);
};

export default HamburgerComponent;
