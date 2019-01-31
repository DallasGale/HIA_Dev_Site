import data from './data';

const id = '#about-content';

const aboutComponent = () =>
  $(id).append(
    `
        <p class="about__paragraph"> 
            ${data.paragraph}
        </p>
        
        <div class="about__promo-video">
            <a href=${data.promoUrl} data-lity>
                <img src=${
                  data.promoImgPath
                } class="about__promo-video-img" alt="HIA Technologies promotional video" />
            </a>
        </div>
    `
  );

export default aboutComponent;
