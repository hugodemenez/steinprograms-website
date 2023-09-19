const posts = [
    {
      id: 1,
      title: 'SteinPrograms innovation',
      href: '#',
      description:
        'After years studying fundamentals of computer science and finance, we are proud to announce our first project: SteinPrograms.',
      date: 'Sept 16, 2023',
      datetime: '2023-09-16',
      category: { title: 'Innovation', href: '#' },
      author: {
        name: 'Hugo Demenez',
        role: 'Founder',
        href: '#',
        imageUrl:
          'https://avatars.githubusercontent.com/u/71768413?v=4',
      },
    },
    {
      id: 2,
      title: "Bitcoin's future",
      href: '#',
      description:
        "Bitcoin's price is nearing the $30K level as analysts predict a potential bull market. PayPal's entry into the crypto space is seen as a game-changer. Democrats hold more crypto than Republicans, according to a survey. CoinShares CSO warns of continued uncertainty. Glassnode co-founders discuss Bitcoin's path to $30K. Analysts predict Bitcoin to reach $40K-$60K next year. Ethereum's future looks promising with a potential price of $8000. Bitcoin nodes are making progress towards instant sync.",
      date: 'Sept 15, 2023',
      datetime: '2023-09-15',
      category: { title: 'Crypto', href: '#' },
      author: {
        name: 'SteinPrograms',
        role: 'Bot',
        href: '#',
        imageUrl:
          'logo.png',
      },
    },
  ]
  
  export default function Articles() {
    return (
      <div className="py-24 sm:py-32 mx-auto max-w-5xl px-6">

          <div className="lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Articles</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              About crypto and advances in our projects
            </p>
          </div>
          <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500 dark:text-white">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 "
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-gray-300">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
    )
  }