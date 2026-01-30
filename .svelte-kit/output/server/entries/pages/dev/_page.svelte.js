import { y as ensure_array_like, z as attr_style, v as escape_html } from "../../../chunks/index2.js";
import { e as elementInfo } from "../../../chunks/ElementInfo.svelte.js";
function _page($$payload) {
  const each_array = ensure_array_like(elementInfo);
  $$payload.out += `<div class="pt-container svelte-lczexq"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let element = each_array[$$index];
    $$payload.out += `<div class="element svelte-lczexq"${attr_style("", { "grid-column-start": element.xpos })}>${escape_html(element.symbol)}</div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
export {
  _page as default
};
