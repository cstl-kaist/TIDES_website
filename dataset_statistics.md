# TIDES_final_July Dataset Statistics

- Generated: `2026-07-24T16:13:03`
- Source: `/home/prj_c2/TIDES_final_July`

## Overview

| Metric | Count |
| --- | ---: |
| Teams | 12 |
| Meeting transcript files | 104 |
| Dated meetings (metadata) | 88 |
| Unique dated meetings (from filenames) | 88 |
| Utterances (segments) | 75,971 |
| Role rows (participant × meeting) | 352 |
| Segments with `korean_text` | 55,786 |
| Segments with `qwen_utterance_type` | 70,266 |

> Note: metadata lists meetings by date; some meetings are split across `_PtK` files, so file count can exceed dated-meeting count.

## Language groups

- **KO teams** (Team_1, Team_2, Team_3, Team_6, Team_7, Team_9, Team_10): 55,786 utterances (73.43%)
- **EN teams** (Team_4, Team_5, Team_8, Team_11, Team_12): 20,185 utterances (26.57%)

## Meetings & utterances by team

| Team | Lang | Transcript files | Metadata meetings | Utterances | % of total |
| --- | --- | ---: | ---: | ---: | ---: |
| Team_1 | ko | 5 | 4 | 3,861 | 5.08% |
| Team_2 | ko | 15 | 13 | 11,630 | 15.31% |
| Team_3 | ko | 10 | 8 | 14,058 | 18.5% |
| Team_4 | en | 5 | 4 | 2,788 | 3.67% |
| Team_5 | en | 12 | 10 | 6,168 | 8.12% |
| Team_6 | ko | 7 | 6 | 3,448 | 4.54% |
| Team_7 | ko | 5 | 5 | 6,594 | 8.68% |
| Team_8 | en | 5 | 5 | 3,377 | 4.45% |
| Team_9 | ko | 8 | 7 | 11,713 | 15.42% |
| Team_10 | ko | 8 | 7 | 4,482 | 5.9% |
| Team_11 | en | 9 | 6 | 3,852 | 5.07% |
| Team_12 | en | 15 | 13 | 4,000 | 5.27% |
| **Total** |  | **104** | **88** | **75,971** | **100%** |

## Golden dataset (`annotation_source`)

- Definition: `annotation_source == 'human'`
- **Golden (human):** 5,705 (7.51%)
- **Gemma (model):** 70,266 (92.49%)

| Team | human | gemma | human % of team | human % of all golden |
| --- | ---: | ---: | ---: | ---: |
| Team_1 | 0 | 3,861 | 0.0% | 0.0% |
| Team_2 | 0 | 11,630 | 0.0% | 0.0% |
| Team_3 | 338 | 13,720 | 2.4% | 5.92% |
| Team_4 | 449 | 2,339 | 16.1% | 7.87% |
| Team_5 | 338 | 5,830 | 5.48% | 5.92% |
| Team_6 | 0 | 3,448 | 0.0% | 0.0% |
| Team_7 | 1,821 | 4,773 | 27.62% | 31.92% |
| Team_8 | 536 | 2,841 | 15.87% | 9.4% |
| Team_9 | 2,173 | 9,540 | 18.55% | 38.09% |
| Team_10 | 0 | 4,482 | 0.0% | 0.0% |
| Team_11 | 50 | 3,802 | 1.3% | 0.88% |
| Team_12 | 0 | 4,000 | 0.0% | 0.0% |

## Golden utterance type (`annotation_source == human`)

Total golden utterances: **5,705**

| Utterance type | Count | % of golden |
| --- | ---: | ---: |
| Giving Information | 1,881 | 32.97% |
| Active listening | 956 | 16.76% |
| Linking Solutions | 395 | 6.92% |
| Other / Neutral | 372 | 6.52% |
| Structuring | 362 | 6.35% |
| Naming Solutions | 339 | 5.94% |
| Social / Humor | 296 | 5.19% |
| Proactivity | 240 | 4.21% |
| Naming Problems | 217 | 3.8% |
| Knowledge Transfer | 171 | 3.0% |
| Cooperation | 162 | 2.84% |
| Linking Problems | 135 | 2.37% |
| Social Negative | 66 | 1.16% |
| Task/Process Negative | 62 | 1.09% |
| Linking & Connecting | 51 | 0.89% |
| **Total** | **5,705** | **100%** |

### Golden utterance type by team (counts)

