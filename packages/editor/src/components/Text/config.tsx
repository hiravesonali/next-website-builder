export const Text = {
  fields: {
    content: {
      type: 'text',
    },
  },
  render: ({ content }: { content: string }) => <p>{content}</p>,
};
