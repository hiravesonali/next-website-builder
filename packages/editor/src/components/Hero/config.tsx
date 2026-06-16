export const Hero = {
  fields: {
    title: {
      type: 'text',
    },
    subtitle: {
      type: 'text',
    },
    buttonText: {
      type: 'text',
    },
  },

  render: ({
    title,
    subtitle,
    buttonText,
  }: {
    title: string;
    subtitle: string;
    buttonText: string;
  }) => (
    <div className="py-20 text-center">
      <h1 className="text-5xl font-bold">{title}</h1>

      <p className="mt-4 text-lg">{subtitle}</p>

      <button className="mt-8 rounded bg-black px-6 py-3 text-white">
        {buttonText}
      </button>
    </div>
  ),
};