| Utterance type | Team_3 | Team_4 | Team_5 | Team_7 | Team_8 | Team_9 | Team_11 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Giving Information | 94 | 224 | 75 | 610 | 225 | 634 | 19 |
| Active listening | 73 | 81 | 84 | 303 | 105 | 301 | 9 |
| Linking Solutions | 18 | 17 | 40 | 104 | 8 | 207 | 1 |
| Other / Neutral | 30 | 12 | 10 | 174 | 19 | 123 | 4 |
| Structuring | 30 | 20 | 26 | 134 | 49 | 91 | 12 |
| Naming Solutions | 5 | 31 | 43 | 110 | 20 | 129 | 1 |
| Social / Humor | 12 | 11 | 5 | 118 | 22 | 128 | 0 |
| Proactivity | 20 | 4 | 20 | 71 | 30 | 92 | 3 |
| Naming Problems | 13 | 18 | 9 | 68 | 11 | 98 | 0 |
| Knowledge Transfer | 1 | 7 | 6 | 29 | 30 | 98 | 0 |
| Cooperation | 10 | 8 | 11 | 47 | 10 | 75 | 1 |
| Linking Problems | 7 | 10 | 3 | 25 | 2 | 88 | 0 |
| Social Negative | 14 | 0 | 0 | 1 | 2 | 49 | 0 |
| Task/Process Negative | 11 | 1 | 3 | 11 | 3 | 33 | 0 |
| Linking & Connecting | 0 | 5 | 3 | 16 | 0 | 27 | 0 |

| **Total** | 338 | 449 | 338 | 1,821 | 536 | 2,173 | 50 |

## Utterance type (overall)

| Utterance type | Count | % |
| --- | ---: | ---: |
| Giving Information | 26,810 | 35.29% |
| Active listening | 9,946 | 13.09% |
| Linking Solutions | 9,260 | 12.19% |
| Naming Solutions | 4,917 | 6.47% |
| Other / Neutral | 4,703 | 6.19% |
| Structuring | 4,643 | 6.11% |
| Proactivity | 3,912 | 5.15% |
| Naming Problems | 3,157 | 4.16% |
| Social / Humor | 2,510 | 3.3% |
| Linking Problems | 2,233 | 2.94% |
| Cooperation | 1,812 | 2.39% |
| Knowledge Transfer | 878 | 1.16% |
| Task/Process Negative | 642 | 0.85% |
| Social Negative | 465 | 0.61% |
| Linking & Connecting | 83 | 0.11% |
| **Total** | **75,971** | **100%** |

## Utterance type by team (counts)

| Utterance type | Team_1 | Team_2 | Team_3 | Team_4 | Team_5 | Team_6 | Team_7 | Team_8 | Team_9 | Team_10 | Team_11 | Team_12 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Giving Information | 1,384 | 4,162 | 4,943 | 1,140 | 2,117 | 992 | 2,180 | 1,365 | 4,173 | 1,482 | 1,525 | 1,347 |
| Active listening | 597 | 1,178 | 1,816 | 491 | 937 | 524 | 985 | 475 | 1,298 | 516 | 527 | 602 |
| Linking Solutions | 391 | 1,725 | 1,651 | 249 | 740 | 547 | 701 | 230 | 1,532 | 734 | 341 | 419 |
| Naming Solutions | 272 | 681 | 778 | 184 | 548 | 237 | 387 | 91 | 685 | 448 | 339 | 267 |
| Other / Neutral | 204 | 752 | 1,003 | 185 | 337 | 137 | 498 | 229 | 665 | 189 | 245 | 259 |
| Structuring | 269 | 723 | 889 | 138 | 303 | 220 | 480 | 268 | 444 | 320 | 175 | 414 |
| Proactivity | 291 | 607 | 571 | 75 | 358 | 230 | 292 | 159 | 463 | 294 | 280 | 292 |
| Naming Problems | 131 | 555 | 609 | 72 | 293 | 133 | 253 | 83 | 628 | 145 | 165 | 90 |
| Social / Humor | 105 | 276 | 652 | 85 | 120 | 97 | 313 | 163 | 442 | 81 | 86 | 90 |
| Linking Problems | 55 | 454 | 430 | 48 | 191 | 110 | 166 | 58 | 497 | 79 | 68 | 77 |
| Cooperation | 137 | 160 | 354 | 53 | 154 | 150 | 167 | 101 | 251 | 132 | 67 | 86 |
| Knowledge Transfer | 7 | 205 | 11 | 31 | 40 | 55 | 58 | 101 | 305 | 30 | 6 | 29 |
| Task/Process Negative | 13 | 97 | 193 | 11 | 18 | 11 | 77 | 28 | 145 | 24 | 12 | 13 |
| Social Negative | 4 | 47 | 154 | 18 | 9 | 2 | 18 | 25 | 156 | 8 | 14 | 10 |
| Linking & Connecting | 1 | 8 | 4 | 8 | 3 | 3 | 19 | 1 | 29 | 0 | 2 | 5 |

