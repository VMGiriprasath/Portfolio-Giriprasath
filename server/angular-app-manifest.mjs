
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://VMGiriprasath.github.io/Portfolio-Giriprasath/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7701, hash: '038b4ca8aed95ef912dc5a7e3df5e8b3bc6cb9f61d2c79a7b18985f38b83e60f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8028, hash: 'ccce62f483685be0a36256d454c11cc25f5caa5d7067b28c141cd391cce09600', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
