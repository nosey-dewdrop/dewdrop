# dewdrop · mock preview

> 💧 event-first social platform for university & city life.

---

## what is this?

this folder is the **ui mock** for dewdrop. it's not a real app — no database, no backend, no auth. but you can click through every page, see every flow, and feel the visual language in your browser.

open `index.html` in your browser and start exploring.

---

## vibecoded 🎸

this project is being built with **vibecoding**.

what that means: we build by talking to ai (claude), arguing, saying "this is ugly / change this / no that's wrong", and iterating until it's right. not a single line was written by hand — but every decision was made by an amazing human also known as damla, damumya, damladore, damummyphus

---

## pages

| file | page | what it shows |
|------|------|---------------|
| `index.html` | feed | homepage — hero, featured event, xp bar, event cards, leaderboard preview |
| `profile.html` | profile | avatar, bio, stats, xp, tabs (created / attending / activity), mutual friends |
| `event.html` | event detail | large poster, description, creator, rsvp, attendees, comments |
| `discover.html` | discover | all events, category filters |
| `create.html` | create event | form — title, description, category, date, location, capacity, price, poster upload/ai |
| `leaderboard.html` | leaderboard | weekly/monthly/all-time tabs, xp rankings |
| `calendar.html` | calendar | monthly grid with event dots, weekly event list |
| `friends.html` | friends | following / followers / suggested tabs |
| `messages.html` | messages | conversation sidebar + chat bubbles |
| `notifications.html` | notifications | follow, comment, rsvp, reminder, xp milestone alerts |
| `login.html` | login | phone number → otp verification flow |

---

## file structure

```
dewdrop-mock/
  index.html             feed
  profile.html           profile
  event.html             event detail
  discover.html          discover
  create.html            create event
  leaderboard.html       leaderboard
  calendar.html          calendar
  friends.html           friends
  messages.html          direct messages
  notifications.html     notifications
  login.html             login

  css/
    tokens.css           colors, fonts, radius, shadows, dark mode
    layout.css           navbar, footer, page container
    components.css       card, pill, button, xp strip, leaderboard, avatar stack
    pages.css            profile, event detail, messages, calendar, login

  js/
    theme.js             dark/light mode toggle (persists in localstorage)
    interactions.js      rsvp toggle, pill select, tab switch, follow toggle
```

---

## design language

- **typography:** playfair display (headings) + dm sans (body/ui)
- **color:** teal spectrum (t0–t7) + sky secondary (s1–s3)
- **aesthetic:** editorial, magazine-like, generous whitespace
- **numbered sections:** 01, 02, 03 — inherited from ladybug dna
- **poster gradients:** unique gradient per event category
- **dark mode:** full support, toggle to switch
- **animations:** fadeup on load, hover lift, spring easing

---

## working interactions

- 🌙/☀️ dark mode toggle (saved across pages)
- rsvp buttons (rsvp ↔ going ✓)
- category pill filters
- profile tabs (events / attending / activity)
- leaderboard tabs (weekly / monthly / all time)
- friends tabs (following / followers / suggested)
- follow/unfollow toggle
- login otp flow (phone → code → enter)
- all links work (page-to-page navigation)

---

## what comes next

this mock is the **blueprint**. the real app will look like this but with real data, real users, real money.

### backend (python or java — tbd)
- restful api — event crud, rsvp, follow, comment, search
- supabase postgresql — all data lives here
- row level security — users only see what they should
- realtime — messages and notifications arrive instantly

### auth
- phone otp login (supabase auth)
- session management, protected routes
- onboarding on first login (pick username, select interests)

### xp & gamification
- create event +50, rsvp +20, comment +10, attend +30, weekly bonus +15
- tier system: newcomer → tide rider → storm chaser → wave maker → ocean
- milestone notifications when you level up

### ai poster
- fal.ai integration — generate event posters with ai
- stored in supabase storage

### payments
- stripe integration
- paid / private event tickets
- ticket codes (qr), usage tracking
- premium membership (monthly subscription)

### revenue model
- freemium — core features free
- premium membership — unlimited ai posters, featured placement, badges
- paid event tickets — platform takes a commission
- event sponsorship — pay to appear in featured banner

### admin panel
- approve / reject events
- user management, bans
- review reports
- platform analytics

### scale target
- 20–50k+ lines of code
- thousands of active users
- real money flow
- production-grade security

---

## roadmap

```
[x] mock          <- we are here
[ ] uml           -- class diagrams, methods, relationships (pdf)
[ ] spec          -- product plan, revenue model, technical architecture
[ ] project setup -- real framework, real structure, front/back separated
[ ] database      -- schema, migrations, rls policies, triggers
[ ] auth          -- login, sessions, onboarding
[ ] design system -- tokens -> tailwind/css, component library
[ ] feed          -- real data, real cards, real xp
[ ] event detail  -- rsvp, comments, attendees
[ ] profile       -- follow, activity, tabs
[ ] create event  -- form, validation, ai poster
[ ] discover      -- search, filters, location-based
[ ] notifications -- realtime
[ ] messages      -- realtime dm
[ ] leaderboard   -- weekly/monthly/all-time
[ ] calendar      -- monthly view
[ ] payments      -- stripe, tickets, premium
[ ] admin panel   -- moderation, analytics
[ ] polish        -- seo, performance, error handling, testing
```

---

## built by

**damla** · cs @ bilkent   
portfolio: [nosey-dewdrop.github.io](https://nosey-dewdrop.github.io)  
github: [nosey-dewdrop](https://github.com/nosey-dewdrop)  
