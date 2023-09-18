import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './import';

function Brand() {
  return (
    <article className="woonders_container-center with_padding">
      <h2 className="woonders_text-color1">We are blessed to work with<br /> leading brands.</h2>
    <div className="woonders_brand section_padding">
      <div>
        <img src={google} alt='google_logo' />
      </div>
      <div>
        <img src={slack} alt='slack_logo' />
      </div>
      <div>
        <img src={atlassian} alt='atlassian_logo' />
      </div>
      <div>
        <img src={dropbox} alt='dropbox_logo' />
      </div>
      <div>
        <img src={shopify} alt='shopify_logo' />
      </div>
    </div>
    </article>
  )
}

export default Brand
