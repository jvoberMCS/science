import "clsx";
import "../../chunks/theme.js";
import "deepmerge";
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="childs svelte-96arj0">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
