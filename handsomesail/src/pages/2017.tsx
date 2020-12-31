import * as React from "react"
import Article from "../shared/article"

const content1 = `

My number one achievement - I PASSED OCEANLAB, omg I would not have believed it. Basically I told myself to pass all the songs on my list before I bid farewell to the DDR machine, and this was on the top!

Visited China twice, more than I’ve ever done annually since I got here. Going at random times is great, because I get to see family, and the tickets are super cheap. I appeared on TV for a brief two seconds while watching a live show, played cards in a tiny tent by a beach (ask my mom why), and met up with friends whom I’ve worked / went to school with in the US.

Picked up flute again after taking my braces off late last year. I forgot how loud they are, hope the neighbors don’t mind too much. I’d like to think that they understand the (shamefully) occasional practice sessions because I’ve heard some howling from their side late into the night.

Went to DC and NYC with folks from work. Had a blast getting to know everyone. While I was on the east coast, I snuck out to Pittsburgh for a day trip to meet up with an awesome friend and 老乡 from school. Here’s something she said about this that I’ll make sure to remember, “靠，有钱就是任性”.

Snowmobiled for the first time in the passenger seat. There were some close calls, but happy to have met a friendly stranger who pointed at the way back right when the sun was setting and the gas was low and the signal was none. Of course, credits to Andrew for making sure that I did not freak out, and getting us back before the clock strikes midnight (or 5pm, whenever the sun sets).

Half marathons! Didn’t know this was possible! Very glad to have had company both times. The first one was to know that I could do it, the second one to not be too slow. Hey, for efficiency, maybe a full one in 2018?

Similarly, skied twice. First time Andrew had to baby sit me so I won’t pack up the skis and walk up where I came from, second time to have more fun.

My avocados didn’t die! Well, I believed in probability and mass planted them. Still less than 50% chance of survival, but I started off with 50 pits, now the farm is at 20.

A lot of busy trips to the embassies (virtually)! The visa application for Australia is best of all visa applications, well, maybe not Barbados, cuz zero visa is the dream. But my point is, I don’t need to line up physically for hours in a fortress and constantly worry if they are gonna lose my passport in the mail. Saw some real koalas, kangaroos, and kbbq’s. Got to try the most disgusting dish ever, that one described as ‘minty’?! My friend, you’ve had some serious gustatory misfortunes.

Tried out drastically different hair styles and colors, and persuaded (made?) Andrew do the same. I figured if there’s one time in our lives that we can stick by the consequences, it’d be now. Yolo.

Celebrated friends’ achievements. So happy to be part of this. From growing one year older, to DDR tournaments, to coding competitions. Congratulations to all of you.

Went to Missouri for Thanksgiving - the most legit Thanksgiving experience, shared tons of memories, from old to new. Of course, a lot of alcohol was involved.

Read some books. I forced myself to finish any book that I started reading, no matter how much I disliked them. The result isn’t too great, as I found myself sandwiching a few good ones between a boring one. I won’t remember anything either way. So by the end, I ended up spending time for nothing.

Switched teams, switched companies. Even though I didn’t stay long on the new team, I am very grateful for all their trust in me. Of course, thanks to all the teams I’ve been part of in general that taught me so much about SWE. The sendoff was more than I could ever ask for. Here’s to more new friends, and keeping in touch with existing ones.

Watched Hamilton live! Incredible performance, what a show.

Alright, that’s a wrap!

`

