export default function Services() {
  const cards: { 
    title: string, 
    body: string
  }[] = [
    {
      title: 'Refugee claims',
      body: ''
    }, {
      title: 'Visitor visa extensions',
      body: ''
    }, {
      title: 'Humanitarian & compassionate ground applications',
      body: ''
    }
  ];

  return (
      <div className="m-12 md:m-16">
        <h1 className="text-5xl md:text-6xl pb-8 md:pb-12"> Services </h1>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
          {
            cards.map(({ title, body }) => {
              return (
                <div className="bg-primary text-primary_content rounded-3xl w-full p-6 md:p-12 hover:-translate-y-1 hover:bg-primary_focus transition-all break-words">
                  <h1 className="text-2xl lg:text-3xl pb-4 md:pb-6"> { title } </h1>
                  <p className="text-lg md:text-xl pb-8 md:pb-12"> { body } </p>
                </div>
              );
            })
          }
        </div>
      </div>

  );
}