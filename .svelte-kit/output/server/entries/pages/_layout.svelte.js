import clsx$1 from "clsx";
import { n as navbar_container, a as navbar, b as navbar_li, c as navbar_ul, t as toolbarButton, d as navbar_hamburger } from "../../chunks/theme.js";
import { n as spread_attributes, q as clsx, m as pop, p as push, s as setContext, t as getContext, u as attr_class, v as escape_html, w as spread_props } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import "deepmerge";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function NavContainer($$payload, $$props) {
  push();
  let {
    children,
    fluid,
    class: clasName,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes(
    {
      ...restProps,
      class: clsx(navbar_container({ fluid, class: clsx$1(clasName) }))
    },
    null
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function Navbar($$payload, $$props) {
  push();
  let {
    children,
    fluid,
    navContainerClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let navState = { hidden: true };
  setContext("navState", navState);
  let toggle = () => {
    navState.hidden = !navState.hidden;
  };
  $$payload.out += `<nav><div${spread_attributes(
    {
      ...restProps,
      class: clsx(navbar({ class: clsx$1(className) }))
    },
    null
  )}>`;
  NavContainer($$payload, {
    fluid,
    class: navContainerClass,
    children: ($$payload2) => {
      children($$payload2, {
        hidden: navState.hidden,
        toggle,
        NavContainer
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></nav>`;
  pop();
}
function NavLi($$payload, $$props) {
  push();
  let navState = getContext("navState");
  let {
    children,
    activeClass,
    nonActiveClass,
    class: className,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  let active = navUrl ? restProps.href === navUrl : false;
  let liClass = navbar_li({
    hidden: navState.hidden,
    class: clsx$1(active ? activeClass ?? navState.activeClass : nonActiveClass ?? navState.nonActiveClass, className)
  });
  $$payload.out += `<li>`;
  if (restProps.href === void 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${spread_attributes(
      {
        role: "presentation",
        ...restProps,
        class: clsx(liClass)
      },
      null
    )}>`;
    children?.($$payload);
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<a${spread_attributes({ ...restProps, class: clsx(liClass) }, null)}>`;
    children?.($$payload);
    $$payload.out += `<!----></a>`;
  }
  $$payload.out += `<!--]--></li>`;
  pop();
}
function NavUl($$payload, $$props) {
  push();
  let navState = getContext("navState");
  let {
    children,
    activeUrl,
    ulClass,
    slideParams,
    activeClass,
    nonActiveClass,
    class: clasName,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const activeUrlStore = writable("");
  let hidden = navState.hidden ?? true;
  let { base, ul, active, nonActive } = navbar_ul({ hidden });
  setContext("activeUrl", activeUrlStore);
  let _divClass = base({ class: clsx$1(clasName) });
  let _ulClass = ul({ class: ulClass });
  if (!hidden) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({ ...restProps, class: clsx(_divClass) }, null)}><ul${attr_class(clsx(_ulClass))}>`;
    children?.($$payload);
    $$payload.out += `<!----> <ul></ul></ul></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...restProps, class: clsx(_divClass) }, null)}><ul${attr_class(clsx(_ulClass))}>`;
    children?.($$payload);
    $$payload.out += `<!----></ul></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function ToolbarButton($$payload, $$props) {
  push();
  const background = getContext("background");
  let {
    children,
    onclick,
    color,
    name,
    "aria-label": ariaLabel,
    size,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const buttonClass = toolbarButton({
    color,
    size,
    background: !!background,
    class: clsx$1(className)
  });
  if (restProps.href === void 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${spread_attributes(
      {
        type: "button",
        ...restProps,
        class: clsx(buttonClass),
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
    children?.($$payload);
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<a${spread_attributes(
      {
        ...restProps,
        class: clsx(buttonClass),
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
    children?.($$payload);
    $$payload.out += `<!----></a>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Menu($$payload, $$props) {
  push();
  let {
    size = "24",
    color = "currentColor",
    variation = "outline",
    ariaLabel = "bars 3",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let viewBox = "0 0 24 24";
  let svgpath = "";
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "button",
      tabindex: "0",
      width: size,
      height: size,
      class: clsx(className),
      ...restProps,
      "aria-label": ariaLabel,
      fill: "none",
      viewBox,
      "stroke-width": "2"
    },
    null,
    void 0,
    void 0,
    3
  )}>${html(svgpath)}</svg>`;
  pop();
}
function NavHamburger($$payload, $$props) {
  push();
  let {
    children,
    onclick,
    menuClass,
    class: className,
    name = "Open main menu",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let { base, menu } = navbar_hamburger();
  let navState = getContext("navState");
  const toggle = (ev) => {
    navState.hidden = !navState.hidden;
  };
  ToolbarButton($$payload, spread_props([
    { name, onclick: onclick || toggle },
    restProps,
    {
      class: base({ class: clsx$1(className) }),
      children: ($$payload2) => {
        Menu($$payload2, { class: menu({ class: menuClass }) });
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<header class="svelte-96arj0">`;
  Navbar($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex items-center lg:order-2">`;
      NavHamburger($$payload2, {});
      $$payload2.out += `<!----></div> `;
      NavUl($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="link svelte-96arj0">`;
          NavLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Home`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="link svelte-96arj0">`;
          NavLi($$payload3, {
            href: "/physicalScienceReference",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Physical Science Formulas`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="link svelte-96arj0">`;
          NavLi($$payload3, {
            href: "/periodicTable",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Periodic Table`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></header> <div class="childs svelte-96arj0">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
