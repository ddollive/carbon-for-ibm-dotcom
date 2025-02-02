/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, query, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import {
  formatVideoCaption,
  formatVideoDuration,
} from '@carbon/ibmdotcom-utilities/es/utilities/formatVideoCaption/formatVideoCaption.js';
import DDSButtonGroupItem from '../button-group/button-group-item';
import CTAMixin from '../../component-mixins/cta/cta';
import VideoCTAMixin from '../../component-mixins/cta/video';
import { CTA_TYPE } from './defs';
import styles from './cta.scss';

export { CTA_TYPE };

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Button CTA.
 *
 * @element dds-button-cta
 */
@customElement(`${ddsPrefix}-button-cta`)
class DDSButtonCTA extends VideoCTAMixin(CTAMixin(DDSButtonGroupItem)) {
  /**
   * The button that may work as a link.
   *
   * @private
   */
  @query('[part="button"]')
  _linkNode!: HTMLElement;

  /**
   * @returns The main content.
   */
  protected _renderContent() {
    const { ctaType, _hasMainContent: hasMainContent } = this;
    if (ctaType !== CTA_TYPE.VIDEO) {
      return html`
        <slot @slotchange="${this._handleSlotChange}"></slot>
      `;
    }
    const {
      videoDuration,
      videoName,
      formatVideoCaption: formatVideoCaptionInEffect,
      formatVideoDuration: formatVideoDurationInEffect,
    } = this;
    const caption = hasMainContent
      ? undefined
      : formatVideoCaptionInEffect({
          duration: formatVideoDurationInEffect({ duration: !videoDuration ? videoDuration : videoDuration * 1000 }),
          name: videoName,
        });
    return html`
      <slot @slotchange="${this._handleSlotChange}"></slot>${caption}
    `;
  }

  protected _renderInner() {
    return html`
      ${this._renderContent()}${this._renderIcon()}
    `;
  }

  /**
   * The CTA type.
   */
  @property({ reflect: true, attribute: 'cta-type' })
  ctaType = CTA_TYPE.REGULAR;

  /**
   * The formatter for the video caption, composed with the video name and the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatVideoCaption = formatVideoCaption;

  /**
   * The formatter for the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatVideoDuration = formatVideoDuration;

  /**
   * The video duration.
   */
  @property({ type: Number, attribute: 'video-duration' })
  videoDuration?: number;

  /**
   * The video name.
   */
  @property({ attribute: 'video-name' })
  videoName?: string;

  /**
   * The video thumbnail URL.
   * Button CTA does not support video thumbnail, and this property should never be set.
   */
  videoThumbnailUrl?: never;

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSButtonCTA;
