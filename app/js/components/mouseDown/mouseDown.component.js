const ID = '#mouse-down';

const MouseDownComponent = () =>
  $(ID).append(`
    <a href="#" id="mouseDownHeroLink">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 452.96">
            <defs>
            <linearGradient id="linear-gradient" x1="59.92" y1="135.36" x2="142.57" y2="455.77" gradientTransform="matrix(1, 0, 0, -1, -0.33, 454)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#52c597"/>
                <stop offset="1" stop-color="#2b959b"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="93.98" y1="340.16" x2="106.3" y2="387.91" gradientTransform="matrix(1, 0, 0, -1, 0, 454)" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-3" x1="80.33" y1="5.63" x2="107.98" y2="112.82" xlink:href="#linear-gradient"/>
            </defs>
            <title>mouse-down</title>
            <path d="M104.45,17A78.84,78.84,0,0,1,183,95.56V228.44A78.84,78.84,0,0,1,104.45,307H95.56A78.84,78.84,0,0,1,17,228.44V95.56A78.84,78.84,0,0,1,95.56,17h8.89m0-17H95.56C43,0,0,43,0,95.56V228.44C0,281,43,324,95.56,324h8.89C157,324,200,281,200,228.44V95.56C200,43,157,0,104.45,0Z" fill="url(#linear-gradient)"/>
            <path d="M100,66h0a8.51,8.51,0,0,1,8.5,8.5v32A8.51,8.51,0,0,1,100,115h0a8.51,8.51,0,0,1-8.5-8.5v-32A8.51,8.51,0,0,1,100,66Z" fill="url(#linear-gradient-2)"/>
            <path d="M180.5,364a8.53,8.53,0,0,0-12,0L100,432.48,31.52,364a8.5,8.5,0,0,0-12,12L94,450.5a8.55,8.55,0,0,0,12,0L180.5,376A8.53,8.53,0,0,0,180.5,364Z" fill="url(#linear-gradient-3)"/>
        </svg>
    </a>
`);

export default MouseDownComponent;
