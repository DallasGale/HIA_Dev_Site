const ID = '#skipToContent';
const SKIP_TO = '#aboutAnchor';

const SkipToContent = () => {
  $(ID).append(`
        <div class="skip__wrapper">
            <a style="color: #fff;" class="skip__link" href=${SKIP_TO}>
             Skip to content
            </a>
        </div>
    `);
};

export default SkipToContent;
