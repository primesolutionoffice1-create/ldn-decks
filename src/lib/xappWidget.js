// The chat bundle reads document.getElementById("xapp-js").src and builds
// its stylesheet as `${path}/xapp-chat-widget.css`. A missing element makes
// that path the string "undefined", which the browser requests as
// /undefined/xapp-chat-widget.css on every page.
export const XAPP_SCRIPT_ID = 'xapp-js';
export const XAPP_WIDGET_SRC = 'https://widget.xapp.ai/xapp-chat-widget.js?key=ab9437fd-cfae-4e99-8d67-5ba6dd4a0f5d';

export function xappAssetOrigin(scriptSrc) {
  if (typeof scriptSrc !== 'string' || !scriptSrc) return '';
  try {
    const url = new URL(scriptSrc);
    if (url.protocol !== 'https:') return '';
    const path = scriptSrc.slice(0, scriptSrc.lastIndexOf('/'));
    return path || url.origin;
  } catch {
    return '';
  }
}
