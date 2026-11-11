---
name: release-notes-pr-workflow
description: >
  Use this skill when asked to add a new Fiddler release notes entry from a provided
  notes list, create release-notes branches, and open pull requests that reference a Jira issue.
  This skill handles both release-notes.json and release-notes-insiders.json in two separate
  approval-gated passes.
---

# Release Notes PR Workflow

Create release-notes update branches, add new release note entries, and open Jira-linked pull requests for both public and insiders release notes.

## Operating rules

- Ask for required inputs before making changes: release version, release date, grouped entries (New/Fixed), and Jira issue key.
- Use branch naming exactly:
  - Public notes: `release-notes-rel-x-x-x` where `x-x-x` is the semantic version with dots replaced by dashes.
  - Insiders notes: `release-notes-insiders-rel-x-x-x` where `x-x-x` is the same semantic version with dots replaced by dashes.
- Insert the new release object at the top of the JSON array to keep newest-first ordering.
- Keep JSON valid and preserve existing schema and formatting style.
- Require explicit user approval before creating each PR.
- Require a Jira issue key for each PR and include it in the PR title and body.
- Complete the public release-notes flow first, then repeat the same process for insiders.
- Do not create the insiders PR until the public PR has been approved and created.
- Before creating each release branch, sync to the latest default branch state from `origin/master`.

## Inputs to collect

1. Release version (example: `8.2.0`).
2. Release date text (example: `Oct 20, 2026`).
3. Release entries grouped by section:
   - `New` entries list
   - `Fixed` entries list
4. Jira issue key for public PR (example: `FIDD-1234`).
5. Jira issue key for insiders PR (can be the same or different).

## Steps

1. Validate required inputs.
   - Confirm version format `major.minor.patch`.
   - If inputs are incomplete, ask follow-up questions.

2. Sync baseline for public branch.
   - Switch to `master`.
   - Fetch latest remote state.
   - Fast-forward local `master` to `origin/master` (or stop and notify if fast-forward is not possible).

3. Public release notes branch.
   - Create and switch to `release-notes-rel-x-x-x`.
   - Open `release-notes/release-notes.json`.
   - Add a new top-level object at array index 0:
     - `version`: `<version>`
     - `title`: `Fiddler Everywhere v<version>`
     - `date`: `<date>`
     - `items`: include `New` and/or `Fixed` sections only when they have entries.

4. Public commit.
   - Stage only `release-notes/release-notes.json`.
   - Commit message: `docs(release-notes): add v<version> release notes`.

5. Public PR approval gate.
   - Present a short summary of what was added.
   - Ask: `Approve creating PR for release-notes.json?`
   - Continue only after explicit approval.

6. Public PR creation.
   - Ensure Jira issue is provided.
   - Open PR against the default branch with:
     - Title: `[<JIRA-KEY>] Add release notes for v<version>`
     - Body includes:
       - Jira reference line: `Jira: <JIRA-KEY>`
       - Summary of New/Fixed entries
       - File changed: `release-notes/release-notes.json`

7. Sync baseline for insiders branch.
   - Switch to `master`.
   - Fetch latest remote state.
   - Fast-forward local `master` to `origin/master` (or stop and notify if fast-forward is not possible).

8. Insiders release notes branch.
   - Create and switch to `release-notes-insiders-rel-x-x-x`.
   - Open `release-notes/release-notes-insiders.json`.
   - Add a new top-level object at array index 0:
     - `version`: `<version>-insiders`
     - `title`: `Fiddler Everywhere v<version>`
     - `date`: `<date>`
     - `items`: same New/Fixed content as public unless user provides insiders-specific entries.

9. Insiders commit.
   - Stage only `release-notes/release-notes-insiders.json`.
   - Commit message: `docs(release-notes): add v<version>-insiders release notes`.

10. Insiders PR approval gate.
   - Present a short summary of what was added.
   - Ask: `Approve creating PR for release-notes-insiders.json?`
   - Continue only after explicit approval.

11. Insiders PR creation.
   - Ensure Jira issue is provided.
   - Open PR against the default branch with:
     - Title: `[<JIRA-KEY>] Add insiders release notes for v<version>`
     - Body includes:
       - Jira reference line: `Jira: <JIRA-KEY>`
       - Summary of New/Fixed entries
       - File changed: `release-notes/release-notes-insiders.json`

## Output format

For each phase (public, insiders), report:

- Branch name created
- File updated
- Commit SHA and message
- PR URL (after approval)
- Jira issue used
- Any validation notes

## Example trigger phrases

- Add release notes and open a PR.
- Create release notes branch and PR for version 8.2.0.
- Update release-notes.json and release-notes-insiders.json with Jira-linked PRs.