## Role statistics (`assigned_role`)

Based on `352` participant×meeting rows in `metadata/meeting_roles.csv`.

| Assigned role | Count | % |
| --- | ---: | ---: |
| Problem Solver | 62 | 17.61% |
| Coordinator | 59 | 16.76% |
| Critic | 56 | 15.91% |
| Negative | 38 | 10.8% |
| Task Motivator | 32 | 9.09% |
| Team Leader | 32 | 9.09% |
| Evaluator | 16 | 4.55% |
| Attention Seeker | 13 | 3.69% |
| Task Completer | 11 | 3.12% |
| Teamwork Support | 11 | 3.12% |
| Follower | 10 | 2.84% |
| Power Seeker | 7 | 1.99% |
| Social | 5 | 1.42% |

### Dimension means (overall)

- Dominance: 4.1857
- Sociability: 4.4188
- Task Orientation: 4.4874

### Dimension means by role

| Role | n | Dominance | Sociability | Task Orientation |
| --- | ---: | ---: | ---: | ---: |
| Problem Solver | 62 | 4.1635 | 4.496 | 4.5367 |
| Coordinator | 59 | 4.5678 | 4.7928 | 4.7655 |
| Critic | 56 | 3.9236 | 4.0675 | 4.1637 |
| Negative | 38 | 3.0523 | 3.6268 | 3.6323 |
| Task Motivator | 32 | 4.737 | 4.5955 | 4.6319 |
| Team Leader | 32 | 4.8203 | 4.7057 | 4.9271 |
| Evaluator | 16 | 4.5799 | 4.5243 | 4.9444 |
| Attention Seeker | 13 | 4.3547 | 4.6026 | 4.3162 |
| Task Completer | 11 | 4.0354 | 4.3258 | 4.7929 |
| Teamwork Support | 11 | 3.7348 | 4.6288 | 4.8359 |
| Follower | 10 | 3.5278 | 4.6833 | 4.5722 |
| Power Seeker | 7 | 4.619 | 4.0476 | 4.3889 |
| Social | 5 | 4.2444 | 4.9556 | 4.4889 |

### Role counts by team

| Role | Team_1 | Team_2 | Team_3 | Team_4 | Team_5 | Team_6 | Team_7 | Team_8 | Team_9 | Team_10 | Team_11 | Team_12 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Problem Solver | 3 | 11 | 7 | 2 | 11 | 2 | 2 | 4 | 6 | 3 | 4 | 7 |
| Coordinator | 2 | 6 | 4 | 1 | 9 | 4 | 0 | 9 | 3 | 6 | 3 | 12 |
| Critic | 1 | 13 | 2 | 3 | 11 | 2 | 1 | 3 | 7 | 2 | 5 | 6 |
| Negative | 4 | 5 | 1 | 2 | 9 | 1 | 1 | 3 | 1 | 3 | 5 | 3 |
| Task Motivator | 2 | 2 | 1 | 2 | 4 | 4 | 6 | 3 | 2 | 0 | 4 | 2 |
| Team Leader | 3 | 8 | 1 | 0 | 3 | 0 | 0 | 0 | 6 | 2 | 1 | 8 |
| Evaluator | 1 | 2 | 0 | 1 | 0 | 9 | 0 | 0 | 0 | 1 | 1 | 1 |
| Attention Seeker | 2 | 1 | 4 | 0 | 0 | 0 | 1 | 0 | 1 | 3 | 1 | 0 |
| Task Completer | 2 | 0 | 2 | 0 | 1 | 0 | 0 | 2 | 0 | 3 | 0 | 1 |
| Teamwork Support | 0 | 1 | 1 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 4 |
| Follower | 0 | 1 | 0 | 1 | 0 | 1 | 2 | 0 | 2 | 1 | 0 | 2 |
| Power Seeker | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| Social | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |

## Team development stage (metadata)

| Stage | Meeting counts (split if comma-combined) |
| --- | ---: |
| Performing | 24 |
| Forming | 21 |
| Norming | 18 |
| Storming | 15 |
| Adjourning | 11 |

