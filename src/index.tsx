import React from 'react';
import { createRoot } from 'react-dom/client';
import { Playground } from 'Playground';

import 'assets/sass/index.sass';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw Error('No root element in index.html!');
}

const root = createRoot(rootElement);

root.render(<Playground />);
