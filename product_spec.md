# dewdrop — product spec v2

> 💧 the social platform where events are the content.

---

## 1. the real problem

people don't struggle to *find* event tools. they struggle to *discover what's happening around them* through people they trust.

right now, events live in:
- instagram stories (gone in 24h, no rsvp, no tracking)
- whatsapp groups (buried in chat, no discovery)
- posters on campus walls (no digital trace)
- eventbrite pages (cold, corporate, zero social)

---

## 2. competitor analysis

### meetup — dying giant
- acquired by bending spoons (2024), prices hiked to $45/month for organizers
- organizers are leaving en masse (2025-2026 exodus is documented)
- pay-to-skip waitlist ("meetup+") destroyed community trust
- safety issues: bots, spam, no host protection, sexual harassment reports
- ugly, outdated ui that hasn't meaningfully changed in years
- members don't own their data
- no social graph — you can't see what your friends attend

**what they proved:** people want to meet strangers through shared interests. **where they failed:** they treated organizers as cash cows and never built social features.

### luma (lu.ma) — beautiful but cold
- gorgeous ui, loved by tech/startup community
- organizer-first: great tools for event pages, ticketing, newsletters
- but attendees have no reason to come back between events
- no social feed — you can't see what friends are going to
- users complained about missing "save" and "interested" options
- map discovery was added late, after user complaints
- $59-69/month for premium features
- feels "silicon valley" — wrong vibe for casual social events

**what they proved:** beautiful event pages matter. **where they failed:** they built for organizers, not for the social layer between attendees.

### partiful — fun but shallow
- gen z favorite for house parties and casual hangouts
- forces app download just to rsvp (major friction)
- template-based design, no unique identity per event
- no discovery at all — you must be invited
- no ongoing engagement, no feed, no social graph
- too casual for anything beyond birthday parties

**what they proved:** young people want event tools that feel like their social apps. **where they failed:** there's no platform beyond the single event page.

### eventbrite — corporate utility
- the default for professional/ticketed events
- zero social features, zero personality
- expensive, especially for small/free events
- discovery is algorithmic, not social
- nobody "hangs out" on eventbrite

**what they proved:** ticketing at scale works. **where they failed:** they never tried to be social.

### the gap nobody fills

