import { m as pop, p as push, v as escape_html } from "../../chunks/index2.js";
import "clsx";
import { G as GlowButton, F as FormulaFilterByTopicModal, a as Formulas, g as getUseLongValues, s as setLongValues } from "../../chunks/Formulas.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="formulas-container svelte-ws5xl7"><div class="buttons svelte-ws5xl7"><div class="long-values-button">`;
  GlowButton($$payload, {
    onClick: () => {
      setLongValues(getUseLongValues() === true ? false : true);
    },
    children: ($$payload2) => {
      $$payload2.out += `<!---->${escape_html(getUseLongValues() === true ? "Use Short Values" : "Use Long Values")}`;
    }
  });
  $$payload.out += `<!----></div> `;
  FormulaFilterByTopicModal($$payload);
  $$payload.out += `<!----></div> `;
  Formulas($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
