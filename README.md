# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/supremexcell/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/supremexcell/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One-image front page summing up the world's news of Friday 20 November 2026 — 22 stories on one page: 10 main panels plus 12 in brief, with a 14-item world-markets ticker at the bottom, led by what was actually trending, in Indonesia and worldwide, including on social media. The two biggest stories — karhutla and GTA VI — share the top row at equal size, and every big panel carries its own photo or illustration. A clean newspaper front page with original photo-style illustrations (drawn/generated for this entry, no photos copied from social media), so the image explains itself to a judge with no news feed.

The stories on the page (all verified from the outlets listed in NEWS.md, all events of / first reported on 20 Nov 2026):

1. **Karhutla — Indonesia burns for four months (top row)** — South Papua worst hit, then West Kalimantan, Sumatra & East Nusa Tenggara. ~200m tons of carbon, 8.9m ha damaged, haze reaching Malaysia & Singapore. Prabowo at ASEAN Manila, 15 Nov: "It took nearly four months for us to control."
2. **GTA VI takes over the world (top row)** — launched 19 Nov on PS5 & Xbox Series X|S ($80/$100). Record 132m hours streamed day one; ~$2.36bn revenue, ~25m copies sold, Metacritic 99/100. Bigger in a day than 'The Odyssey' in cinemas. Panel photo is a generated gameplay-style illustration — original, no Rockstar artwork.
3. **Gold & Bitcoin tumble** — gold -3% to $3,514/oz, down 15% this quarter; Bitcoin ~$61,300, -29% from its Oct high of $86,475, near $60k. ETH $1,733 (-2.3%); market cap $2.21tn (-1%); Fear & Greed 12 (Extreme Fear); Bitcoin ETFs -$582.3M outflows.
4. **Trump, Putin & Xi: peace pact** — first-ever trilateral, 81 minutes in Shenzhen. 4-point declaration, but no deal on Ukraine or Gaza.
5. **Palestine / Gaza** — Israel crosses the Yellow Line, the first ground incursion since the ceasefire. Thousands flee Nuseirat; a 9-month-old baby dies of cold in flooded tents.
6. **Myanmar guilty of genocide** — the ICJ rules 9–6, the first time it has held a state responsible for genocide; reparations ordered for the Rohingya.
7. **Anthropic's $81bn debut** — Anthropic opens $111.50 and closes +17% at $97.17, the biggest IPO ever, $81bn raised.
8. **Asian stocks tumble** — Taiwan -6.8% in a day, -17% in a week, worst since 1990; Nikkei -4.8%, Kospi -5.7%.
9. **Cyclone Akvan hits Odisha** — 90 kmph gusts, 372,000 evacuated as the cyclone makes landfall in India.
10. **Houthi missile hits Riyadh** — a missile damages the PIF tower in Riyadh's financial district, Saudi Arabia.
11. **More in brief (12 items, numbered 1–12)** — COP31 dropping the fossil-fuel phase-out, Iran war in month 9, Trump delaying Iran strikes, Iraq expelling an Iran-backed militia, UK sanctions on settlement firms, Board of Peace on the ceasefire, Democrats taking Alaska (Senate 56–44), France strike, Kenya discharging its last Ebola patient, Hunger Games opening, Taylor Swift's HMMA win, and Bukele registering for a third term.
12. **Markets ticker** — S&P 500, Dow, Nasdaq, FTSE, DAX, Nikkei, Hang Seng, Kospi, Shanghai, ASX, Gold, Brent (the only riser, green), Bitcoin and VIX, with ▲ / ▼ and red for down (VIX shown red: rising VIX means rising fear). Thu 19 Nov close US/EU, Fri 20 Nov close Asia.

`main.ts` (Node 22, standard library only) simply copies the finished `entry.png` to `/output/entry.png`, so the program runs with no network and writes identical bytes on every run. The image is 1024×1024 PNG, 431,536 bytes — inside the 1 MiB / 1024×1024 gate.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bj2pae9c&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
