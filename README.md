# Acting & Monologue Track Pipeline

A study pipeline for an acting and monologue track. Ten track directories hold the working material. One short daily session ties them together.

## Purpose

Build range, specificity, and consistency as a performer through a small, repeatable daily practice. The repo is the record. Notion is the daily dashboard.

## The 10 Tracks

| Dir | Track | Contents |
|---|---|---|
| 01-monologue-scripts | Monologue scripts | Script text, template, beat analysis (template.md and samples) |
| 02-voice-diction-log | Voice and diction | Daily routine guide and log template (routine.md, template.md) |
| 03-audition-reel-pipeline | Audition reels | Clip selection, edit versions, export status |
| 04-character-arc-analysis | Character arcs | Objectives, obstacles, and arc breakdowns per role |
| 05-audition-tracker | Audition tracker | Submissions, casting contacts, status, follow-up dates |
| 06-body-movement-notes | Body and movement | Physical work, posture, tension notes |
| 07-scene-study | Scene study | Partner scenes, beats, rehearsal notes |
| 08-acting-methods-reference | Methods reference | One file per technique or method |
| 09-performance-review-log | Performance reviews | Feedback from self, coaches, and peers |
| 10-portfolio-deployment | Portfolio | Final reel links, headshots, publish checklist |

## Daily Practice: 10 Minutes, Hard Limit

Each day has one session of exactly 10 minutes. Use a timer.

1. Minute 0 to 2: Read one monologue from 01-monologue-scripts aloud, once, without performing.
2. Minute 2 to 4: Vocal warmup from 02-voice-diction-log/routine.md (breath, phonation, articulation).
3. Minute 4 to 7: Run the monologue once. Say the objective and the tactic for each beat out loud.
4. Minute 7 to 8: Optional 30-second take. Save the link, not the file.
5. Minute 8 to 10: Write the log entry in 02-voice-diction-log and a 3-line reflection in 09-performance-review-log.

The timer stops the session. If a session ends early, log it as short. Do not extend it.

## Anti-Yak-Shaving Guardrail

The pipeline supports the practice. It is not the practice. Before editing any file, ask: does this change help me act tomorrow?

- Do not spend a session on folder structure, tooling, colors, or formatting.
- Do not rewrite a template more than once a month.
- Do not start a new track directory until the existing ten have been used for at least 30 days.
- If a task takes more than 15 minutes outside the daily session, write it as a line in the reflection and move on.

## Commit Conventions

Use short, prefixed, imperative messages:

- log: a daily session entry, for example `log: 2026-11-24 monologue beat work`
- script: a monologue added or edited, for example `script: add explosive confrontation sample`
- template: a template changed, for example `template: add tactic field to monologue template`
- docs: README or reference change, for example `docs: add anti-yak-shaving rule`
- audition: tracker or reel update, for example `audition: submit callback for lab role`

One logical change per commit. Do not mix a log entry with a template change.

## Integration

- Notion: The Acting & Monologue Studio page holds the Daily 10-min Log (one row per session) and the Script Backlog / Archive. Paste the Audio / Notes link from each session into the Notion row.
- Large media: Keep audio and video in cloud storage. Store only links here.
- Audition status values: Submitted, Callback, Booked, Passed, No response.
- Weekly review (Sunday): Read the last 7 entries in 09-performance-review-log. Move one lesson into 08-acting-methods-reference.
- Portfolio: When a reel or monologue is final, add its link to 10-portfolio-deployment.

## File Naming

Dated entries use YYYY-MM-DD, for example `2026-11-24-session.md`. Monologue files use lowercase kebab-case, for example `cold-restraint-sample.md`.
