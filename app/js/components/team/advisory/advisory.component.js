import data from './data';

const ID = '#advisory-team-content';

const AdvisoryComponent = () => {
  data.map(d =>
    $(ID).append(
      `
        <div class="col-md-4">
            <div class="team__row">
                <img class="team__head-shot" src=${d.imgPath} alt=${d.name} />
            </div>
        </div>
        <div class="col-md-8">
            <div class="team_row">
                <h4 class="team__title">${d.name}</h4>
                <div class="team__bio">
                    <p class="team__bio--paragraph">${d.bio.paragraph1}</p>
                    <p class="team__bio--paragraph">${d.bio.paragraph2}</p>
                </div>
            </div>
        </div>
        `
    )
  );
};

export default AdvisoryComponent;
