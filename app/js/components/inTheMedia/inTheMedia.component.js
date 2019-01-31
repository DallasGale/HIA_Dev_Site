import data from './data';

const mediaArray = data.reverse();

// Map over Data Object

const mediaRender = mediaArray.map(m => {
  const id = '#in-the-media-content';
  return `${
    m.hasVideo
      ? $(id).append(`
      <div class="col-lg-3  col-md-6  col-sm-6  col-xs-12">
        <div class="row>
          <div class="col-md-12">
              <div class="media__card">
                <small class="media__date">${m.date}</small>
                <h4 class="media__title">
                  <a class="media__url" href=${m.url} data-lity>
                    ${m.title}
                  </a>
                </h4>
                <p class="media__description">${m.description}</p>
                <div class="media__image-wrap">
                  <a class="media__url" href=${m.url} data-lity>
                    <img class="media__image" src=${m.imgPath} alt=${m.title} />
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    `)
      : $(id).append(`
      <div class="col-lg-3  col-md-6  col-sm-6  col-xs-12">
        <div class="row>
          <div class="col-md-12">
              <div class="media__card">
                <small class="media__date">${m.date}</small>
                <h4 class="media__title">
                  <a class="media__url" href=${m.url} target="_blank" rel="noreferre noopener">
                    ${m.title}
                  </a>
                </h4>
                <p class="media__description">${m.description}</p>
                <div class="media__image-wrap">
                  <img class="media__image" src=${m.imgPath} alt=${m.title} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    `)
  }`;
});

// Return function to DOM
const InTheMediaComponent = () => mediaRender;

export default InTheMediaComponent;
