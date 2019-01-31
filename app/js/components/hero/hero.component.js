const ID = '#hero-content';
const PageNotFoundID = '#hero-content__pageNotFound';

// const appImage = "images/hia-talk-display.png";
// const wpAppImage = '/wp-content/uploads/2018/10/iphoneX-perspective.png';

// const logo = "images/logo-primary.png";
const wpLogo = '/wp-content/uploads/2018/11/logo-primary.png';

const HeroComponent = () => {
  $(ID).append(`
        <section id="hero" class="container">
            <div class="hero__wrapper">
                <div class="hero__logo-wrapper">
                    <img id="hero-logo" class="hero__logo" src=${wpLogo} alt="HIA Technologies" />
                </div>
                <div class="hero__tagline">
                    <h2 class="hero__tagline-text" id="hero-tagline">
                        <div id="hero-tagline-1" class="hero__tagline-text--one">We are coding</div>
                        <div id="hero-tagline-2" class="hero__tagline-text--two"><strong>The Science of Conversation</strong></div>
                    </h2>
                    <div id="tagline-border-btm" class="hero__tagline-border--bottom"></div>
                </div>
                <div class="hero__app">
                    <div id="hero-app" class="hero__app-img"></div>
                </div>
            </div>
            <div class="hero__background"></div>
            <div class="hero__backgroundOverlay"></div>
        </section>
    `);

  $(PageNotFoundID).append(`
  <section id="hero" class="container">
      <div class="hero__wrapper">
          <div class="hero__logo-wrapper">
                <a href="/">
                    <img id="hero-logo" class="hero__logo" src=${wpLogo} alt="HIA Technologies" />
                </a>
          </div>
          <div class="hero__tagline">
              <h2 class="hero__tagline-text" id="hero-tagline">
                  <div id="hero-tagline-1" class="hero__tagline-text--one">We are coding</div>
                  <div id="hero-tagline-2" class="hero__tagline-text--two"><strong>The Science of Conversation</strong></div>
              </h2>
              <div id="tagline-border-btm" class="hero__tagline-border--bottom"></div>
              <h1 class="pageNotFound__title">PAGE NOT FOUND</h1>
          </div>
      </div>
      <div class="hero__background"></div>
      <div class="hero__backgroundOverlay"></div>
  </section>
`);
};

export default HeroComponent;
