import * as React from "react"
import Article from "../shared/article"

let content = `
At the peak of the Facebook era, it was a thing to tag your friends as the “cool” one, the “happy” one, or the “quiet” one, as is my case. They were not wrong in judging me this way, and part of me even pride myself in what “quiet” is associated with, like being persistent and thoughtful. I went on to study Computer Science in college, and HCI, fully in line with this trait. That was 2010.

College was challenging. I had no idea what CS was, never having written a line of code in my life before. CMU focused a lot on theory and computer systems. I’ve never talked and reasoned to myself so hard in my life. There were partner projects, but if you are really good, you just do it yourself, and let your partner style and write comments. If you are really bad, you find a good partner, or just fail. I found a really good partner, aced the classes and.. went on to marry him and have two kids. That was 2014.

I never took risks in college. I enrolled in the easiest systems class that satisfied the requirement. No way would the professors know me by name. The one time I tried to take a hard class — Operating Systems — in my senior year, I ditched my partner three weeks in. He wasn’t able to find a new one, had to be the only student soloing it, probably hated me the rest of his life. I mean, if anyone could solo it, it would be him, but I feel so sorry.

The truth is, I probably would’ve learned a lot, could’ve just audited, should’ve stayed in the class. But I cared too much about getting a job, and my GPA. I was always the one who said I did terrible, will never get the job, but quietly did pretty well and got a lot of offers. There’s nothing wrong with being a good student, but I never did it in an open and collaborative way.

Being good at something makes you want to keep doing it, and I did. But this time, zero stakes, just for fun. How would that feel? Let’s find out. Nine months since I started my Masters in Finance degree at CU Boulder, I just graduated yesterday! While it’s still fresh in my mind, let me share with you what’s up with finance. Here’s my perspective (NOT financial advice, you don’t want one from someone who’ve only learned about this in school for 9 months).

BEGINNING NOT FINANCIAL ADVICE

The first decision to be made is whether you want to do corporate finance or wealth management.

For corporate finance, the more fun area would be around strategy. You need to have a basic understanding of accounting, like financial statements, but you really don’t need to know all the details of every section… like does the balance sheet have enough to cover pension obligations and leases (we learned this in way too much detail..). www.sec.gov/edgar is where you go to find public companies, you can even crawl the financial statements with GET requests and do your analysis that way. Imo, the balance sheet and the income statement are the ones to read. BS tells you how much asset, debt, and equity the company has, while the IS tells you how much sales and expenses the company had this year (the 10-K), the profit, and how much become retained, net of interest and taxes.

The cool thing about business strategy is that enterprise value is the sum of equity (E) and debt (D), minus extra cash (C). How one decide the split is truly an art. If you are the CEO and you decide to issue stock, stockholders are gonna hate you cuz they’ll just assume you are gonna sell your shares, get your money and run. But if you issue debt (corporate bonds or borrow from a bank), then you are obligated to make interest payments and that could suck when the business heads for a downturn, which just happens. Imagine you have all the reasons to thrive, but you just can’t pay back one bank in just one year, and now you are forced to go bankrupt. How sad is that.

For wealth management, the art is in how to do asset allocation. How much money do you put in cash, bonds, and stocks? And which bonds or stocks? Before this program, I thought everything was stocks, but the bonds market is way bigger than stocks, but nobody knows anything about them. My biggest takeaway is a quote from Bill Bernstein (The Four Pillars of Investing is a GREAT book, everyone should read it): if you’ve won the game, stop playing. There’s really no point in putting all your money in stocks if you are guaranteed a comfortable retirement today if you just do nothing. Bonds is safer.

Bonds is like lending money to the U.S. Treasury, and they promise a fixed coupon rate to pay you back every half year for 2, 5, 10, etc., years. If I can rely on Uncle Sam making me pay my taxes every year, better believe they’ll make those coupon payments. Depending on your stance, you could read the yield curve in different ways, and sometimes you could be right, and that’s huge on your portfolio. If you bought a 30-year US Treasury today, and the rates go down by a lot tomorrow, that’s huge. Just remember, yield (to maturity, YTM) and price go in opposite directions (price is just a cash flow geometrically discounted by YTM, etc. etc.). That’s why news of a Fed rates cut makes the bonds market happy. The worst enemy to bonds is inflation. Uncle Sam will give you $30 of coupon every half year alright, but if that buys a Tesla last year, but just a sandwich this year, that sucks. There’s this thing called TIPS, whose principal adjusts with CPI, so your coupon payments are adjusted with inflation (still gotta pay taxes on it, check out www.tipsladder.com). There’s also this thing called muni bonds. If you live in the state where the bond is issued, it’s federal and state tax exempt (mostly).

(Apologize for switching to first person all of a sudden, just wanted to highlight this is NOT financial advice to you). Over a long period of time, like 20 years, the U.S. stocks market has never generated a negative return, but most people get nervous and sell at the worst time and don’t buy in. But over a short time, it’s extremely volatile (like 20%), so I won’t put all my necessity money in stocks if I’m retiring next year. It’s extremely hard to time the market, so don’t. I’d invest into an allocation I trust, and never touch it. If I can do one fund, I’d find a target fund, e.g. 2055. If I want to do two funds, I’d do like 30% in a total bonds ETF, and a 70% in a total stocks ETF, and slowly up the bonds allocation as I get closer to retirement.

If I really want a managed account for some reason, I’d look at the expense ratio for sure. Avoid fees as much as possible. Front-end means you put in 100, but only 99 is invested if it’s a 1% fee. back-end means you invest in 100, but can only withdraw 99, expense ratio means every year the manager takes a 1% cut. In general, ETF’s charge about a 0.03% ratio, but most mutual funds are like 0.5-1%. Most wealth managers will charge about 1% on top of that. I personally think it’s extremely hard to beat the market consistently at like 2% every year on average if that’s the goal.

There’s a price to pay for liquidity (can you buy and sell in an instant?) and credit (will the investment go belly up), so something like private equity better have a high expected return if the money is locked in for an unknown amount of time for an un-promised % of principal back.

ENDING NOT FINANCIAL ADVICE

I feel so sad the program is over. There were so many firsts: I went to a college bar in CO, ski-ed with NCAA champions, and hung out with professors. I did care about my work, but I also got to know people. It felt good when I won the 2024 MS Finance student of the year award and had everyone clapping for me at graduation, instead of having them look around and wonder who’s that kid. I had a surreal time this past 9 months, and sadly, it’s time to return to reality. Which is?

I’m happy to say that I found a job! It’s at a startup called Rive. Figma made me fall in love with very visual work, and I just can’t imagine doing anything else. I’m excited to be a software engineer again, just doing some coding and learning about animations. My salary will be a fraction of what it was, but hopefully with my new found knowledge, I can make it work? The art is in divvying up cash and equity, right?

`

const Page = () => {
  return (
    <Article title={"2024: 10+14=24"} sections={[{ title: "", content }]} />
  )
}

export default Page
