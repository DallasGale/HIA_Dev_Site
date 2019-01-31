const ID = '#video-content';
const VideoComponent = () =>
  $(ID).append(`
    <a href="//www.youtube.com/embed/MmaUBf0cgA0" data-lity>
        <div class="video__screenshot"></div>
    </a>
    `);

export default VideoComponent;
