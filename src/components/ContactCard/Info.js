import React from 'react'
import styled from 'styled-components'

import facebookLogo from '../../img/facebook.svg';
import instagramLogo from '../../img/instagram.svg';

const Info = () => (
    <div>
        <a href="tel:+4592272285">+45 92 27 22 85</a>
        <a href="mailto:info@uncharted.com">info@uncharted.com</a>
        <SocialLink href="https://www.facebook.com/TransylvaniaUncharted/?ref=br_rs">
            <img src={facebookLogo} alt="facebook" />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/transylvaniauncharted.dk">
            <img src={instagramLogo} alt="instagram" />
        </SocialLink>
    </div>
)

const SocialLink = styled.a`
display: inline-block !important;
padding: 1em 1em 0 0;
& img {
width: 28px;
height: 28px;
}`

export default Info