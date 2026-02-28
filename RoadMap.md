# dewdrop — roadmap

> General-purpose event + social platform. Create events, discover what's happening, RSVP, connect with friends.
> AI-generated posters via fal.ai. Mutual-friends-only messaging for safety.

---

## vision

Events are the core unit. Everything else — XP, friends, messages, recommendations — orbits around them.

---

## tech stack

| Layer | Tech |
|-------|------|
| Frontend | HTML/CSS/JS → React (later) |
| Backend | Python + FastAPI |
| Database | Supabase (PostgreSQL + Auth + Realtime) |
| AI Posters | fal.ai |
| Maps | Google Maps API (optional, later) |

---

## database schema

**users** — id, username, email, bio, avatar_url, interests[], xp, tier, created_at

**events** — id, creator_id, title, description, category, location_text, location_lat, location_lng, date, start_time, capacity, poster_url, is_public, created_at

**attendance** — id, user_id, event_id, status (GOING | INTERESTED | MAYBE), created_at

**follows** — follower_id, following_id, created_at · mutual = A→B and B→A both exist

**messages** — id, sender_id, receiver_id, content, is_read, created_at · RLS: mutual follows only

**comments** — id, event_id, user_id, parent_id (threaded), content, created_at

**notifications** — id, user_id, type, ref_id, is_read, created_at

---

---

## Phase A — Foundation

1. Create Supabase project
2. Create all tables
3. Write RLS policies — messages blocked unless mutual follow
4. Set up Supabase Storage bucket for poster images
5. Init FastAPI project, connect to Supabase via `supabase-py`
6. Health check endpoint + `.env` setup
7. Get fal.ai API key, run a test generation, confirm upload to Storage works

---

## Phase B — Auth & Users

8. Sign up (email + password)
9. Log in + forgot password / reset
10. Auth state persists via Supabase JWT
11. Profile setup on first login (username, bio, interests)
12. Edit profile (avatar upload, bio, interests)
13. Follow / unfollow a user
14. Mutual friend detection (A→B + B→A = mutual)
15. User search by username

---

## Phase C — Events

16. Create event form: title, description, category, date, time, location, capacity
17. Generate poster via fal.ai from title + category
18. Poster preview + regenerate option → save to Supabase Storage
19. Event detail page: poster, title, date, location, capacity, attendee stack
20. GOING / INTERESTED / MAYBE buttons
21. Capacity full → RSVP disabled
22. Threaded comments on event page
23. Creator can edit or delete their event

---

## Phase D — Feed & Discovery

24. Home feed: events from people you follow, sorted by date
25. "Friends are going" section on feed
26. Empty state → nudge to discover
27. Discover page: all public events
28. Category filter chips (Music, Sports, Study, Arts, Food, Tech, Outdoor)
29. Time filter (Today, This Week, This Weekend, All)
30. Search by event title
31. Personalized recommendations based on user interests + friends attending (FastAPI)

---

## Phase E — XP & Gamification

32. XP rules: create event +50 · RSVP GOING +20 · comment +10 · mark attended +30 · first event of week +15
33. Tiers: Newcomer (0–100) · Tide Rider (100–500) · Storm Chaser (500–1,200) · Wave Maker (1,200–2,500) · Ocean (2,500+)
34. Tier badge on profile and event cards
35. Weekly leaderboard (resets Monday) + all-time leaderboard
36. Your rank highlighted in leaderboard

---

## Phase F — Social & Messaging

37. View another user's profile (events, mutual friends count)
38. Follow / unfollow from their profile
39. Conversation list
40. Chat screen with realtime messages (Supabase realtime)
41. Unread badge
42. Non-mutual DMs blocked at RLS level (not just UI)
43. Notifications: new follower, comment on your event, friend RSVPed, event reminder 24h before
44. Mark all notifications as read

---

## Phase G — Calendar

45. Calendar page: events you're GOING to, month view
46. Click a day → see events that day
47. "Your Week" strip on home feed
48. Add to calendar button on event detail (Google Calendar / .ics)

---

## Phase H — AI Poster System

49. FastAPI endpoint: `POST /generate-poster`
50. Build prompt from event title + category (template per category)
51. Call fal.ai → upload image to Supabase Storage → return public URL
52. "Generate with AI" button in create event form, loading state, preview, regenerate
53. Manual upload fallback
54. Prompt style guide: clean, teal tones, editorial, no photorealistic faces

---

## Phase I — Maps (optional)

55. Location picker in create event form (search → pin on map)
56. Static map embed on event detail page
57. "Events near me" filter on discover

---

## Phase J — Polish & Deploy

58. Dark mode verified across all pages
59. Mobile responsive across all pages
60. Skeleton loading screens
61. Form validation + error states throughout
62. Micro-animations (hover, card lift, transitions)
63. Pydantic validation + rate limiting on all FastAPI endpoints
64. Frontend → Vercel
65. FastAPI → Railway or Render
66. Supabase prod project (separate from dev)
67. Environment variables locked down, custom domain (optional)

---

## UI pages

| Page | Status |
|------|--------|
| Feed | ✅ done |
| Discover | ⬜ |
| Event detail | ⬜ |
| Create event | ⬜ |
| Profile | ⬜ |
| Messaging | ⬜ |
| Notifications | ⬜ |
| Leaderboard | ⬜ |
| Calendar | ⬜ |
| Login / Register | ⬜ |

---

## build order

```
A → B → C → D → E → F → G → H → J → I
```

Foundation → Auth → Events → Feed → XP → Social → Calendar → AI Posters → Deploy → Maps

---

*dewdrop · built by damla · 2025*