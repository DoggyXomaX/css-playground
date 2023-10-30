import React from 'react';
import { v4 } from 'uuid';
import { Loader } from 'playground/Loader';
import { LoaderCircle } from 'playground/LoaderCircle';
import { LoaderDiagram } from 'playground/LoaderDiagram';
import { LoaderSquare } from 'playground/LoaderSquare';

function Playground() {
  const components = [Loader, LoaderCircle, LoaderDiagram, LoaderSquare];
  const uuids = components.map(() => v4());

  return (
    <>
      <p>Playground:</p>

      {components.map((Component, i) => (
        <section key={uuids[i]} className="playground-item">
          <Component />
        </section>
      ))}
    </>
  );
}

export { Playground };
