import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C020OwV4.js","_app/immutable/chunks/Cnv_taKE.js","_app/immutable/chunks/9ez00J6O.js","_app/immutable/chunks/7hmY-xqe.js","_app/immutable/chunks/DY5k5uWI.js","_app/immutable/chunks/Clv_g9De.js","_app/immutable/chunks/BNmsPCTF.js","_app/immutable/chunks/CIZV8c5b.js","_app/immutable/chunks/DB4D3CDU.js","_app/immutable/chunks/D_BMnu4b.js"];
export const stylesheets = ["_app/immutable/assets/cjs.DavVRx2s.css","_app/immutable/assets/0.DCcoCq0N.css"];
export const fonts = ["_app/immutable/assets/NationalPark-Regular.C2mNqPwg.ttf","_app/immutable/assets/AtkinsonHyperlegibleNext-Regular.DOJsAlq1.otf"];
