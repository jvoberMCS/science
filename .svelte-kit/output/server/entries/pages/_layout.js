const prerender = true;
const trailingSlash = "always";
async function load() {
  return {
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
}
export {
  load,
  prerender,
  trailingSlash
};
