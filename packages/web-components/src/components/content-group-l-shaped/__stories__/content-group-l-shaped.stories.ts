/**
 * @license
 *
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import '../../card/index';
 import '../../image/image';
 import '../index';
 import '../../cta/card-cta-footer';
 import '../../cta/video-cta-container';
 import ArrowRight20 from 'carbon-web-components/es/icons/arrow--right/20.js';
 import { html } from 'lit-element';
 import ifNonNull from 'carbon-web-components/es/globals/directives/if-non-null.js';
 import { boolean } from '@storybook/addon-knobs';
 
 import readme from './README.stories.mdx';
 import textNullable from '../../../../.storybook/knob-text-nullable';
 
 export const Default = ({ parameters }) => {
  
   return html`
   <dds-card-group border>
   <dds-card-group-item href="https://example.com" color-scheme="inverse">
     <dds-card-heading>Top level card link</dds-card-heading>
     <dds-card-footer slot="footer" color-scheme="inverse">
       ${ArrowRight20({ slot: 'icon' })}
     </dds-card-footer>
   </dds-card-group-item>
   <dds-card-group-item href="https://example.com" color-scheme="inverse">
   <dds-card-heading>Top level card link</dds-card-heading>
   <dds-card-footer slot="footer" color-scheme="inverse">
     ${ArrowRight20({ slot: 'icon' })}
   </dds-card-footer>
 </dds-card-group-item>
 <dds-card-group-item href="https://example.com" color-scheme="inverse">
 <dds-card-heading>Top level card link</dds-card-heading>
 <dds-card-footer slot="footer" color-scheme="inverse">
   ${ArrowRight20({ slot: 'icon' })}
 </dds-card-footer>
</dds-card-group-item>
 </dds-card-group>
  
   `;
 };
 
 export default {
   title: 'Components/Content group L shaped',
   decorators: [
     story => html`
       
        <div class="dds-ce-demo-devenv--simple-grid--content-group-l-shaped">
         ${story()}
         </div>
      
     `,
   ],
   parameters: {
     ...readme.parameters,
     hasGrid: true,
     knobs: {
     },
   },
 };
 