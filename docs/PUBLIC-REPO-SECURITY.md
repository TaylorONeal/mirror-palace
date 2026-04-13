# Public Repository Security Policy

## Purpose
Mirror Palace is a general framework repository for broad public use. It must never function as a storage surface for personal dossiers.

## Data Segregation Requirement
- **Public repo:** framework logic, generic templates, non-identifying documentation.
- **Private/local systems:** any user-specific or sensitive data.

If content belongs to an individual case, it does **not** belong in this repository.

## Zero-Tolerance Privacy Rule
Any personal-data leakage is treated as a **P1/S1 incident**.

## Preventive Controls
1. Keep examples abstract and reusable.
2. Avoid real names and identifiable stories.
3. Exclude direct identifiers (email, phone, address, account IDs, birth dates).
4. Exclude quasi-identifiers that can combine into re-identification.
5. Review diffs before commit with a privacy lens.

## Response Workflow for Suspected Leakage
1. **Contain:** remove leaked material immediately in HEAD.
2. **Eradicate:** rewrite git history to permanently purge leaked blobs/commits.
3. **Recover:** force-push clean history and rotate any affected references.
4. **Prevent:** add/update contribution guidance and review checks.

## History Hygiene
Before public release, maintainers should perform a full-history privacy sweep and remediate any sensitive artifacts discovered in prior commits.

