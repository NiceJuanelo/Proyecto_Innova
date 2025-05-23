import 'quasar/dist/quasar.css';
import lang from 'quasar/lang/es.js';
import '@quasar/extras/material-icons/material-icons.css';
import { Notify } from 'quasar';

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {
    Notify,
  },
  lang: lang,
};
