/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../background-media';
import { html } from 'lit-element';
import ifNonNull from 'carbon-web-components/es/globals/directives/if-non-null.js';
import { select } from '@storybook/addon-knobs';
// eslint-disable-next-line sort-imports
import imgLg16x9 from '../../../../../storybook-images/assets/720/fpo--16x9--720x405--005.jpg';
import imgLg2x1 from '../../../../../storybook-images/assets/720/fpo--2x1--720x360--005.jpg';
import imgMd16x9 from '../../../../../storybook-images/assets/480/fpo--16x9--480x270--005.jpg';
import imgMd2x1 from '../../../../../storybook-images/assets/480/fpo--2x1--480x240--005.jpg';
import imgSm16x9 from '../../../../../storybook-images/assets/320/fpo--16x9--320x180--005.jpg';
import imgSm2x1 from '../../../../../storybook-images/assets/320/fpo--2x1--320x160--005.jpg';
import readme from './README.stories.mdx';
import textNullable from '../../../../.storybook/knob-text-nullable';


const images = {
  '2:1': imgLg2x1,
  '16:9': imgLg16x9,
};

export const Default = ({ parameters }) => {
  const { source } = parameters?.props?.['dds-background-media'] ?? {};

  return html`
    <dds-background-media source="${ifNonNull(source)}">
     
    </dds-background-media>
  `;
};

export default {
  title: 'Components/Background Media',
  decorators: [
    story =>
      html`
        <div class="bx--grid">
          <div class="bx--row">
            <div class="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4">
              ${story()}
            </div>
          </div>
        </div>
      `,
  ],
  parameters: {
    ...readme.parameters,
    knobs: {
      'dds-background-media': ({ groupId }) => ({
        source: select('Default image (default-src)', images, imgLg2x1, groupId),
      }),
    },
  },
};
