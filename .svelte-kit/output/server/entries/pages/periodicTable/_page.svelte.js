import clsx from "clsx";
import { p as push, t as getContext, n as spread_attributes, q as clsx$1, A as element, m as pop, u as attr_class, B as stringify, w as spread_props, C as bind_props, v as escape_html, D as copy_payload, E as assign_payload, z as attr_style, F as attr, y as ensure_array_like } from "../../../chunks/index2.js";
import { e as button, m as modal, p as popover, f as closeButtonVariants } from "../../../chunks/theme.js";
import { twMerge } from "tailwind-merge";
import "deepmerge";
import * as dom from "@floating-ui/dom";
import { d as defaultElementInfo, e as elementInfo } from "../../../chunks/ElementInfo.svelte.js";
const linear = (x) => x;
function cubic_out(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${e[0].toUpperCase()}${e.slice(1)}`
    )
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;min-${primary_property}: 0`
  };
}
function Button($$payload, $$props) {
  push();
  const group = getContext("group");
  const ctxDisabled = getContext("disabled");
  let {
    children,
    onclick,
    pill,
    outline = false,
    size = "md",
    color = "primary",
    shadow = false,
    tag = "button",
    disabled,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let actualSize = group ? "sm" : size;
  let actualColor = group ? outline ? "dark" : "alternative" : color;
  let isDisabled = Boolean(ctxDisabled) || Boolean(disabled);
  const { base, outline: outline_, shadow: shadow_ } = button({
    color: actualColor,
    size: actualSize,
    disabled: isDisabled,
    pill,
    group: !!group
  });
  let btnCls = twMerge(base(), outline && outline_(), shadow && shadow_(), clsx(className));
  if (restProps.href === void 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${spread_attributes(
      {
        type: "button",
        ...restProps,
        class: clsx$1(btnCls),
        disabled: isDisabled
      },
      null
    )}>`;
    children?.($$payload);
    $$payload.out += `<!----></button>`;
  } else if (restProps.href) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<a${spread_attributes(
      {
        ...restProps,
        class: clsx$1(btnCls),
        role: "button"
      },
      null
    )}>`;
    children?.($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes({ ...restProps, class: clsx$1(btnCls) }, null)}`;
      },
      () => {
        children?.($$payload);
        $$payload.out += `<!---->`;
      }
    );
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Arrow($$payload, $$props) {
  push();
  let {
    placement = "top",
    cords,
    strategy = "absolute",
    class: className = ""
  } = $$props;
  $$payload.out += `<div${attr_class(`popover-arrow clip pointer-events-none block h-[10px] w-[10px] border-b border-l border-inherit bg-inherit text-inherit ${stringify(className)}`)}></div>`;
  pop();
}
function Popper($$payload, $$props) {
  push();
  let {
    triggeredBy,
    trigger = "click",
    placement = "top",
    offset = 8,
    arrow = false,
    yOnly = false,
    strategy = "absolute",
    reference,
    middlewares = [dom.flip(), dom.shift()],
    onbeforetoggle: _onbeforetoggle,
    ontoggle: _ontoggle,
    class: className = "",
    arrowClass = "",
    isOpen = false,
    transitionParams,
    transition = fade,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let arrowParams = { placement, cords: { x: 0, y: 0 }, strategy };
  $$payload.out += `<div hidden></div> `;
  if (isOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes(
      {
        popover: "manual",
        role: "tooltip",
        class: clsx$1(className),
        ...restProps
      },
      null,
      { "overflow-visible": true }
    )}>`;
    children($$payload);
    $$payload.out += `<!----> `;
    if (arrow) {
      $$payload.out += "<!--[-->";
      Arrow($$payload, spread_props([arrowParams, { class: arrowClass }]));
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { isOpen });
  pop();
}
function Modal($$payload, $$props) {
  push();
  let {
    children,
    oncancel,
    onclose,
    modal: modal$1 = true,
    autoclose = false,
    header,
    footer,
    title,
    open = false,
    permanent = false,
    dismissable = true,
    closeBtnClass,
    headerClass,
    bodyClass,
    footerClass,
    outsideclose = true,
    size = "md",
    placement,
    class: className,
    params,
    transition = fade,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    base,
    header: headerCls,
    footer: footerCls,
    body,
    closeBtn
  } = modal({ placement, size });
  const closeModal = () => {
    if (!permanent) {
      open = false;
      onclose?.();
    }
  };
  if (open) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<dialog${spread_attributes(
      {
        ...restProps,
        class: clsx$1(base({ class: clsx(className) })),
        tabindex: "-1"
      },
      null
    )}>`;
    if (title || header) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr_class(clsx$1(headerCls({ class: headerClass })))}>`;
      if (title) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<h3>${escape_html(title)}</h3>`;
      } else if (header) {
        $$payload.out += "<!--[1-->";
        header($$payload);
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr_class(clsx$1(body({ class: bodyClass })))}>`;
    children?.($$payload);
    $$payload.out += `<!----></div> `;
    if (footer) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr_class(clsx$1(footerCls({ class: footerClass })))}>`;
      footer($$payload);
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (dismissable && !permanent) {
      $$payload.out += "<!--[-->";
      CloseButton($$payload, {
        onclick: closeModal,
        class: closeBtn({ class: closeBtnClass })
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></dialog>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { open });
  pop();
}
function Popover($$payload, $$props) {
  push();
  let {
    title: titleSlot,
    color = "default",
    trigger = "hover",
    defaultClass,
    arrow = true,
    children,
    placement = "top",
    class: className,
    isOpen = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let { base, title, h3, content } = popover({ color });
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Popper($$payload2, spread_props([
      restProps,
      {
        placement,
        trigger,
        arrow,
        class: base({ class: clsx(className) }),
        get isOpen() {
          return isOpen;
        },
        set isOpen($$value) {
          isOpen = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          if (typeof titleSlot === "string") {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div${attr_class(clsx$1(title()))}><h3${attr_class(clsx$1(h3()))}>${escape_html(titleSlot)}</h3></div>`;
          } else if (titleSlot) {
            $$payload3.out += "<!--[1-->";
            titleSlot($$payload3);
            $$payload3.out += `<!---->`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> <div${attr_class(clsx$1(content({ class: defaultClass })))}>`;
          children($$payload3);
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { isOpen });
  pop();
}
function CloseButton($$payload, $$props) {
  push();
  let {
    children,
    color = "gray",
    onclick,
    name = "Close",
    ariaLabel,
    size = "md",
    class: className,
    svgClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, svg } = closeButtonVariants({ color, size });
  if (restProps.href === void 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${spread_attributes(
      {
        type: "button",
        ...restProps,
        class: clsx$1(base({ class: clsx(className) })),
        "aria-label": ariaLabel ?? name
      },
      null
    )}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<svg${attr_class(clsx$1(svg({ class: svgClass })))} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
    $$payload.out += `<!--]--></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<a${spread_attributes(
      {
        ...restProps,
        class: clsx$1(base({ class: clsx(className) })),
        "aria-label": ariaLabel ?? name
      },
      null
    )}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<svg${attr_class(clsx$1(svg()))} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
    $$payload.out += `<!--]--></a>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
const infoBox = { info: defaultElementInfo };
function InfoBox($$payload, $$props) {
  push();
  let advancedInfoModal = false;
  const getUniqueStr = (str1, str2, str3) => {
    let words = [];
    let phrase = str1.concat(" ", str2).concat(" ", str3).split(" ").map((word) => {
      return words.includes(word) ? "" : word;
    }).toString().replaceAll(",", " ").toLowerCase();
    return phrase[0].toUpperCase().concat(phrase.slice(1));
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="InfoBox svelte-3zzxcs"${attr_style("", {
      background: infoBox.info.background,
      color: infoBox.info.color,
      border: `3px solid ${infoBox.info.color}`
    })}>`;
    {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="name svelte-3zzxcs">${escape_html(infoBox.info.name)}</div> <div class="symbol svelte-3zzxcs"${attr_style("", {
        border: `2px solid ${infoBox.info.color}`,
        color: infoBox.info.color
      })}>${escape_html(infoBox.info.symbol)}</div> <img id="preview-bohr"${attr("alt", `Element ${infoBox.info.number} ${infoBox.info.name} (${infoBox.info.symbol}) enhanced Bohr model`)}${attr("src", `https://cdn.chemicalaid.com/assets/img/bohr-enhanced.php?symbol=${infoBox.info.symbol}`)}> <div class="entry svelte-3zzxcs"><em><b>Atomic Number:</b></em> ${escape_html(infoBox.info.number)}</div> <div class="entry svelte-3zzxcs"><em><b>Mass:</b></em> ${escape_html(infoBox.info.atomicMass)} a.m.u.</div> <div class="entry svelte-3zzxcs"><em><b>Valence Electrons:</b></em> ${escape_html(infoBox.info.valenceElectrons)}</div> <div class="entry svelte-3zzxcs"><em><b>Category:</b></em> `;
      if (infoBox.info.category.split(" ").length > 1) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `${escape_html(infoBox.info.category.split(" ")[0].slice(0, 1).toUpperCase() + infoBox.info.category.split(" ")[0].slice(1))}
				${escape_html(infoBox.info.category.split(" ")[1].slice(0, 1).toUpperCase() + infoBox.info.category.split(" ")[1].slice(1))}`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `${escape_html(infoBox.info.category.slice(0, 1).toUpperCase())}${escape_html(infoBox.info.category.slice(1))}`;
      }
      $$payload2.out += `<!--]--></div> `;
      Button($$payload2, {
        onclick: () => advancedInfoModal = true,
        class: "btn rounded-box mt-auto ",
        color: "dark",
        children: ($$payload3) => {
          $$payload3.out += `<!---->View Detailed Info`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    }
    $$payload2.out += `<!--]--></div> `;
    Popover($$payload2, {
      triggeredBy: "#preview-bohr",
      class: "pop-container text-sm font-light",
      defaultClass: "p-0",
      placement: "right",
      transition: slide,
      children: ($$payload3) => {
        $$payload3.out += `<img class="zoomed-img svelte-3zzxcs"${attr("alt", `Element ${infoBox.info.number} ${infoBox.info.name} (${infoBox.info.symbol}) enhanced Bohr model`)}${attr("src", `https://cdn.chemicalaid.com/assets/img/bohr-enhanced.php?symbol=${infoBox.info.symbol}`)}>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Modal($$payload2, {
      title: infoBox.info.name,
      autoclose: true,
      size: "xl",
      placement: "center",
      get open() {
        return advancedInfoModal;
      },
      set open($$value) {
        advancedInfoModal = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<div class="row-entry svelte-3zzxcs"><span class="detailed-entry number-font svelte-3zzxcs"><em><u><b>Appearance:</b></u></em> ${escape_html(getUniqueStr(infoBox.info.appearance, infoBox.info.phase, "at room temperature"))}</span> <span class="detailed-entry number-font svelte-3zzxcs"><em><u><b>Melting Point:</b></u></em> ${escape_html(infoBox.info.melt)} °C</span> <span class="detailed-entry number-font svelte-3zzxcs"><em><u><b>Boiling Point:</b></u></em> ${escape_html(infoBox.info.boil)} °C</span> <span class="detailed-entry number-font svelte-3zzxcs"><em><u><b>Density:</b></u></em> ${escape_html(infoBox.info.density)} g/cm³</span></div> <div class="row-entry svelte-3zzxcs"><span class="detailed-entry number-font svelte-3zzxcs"><em><u><b>Electron Configuration:</b></u></em> ${escape_html(infoBox.info.electronConfigurationSemantic)}</span> <span class="detailed-entry number-font svelte-3zzxcs"><em><u><b>Electron Affinity:</b></u></em> ${escape_html(infoBox.info.electronAffinity)}</span> <span class="detailed-entry number-font svelte-3zzxcs"><em><u><b>Electronegativity:</b></u></em> ${escape_html(infoBox.info.electronegativityPauling)}</span> <span class="detailed-entry number-font svelte-3zzxcs"><em><u><b>Block:</b></u></em> ${escape_html(infoBox.info.block)}</span></div> <span class="detailed-entry-long svelte-3zzxcs"><em><u><b>Description:</b></u></em> ${escape_html(infoBox.info.summary)}</span> <span class="detailed-entry svelte-3zzxcs"><u><a${attr("href", infoBox.info.source)} target="_blank">More Information at Wikipedia</a></u></span>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function ElementBox($$payload, $$props) {
  push();
  let { element: element2 } = $$props;
  $$payload.out += `<div class="element-container svelte-1rh929n"><button${attr_class(`glow-button`, "svelte-1rh929n")}${attr_style("", {
    width: "8vmin",
    height: "8vmin",
    color: element2.color,
    background: element2.background,
    cursor: element2.number === 0 ? "default" : "help"
  })}><div class="atomic-number svelte-1rh929n">${escape_html(element2.number === 0 ? null : element2.number)}</div> <div class="symbol svelte-1rh929n">${escape_html(element2.symbol)}</div> <div class="name svelte-1rh929n">${escape_html(element2.name)}</div> <div class="glow-effect svelte-1rh929n"></div> <div class="charge svelte-1rh929n">${escape_html(element2.charge)}</div></button></div>`;
  pop();
}
function PTable($$payload) {
  const each_array = ensure_array_like(elementInfo);
  $$payload.out += `<div class="PeriodicTable svelte-xvzgs5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let elem = each_array[$$index];
    $$payload.out += `<div class="elem svelte-xvzgs5"${attr_style("", { "grid-column-start": elem.xpos })}>`;
    ElementBox($$payload, { element: elem });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
function _page($$payload) {
  $$payload.out += `<div class="container svelte-mdzce7">`;
  InfoBox($$payload);
  $$payload.out += `<!----> `;
  PTable($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
