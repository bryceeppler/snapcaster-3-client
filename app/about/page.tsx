export default function Component() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-center text-zinc-900 dark:text-zinc-50">
          About Snapcaster
        </h2>
        <div className="max-w-3xl mx-auto text-center text-zinc-600 dark:text-zinc-200">
          <p className="text-lg">
            This is a project that I created to help Magic: The Gathering
            players search for singles on Canadian websites. With snapcaster,
            you can search multiple websites at once and see all the results in
            one place. If you have any suggestions or feedback, please feel free
            to email me at epplerdev@gmail.com.
          </p>
        </div>
        <h2 className="text-4xl font-bold text-center text-zinc-900 dark:text-zinc-50">
          Support
        </h2>
        <div className="max-w-3xl mx-auto text-center text-zinc-600 dark:text-zinc-200">
          <p className="text-lg">
            Snapcaster is a service I created in my spare time, and I rely on
            donations to cover the server costs. If you find snapcaster helpful,
            please consider donating to support the project.
          </p>
        </div>
        <div className="text-center">
          <a
            href="https://www.paypal.com/donate/?business=KK537LVP4TZ5Q&no_recurring=0&item_name=Thank+you+for+supporting+snapcaster%21+Your+generosity+keeps+snapcaster+running+by+covering+server+costs.&currency_code=CAD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white p-4 shadow-lg rounded-lg text-lg font-bold hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Donate with PayPal
          </a>
        </div>
      </div>
    </section>
  );
}
