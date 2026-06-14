'use client';

import { Puck } from '@puckeditor/core';
import '@puckeditor/core/puck.css';

const config = {
  components: {
    Heading: {
      fields: {
        title: {
          type: 'text',
        },
      },
      render: ({ title }: { title: string }) => {
        return <h1 className="text-4xl font-bold">{title}</h1>;
      },
    },
  },
};

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
