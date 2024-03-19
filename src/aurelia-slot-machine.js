/**
 *  Aurelia Slot Machine
 *  Create an extremely biased, web-based slot machine game.
 *
 *  Copyright 2024, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

import {bindable, inlineView} from 'aurelia-framework';

import SlotMachineGen from 'slot-machine-gen';
import 'slot-machine-gen/dist/slot-machine.min.css';

@inlineView('<template><div id="${id}" class="slot-machine" ref="_element"></div></template>')

/**
 * Provides Aurelia Component wrapper.
 */
export class SlotMachineCustomElement {
  @bindable id = 'slot-machine';
  @bindable play = false;
  @bindable reels = [];
  @bindable options = {};
  @bindable callback;

  _element = null;

  attached() {
    this.slot = new SlotMachineGen(
      this._element,
      this.reels,
      this.callback,
      this.options
    );
  }

  playChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.slot?.play();
    }
  }
}
