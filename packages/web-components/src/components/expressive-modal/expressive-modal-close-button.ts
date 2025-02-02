/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { property, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import BXModalCloseButton from 'carbon-web-components/es/components/modal/modal-close-button.js';
import { EXPRESSIVE_MODAL_SIZE } from './expressive-modal';
import styles from './expressive-modal.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Expressive modal close button.
 *
 * @element dds-expressive-modal-close-button
 */
@customElement(`${ddsPrefix}-expressive-modal-close-button`)
class DDSExpressiveModalCloseButton extends BXModalCloseButton {
  /**
   * The size variant.
   */
  @property({ reflect: true, attribute: 'size' })
  size = EXPRESSIVE_MODAL_SIZE.REGULAR;

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSExpressiveModalCloseButton;
