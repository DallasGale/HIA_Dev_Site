function HeroJS() {
  const LOGO = '#hero-logo';
  const TAGLINE = '#hero-tagline';
  const TAGLINE_1 = '#hero-tagline-1';
  const TAGLINE_2 = '#hero-tagline-2';
  const TAGLINE_BORDER = '#tagline-border-btm';
  const APP = '#hero-app';

  $(LOGO).animate(
    {
      marginTop: '0px',
      opacity: 1,
    },
    700,
    'easeInOutQuart'
  );
  $(TAGLINE).animate(
    {
      opacity: 1,
    },
    1000,
    'easeInOutQuart'
  );
  $(TAGLINE_1)
    .delay(600)
    .animate(
      {
        opacity: 1,
        marginLeft: '0px',
      },
      700,
      'easeInOutQuart'
    );
  $(TAGLINE_2)
    .delay(900)
    .animate(
      {
        opacity: 1,
        marginLeft: 0,
      },
      700,
      'easeInOutQuart'
    );
  $(TAGLINE_BORDER)
    .delay(1200)
    .animate(
      {
        width: '100%',
        maxWidth: 400,
        opacity: 1,
      },
      400,
      'easeInOutQuart'
    );
  $(APP).animate(
    {
      marginLeft: '0px',
      opacity: 1,
    },
    700,
    'easeInOutQuart'
  );
}

export default HeroJS;
