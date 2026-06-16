'use client';

import { Puck } from '@puckeditor/core';
import '@puckeditor/core/puck.css';
import { config } from './config';

export function Editor() {
  return (
    <Puck
      config={config}
      data={{
        content: [],
      }}
      onPublish={(data) => {
        console.log(data);
      }}
    />
  );
}
