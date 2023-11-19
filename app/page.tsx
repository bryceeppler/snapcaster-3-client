import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      {/* Search Box */}
      <div className="shadow overflow-hidden border-b border-zinc-200 dark:border-zinc-800 rounded-lg w-full max-w-3xl">
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
    </main>
  )
}
