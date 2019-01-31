const ID = '#footer';

const FooterComponent = () => 
$(ID).append(`
    <div class="footer__legal">
        <img class="footer__logo" src="/wp-content/uploads/2018/11/logo-wh.png" alt="HIA Technologies." />
        <small class="small">Copyright 2018 HIA Technologies. All rights reserved.</small>
        <small class="small bolder">
            <a target="_blank" class="link" href="/wp-content/uploads/2018/11/DEV-PrivacyPolicy-141118-0442.pdf">Privacy Policy</a>
        </small>
    </div>
`);

export default FooterComponent;
