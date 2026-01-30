import { u as ensure_array_like, z as attr_class, F as attr, t as escape_html, m as pop, p as push, A as stringify } from "../../../chunks/index.js";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip.js";
function _page($$payload, $$props) {
  push();
  gsap.registerPlugin(Flip);
  let expandedId = null;
  const items = [1, 2, 3, 4];
  const each_array = ensure_array_like(items);
  $$payload.out += `<div class="container svelte-wa92eq"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<div${attr_class(`box ${stringify(expandedId === item ? "expanded" : "")}`, "svelte-wa92eq")} role="button" tabindex="0"${attr("aria-pressed", expandedId === item)}>${escape_html(item)}</div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
