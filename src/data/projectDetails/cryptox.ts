import type { ProjectDetailData } from './types'

export const cryptoXDetail: ProjectDetailData = {
  slug: 'cryptox',
  title: 'cryptoX',
  year: 2013,
  tagline: 'A real-time cross-exchange cryptocurrency arbitrage detection engine that monitors order books across 15 exchanges and surfaces ranked trading opportunities in a live terminal dashboard.',
  demoUrl: '#',
  githubUrl: 'https://github.com/benbu/cryptoX',
  imageUrl: '/images/project-cryptox.svg',
  techTags: ['Python 2', 'Multi-threading', 'Tor SOCKS5', 'REST APIs', 'Order Book Algorithms', 'Terminal UI'],
  overview: `cryptoX is a real-time cross-exchange cryptocurrency arbitrage detection engine. It continuously monitors order books across 15 cryptocurrency exchanges, identifies price discrepancies that can be profitably exploited, and presents ranked trading opportunities in a live terminal dashboard. The system polls live order book data from exchanges simultaneously, then computes where the same coin can be bought cheaply on one exchange and sold at a higher price on another — accounting for currency conversion when the two exchanges don't share a common base currency.`,
  features: [
    {
      title: 'Exchange Integration Layer',
      body: 'A pluggable Exchange base class with 15 concrete implementations: BTC-e, BTER, C-CEX, CoinedUp, CoinEx, Coinse, CryptoRush, CryptoTrade, Cryptsy, FxBTC, Kraken, TheRock, Vault, Vircurex, and BTC-e. Each adapter normalizes the exchange\'s API response into a common Market/Order object model.',
    },
    {
      title: 'Order Book Overlap Algorithm',
      body: 'The core get_overlap() algorithm walks both sides of two order books simultaneously to compute the maximum extractable profit given real order depth — not just top-of-book prices. Correctly handles partial fills, multi-level depth, and residual amounts across both sides.',
    },
    {
      title: 'Cross-Currency Arbitrage',
      body: 'When two markets share a coin but different base currencies (e.g., DOGE/BTC vs. DOGE/LTC), the engine finds a conversion market on any available exchange and applies it via get_converted_orders(), computing a synthetic cross-rate order book in real time.',
    },
    {
      title: 'Concurrent Tor-Proxied Fetching',
      body: 'Each market URL is assigned a dedicated worker thread routing through one of up to 70 Tor SOCKS5 proxy instances (ports 9050–9119) to avoid IP rate-limiting across high-frequency API polling. A MyValue lock wrapper provides thread-safe result handoff between fetch threads and the main loop.',
    },
    {
      title: 'Arbitrage Scoring',
      body: 'Opportunities are scored by score = percent × profit (in BTC terms), filtering at > 0.39% margin and > 0.009 BTC absolute profit. Results are converted to a BTC-denominated common unit using live market rates before ranking.',
    },
    {
      title: 'Live Terminal Dashboard',
      body: 'A continuously refreshing terminal UI surfaces the top-ranked opportunities in real time, showing exchange pair, coin, margin percent, and estimated profit — updated each polling cycle.',
    },
  ],
  technicalHighlights: [
    'Order-book overlap algorithm correctly handles partial fills, multi-level depth, and residual amounts across both sides of two order books simultaneously.',
    'Multi-threaded I/O pipeline with up to 70 concurrent Tor SOCKS5 proxy workers, rotating user-agent strings to distribute request load and avoid throttling.',
    'Best-time result selection: when multiple workers poll the same URL, the main loop picks the result with the most recent timestamp rather than requiring lock coordination.',
    'Cross-rate synthesis via get_converted_orders() enables arbitrage detection across markets with non-overlapping base currencies.',
    'Fiat exclusion: opportunities crossing fiat pairs (USD, EUR, RUB, CNY) are deliberately skipped, focusing the engine on pure crypto-to-crypto inefficiencies.',
    'Deduplication: markets whose last-fetched result has not changed are skipped in the comparison pass, reducing redundant computation.',
    'Unit tests covering overlap edge cases: empty books, exact matches, multi-level fills, and conversion chains.',
  ],
  designDecisions: [
    { decision: 'Tor proxy pool', rationale: 'Polling 15 exchanges at high frequency from a single IP triggers rate limits quickly. Routing each worker through a dedicated Tor instance distributes the request footprint across a large pool of exit IPs, keeping all feeds live simultaneously.' },
    { decision: 'Best-time selection', rationale: 'Rather than serializing worker output with locks, the main loop simply takes the most recently timestamped result for each URL. This avoids contention and naturally prefers fresher data without added synchronization complexity.' },
    { decision: 'Real depth over top-of-book', rationale: 'Top-of-book price comparisons overestimate profitability for any meaningful trade size. Walking the full order book depth gives a realistic profit estimate that accounts for slippage across multiple price levels.' },
    { decision: 'Fiat pair exclusion', rationale: 'Fiat-crossing opportunities require real-money movement across exchanges with withdrawal delays and banking friction. Excluding them keeps the engine focused on opportunities that can be executed entirely within crypto balances.' },
  ],
}
