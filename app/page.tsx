import { CardContent, Card } from "@/components/ui/card"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24 w-full max-w-7xl mx-auto">
      {/* Search Box */}
      <div className="shadow overflow-hidden border-b border-zinc-200 dark:border-zinc-800 rounded-lg w-full">
          <div className="px-4 py-5 bg-white dark:bg-zinc-900 sm:p-6">
            <h2 className="text-xl leading-6 font-medium text-gray-900 dark:text-white">Search for a card</h2>
            <form className="mt-5 md:flex md:items-center gap-4">
              <input
                aria-label="Search cards"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md p-4"
                id="search"
                name="search"
                placeholder="Search by card name"
                type="search"
              />
              <button className="bg-zinc-900 text-white p-4 shadow-lg rounded-lg text-lg font-bold hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
          <Card>
            <CardContent className="p-4">
              <img
                alt="Card Image"
                className="mb-4"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "150/200",
                  objectFit: "cover",
                }}
                width="150"
              />
              <h3 className="font-semibold text-lg mb-2">Card Name</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Series: Series Name</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Year: 2023</p>
            </CardContent>
          </Card>
        </div>
    </main>
  )
}
