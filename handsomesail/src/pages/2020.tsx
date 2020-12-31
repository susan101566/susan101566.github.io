import * as React from "react"
import Article from "../shared/article"

let content = `
I attempt to write something at the end of the year to summarize everything that happened in my life. In college it was a chronological account of mostly frustrating moments about grades and my failure to fit in. It’s not that I was always unhappy, just that during good times, well, I was too into the moment to really think about it. Life got more vague afterwards. There wasn’t any particular annual theme, the tone was frequently incoherent, my complaints about people haphazard. I hope that by giving it a title, I can understand my 28 self better when I’m 29.

2020 is such a confusing year, much like someone in their 20s and very much still there. The world went bonkers, so I decided to find anything that betrays any trace of hope. I marched for Black Lives Matter, tensed up for the US elections and Eaze-d down afterwards, patiently stayed indoors and diligently kept in touch with friends. But as I look back, my biggest takeaway isn’t on how to cope with this rush of new events, but quite familiarly, on how to deal with myself and my own beliefs.

We were barely out of the holiday season before in-person work shut down for COVID. I joined an old-new team that I vowed to never join again when I left, thinking that it’d help me become better technically. I knew back then that I wouldn’t be emotionally satisfied, but my experience in the software engineering industry so far was that caring about people or being cared for wasn’t worth options or reputation in real terms, so I might as well focus on something that would give me the leverage to look for a better team down the road.

As expected, I worked enough to prove to myself that even without the agility to type 100+ words per minute, without a deep understanding of browsers, of languages, I can still fix weird bugs, and complete projects that I had no darn clue on how to start. I clawed through my technical insecurities, and emerged with a significant amount of sleep deprivation and mild caffeine addiction. Worth it? Depends on how you see it, but I got what I wanted.

Part of the issue with a mismatched team is that my teammates and manager don’t really ‘get’ me, and are sometimes oblivious to the things that are, what I consider, really awkward to bring up. Especially when we all have the handicap of missing tonal/facial expressions, so opinions are left to interpretation in textual form. I sent out a code review on a Sunday to catch the only reviewer who was about to leave for six months. Next day, first message in the team Slack, this became an example of not respecting work life balance. I felt obligated, but also quite silly for typing out a response explaining myself. Did the silence from everyone else in the channel mean anything? It’s a dangerous thread to start.

Whatever, right? Work is just work. But these things build up, especially during review season, when we are forced to think about our contributions, our team, our strengths, our weaknesses, and tally them up against what others think of you. In my most difficult 1:1 with any manager ever, I felt I was not senior enough, not capable of making larger decisions, deeply inadequate. The people side wasn’t helping either. I noticed how little I tried to be creative with my birthday surprises, or organized one at all. I always felt a surge of joy whenever my pranks made people laugh. Where’s the fun in life, in this pursuit of reputation, which, it turns out, was just my fantasy anyways. For the first time in my six years working in this industry, I did not get a token comp or equity adjustment. That’s equivalent to my worth shrinking by inflation, which averaged about 2%. Not much, but enough of a pinch to get me thinking.

Naturally, I have to find out if I belonged elsewhere. Working remote has lowered the barrier to interviews. I can slice them and Tetris it up with my normal schedule, and many companies prefer take homes anyways. I am delighted to find out that I am still competitive in the market, and compared to six years ago, I am much more confident in not letting some companies’ BS interview process get to me. The question now remains. Should I go?

About the same amount of time had passed since I left my previous job. I won’t deny that the first year out had been the most difficult. I was constantly tip toeing around hanging out and respecting people’s work-life balance. I’m the kind of friend who’d travel hours on a weekend to meet with somebody I want to get closer with. Insecure or loyal? I’m also quick in giving feedback, positive or negative. Judgmental or candid? I’m trying, but I’m not very well-read, musical, or design-centric, and I’m blatantly uninformed about historical affairs. Ignorant or immigrant? I view company culture, especially that of a smaller company, as a mini cult — the legitimacy of behaviors mostly determined by earlier employees. When I was a new grad, I thought whatever my first company did was the way of things. Now, I don’t believe too easily. Every group is different, but if you are open to understanding and changing, you’ll belong anywhere, though it takes a ton of time and agony.

This sounds like a no-brainer but another factor that I came to realize was that companies would either ‘take a risk’ in me, by offering me starter salaries for a position that’s more curious, or paying me a lot and expecting me to replicate what I’d done. The favor towards those who specialize in one thing and happily doing so is clear. How were the rules decided this way? Technical frameworks, languages, patterns change every day. I won’t discount that they take a while to learn, but do I have to pay a penalty worth about six years of work experience. I’ve always thought the charm in software engineering is to apply patterns across domains. As for how much non-technical value I bring to a team, nobody asked for that, and how could they, in a mere day-long setting.

All things considered, perhaps I wasn’t ready to leave. It is frustrating working on a team where I don’t think I belong, where I don’t believe my manager trusts me, where I don’t think my passion for bringing people together is worth anything. It sucks too, that the system is designed for promoting those who specialize. Is any of this fair? Only those who make it get to tell. In the mean time, the least I can do is to make myself at home. I’ve been too much of an idealist to realize that perhaps all I need is simply more humility.

What if my manager is right. The delivery was harsh, but it’s also true that I haven’t gotten to making a lot of company-survival level decisions. I probably won’t get to at this company, given how that requires me to be more senior in the first place, but I can watch how others succeed for now.

What if I am indeed brash in giving feedback? I didn’t mean to hurt people’s feelings, but to assume that I actually didn’t would indicate that I understood everybody. Maybe candid feedback should be reserved until when both parties are both ready for it.

What if the company who offered me a starter salary was reasonable? As I’m typing this out comfortably in a well-lit and well-heated house, there’s got to be someone in their student dorm, having worked way harder, and would be way more grateful for this position. So perhaps I don’t deserve it, and don’t want it nearly as much.

Realizing this has diverted my attention from finding the faults to filling in the blanks. It’s been a good learning experience to force myself to believe part of it. Too inexperienced? Maybe? Well it doesn’t hurt to go read up on some stuff. Too assertive? Perhaps? I’ll be careful next time I talk to you. A bunch of friends commented that it’s been an emotional roller coaster, but a pendulum is probably more accurate. I followed what I believed was the way, fueled by the desire for reputation. Then the crash came, pulling me towards skepticism and negativity.

2021 for me is a time to settle down in the middle. As always, I’m thankful for the highs and the lows in the past year. If you know me on social media, please drop a message any time. Happy New Year to you all, and thanks for reading.
`

const Page = () => {
  return (
    <Article
      title={"2020 - Believe, part of it"}
      sections={[{title: "", content}]}
    />
  )
}

export default Page
