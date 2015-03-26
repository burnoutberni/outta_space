import {loadTemplate} from './utils';
import './api';

var Playlist = function(selector) {
    this.el = document.querySelector(selector);
    this.template = loadTemplate('#template-playlist');
    this.el.addEventListener('click', this.item_click_handler);
};

Playlist.prototype = {
    render: function(state) {
        this.el.innerHTML = this.template(state.playlist);
    },
    item_click_handler: function(ev) {
        // ev.target is the <a> element, parentNode the <li> element.
        api.jump(ev.target.parentNode.getAttribute('data-id'));
    }
};

export default Playlist;
