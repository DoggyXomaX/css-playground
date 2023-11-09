import React from 'react';
import { v4 } from 'uuid';
import { Loader } from 'playground/Loader';
import { LoaderCircle } from 'playground/LoaderCircle';
import { LoaderDiagram } from 'playground/LoaderDiagram';
import { LoaderSquare } from 'playground/LoaderSquare';
import { LoaderCube } from 'playground/LoaderCube';
import { LoaderSTC } from 'playground/LoaderSTC';

function Playground() {
  const components = [Loader, LoaderCircle, LoaderDiagram, LoaderSquare, LoaderCube, LoaderSTC];
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