const content2 = `

(Competition -) Since high school, I’ve always associated competition with something negative. It’s probably because I always had a ‘mismatch’ somehow with the people around me . Ages after I left middle school, I got to know that my entire class went on to become dentists/doctors (would you be surprised if I told you this was an all girls school?). I didn’t do well in biology / languages / psychology / philosophy, that kind of thing. I wouldn’t disclose my score on math exams, and I knew better than to bring up how we did on that essay in English.

Coming from somewhere without much internet, I didn’t know what Facebook was, let alone private lessons on music, sports, etc. So, I was pretty lame, and so, I thought everyone else was amazing when I started high school. After I got to college, even what I thought was my forte was reduced to pre-reqs for getting in, I kept my head down lower. It also didn’t help when certain classes assumed fluency in algorithms, or OS knowledge, etc. I see my classmates nodding to concepts that I’ve never heard of, answering prof’s questions and getting it right. I dreamt to be like that, but I’m too far behind. I remember coming back from a coding practice session, totally burnt out, but only having solved 3 problems while Andrew did 8. I cried on some random person’s door step for hours. What’s the point of trying when I’m always going to lose. That was my attitude.

I know the subject itself doesn’t matter, and I’m not seeing the full context here. It takes hard work, time, curiosity, and talent to get to that level. I’m crying because I only saw the ‘talent’ part of the equation, and I believed that there was no forgiveness for lost time. I thought, obviously I have to be competitive in something to get job/degree/internship, I already lost my ‘cool factor’ in things I never got to start as a kid due to whatever reason, and therefore I should seek some other way out. Otherwise, it’ll be someone else’s steps I’m crying on the next day. For all I know, Andrew might not even be there to offer a shoulder to cry on.

So you have it, I'm competition averse, guilty as charged.

(At the end of the tunnel -) This is a BSG (Battlestar Galactica board game) reference. Andrew always wanted to be Laura Roslin (aka the president), and his inspirational speeches frequently ended with, “there’s light at the end of the tunnel”.

I first heard of rhythm games when I was a sophomore in high school. On a trip to Italy, I saw Chris playing DJMax on his PSP. I played one game, and doubted my sense of beat - ironic because this was on a music trip. Anyhow, I was amazed by his agility at playing the game, so when I saw the DDR machine at my first job, I was super excited.

I spent forever trying to pass 3’s, then 5’s, then 7’s, while seeing people beat 8’s at the end of their first week. That feeling of incompetency came back, didn’t help that most folks playing were guys. I started to wonder if it’s something to do with the bones or like, muscle structure.

Then I reached out to this guy I met once or twice playing DDR at Andrew’s company. Instead of leaving me in the dust, and going on his way playing 13’s and 14’s, he actually introduced me to the songs that were only slightly harder than my level. Together with the circulating slogan of ‘just have faith’ amongst the DDR players at work, this heartfelt support changed my life.

All of a sudden, I was happy passing another percent on the harder songs, even though the result was still a Fail. I began accepting that, there is no hurry, because I expected that certain songs would just take me years to pass. It doesn’t matter if I spend more time than others because, one, it’s all just for sweats anyway, and two, I’d better get used to this slow progress because it’s only gonna take longer for higher levels.

As I refreshed my goal from passing five 10’s to passing one 14 in DDR, I started spreading this attitude towards other things: it’s ok to spend 3yrs+ playing ‘Flower Dance’, which remains the only piano music I can do; 4h+ drawing a silly corgi that really shouldn’t take more than one. I remember during the Code Jam times, I woke up at 2am in China, launched VPN over some shoddy hotel internet, and really didn’t get anywhere (my credit card was fraudulently charged $1000, I don’t know if this has anything to do with it haha).

Yea, I’m slow, but as I look back, I don’t regret it. I had a lot of fun. Unfortunately this strategy, of simply give it more time and attention, doesn’t quite work well with getting to know people.

(I, not robot -) If you’ve known me long enough, you probably noticed that I give friends presents that made me think of them. In high school, I drew everyone pictures with a message, to the effect of, “good knowing you in high school, hope to see you again”.  I probably should have spent the time studying for finals, but hey, I don’t recall any calculus or Hamlet, but I still remember the majority of these people.

This habit persisted through college, in the forms of food gatherings, messages during holidays, cards, etc. In fact, I might have gotten Andrew’s attention while drawing a birthday card (I noticed Andrew through his fb profile pic, of him playing chess, then I learnt he stopped after taking that picture or sth). After I started work, I doubled down on this effort, with a full list of things I’ve done too long to enumerate. Then one day, after a pretty serious conflict, I took a big step back.

You see, many folks would just brush it off, thinking “too bad, time to move on”. I was more pensive. I can’t convince myself that a once-friend can just be a stranger on the streets. I concluded that only those I care about are capable of hurting me the most. So, what should I do, stop caring? Or care enough, and as soon as they demonstrate some sense of conflict, give up, and move on? Both of these options would ultimately lead me to being alone forever, which I’ve suffered through long enough.

Stop caring, I definitely am not going to do, because I enjoy every moment that I’m able to share a memory / gossip with somebody, and every card I make, message I send, would make it less awkward for these chats to be candid. What about the one time trial option? That’s even worse, because I’d be shutting myself out of someone’s life for a long time, a someone that I could potentially like later… that’s the opposite of what trials are for.

So far, my best experiment is the one where I try, as much as I can, to defer my frustration. A year ago, I would have blown up when Andrew forgets to turn off the lights/oven/stove (which all happened at some point, btw). It’s ridiculous that I can’t get over something so small, but considering how long I was planning to be stuck with him, it all added up in my head. As for friends, I would have felt disappointed for days if I felt excluded.

Today, if Andrew forgets something for the nth time, I’m so used to it that I’ll just tell him where to go, and as long as our house is not on fire, I’m fine with moving on. It’s not that I don’t notice him forgetting, just that in the grand scheme of things, it doesn’t matter, and I’m pretty sure I’m causing him just as much trouble (that he probably doesn’t care). I stopped expecting people to update me on things. For heck, I don’t even know what my family is doing back at home, doesn’t mean I hate them. Basically, I ask myself, if I were them, in their context and personality, could I have done better.

I found that understanding someone is conducive to forgiving/hating them more easily. Perhaps the reason for those past disappointments was simply, I didn’t know them well enough, didn’t know what to expect, or didn’t even try.

(Thank you -) I am especially grateful to those I’ve met in 2017 (and the past) who did not abandon me, and this is not to be confused with those who did not forget me - I am very grateful to them too of course. But my point is, it takes more courage and insight to give others an extra nudge to do something that they are interested in, but are just too lazy / afraid to try. After all, why would someone else’s growth matter to you? For heck, they might even think of you as condescending. However, to me, taking the time to follow through, to not just give up on me after some initial attempt to explain DDR/problems/biking/skiing/drawing/cooking/perspectives/etc just makes you an awesome person. I don’t know if you received accolades for it yet from other people, but if you are wondering why you got a random present or message from me this year, here’s why.

`

const Page = () => {
  return (
    <Article
      title={"2017"}
      sections={[{
        title: "Yay Stuff", content: content1
      }, {
        title: "Nah Stuff", content: content2
      }]}
    />
  )
}

export default Page
