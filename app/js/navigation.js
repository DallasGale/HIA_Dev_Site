function NavigationJS() {
  const scrollToAnchor = id => {
    const tag = $(`a[name='${id}']`);
    $('html,body').animate(
      {
        scrollTop: tag.offset().top,
      },
      'slow'
    );
  };

  // Menu id's
  const aboutLink = '#aboutLink';
  const aboutAnchor = 'aboutAnchor';
  const mediaLink = '#mediaLink';
  const mediaAnchor = 'mediaAnchor';
  const leadershipLink = '#leadershipLink';
  const leadershipAnchor = 'leadershipAnchor';
  const advisoryLink = '#advisoryLink';
  const advisoryAnchor = 'advisoryAnchor';
  const getInTouchLink = '#getInTouchLink';
  const getInTouchAnchor = 'getInTouchAnchor';
  const menuDiv = '#menu';
  const hamburger = '#menu-hamburger';

  $(aboutLink).click(() => {
    scrollToAnchor(aboutAnchor);
    $(menuDiv).removeClass('toggled');
    $(hamburger).removeClass('toggled');
  });
  $(mediaLink).click(() => {
    scrollToAnchor(mediaAnchor);
    $(menuDiv).removeClass('toggled');
    $(hamburger).removeClass('toggled');
  });
  $(leadershipLink).click(() => {
    scrollToAnchor(leadershipAnchor);
    $(menuDiv).removeClass('toggled');
    $(hamburger).removeClass('toggled');
  });
  $(advisoryLink).click(() => {
    scrollToAnchor(advisoryAnchor);
    $(menuDiv).removeClass('toggled');
    $(hamburger).removeClass('toggled');
  });
  $(getInTouchLink).click(() => {
    scrollToAnchor(getInTouchAnchor);
    $(menuDiv).removeClass('toggled');
    $(hamburger).removeClass('toggled');
  });

  // Mouse down id's
  const mouseDownHeroLink = '#mouseDownHeroLink';

  $(mouseDownHeroLink).click(() => {
    scrollToAnchor(aboutAnchor);
  });

  
}

export default NavigationJS;
