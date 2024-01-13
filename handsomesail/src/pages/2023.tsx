import * as React from "react"
import Article from "../shared/article"

let content = `
I used to think that leaving a company is like a break up, we each did something that somehow hurt the other one, and we could no longer be together, “like ever” (Swifties?). This view was based on my single instance of departure from Dropbox, yet it was everything I knew.

When I left Dropbox in 2017, it was a spite-based resignation if I’m being honest. Even though I wasn’t technically a new grad anymore, I probably felt what a lot of new grads felt. I wasn’t being valued, I wasn’t given the most impactful projects, I wasn’t showing off my most capable work, I wasn’t promoted, etc. I did everything I could to chase what I perceived as the most promising projects and worked my way up to lead them, but it was not enough. So at the end, I quit.

I had interviewed at many companies, but none stood out as much as Figma. I was intensely intrigued by how the software could have been written, for something artistic nonetheless. At the beginning, I thought it was all HTML or something, but I couldn’t have been more wrong. I thought, even if I didn’t get a career boost from this, I could spend all day reading the codebase and I won’t be bored. In my darkest days at Figma, this turned out to be the pull that kept me there.

Moreover, Figma engineering upended my understanding of what working on web client-side could mean. I used to think that writing complicated and responsive websites, caching the right resources, pagination, etc. were all. But at Figma, I get to think about sandboxing (plugins), virtual memory (wasm), file formats, error handling, compiling (cmake?!) and more OS concepts. There’s also a lot of exposure on graph algorithms and animations (e.g. winding rules, vector networks), like the interesting things you learned in college but never used in a job. I once wrote a binary search algorithm to optimize scrolling performance and I was so excited. I don’t think there exists another company I could join that has as many challenging problems condensed in as readable a codebase.

What I didn’t expect, however, was how the work culture also changed my personal character. To put it simply, you can be nice and smart at the same time. Or at least, approachable and smart. Since college, I had always believed that the smarter you are at coding, the less brain cells you could dedicate to just be nice, or take a genuine interest in another person for no reason. This is just a fact, nothing can be changed about it. I believed it to the extent that if I see someone who’s nice, oh they must not do hardcore coding every day. Or, if I was really impressed by someone in their technical skills, I had zero expectations that they’d want to talk to me, just about life and what not. I wouldn’t say that I could vibe with everybody at Figma, but at least I’d venture bringing up casual topics if there’s a convenient cue to do so, without thinking too much about it.

In 2019, I was working on sandboxing vector networks for plugins. I could be sandboxing booleans but I guess I decided to be ambitious, except I didn’t know anything about vector networks. I’ve forgotten about the specifics but I do remember Evan spending almost an entire morning explaining every point, path and region to me. Darn, if the CTO of the company could do this, what excuse do I have for having a bad attitude.

When the company was smaller, every new hire had the chance to appear in our All Hands equivalent, introduce themselves, and also talk about what makes them a maker. I thought everybody had something legit to say. Some have already mastered bread-making, digital art, but many others are starting out circus sports, music-making, etc. I once organized a birthday celebration where everyone drew this person’s art in their own style, and I got a whopping 20 submissions and none were pure 2s stick-figure drawings. They were all very well-thought-of renditions. I was so amazed by how everyone treated this seriously. This again contributed to how I want to do these random things, and you bet I took advantage of it in my 6 years at Figma.

Why am I leaving then? I’ve thought about this for a while, but now is the best time for everybody. I haven’t been around much anyways, having just returned from parental leave. The company has also grown a lot bigger. The amount of energy I need to dedicate into shipping meaningful projects is a lot bigger.. and I don’t have that kind of energy right now with a hard stop for daycare. I could coast, but I’m worried that I’d be less motivated to do anything going down that spiral. Coming out of 3 years of pandemic, I wanted something in person, but perhaps a little different from what I’m used to.

I took the GMAT in 2017, thinking that I might need it some day. I did well enough to probably get into any business school based on scores alone, but the timing wasn’t right… I was just starting to get a hang of Figma. Even so, that desire to know something other than coding remained. Typically, people would get an MBA or something, but ‘business administration’ is too vague for me. I needed something concrete with what I’m learning, like being able to read financial news or understand my own finances. It just happens that I am about a 15min drive from CU Boulder, where there’s a Master’s in Finance program that’s only 9 months long. I promptly enrolled, expecting to graduate May 2024. After this, I still want to get a job in tech, just because coding is still fun for me, and pays more 😛 If anybody’s hiring H2 2024, hmu!

I am so thankful for the people who had faith in me when they invited me onboard Figma. It’s been the ride of a lifetime. I’m leaving, but it’s not a breakup. It’s more like going somewhere far away, to explore something new. Or in my case, re-explore learning without the pressure of getting a job, repaying debts, or earning good grades. Figma, we may meet again, but perhaps by then, we’ve both grown in ways we couldn’t have known. I bet it’ll be a familiar, yet an “enigmatic” encounter (Design used to be such an enigma 😜).
`

const Page = () => {
  return (
    <Article title={"2023 - Bye, Figma"} sections={[{ title: "", content }]} />
  )
}

export default Page
