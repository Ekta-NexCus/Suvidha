# Ekta Nexcus — Suvidha (Prototype)

This is the Stage 1 prototype: home screen with language toggle, worker
registration step 1, and employer job-posting step 1 (with the quantity
feature). No database yet — forms just confirm what was entered.

## How to get this live (no coding required)

### Option A — Upload through the GitHub website
1. Go to https://github.com/Ekta-NexCus/Suvidha
2. Click "Add file" → "Upload files"
3. Drag in every file and folder from this project, keeping the same
   folder structure (pages/, styles/, lib/ etc.)
4. Scroll down, click "Commit changes"
5. Go to vercel.com → your imported Suvidha project → it will
   automatically redeploy. Open the live URL Vercel gives you.

### Option B — GitHub Desktop (recommended if you plan to keep building)
1. Install GitHub Desktop, sign in, clone Ekta-NexCus/Suvidha
2. Copy all these files into that cloned folder
3. In GitHub Desktop: write a short commit message like "Add prototype",
   click "Commit to main", then "Push origin"
4. Vercel redeploys automatically within about a minute

## What to test once it's live
- Tap "मराठी" / "English" — all text on the page should switch
- Tap "मला काम हवे आहे" (I need work) — fill the form, tap Save,
  confirm the popup shows what you typed
- Go back, tap "मला कामगार हवा आहे" (I need workers) — pick a skill,
  pick a quantity (try "Other" too), enter a location, tap Post job

## What's next (Stage 2)
Connecting Supabase so registrations actually save to a database,
instead of just showing a confirmation popup.