| feature | meetup | luma | partiful | eventbrite | dewdrop |
|---------|--------|------|----------|------------|---------|
| social feed (friends' events) | no | no | no | no | **yes** |
| gamification / xp | no | no | no | no | **yes** |
| attendee-first design | partial | no | partial | no | **yes** |
| beautiful ui | no | yes | yes | no | **yes** |
| free for organizers | no ($45/mo) | partial | yes | no | **yes** |
| discovery via social graph | no | no | no | no | **yes** |
| local/city focus | partial | no | no | partial | **yes** |
| ai poster generation | no | no | no | no | **yes** |
| turkey market | no | no | no | minimal | **yes** |

---

## 3. what dewdrop actually is

dewdrop is **not an event management tool**. it's a **social platform where events are the content**.

the same way instagram is a social platform where photos are the content. you don't open instagram to "manage photos" — you open it to see what your friends are up to. dewdrop works the same way, but for real-life events.


### the core loop

```
see what friends are doing → rsvp → attend → earn xp → level up → create your own → friends see it → repeat
```

the xp system isn't a gimmick — it's the retention mechanism. luma has no reason for attendees to come back. dewdrop does: your tier, your streak, your rank on the leaderboard. you're building a social identity around being someone who *does things*.

---

## 4. target users

**not** for anyone who wants to discover events through their social circle.

**primary:** 18-30 year olds in cities who are socially active but have no single place to see what's happening
**starting point:** bilkent university (because we're here, we know the community, we can seed it)
**expansion:** ankara → istanbul → turkey → international

user types:
- **the explorer** — opens the app saturday morning wondering "what should i do today?"
- **the connector** — goes to everything, knows everyone, brings friends to events
- **the creator** — runs a club/brand, needs to promote events and see who showed up
- **the casual** — doesn't create events but likes seeing what friends are doing and occasionally joins

---

## 5. features

### phase 1 — mvp (social + events)

the minimum to prove the core loop works:

- **social feed** — see events your friends are going to, events near you, trending events
- **event page** — title, description, category, date, time, location, poster, rsvp
- **profile** — avatar, bio, interests, xp/tier, events created, events attended, follower/following
- **follow system** — follow people, see their events in your feed
- **rsvp** — going / interested / maybe
- **discover** — browse events by category, search, filter by location
- **xp system** — earn xp for creating, rsvping, attending, commenting
- **leaderboard** — weekly/monthly/all-time rankings
- **notifications** — follow, rsvp, comment, reminder, xp milestone
- **phone auth** — otp login, onboarding (username, interests)
- **dark mode**

### phase 2 — engagement

- **comments** — threaded comments on events
- **direct messages** — realtime 1-on-1 chat
- **ai poster** — generate event posters with ai (fal.ai)
- **calendar view** — see your upcoming events on a calendar
- **event reminders** — push notification before event starts
- **map discovery** — find events near you on a map

### phase 3 — monetization

- **paid events** — sell tickets (stripe/iyzico)
- **private events** — invite-only, friends-only visibility
- **premium membership** — unlimited ai posters, featured placement, badges, analytics
- **event sponsorship** — pay to feature your event in the banner
- **admin panel** — moderation, analytics, user management

### future

- **group/club pages** — organizations as entities (ieee bilkent, etc.)
- **recurring events** — weekly study group, monthly meetup
- **post-event photos** — share photos from events you attended
- **event reviews** — rate events after attending
- **mobile app** — react native or flutter
- **cross-city expansion**

---

## 6. revenue model

**year 1: free. grow.**
- everything is free for both organizers and attendees
- focus: get users, prove the social loop works
- tiny revenue from paid event ticket commission (5-10%)

**year 2: monetize gently**
- premium membership (~30 tl/month): unlimited ai posters, analytics, featured badge, profile themes
- event sponsorship: pay to appear in featured banner (100-500 tl/week)
- increased ticket commission from larger events

**year 3: scale**
- all revenue streams active
- expand to multiple cities
- corporate tier for businesses/brands hosting events

### revenue streams

| stream | how it works | when |
|--------|-------------|------|
| ticket commission | 5-10% of paid event ticket sales | phase 3 |
| premium membership | monthly subscription, ~30 tl/month | phase 3 |
| event sponsorship | pay to feature in banner/discover | phase 3 |
| promoted events | boost event visibility in feed | future |

### why this works

meetup charges *organizers* $45/month just to *create* events. luma charges $59-69/month for premium. both are squeezing the supply side.

dewdrop flips this: organizers create for **free**. always. the money comes from optional premium features for power users and commissions on paid events. this means more organizers → more events → more attendees → more network effect.

---

## 7. technical architecture

```
[user's browser/phone]
        |
   [frontend]  ←→  [backend api]  ←→  [supabase (db + auth + realtime + storage)]
                         |
                    [stripe/iyzico]  (payments)
                    [fal.ai]         (ai posters)
                    [google maps]    (location)
```

### frontend
- next.js (react) — pages, ssr, deploy on vercel
- tailwind css with custom design tokens (from our mock)
- typescript for type safety

### backend
- **language: tbd** — python (fastapi) or java (spring boot), damla's choice
- handles: validation, xp calculation, payment webhooks, ai poster calls, notification dispatch, rate limiting, search
- separate from frontend — own deployment

### database
- supabase (postgresql + auth + realtime + storage)
- row level security on every table
- realtime subscriptions for messages and notifications

### auth
- supabase auth with phone otp (twilio sms)
- session: jwt tokens, httponly cookies

### payments
- stripe (global) or iyzico (turkey-first) — we'll evaluate
- stripe connect for organizer payouts

---

## 8. what makes dewdrop defensible

1. **social graph** — once your friends are on dewdrop, switching cost is high (same reason nobody leaves instagram)
2. **xp/tier identity** — your storm chaser tier is yours, you earned it, you don't want to start over
3. **local network effects** — dewdrop is more valuable in a city where more people use it
4. **organizer lock-in** — if your audience is on dewdrop, you create events on dewdrop
5. **turkey-first** — no competitor has serious turkish presence. luma is us-focused, meetup is dying, partiful is us-only

---

## 9. risks

| risk | severity | mitigation |
|------|----------|------------|
| nobody creates events at launch | high | seed with our own events (ieee, study groups, campus activities). make creation dead simple + ai posters |
| people use it once and forget | high | xp system, weekly leaderboard, push notifications, "friends are going" social pressure |
| safety (harassment, spam) | medium | reporting system, admin moderation, rate limits, account verification |
| meetup/luma copies our social features | medium | by the time they do, we have the turkish market and network effect |
| stripe not smooth in turkey | medium | start with iyzico as primary, add stripe later |
| scaling costs | low | supabase free tier handles 500 users, $25/month plan handles thousands |

---

## 10. success metrics

| metric | what it tells us |
|--------|-----------------|
| dau / mau ratio | are people coming back daily? (target: >20%) |
| events created per week | is supply growing? |
| "friends going" rsvp rate | does social proof drive attendance? |
| xp earned per user per week | is gamification working? |
| d7 / d30 retention | are people staying? |
| organizer churn | are creators happy? |
| nps score | would people recommend dewdrop? |

---

## 11. launch plan

### week 1-2: bilkent seed
- create 10-15 real events (ieee events, study groups, social gatherings)
- invite 50 people personally (friends, ieee members, classmates)
- goal: 50 users, 15 events, prove the feed works

### week 3-4: bilkent growth
- word of mouth, instagram stories, campus posters (ironic, yes)
- partner with 3-5 student clubs to post their events on dewdrop
- goal: 200 users

### month 2-3: ankara expansion
- open to odtu, hacettepe, baskent students
- cross-university events start appearing
- goal: 1000 users

### month 4-6: product-market fit
- if retention is good, start building phase 2 features
- if not, talk to users, find out why, pivot

---

## 12. roadmap

```
[x] mock          -- ui preview, all pages, navigation
[ ] uml           -- class diagrams, methods, relationships (pdf)
[ ] spec          -- this document (done)
[ ] project setup -- real framework, front/back separated
[ ] database      -- schema, migrations, rls, triggers
[ ] auth          -- login, sessions, onboarding
[ ] design system -- tokens -> tailwind, component library
[ ] feed          -- real data, social feed, event cards
[ ] event detail  -- rsvp, comments, attendees
[ ] profile       -- follow, activity, tabs
[ ] create event  -- form, validation, ai poster
[ ] discover      -- search, filters, location
[ ] notifications -- realtime
[ ] messages      -- realtime dm
[ ] leaderboard   -- weekly/monthly/all-time
[ ] calendar      -- monthly view
[ ] payments      -- stripe/iyzico, tickets, premium
[ ] admin panel   -- moderation, analytics
[ ] polish        -- seo, performance, testing
```
