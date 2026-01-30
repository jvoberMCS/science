import { u as attr_class, z as attr_style, m as pop, p as push, F as attr, v as escape_html, C as bind_props, y as ensure_array_like } from "./index2.js";
import "clsx";
import { v4 } from "uuid";
function GlowButton($$payload, $$props) {
  push();
  let {
    children,
    width = "10em",
    height = "2em",
    onClick
  } = $$props;
  $$payload.out += `<button${attr_class(`glow-button`, "svelte-843wab")}${attr_style("", { width, height })}><span class="content svelte-843wab">`;
  children($$payload);
  $$payload.out += `<!----></span> <div class="glow-effect svelte-843wab"></div></button>`;
  pop();
}
let useLongValues = true;
let getUseLongValues = () => {
  return useLongValues;
};
let setLongValues = (newUseLongValue) => {
  useLongValues = newUseLongValue;
};
const psTopicsChem = ["Chemistry_PS", "Matter_PS", "Gas_Laws_PS"];
const psTopicsPhy = [
  "Physics_PS",
  "Kinematics_PS",
  "Dynamics_PS",
  "Energy_PS",
  "Waves_PS",
  "Electricity_PS"
];
let newArray = psTopicsChem;
psTopicsPhy.forEach((topic) => {
  newArray.push(topic);
});
const psTopics = newArray;
function UnitInfoBox($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Term($$payload, $$props) {
  push();
  let { color = "black", subscript = "", content } = $$props;
  let uniqueID = v4();
  function glowEffect($$payload2) {
    $$payload2.out += `<div class="glow-effect svelte-14pk3hb"></div>`;
  }
  $$payload.out += `<mrow${attr("id", `${uniqueID}`)}>`;
  if (typeof content === "object") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<msub role="math" class="glow-term svelte-14pk3hb"${attr_style("", {
      color: content.color,
      "margin-bottom": subscript !== "NONE" ? "0.25em" : "0px"
    })}><ms>${escape_html(getUseLongValues() === true ? content.value.long : content.value.short)} `;
    glowEffect($$payload);
    $$payload.out += `<!----></ms> `;
    if (subscript !== "NONE") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<ms>${escape_html(subscript)}</ms>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></msub>`;
  } else if (typeof content === "string" && content.length === 1) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<msub role="math" class="svelte-14pk3hb"${attr_style("", {
      color,
      "margin-bottom": subscript !== "NONE" ? "0.25em" : "0px"
    })}><mi>${escape_html(content)} `;
    glowEffect($$payload);
    $$payload.out += `<!----></mi> `;
    if (subscript !== "NONE") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<ms>${escape_html(subscript)}</ms>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></msub>`;
  } else if (typeof content === "string") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<msub role="math" class="svelte-14pk3hb"${attr_style("", {
      color,
      "margin-bottom": subscript !== "NONE" ? "0.25em" : "0px"
    })}><ms>${escape_html(content)} `;
    glowEffect($$payload);
    $$payload.out += `<!----></ms> `;
    if (subscript !== "NONE") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<ms>${escape_html(subscript)}</ms>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></msub>`;
  } else if (typeof content === "number") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<msub role="math" class="svelte-14pk3hb"${attr_style("", {
      color,
      "margin-bottom": subscript !== "NONE" ? "0.25em" : "0px"
    })}><mn>${escape_html(content)} `;
    glowEffect($$payload);
    $$payload.out += `<!----></mn> `;
    if (subscript !== "NONE") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<ms>${escape_html(subscript)}</ms>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></msub>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<msub role="math" class="svelte-14pk3hb"${attr_style("", {
      color,
      "margin-bottom": subscript !== "NONE" ? "0.25em" : "0px"
    })}><ms>`;
    content($$payload);
    $$payload.out += `<!----> `;
    glowEffect($$payload);
    $$payload.out += `<!----></ms> `;
    if (subscript !== "NONE") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<ms>${escape_html(subscript)}</ms>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></msub>`;
  }
  $$payload.out += `<!--]--></mrow>`;
  pop();
}
function Subscript($$payload, $$props) {
  const { subscriptContent, base, baseColor, subColor } = $$props;
  $$payload.out += `<math class="Subscript svelte-b52hlo"><msub>`;
  Term($$payload, {
    content: base,
    color: baseColor,
    subscript: "NONE"
  });
  $$payload.out += `<!----> `;
  Term($$payload, {
    content: subscriptContent,
    color: subColor,
    subscript: "NONE"
  });
  $$payload.out += `<!----></msub></math>`;
}
function Constant($$payload, $$props) {
  let { base, subscript } = $$props;
  function S($$payload2) {
    Subscript($$payload2, {
      base,
      baseColor: "black",
      subscriptContent: subscript,
      subColor: "black"
    });
  }
  $$payload.out += `<div><div${attr_style("", { margin: "2vh" })}><math class="svelte-1w6lczr">`;
  S($$payload);
  $$payload.out += `<!----></math></div></div>`;
}
function FmtA($$payload, $$props) {
  push();
  let {
    a,
    b,
    c,
    subscripts,
    variant = "DEFAULT",
    showAll = false
  } = $$props;
  let v = variant;
  function A($$payload2) {
    Term($$payload2, {
      content: a,
      subscript: subscripts.a,
      color: "black"
    });
  }
  function B($$payload2) {
    Term($$payload2, {
      content: b,
      subscript: subscripts.b,
      color: "black"
    });
  }
  function C($$payload2) {
    Term($$payload2, {
      content: c,
      subscript: subscripts.c,
      color: "black"
    });
  }
  if (showAll === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><div${attr_style("", { margin: "2vh" })}><math class="svelte-1w6lczr"><mrow><mi>`;
    A($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mi>`;
    B($$payload);
    $$payload.out += `<!----></mi> <mi>`;
    C($$payload);
    $$payload.out += `<!----></mi></mfrac></mrow></math></div> <div${attr_style("", { margin: "2vh" })}><math class="svelte-1w6lczr"><mrow><mi>`;
    B($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mi>`;
    A($$payload);
    $$payload.out += `<!----></mi> <mo>·</mo> <mi>`;
    C($$payload);
    $$payload.out += `<!----></mi></mrow></math></div> <div${attr_style("", { margin: "2vh" })}><math class="svelte-1w6lczr"><mrow><mi>`;
    C($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mi>`;
    B($$payload);
    $$payload.out += `<!----></mi> <mi>`;
    A($$payload);
    $$payload.out += `<!----></mi></mfrac></mrow></math></div></div>`;
  } else if (v === "PRIMARY" || v === "DEFAULT") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<math class="svelte-1w6lczr"><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></mi> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></mi></mfrac></mrow></math>`;
  } else if (v === "SECONDARY") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<math class="svelte-1w6lczr"><mrow><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></mi> <mo>·</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></mi></mrow></mrow></math>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<math class="svelte-1w6lczr"><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></mi> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></mi></mfrac></mrow></math>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function FmtB($$payload, $$props) {
  push();
  let {
    a,
    b,
    c,
    d,
    subscripts,
    variant = "DEFAULT",
    showAll = false
  } = $$props;
  let v = variant;
  function A($$payload2) {
    Term($$payload2, {
      content: a,
      subscript: subscripts.a,
      color: "black"
    });
  }
  function B($$payload2) {
    Term($$payload2, {
      content: b,
      subscript: subscripts.b,
      color: "black"
    });
  }
  function C($$payload2) {
    Term($$payload2, {
      content: c,
      subscript: subscripts.c,
      color: "black"
    });
  }
  function D2($$payload2) {
    Term($$payload2, {
      content: d,
      subscript: subscripts.d,
      color: "black"
    });
  }
  if (showAll === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-6dr3yb"><mrow><msub>`;
    A($$payload);
    $$payload.out += `<!----></msub> <mo>·</mo> <msub>`;
    B($$payload);
    $$payload.out += `<!----></msub> <mo>=</mo> <msub>`;
    C($$payload);
    $$payload.out += `<!----></msub> <mo>·</mo> <msub>`;
    D2($$payload);
    $$payload.out += `<!----></msub></mrow></math></div> <div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-6dr3yb"><mrow><mi>`;
    B($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi>`;
    C($$payload);
    $$payload.out += `<!----></mi> <mo>·</mo> <mi>`;
    D2($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms>`;
    A($$payload);
    $$payload.out += `<!----></ms></mrow></mfrac></mrow></math></div> <div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-6dr3yb"><mrow><mi>`;
    C($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi>`;
    A($$payload);
    $$payload.out += `<!----></mi> <mo>·</mo> <mi>`;
    B($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms>`;
    D2($$payload);
    $$payload.out += `<!----></ms></mrow></mfrac></mrow></math></div> <div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-6dr3yb"><mrow><mi>`;
    D2($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi>`;
    A($$payload);
    $$payload.out += `<!----></mi> <mo>·</mo> <mi>`;
    B($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms>`;
    C($$payload);
    $$payload.out += `<!----></ms></mrow></mfrac></mrow></math></div></div>`;
  } else if (v === "DEFAULT" || v === "PRIMARY") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<math class="svelte-6dr3yb"><mrow><msub role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></msub> <mo>·</mo> <msub role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></msub> <mo>=</mo> <msub role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></msub> <mo>·</mo> <msub role="button" aria-label="Interactive math button" tabindex="0">`;
    D2($$payload);
    $$payload.out += `<!----></msub></mrow></math>`;
  } else if (v === "SECONDARY") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<math class="svelte-6dr3yb"><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></mi> <mo>·</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    D2($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></ms></mrow></mfrac></mrow></math>`;
  } else if (v === "TERTIARY") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<math class="svelte-6dr3yb"><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></mi> <mo>·</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms role="button" aria-label="Interactive math button" tabindex="0">`;
    D2($$payload);
    $$payload.out += `<!----></ms></mrow></mfrac></mrow></math>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<math class="svelte-6dr3yb"><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    D2($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></mi> <mo>·</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></ms></mrow></mfrac></mrow></math>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function FmtC($$payload, $$props) {
  push();
  let {
    a,
    b,
    c,
    d,
    coefficient,
    subscripts,
    showAll = false,
    variant = "DEFAULT"
  } = $$props;
  let v = variant;
  function A($$payload2) {
    Term($$payload2, {
      content: a,
      subscript: subscripts.a,
      color: "black"
    });
  }
  function B($$payload2) {
    Term($$payload2, {
      content: b,
      subscript: subscripts.b,
      color: "black"
    });
  }
  function C($$payload2) {
    Term($$payload2, {
      content: c,
      subscript: subscripts.c,
      color: "black"
    });
  }
  function D2($$payload2) {
    Term($$payload2, {
      content: d,
      subscript: subscripts.d,
      color: "black"
    });
  }
  function Coefficient($$payload2) {
    if (coefficient !== void 0) {
      $$payload2.out += "<!--[-->";
      Term($$payload2, {
        content: coefficient,
        subscript: subscripts.e,
        color: "black"
      });
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div></div>`;
    }
    $$payload2.out += `<!--]-->`;
  }
  if (showAll === true) {
    $$payload.out += "<!--[-->";
    if (coefficient === void 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div><div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-1w6lczr"><mrow><msub>`;
      A($$payload);
      $$payload.out += `<!----></msub> <mo>=</mo> <msub>`;
      B($$payload);
      $$payload.out += `<!----></msub> <mo>·</mo> <msub>`;
      C($$payload);
      $$payload.out += `<!----></msub> <mo>·</mo> <msub>`;
      D2($$payload);
      $$payload.out += `<!----></msub></mrow></math></div> <div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-1w6lczr"><mrow><mi>`;
      B($$payload);
      $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi>`;
      A($$payload);
      $$payload.out += `<!----></mi></mrow> <mrow><ms>`;
      C($$payload);
      $$payload.out += `<!----></ms> <mo>·</mo> <mi>`;
      D2($$payload);
      $$payload.out += `<!----></mi></mrow></mfrac></mrow></math></div> <div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-1w6lczr"><mrow><mi>`;
      C($$payload);
      $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi>`;
      A($$payload);
      $$payload.out += `<!----></mi></mrow> <mrow><ms>`;
      B($$payload);
      $$payload.out += `<!----></ms> <mo>·</mo> <mi>`;
      D2($$payload);
      $$payload.out += `<!----></mi></mrow></mfrac></mrow></math></div> <div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-1w6lczr"><mrow><mi>`;
      D2($$payload);
      $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi>`;
      A($$payload);
      $$payload.out += `<!----></mi></mrow> <mrow><ms>`;
      B($$payload);
      $$payload.out += `<!----></ms> <mo>·</mo> <mi>`;
      C($$payload);
      $$payload.out += `<!----></mi></mrow></mfrac></mrow></math></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div><div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-1w6lczr"><mrow><msub>`;
      A($$payload);
      $$payload.out += `<!----></msub> <mo>=</mo> <msub>`;
      B($$payload);
      $$payload.out += `<!----></msub> <mo>·</mo> <msub>`;
      C($$payload);
      $$payload.out += `<!----></msub> <mo>·</mo> <msub>`;
      D2($$payload);
      $$payload.out += `<!----></msub></mrow></math></div> <div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-1w6lczr"><mrow><mi>`;
      C($$payload);
      $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi>`;
      A($$payload);
      $$payload.out += `<!----></mi></mrow> <mrow><mn${attr_style("", { "font-size": "1.5em" })}>2</mn> <mo>·</mo> <mi>`;
      D2($$payload);
      $$payload.out += `<!----></mi></mrow></mfrac></mrow></math></div> <div${attr_style("", { "margin-top": "1vh", "margin-bottom": "1vh" })}><math class="svelte-1w6lczr"><mrow><mi>`;
      Coefficient($$payload);
      $$payload.out += `<!----></mi> <mo>=</mo> <mrow><msqrt><mrow><mfrac><mrow><mi>`;
      A($$payload);
      $$payload.out += `<!----></mi></mrow> <mrow><mn${attr_style("", { "font-size": "1.5em" })}>2</mn> <mo>·</mo> <mi>`;
      C($$payload);
      $$payload.out += `<!----></mi></mrow></mfrac></mrow></msqrt></mrow></mrow></math></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else if (v === "DEFAULT" || v === "PRIMARY") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<math class="svelte-1w6lczr"><mrow><msub role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></msub> <mo>=</mo> <msub role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></msub> <mo>·</mo> <msub role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></msub> <mo>·</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    D2($$payload);
    $$payload.out += `<!----></mi></mrow></math>`;
  } else if (v === "SECONDARY") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<math class="svelte-1w6lczr"><mrow><ms role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></ms> <mo>=</mo> <mfrac><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></ms> <mo>·</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    D2($$payload);
    $$payload.out += `<!----></mi></mrow></mfrac></mrow></math>`;
  } else if (v === "TERTIARY") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<math class="svelte-1w6lczr"><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></ms> <mo>·</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    D2($$payload);
    $$payload.out += `<!----></mi></mrow></mfrac></mrow></math>`;
  } else if (v === "QUARTENARY") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<math class="svelte-1w6lczr"><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    D2($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></ms> <mo>·</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></mi></mrow></mfrac></mrow></math>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<math class="svelte-1w6lczr"><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    D2($$payload);
    $$payload.out += `<!----></mi> <mo>=</mo> <mfrac><mrow><mi role="button" aria-label="Interactive math button" tabindex="0">`;
    A($$payload);
    $$payload.out += `<!----></mi></mrow> <mrow><ms role="button" aria-label="Interactive math button" tabindex="0">`;
    B($$payload);
    $$payload.out += `<!----></ms> <mo>·</mo> <mi role="button" aria-label="Interactive math button" tabindex="0">`;
    C($$payload);
    $$payload.out += `<!----></mi></mrow></mfrac></mrow></math>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Formula($$payload, $$props) {
  push();
  let {
    format,
    initialVariant,
    values,
    subscripts,
    title,
    notes,
    toggleState: toggleState2
  } = $$props;
  let variant = initialVariant;
  let showAll = false;
  $$payload.out += `<div class="FormulaContainer svelte-5d8wyx"${attr_style("", {
    "margin-left": getUseLongValues() === true ? 0 : "1vw",
    "margin-right": getUseLongValues() === true ? 0 : "1vw"
  })}><div class="header svelte-5d8wyx"><div class="spacer svelte-5d8wyx"></div> `;
  if (title !== void 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="title-container svelte-5d8wyx"><u class="title svelte-5d8wyx">${escape_html(title)}</u></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="title-container svelte-5d8wyx"><div class="title svelte-5d8wyx"></div></div>`;
  }
  $$payload.out += `<!--]--> `;
  if (toggleState2 !== void 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="toggle-state-btn svelte-5d8wyx">${escape_html(toggleState2.isToggled() === true ? "Hide" : "Show")}</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button class="showAllBtn svelte-5d8wyx">Show All Formulas</button></div> <div class="Formula svelte-5d8wyx">`;
  if (format === "A") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    {
      FmtA($$payload, {
        a: values.a,
        b: values.b,
        c: values.c,
        subscripts: {
          a: subscripts.a,
          b: subscripts.b,
          c: subscripts.c
        },
        variant,
        showAll
      });
    }
    $$payload.out += `<!---->`;
  } else if (format === "B") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<!---->`;
    {
      FmtB($$payload, {
        a: values.a,
        b: values.b,
        c: values.c,
        d: values.d,
        subscripts: {
          a: subscripts.a,
          b: subscripts.b !== void 0 ? subscripts.b : "",
          c: subscripts.c !== void 0 ? subscripts.c : "",
          d: subscripts.d !== void 0 ? subscripts.d : ""
        },
        variant,
        showAll
      });
    }
    $$payload.out += `<!---->`;
  } else if (format === "C") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<!---->`;
    {
      FmtC($$payload, {
        a: values.a,
        b: values.b,
        c: values.c,
        d: values.d,
        coefficient: values.coefficient,
        subscripts: {
          a: subscripts.a,
          b: subscripts.b,
          c: subscripts.c,
          d: subscripts.d !== void 0 ? subscripts.d : "",
          e: subscripts.e !== void 0 ? subscripts.e : ""
        },
        variant,
        showAll
      });
    }
    $$payload.out += `<!---->`;
  } else if (format = "CONSTANT") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<!---->`;
    {
      Constant($$payload, { base: values.a, subscript: subscripts.a });
    }
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (notes !== void 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="notes svelte-5d8wyx">${escape_html(notes)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
const Red = {
  900: "#FF8787",
  500: "#FF5555",
  100: "#F40000"
};
const Pink = {
  900: "#EC8DC3",
  500: "#FF79C6",
  100: "#FF0F97"
};
const Orange = {
  900: "#FFCC95",
  500: "#FFB86C",
  100: "#FF8604"
};
const Yellow = {
  900: "#E3EA9A",
  500: "#F1FA8C",
  100: "#E4F61F"
};
const Yellowgreen = {
  900: "#D9FD4B",
  500: "#CAFC03",
  100: "#91B402"
};
const Green = {
  900: "#6AE288",
  500: "#50FA7B",
  100: "#07E63F"
};
const Blue = {
  900: "#6A88E2",
  500: "#527CFA",
  100: "#073FE6"
};
const Cyan = {
  900: "#9CDEED",
  500: "#8BE9FD",
  100: "#1DD3FC"
};
const Purple = {
  900: "#D1B3FB",
  500: "#BD93F9",
  100: "#7D2AF3"
};
const Tan = {
  900: "#CCBEAB",
  500: "#B7A48A",
  100: "#8E7757"
};
const VariableColors = [
  Red[100],
  Orange[100],
  Yellow[100],
  Green[100],
  Cyan[100],
  Purple[100],
  Pink[100],
  Yellowgreen[100],
  Blue[100],
  Tan[100],
  Red[500],
  Orange[500],
  Yellow[500],
  Green[500],
  Blue[500],
  Purple[500],
  Pink[500],
  Cyan[500],
  Yellowgreen[500],
  Tan[500],
  Red[900],
  Orange[900],
  Yellow[900],
  Green[900],
  Blue[900],
  Purple[900],
  Pink[900],
  Cyan[900],
  Yellowgreen[900],
  Tan[900]
];
const DENSITY = {
  value: { long: "Density", short: "ρ" },
  color: VariableColors[0],
  units: {
    type: "FRACTIONAL",
    long: { value1: "grams", value2: "centimeter³" },
    short: { value1: "g", value2: "cm³" }
  },
  exampleValue: "1",
  description: "a measurement that compares the amount of matter an object has to its volume. An object with a lot of matter in a certain volume has high density. An object with little matter in the same amount of volume has a low density."
};
const MASS = {
  value: { long: "Mass", short: "m" },
  color: VariableColors[1],
  units: {
    type: "SIMPLE",
    long: { value1: "Kilograms", value2: null },
    short: { value1: "kg", value2: null }
  },
  exampleValue: "75",
  description: "a measure of the amount of matter an object has."
};
const VOLUME = {
  value: { long: "Volume", short: "V" },
  color: VariableColors[2],
  units: {
    type: "SIMPLE",
    long: { value1: "Centimeters²", value2: null },
    short: { value1: "cm²", value2: null }
  },
  exampleValue: "10",
  description: "the amount of three dimensional space occupied by an object."
};
const FORCE = {
  value: { long: "Force", short: "F" },
  color: VariableColors[3],
  units: {
    type: "SIMPLE",
    long: { value1: "Newtons", value2: null },
    short: { value1: "N", value2: null }
  },
  description: "a push or pull between objects.",
  exampleValue: "100"
};
const WEIGHT = {
  value: { long: "Weight", short: "Fg" },
  color: VariableColors[3],
  units: {
    type: "SIMPLE",
    long: { value1: "Newtons", value2: null },
    short: { value1: "N", value2: null }
  },
  description: "a push or pull between objects due to gravity.",
  exampleValue: "100"
};
const AREA = {
  value: { long: "Area", short: "A" },
  color: VariableColors[4],
  units: {
    type: "SIMPLE",
    long: { value1: "Cubic Centimeters", value2: null },
    short: { value1: "cm³", value2: null }
  },
  exampleValue: "50",
  description: "the amount of space a two dimensional (flat) surface takes up."
};
const PRESSURE = {
  value: { long: "Pressure", short: "P" },
  color: VariableColors[5],
  units: {
    type: "SIMPLE",
    long: { value1: "Atmospheres", value2: null },
    short: { value1: "atm", value2: null }
  },
  exampleValue: "1.2",
  description: "the amount of force applied over a specific area."
};
const TEMPERATURE = {
  value: { long: "Temperature", short: "T" },
  color: VariableColors[6],
  units: {
    type: "SIMPLE",
    long: { value1: "Degrees Celsius", value2: null },
    short: { value1: "°C", value2: null }
  },
  exampleValue: "28",
  description: "how hot or cold something is."
};
const THERMAL_ENERGY = {
  value: { long: "Thermal Energy", short: "TE" },
  color: VariableColors[7],
  units: {
    type: "SIMPLE",
    long: { value1: "Joules", value2: null },
    short: { value1: "J", value2: null }
  },
  exampleValue: "100",
  description: "the sum of the kinetic energy of atoms or molecules."
};
const SPECIFIC_HEAT = {
  value: { long: "Specific Heat", short: "c" },
  color: VariableColors[8],
  units: {
    type: "FRACTIONAL",
    long: {
      value1: "Joules",
      value2: "gram • degree Celsius"
    },
    short: { value1: "J", value2: "g•°C" }
  },
  exampleValue: "100",
  description: "the amount of heat required for a single unit of mass of a substance to be raised by one degree of temperature."
};
const SPEED = {
  value: { long: "Speed", short: "s" },
  color: VariableColors[9],
  units: {
    type: "FRACTIONAL",
    long: { value1: "meters", value2: "second" },
    short: { value1: "m", value2: "s" }
  },
  exampleValue: "22",
  description: "the same as velocity, but without specifying any specific direction."
};
const DISTANCE = {
  value: { long: "Distance", short: "d" },
  color: VariableColors[10],
  units: {
    type: "SIMPLE",
    long: { value1: "Meters", value2: null },
    short: { value1: "m", value2: null }
  },
  exampleValue: "100",
  description: "how far one thing is from another thing, or the amount of space between two things."
};
const TIME = {
  value: { long: "Time", short: "t" },
  color: VariableColors[11],
  units: {
    type: "SIMPLE",
    long: { value1: "Seconds", value2: null },
    short: { value1: "s", value2: null }
  },
  exampleValue: "10",
  description: "the never-ending continued proсess of existence and events."
};
const VELOCITY = {
  value: { long: "Velocity", short: "v" },
  color: VariableColors[12],
  units: {
    type: "FRACTIONAL",
    long: { value1: "meters", value2: "second" },
    short: { value1: "m", value2: "s" }
  },
  exampleValue: "82",
  description: "a measure of how fast something moves in a particular direction."
};
const POSITION = {
  value: { long: "Position", short: "x" },
  color: VariableColors[13],
  units: {
    type: "SIMPLE",
    long: { value1: "Meters", value2: null },
    short: { value1: "m", value2: null }
  },
  exampleValue: "10",
  description: "where something is."
};
const ACCELERATION = {
  value: { long: "Acceleration", short: "a" },
  color: VariableColors[14],
  units: {
    type: "FRACTIONAL",
    long: { value1: "Meters", value2: "seconds²" },
    short: { value1: "m", value2: "s²" }
  },
  exampleValue: "18",
  description: "a measure of how fast velocity changes."
};
const GRAVITATIONAL_ACCELERATION = {
  value: {
    long: "Gravitational Acceleration",
    short: "g"
  },
  color: VariableColors[14],
  units: {
    type: "FRACTIONAL",
    long: { value1: "Meters", value2: "seconds²" },
    short: { value1: "m", value2: "s²" }
  },
  exampleValue: "10",
  description: "a special case of acceleration that is due to the Gravity of an object pulling on another object.  On earth, this value is 10"
};
const MOMENTUM = {
  value: { long: "Momentum", short: "p" },
  color: VariableColors[15],
  units: {
    type: "FRACTIONAL",
    long: { value1: "kilogram • meters", value2: "second" },
    short: { value1: "kg•m", value2: "s" }
  },
  exampleValue: "100",
  description: 'the "power" when a body is moving, meaning how much force it can have on another body. For exampleValue, a bowling ball (large mass) moving very slowly (low velocity) can have the same momentum as a baseball (small mass) that is thrown fast (high velocity).'
};
const WORK = {
  value: { long: "Work", short: "w" },
  color: VariableColors[17],
  units: {
    type: "SIMPLE",
    long: {
      value1: "Joules or Newton-Meters",
      value2: null
    },
    short: { value1: "J or N•m", value2: null }
  },
  exampleValue: "100",
  description: "what force does."
};
const POWER = {
  value: { long: "Power", short: "P" },
  color: VariableColors[18],
  units: {
    type: "SIMPLE",
    long: { value1: "Watts", value2: null },
    short: { value1: "W", value2: null }
  },
  exampleValue: "80",
  description: "(1) how fast work is done. or (2) how quickly energy is given from one thing to another."
};
const KINETIC_ENERGY = {
  value: { long: "Kinetic Energy", short: "KE" },
  color: VariableColors[19],
  units: {
    type: "SIMPLE",
    long: { value1: "Joules", value2: null },
    short: { value1: "J", value2: null }
  },
  exampleValue: "100",
  description: "the energy that an object has because of its motion."
};
const GPE = {
  value: {
    long: "Gravitational Potential Energy",
    short: "GPE"
  },
  color: VariableColors[20],
  units: {
    type: "SIMPLE",
    long: { value1: "Joules", value2: null },
    short: { value1: "J", value2: null }
  },
  exampleValue: "200",
  description: "energy that depends on its height off the ground and mass"
};
const HEIGHT = {
  value: { long: "Height", short: "h" },
  color: VariableColors[21],
  units: {
    type: "SIMPLE",
    long: { value1: "Meters", value2: null },
    short: { value1: "m", value2: null }
  },
  exampleValue: "20",
  description: "the distance between the earth and highest end of an object."
};
const VOLTAGE = {
  value: { long: "Voltage", short: "V" },
  color: VariableColors[22],
  units: {
    type: "SIMPLE",
    long: { value1: "Volts", value2: null },
    short: { value1: "V", value2: null }
  },
  exampleValue: "9",
  description: "what makes electric charges move. It is the 'push' that causes charges to move in a wire or other electrical conductor."
};
const CURRENT = {
  value: { long: "Current", short: "I" },
  color: VariableColors[23],
  units: {
    type: "SIMPLE",
    long: { value1: "Amps", value2: null },
    short: { value1: "A", value2: null }
  },
  exampleValue: "3",
  description: "the flow of electric charge through a conductor."
};
const RESISTANCE = {
  value: { long: "Resistance", short: "R" },
  color: VariableColors[24],
  units: {
    type: "SIMPLE",
    long: { value1: "Ohms", value2: null },
    short: { value1: "Ω", value2: null }
  },
  exampleValue: "100",
  description: "the difficulty of passing an electric current through a substance.  With more resistance in a circuit, less electricity will flow through the circuit."
};
const WAVE_SPEED = {
  value: { long: "Wave Speed", short: "s" },
  color: VariableColors[25],
  units: {
    type: "FRACTIONAL",
    long: { value1: "centimeters", value2: "second" },
    short: { value1: "cm", value2: "s" }
  },
  exampleValue: "10",
  description: "how fast a wave is travelling through a medium."
};
const FREQUENCY = {
  value: { long: "Frequency", short: "f" },
  color: VariableColors[26],
  units: {
    type: "SIMPLE",
    long: { value1: "Hertz", value2: null },
    short: { value1: "Hz", value2: null }
  },
  exampleValue: "826",
  description: "the number of wave crests that pass a point in one second (a wave crest is the peak of the wave)."
};
const WAVELENGTH = {
  value: { long: "Wavelength", short: "λ" },
  color: VariableColors[27],
  units: {
    type: "SIMPLE",
    long: { value1: "Centimeters", value2: null },
    short: { value1: "cm", value2: null }
  },
  exampleValue: "42",
  description: "the distance between a crest and another crest of a wave (highest point above equilibrium) or the distance between a trough and another trough of a wave (lowest point below the equilibrium of a wave). "
};
function BoyleFormula($$payload, $$props) {
  push();
  let name2 = "Boyles_Law_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="BoylesFormula">`;
  Formula($$payload, {
    format: "B",
    initialVariant: "DEFAULT",
    values: {
      a: PRESSURE,
      b: VOLUME,
      c: PRESSURE,
      d: VOLUME
    },
    subscripts: { a: "1", b: "1", c: "2", d: "2" },
    title: "Boyle's Law"
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function CharlesFormula($$payload, $$props) {
  push();
  let name2 = "Charles_Law_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="CharlesFormula">`;
  Formula($$payload, {
    format: "B",
    initialVariant: "DEFAULT",
    values: {
      a: VOLUME,
      b: TEMPERATURE,
      c: VOLUME,
      d: TEMPERATURE
    },
    subscripts: { a: "1", b: "1", c: "2", d: "2" },
    title: "Charles's Law"
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function GLFormula($$payload, $$props) {
  push();
  let name2 = "Gay_Lussac_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="GLFormula">`;
  Formula($$payload, {
    format: "B",
    initialVariant: "DEFAULT",
    values: {
      a: TEMPERATURE,
      b: PRESSURE,
      c: TEMPERATURE,
      d: PRESSURE
    },
    subscripts: { a: "1", b: "1", c: "2", d: "2" },
    title: "Gay-Lussac's Law"
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
let name$8 = "Gas_Laws_PS";
let toggleState$8 = true;
const ts$8 = {
  getName: () => {
    return name$8;
  },
  isToggled: () => {
    return toggleState$8;
  },
  toggle: () => toggleState$8 = toggleState$8 === true ? false : true,
  setToggleState: (newToggleState) => toggleState$8 = newToggleState
};
function PSGasLawsFormulas($$payload) {
  $$payload.out += `<div class="PSGasLawsFormulas">`;
  if (toggleState$8 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header svelte-5gz4ne"><h1 class="svelte-5gz4ne">Gas Laws</h1></div> <div class="Formulas svelte-5gz4ne">`;
    BoyleFormula($$payload, {});
    $$payload.out += `<!----> `;
    CharlesFormula($$payload, {});
    $$payload.out += `<!----> `;
    GLFormula($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
function DensityFormula($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="DensityFormula">`;
    Formula($$payload, {
      format: "A",
      initialVariant: "DEFAULT",
      values: { a: DENSITY, b: MASS, c: VOLUME },
      subscripts: { a: "NONE", b: "NONE", c: "NONE" },
      title: "Density"
    });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function PressureFormula($$payload, $$props) {
  push();
  let name2 = "Pressure_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  if (toggleState2 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="PressureFormula">`;
    Formula($$payload, {
      title: "Pressure",
      format: "A",
      initialVariant: "DEFAULT",
      values: { a: PRESSURE, b: FORCE, c: AREA },
      subscripts: { a: "NONE", b: "NONE", c: "NONE" }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function Delta($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  let color = props.color !== void 0 ? props.colors : null;
  $$payload.out += `<math display="block" class="Delta"><mrow><mo${attr_style("", { color: props.color })}>Δ</mo><mi${attr_style("", { color })}>`;
  Term($$payload, {
    content: props.f,
    color: props.color,
    subscript: ""
  });
  $$payload.out += `<!----></mi></mrow></math>`;
  pop();
}
function D($$payload) {
  Delta($$payload, {
    f: TEMPERATURE,
    subscripts: { final: "f", initial: "i" },
    colors: {
      f: TEMPERATURE.color,
      i: TEMPERATURE.color,
      parens: TEMPERATURE.color
    }
  });
}
function SpecificHeatFormula($$payload, $$props) {
  push();
  let name2 = "SpecificHeat_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  if (toggleState2 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="SpecificHeatFormula">`;
    Formula($$payload, {
      title: "Specific Heat",
      format: "C",
      initialVariant: "DEFAULT",
      values: {
        a: THERMAL_ENERGY,
        b: MASS,
        c: SPECIFIC_HEAT,
        d: D
      },
      subscripts: { a: "NONE", b: "NONE", c: "NONE", d: "NONE" }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ts: ts2 });
  pop();
}
let name$7 = "Matter_PS";
let toggleState$7 = true;
const ts$7 = {
  getName: () => {
    return name$7;
  },
  isToggled: () => {
    return toggleState$7;
  },
  toggle: () => toggleState$7 = toggleState$7 === true ? false : true,
  setToggleState: (newToggleState) => toggleState$7 = newToggleState
};
function PSMatterFormulas($$payload) {
  $$payload.out += `<div class="PSMatterFormulas">`;
  if (toggleState$7 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header svelte-5gz4ne"><h1 class="svelte-5gz4ne">Matter</h1></div> <div class="Formulas svelte-5gz4ne">`;
    DensityFormula($$payload);
    $$payload.out += `<!----> `;
    PressureFormula($$payload, {});
    $$payload.out += `<!----> `;
    SpecificHeatFormula($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
let name$6 = "Chemistry_PS";
let toggleState$6 = true;
const ts$6 = {
  getName: () => {
    return name$6;
  },
  isToggled: () => {
    return toggleState$6;
  },
  toggle: () => toggleState$6 = toggleState$6 === true ? false : true,
  setToggleState: (newToggleState) => toggleState$6 = newToggleState
};
function PSChemFormulas($$payload) {
  $$payload.out += `<div class="PSChemFormulas">`;
  if (toggleState$6 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header svelte-9t3hy7"><h1 class="svelte-9t3hy7">Chemistry Formulas</h1></div> <div class="Formulas svelte-9t3hy7">`;
    PSMatterFormulas($$payload);
    $$payload.out += `<!----> `;
    PSGasLawsFormulas($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
function ForceFormula($$payload, $$props) {
  push();
  let name2 = "Kinematics_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="ForceFormula">`;
  Formula($$payload, {
    title: "Force",
    format: "A",
    initialVariant: "SECONDARY",
    values: { a: MASS, b: FORCE, c: ACCELERATION },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function ForceGravityFormula($$payload, $$props) {
  push();
  let name2 = "Force_Gravity_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="ForceGravityFormula">`;
  Formula($$payload, {
    title: "Force due to Gravity",
    format: "A",
    initialVariant: "SECONDARY",
    values: {
      a: MASS,
      b: FORCE,
      c: GRAVITATIONAL_ACCELERATION
    },
    subscripts: { a: "NONE", b: "Gravity", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function WeightFormula($$payload, $$props) {
  push();
  let name2 = "Weight_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="WeightFormula">`;
  Formula($$payload, {
    title: "Weight",
    format: "A",
    initialVariant: "SECONDARY",
    values: {
      a: MASS,
      b: WEIGHT,
      c: GRAVITATIONAL_ACCELERATION
    },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
let name$5 = "Dynamics_PS";
let toggleState$5 = true;
const ts$5 = {
  getName: () => {
    return name$5;
  },
  isToggled: () => {
    return toggleState$5;
  },
  toggle: () => toggleState$5 = toggleState$5 === true ? false : true,
  setToggleState: (newToggleState) => toggleState$5 = newToggleState
};
function PSDynamicsFormulas($$payload) {
  $$payload.out += `<div class="PSDynamicsFormulas">`;
  if (toggleState$5 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header svelte-1giwa7j"><h1 class="svelte-1giwa7j">Forces (a.k.a. <em>Dynamics</em>)</h1></div> <div class="Formulas svelte-1giwa7j">`;
    ForceFormula($$payload, {});
    $$payload.out += `<!----> `;
    ForceGravityFormula($$payload, {});
    $$payload.out += `<!----> `;
    WeightFormula($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
function OhmsLawFormula($$payload, $$props) {
  push();
  let name2 = "Ohms_Law_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="OhmsLawFormula">`;
  Formula($$payload, {
    title: "Ohm's Law",
    format: "A",
    initialVariant: "SECONDARY",
    values: { a: CURRENT, b: VOLTAGE, c: RESISTANCE },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
let name$4 = "Electricity_PS";
let toggleState$4 = true;
const ts$4 = {
  getName: () => {
    return name$4;
  },
  isToggled: () => {
    return toggleState$4;
  },
  toggle: () => toggleState$4 = toggleState$4 === true ? false : true,
  setToggleState: (newToggleState) => toggleState$4 = newToggleState
};
function PSElectricityFormulas($$payload) {
  $$payload.out += `<div class="PSElectricityFormulas">`;
  if (toggleState$4 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header svelte-1giwa7j"><h1 class="svelte-1giwa7j">Electriciy</h1></div> <div class="Formulas svelte-1giwa7j">`;
    OhmsLawFormula($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
function GravitationalPotentialEnergyFormula($$payload, $$props) {
  push();
  let name2 = "GPE_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="GravitationalPotentialEnergyFormula">`;
  Formula($$payload, {
    title: "Gravitational Potential Energy",
    format: "C",
    initialVariant: "DEFAULT",
    values: {
      a: GPE,
      b: MASS,
      c: GRAVITATIONAL_ACCELERATION,
      d: HEIGHT
    },
    subscripts: {
      a: "NONE",
      b: "NONE",
      c: getUseLongValues() === true ? "NONE" : "NONE",
      d: "NONE"
    }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function Superscript($$payload, $$props) {
  const { superscriptContent, base } = $$props;
  $$payload.out += `<math class="Superscript container"><msup>`;
  Term($$payload, { content: base, subscript: "", color: "black" });
  $$payload.out += `<!----> `;
  Term($$payload, {
    content: superscriptContent,
    subscript: "",
    color: "black"
  });
  $$payload.out += `<!----></msup></math>`;
}
function KineticEnergyFormula($$payload, $$props) {
  push();
  let name2 = "Kinetic_Energy_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  function oneHalf($$payload2) {
    $$payload2.out += `<math><mfrac><mrow><mn>1</mn></mrow> <mrow><mn>2</mn></mrow></mfrac></math>`;
  }
  function velocitySquared($$payload2) {
    Superscript($$payload2, {
      base: VELOCITY,
      superscriptContent: {
        value: { long: "2", short: "2" },
        color: "#F1FA8C"
      }
    });
  }
  $$payload.out += `<div class="KineticEnergyFormula">`;
  Formula($$payload, {
    title: "Kinetic Energy",
    format: "C",
    initialVariant: "DEFAULT",
    values: {
      a: KINETIC_ENERGY,
      b: oneHalf,
      c: MASS,
      d: velocitySquared,
      coefficient: VELOCITY
    },
    subscripts: { a: "NONE", b: "NONE", c: "NONE", d: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function PowerFormula($$payload, $$props) {
  push();
  let name2 = "Power_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="PowerFormula">`;
  Formula($$payload, {
    title: "Power",
    format: "A",
    initialVariant: "DEFAULT",
    values: { a: POWER, b: WORK, c: TIME },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function WorkFormula($$payload, $$props) {
  push();
  let name2 = "Work_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="WorkFormula">`;
  Formula($$payload, {
    title: "Work",
    format: "A",
    initialVariant: "SECONDARY",
    values: { a: FORCE, b: WORK, c: DISTANCE },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
let name$3 = "Energy_PS";
let toggleState$3 = true;
const ts$3 = {
  getName: () => {
    return name$3;
  },
  isToggled: () => {
    return toggleState$3;
  },
  toggle: () => toggleState$3 = toggleState$3 === true ? false : true,
  setToggleState: (newToggleState) => toggleState$3 = newToggleState
};
function PSEnergyFormulas($$payload) {
  $$payload.out += `<div class="PSEnergyFormulas">`;
  if (toggleState$3 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header svelte-1giwa7j"><h1 class="svelte-1giwa7j">Work, Power and Energy</h1></div> <div class="Formulas svelte-1giwa7j">`;
    WorkFormula($$payload, {});
    $$payload.out += `<!----> `;
    PowerFormula($$payload, {});
    $$payload.out += `<!----> `;
    KineticEnergyFormula($$payload, {});
    $$payload.out += `<!----> `;
    GravitationalPotentialEnergyFormula($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
function AccelerationFormula($$payload, $$props) {
  push();
  let name2 = "Acceleration_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  function bAcceleration($$payload2) {
    Delta($$payload2, {
      f: VELOCITY,
      subscripts: { final: "f", initial: "i" },
      colors: {
        f: VELOCITY.color,
        i: VELOCITY.color,
        parens: VELOCITY.color
      }
    });
  }
  function c($$payload2) {
    Delta($$payload2, { f: TIME, colors: TIME.color });
  }
  $$payload.out += `<div class="AccelerationFormula">`;
  Formula($$payload, {
    title: "Acceleration",
    format: "A",
    initialVariant: "DEFAULT",
    values: { a: ACCELERATION, b: bAcceleration, c },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function MomentumFormula($$payload, $$props) {
  push();
  let name2 = "Momentum_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="MomentumFormula">`;
  Formula($$payload, {
    title: "Momentum",
    format: "A",
    initialVariant: "SECONDARY",
    values: { a: MASS, b: MOMENTUM, c: VELOCITY },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function SpeedFormula($$payload, $$props) {
  push();
  let name2 = "Speed_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="SpeedFormula">`;
  Formula($$payload, {
    title: "Speed",
    format: "A",
    initialVariant: "DEFAULT",
    values: { a: SPEED, b: DISTANCE, c: TIME },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
function VelocityFormula($$payload, $$props) {
  push();
  let name2 = "Velocity_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  function bVelocity($$payload2) {
    Delta($$payload2, { f: POSITION, colors: POSITION.color });
  }
  function c($$payload2) {
    Delta($$payload2, { f: TIME, colors: TIME.color });
  }
  $$payload.out += `<div class="VelocityFormula">`;
  Formula($$payload, {
    title: "Velocity",
    format: "A",
    initialVariant: "DEFAULT",
    values: { a: VELOCITY, b: bVelocity, c },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
let name$2 = "Kinematics_PS";
let toggleState$2 = true;
const ts$2 = {
  getName: () => {
    return name$2;
  },
  isToggled: () => {
    return toggleState$2;
  },
  toggle: () => toggleState$2 = toggleState$2 === true ? false : true,
  setToggleState: (newToggleState) => toggleState$2 = newToggleState
};
function PSKinematicsFormulas($$payload) {
  $$payload.out += `<div class="PSKinematicsFormulas">`;
  if (toggleState$2 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header svelte-1giwa7j"><h1 class="svelte-1giwa7j">Motion (a.k.a. <em>Kinematics</em>)</h1></div> <div class="Formulas svelte-1giwa7j">`;
    SpeedFormula($$payload, {});
    $$payload.out += `<!----> `;
    VelocityFormula($$payload, {});
    $$payload.out += `<!----> `;
    AccelerationFormula($$payload, {});
    $$payload.out += `<!----> `;
    MomentumFormula($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
function WaveSpeedFormula($$payload, $$props) {
  push();
  let name2 = "Wave_Speed_PS";
  let toggleState2 = true;
  const ts2 = {
    getName: () => {
      return name2;
    },
    isToggled: () => {
      return toggleState2;
    },
    toggle: () => toggleState2 = toggleState2 === true ? false : true,
    setToggleState: (newToggleState) => toggleState2 = newToggleState
  };
  $$payload.out += `<div class="WaveSpeedFormula">`;
  Formula($$payload, {
    title: "Wave Speed (Velocity)",
    format: "A",
    initialVariant: "SECONDARY",
    values: {
      a: FREQUENCY,
      b: WAVE_SPEED,
      c: WAVELENGTH
    },
    subscripts: { a: "NONE", b: "NONE", c: "NONE" }
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ts: ts2 });
  pop();
}
let name$1 = "Waves_PS";
let toggleState$1 = true;
const ts$1 = {
  getName: () => {
    return name$1;
  },
  isToggled: () => {
    return toggleState$1;
  },
  toggle: () => toggleState$1 = toggleState$1 === true ? false : true,
  setToggleState: (newToggleState) => toggleState$1 = newToggleState
};
function PSWavesFormulas($$payload) {
  $$payload.out += `<div class="PSWavesFormulas">`;
  if (toggleState$1 === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header svelte-1giwa7j"><h1 class="svelte-1giwa7j">Waves</h1></div> <div class="Formulas svelte-1giwa7j">`;
    WaveSpeedFormula($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
let name = "Physics_PS";
let toggleState = true;
const ts = {
  getName: () => {
    return name;
  },
  isToggled: () => {
    return toggleState;
  },
  toggle: () => toggleState = toggleState === true ? false : true,
  setToggleState: (newToggleState) => toggleState = newToggleState
};
function PSPhyFormulas($$payload) {
  $$payload.out += `<div class="PSPhysicsFormulas">`;
  if (toggleState === true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header svelte-1nmvqm1"><h1 class="svelte-1nmvqm1">Physics Formulas</h1></div> <div class="Formulas svelte-1nmvqm1">`;
    PSKinematicsFormulas($$payload);
    $$payload.out += `<!----> `;
    PSDynamicsFormulas($$payload);
    $$payload.out += `<!----> `;
    PSEnergyFormulas($$payload);
    $$payload.out += `<!----> `;
    PSWavesFormulas($$payload);
    $$payload.out += `<!----> `;
    PSElectricityFormulas($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
}
function FormulaFilterByTopicModal($$payload, $$props) {
  push();
  let openModal = () => {
    const modal = document.getElementById("formula-filter-modal");
    if (modal) {
      modal.showModal();
    }
  };
  let ChemistryTopics = [ts$7, ts$8];
  let Chem = [ts$6, ...ChemistryTopics];
  let PhysicsTopics = [
    ts$2,
    ts$5,
    ts$3,
    ts$1,
    ts$4
  ];
  let Phy = [ts, ...PhysicsTopics];
  let toggleStates = [...Chem, ...Phy];
  let findIfChecked = (topicName) => {
    let match = true;
    toggleStates.forEach((toggleState2) => {
      if (topicName === toggleState2.getName()) {
        match = toggleState2.isToggled();
      }
    });
    return match;
  };
  const each_array = ensure_array_like(psTopics);
  $$payload.out += `<div class="FormulaFilterButton">`;
  GlowButton($$payload, {
    onClick: openModal,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Filter By Topic`;
    }
  });
  $$payload.out += `<!----></div> <dialog id="formula-filter-modal" class="modal"><div class="modal-box"><div class="header svelte-1k0wgv1"><u class="text-lg font-bold">Select Topics To Display</u> <div class="modal-action"><form method="dialog"><button class="btn svelte-1k0wgv1">X</button></form></div></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let psTopic = each_array[$$index];
    $$payload.out += `<div class="toggle-switch-with-label svelte-1k0wgv1"><label class="switch svelte-1k0wgv1"><input type="checkbox"${attr("checked", findIfChecked(psTopic), true)} class="svelte-1k0wgv1"> <span class="slider round svelte-1k0wgv1"></span></label> <span class="switch-label svelte-1k0wgv1">${escape_html(psTopic.replaceAll("_PS", "").replaceAll("_", " "))}</span></div>`;
  }
  $$payload.out += `<!--]--></div></dialog>`;
  pop();
}
function Formulas($$payload) {
  $$payload.out += `<div class="formulas-container svelte-1lphqe"><div class="Formulas svelte-1lphqe">`;
  PSChemFormulas($$payload);
  $$payload.out += `<!----> `;
  PSPhyFormulas($$payload);
  $$payload.out += `<!----></div> `;
  UnitInfoBox($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  FormulaFilterByTopicModal as F,
  GlowButton as G,
  Formulas as a,
  getUseLongValues as g,
  setLongValues as s
};
