export const Heading = {
  fields: {
    title: {
      type: 'text',
    },
  },
  render: ({ title }: { title: string }) => (
    <h1 className="text-4xl font-bold">{title}</h1>
  ),
};
