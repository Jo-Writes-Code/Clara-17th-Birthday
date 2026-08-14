- [x] Rebuild each slide as one centered, almost full-screen rounded presentation card.
- [x] Simplify the page background and remove scattered landing-page composition.
- [x] Keep all slide copy, quizzes, gating, favorite-topic content, and generated image assets intact.
- [x] Update the letter signature from “your person” to “Jovin”.
- [x] Refine navigation into a polished card-stack slide transition with responsive behavior.
- [x] Run type/build checks and desktop/mobile visual verification before saving the redesigned checkpoint.
- [x] Remove visible slide numbers, progress indicators, and top navigation chrome.
- [x] Use a rounder fuller font for all non-letter text while preserving the handwritten letter treatment.
- [x] Simplify slide copy to main headings only, standardize CTAs to “next,” and keep “dont click” as the sole exception.
- [x] Remove the hero image and center the first slide text.
- [x] Make the dont-click action advance to a dedicated “unawaza chakula” slide.
- [x] Center every slide’s text and place any remaining images below the heading.
- [x] Make all visible controls and content surfaces rounded, then run build and responsive checks.
- [x] Put Previous on the left and Next on the right with rounded navigation controls.
- [x] Reduce card and element scale, use squarer cards, and add more whitespace.
- [x] Switch to a thicker, rounded handwritten-style display font while keeping the letter treatment.
- [x] Fit the quiz modal and all three options without scrolling; change feedback to “bahati mbaya” and “u got it!!”.
- [x] Update favorite-topic headings and add “hibiscus” and “lily” labels below their images.
- [x] Restore the final bracketed text and add restrained visual details without unnecessary copy.
- [x] Add the TV Girl subheading, enlarge flower labels, and add “Dark Red” under the colour swatch.
- [x] Simplify the quiz title, add a clear guessing question, and enlarge green answer marks beneath the images.
- [x] Make cards tap-to-advance except for the dont-click slide, while preserving quiz and movie gating.
- [x] Add a subtle diagonal zigzag background pattern and generous first-slide confetti.
- [x] Reduce first-slide heading size, change it to “Happy Birthday Clara!”, and add the Aug 14, 2026 date note.
- [x] Add a one-time first-slide confetti burst with a satisfying pop/confetti sound and floating follow-up particles.
- [x] Add staged entrance animation for card headings, supporting text, and controls.
- [x] Add reusable theme-aware particles, sparkles, decorative shapes, and soft background motion without clutter.
- [x] Add polished hover/press feedback, playful dont-click behavior, and reactive movie quiz selections.
- [x] Respect reduced-motion preferences and verify desktop/mobile motion presentation before checkpointing.

## Motion verification notes

- Desktop and mobile first-slide screenshots show the centered rounded card, diagonal canvas pattern, confetti, and split navigation controls fitting without clipping.
- Motion is implemented with CSS transforms/opacity plus a Web Audio celebration cue and is disabled under `prefers-reduced-motion`.

- [x] Randomize the opening burst pieces across a rainbow palette and lengthen their visible flight.
- [x] Add a larger falling confetti-rain phase from the top that runs for about five seconds after the burst.
- [x] Verify the updated celebration timing on desktop/mobile and preserve reduced-motion behavior.
- [x] Change burst and rain confetti shapes to stars/circles only; make rain smaller, faster, full-screen, and fade out after three seconds.
- [x] Add faster random-direction snow-like particles behind every slide card.
- [x] Add a polished green completion checkpoint below each completed movie card.
- [x] Make the opening title bob smoothly and move TV Girl under the Favourite Band heading.
- [x] Replace remaining white text with beige/light-brown tones where appropriate.
- [x] Add the four-click dont-click sequence with changing messages, shake states, and delayed advance.

## Latest refinement verification

- Desktop and mobile screenshots show rainbow circles/stars contained by the viewport, the lighter card palette, and split navigation controls without clipping.
- The dont-click flow now uses three escalating messages and advances on the fourth press; ordinary card tapping resumes on the following slide.
- [x] Replace narrow-strip confetti emission with randomized viewport-wide starting positions.
- [x] Add randomized outward X/Y directions, velocities, rotations, sizes, and star/circle shapes.
- [x] Add gravity and sideways drift so pieces fall naturally after the burst while keeping the center text readable.
- [x] Verify only the confetti animation changed, then run build and responsive checks.

## Confetti-only verification

- Desktop and mobile screenshots preserve the rounded card, center text, and navigation while the revised burst/rain layers remain viewport-contained and full-width.
- The revised motion uses random viewport starts, outward X/Y travel, gravity offsets, rotations, and drift; no card/layout markup was changed.
- [x] Move the burst and rain confetti layers above the card surface.
- [x] Bias the mix toward stars while retaining circles.
- [x] Add a reusable asymmetric hand-drawn botanical ornament to every rounded card.
- [x] Make the first card’s botanical line art significantly richer while keeping its center clean.
- [x] Add subtle muted color, opacity, line-weight variation, and progressive corner cluster sizing.
- [x] Replay the opening confetti burst and sound every time the deck returns to slide one.
- [x] Verify decoration layering, readability, mobile fit, and the replay trigger before checkpointing.

## Botanical verification

- Desktop and mobile screenshots show the richer first-card line art staying in the corners and edges while leaving the birthday text area clear.
- All cards now receive the same muted SVG ornament treatment, with a heavier bottom-right cluster and lighter upper/left accents.
- [x] Change only the first birthday card to a darker red surface matching the final card.
- [x] Use lighter first-card text and botanical line art with a subtle internal gradient.
- [x] Verify contrast, confetti layering, mobile fit, and preserve all other slide styles.

## First-card verification

- Desktop and mobile screenshots show the dark-red first card, light centered birthday text, visible muted botanical line art, and unchanged rounded deck controls.
- [x] Enlarge the first-slide botanical clusters and add more visible flower/leaf detail.
- [x] Shift only the first-slide line art toward a lighter cream-white and increase stroke weight slightly.
- [x] Verify the birthday text center remains clear on desktop and mobile, then save the checkpoint.

## First-slide botanical verification

- Desktop and mobile screenshots show larger cream-white flowers and leaves with a slightly thicker stroke while the birthday text remains centered and unobstructed.
- [x] Darken botanical line art on every non-first slide while keeping first-slide flowers light.
- [x] Add a separate symmetrical cream ornamental vine layer to the first slide behind the existing flower clusters.
- [x] Keep the ornament corner-focused rather than a complete border and preserve a clean center.
- [x] Verify layering, desktop/mobile fit, and visual contrast before checkpointing.

## Botanical frame verification

- Desktop and mobile screenshots show the centered birthday text restored after the stacking fix, with mirrored cream vines staying in the corners and existing flowers layered above them.
- Non-first botanical ornaments now use a darker red tone while the first card keeps its lighter cream treatment.
- [x] Replace only the newer first-slide frame with four precise mirrored L-shaped corner pieces.
- [x] Keep the existing asymmetrical flower clusters unchanged and layered below the new frame.
- [x] Use consistent 90-degree vertices, thin polished curves, subtle floral motifs, and no connecting border.
- [x] Verify center text clearance, responsive geometry, and the preserved card interactions.

## Frame verification

- Desktop and mobile screenshots show four separate mirrored L-shaped corners with sharp vertices, clean center space, and preserved organic flower clusters.
- [x] Preserve the existing four L-shaped frame paths and sharp 90-degree vertices exactly.
- [x] Add mirrored repeated vine, leaf, flower, and flourish motifs along each frame arm.
- [x] Keep the cream/dark-red line palette, thin refined strokes, and clean center text area.
- [x] Verify motif consistency, responsive fit, and preserved first-slide interactions.

## Enriched frame verification

- Desktop and mobile screenshots show the fixed L vertices, repeated mirrored botanical motifs, preserved organic flower clusters, and clear centered birthday text.
- [x] Match the first-slide frame color to the “Happy” text color.
- [x] Make the frame lines substantially thicker while preserving thin refined motif details.
- [x] Add smoother curves and clearer floral design cues without changing the four-corner structure.
- [x] Verify central text clearance and desktop/mobile presentation before checkpointing.

## Frame weight verification

- Desktop and mobile screenshots show the first-slide frame in the same light cream as the “Happy” text, with thicker strokes and clearer floral motifs while preserving the clean text center.
- [x] Replace straight-looking frame runs with thicker continuous curved vine paths.
- [x] Integrate leaves and flower motifs directly into those border paths rather than keeping them visually separate.
- [x] Preserve four separate L-shaped corners, sharp 90-degree vertices, existing organic clusters, and a clean text center.
- [x] Verify the combined frame on desktop and mobile before checkpointing.

## Combined frame verification

- Desktop and mobile screenshots show thicker curved connections flowing from each L-corner into the leaves and flower motifs, with the centered birthday text remaining clear.
- [x] Remove the added floral motifs and connector leaves from the first-slide border frame.
- [x] Keep four separate mirrored L-shaped lines with gentle curves and sharp vertices.
- [x] Preserve the existing organic flower clusters, center text, confetti, and all deck interactions.
- [x] Verify the simplified frame on desktop and mobile before checkpointing.

## Curved lines verification

- Desktop and mobile screenshots show the floral frame motifs removed, with only four separate thicker curved L-lines remaining and the existing organic clusters preserved.
- [x] Move the four curved first-slide border corners inward from the card edges.
- [x] Add a restrained set of leaves directly along the border strokes.
- [x] Increase the first-slide border stroke weight substantially while preserving the clean center.
- [x] Verify the inset frame on desktop and mobile before checkpointing.

## Inset leafy-border verification

- Desktop and mobile screenshots show the thicker curved border inset from the card edges, with integrated leaves and a clear centered birthday message.
- [x] Increase the restored first-slide border lines to a bold marker-like stroke.
- [x] Reduce individual leaf size while adding more leaves along the four border strokes.
- [x] Vary leaf directions so the border feels organic without crowding the center.
- [x] Verify desktop/mobile fit and preserve the restored first-slide composition.

## Marker border verification

- Desktop and mobile screenshots show the border reading as a substantially heavier marker-like stroke with smaller, denser leaves placed in varied directions while the centered birthday text remains clear.

## Floating petal atmosphere

- [x] Add a shared floating-petal layer to every slide using randomized botanical shapes, palette colors, positions, sizes, opacity, rotation, and drift.
- [x] Keep petals concentrated around outer/background areas and vary density so content-heavy slides remain calmer than decorative slides.
- [x] Respect reduced-motion preferences and verify petal readability, layering, and responsive fit on desktop and mobile.

## Floating petal verification

- Desktop and mobile screenshots preserve the centered birthday title, marker-thick frame, and existing confetti while the new petals remain subtle, edge-weighted, and palette-consistent. The shared animation uses slow fall, sideways drift, rotation, and reduced-motion fallback; slide counts are tuned higher for the emptier tease/unawaza/ending slides and lower for the movie and image-heavy slides.

## On-card petal refinement

- [x] Move the floating petal layer inside each card so petals render above the card surface but beneath its text, controls, images, and botanical artwork.
- [x] Increase petal counts substantially while preserving outer-edge bias and a clear central content zone.
- [x] Use beige/cream petal colors on dark-red cards and dark-red petal colors on light cards, then verify contrast and responsive fit.

## On-card petal verification

- Desktop and mobile screenshots show the opening card receiving the denser beige petal layer above its dark-red surface and beneath the title/frame artwork. The petal counts are materially higher, while edge bias and the central text-safe area remain preserved.

## Visible petal repair

- [x] Ensure the petal layer is visibly above the card background and below card foreground content/artwork.
- [x] Strengthen petal opacity, size, and initial animation visibility so the particles are clearly present during inspection.
- [x] Verify visible petals on desktop and mobile without obscuring the title, date, controls, or card artwork.

## Visible petal repair verification

- Desktop and mobile screenshots now show the denser beige petal layer visibly sitting on the dark-red card surface. The petals remain behind the title and foreground artwork, while the date and navigation controls stay readable.

## Guaranteed visible petals

- [x] Give each card a permanently visible base petal layer so particles remain present even during the animation’s fade phases.
- [x] Increase contrast and add a visible botanical vein detail to the on-card petals without covering foreground content.
- [x] Verify the guaranteed-visible layer on desktop and mobile before checkpointing.

## Guaranteed visible petal verification

- Desktop and mobile screenshots now clearly show numerous beige petal particles inside the dark-red card, with the title and date remaining readable. The repair overrides the legacy card-child positioning rule and keeps the petal layer below the foreground content.

## Smaller petal refinement

- [x] Reduce the generated petal dimensions while preserving their visible contrast and varied silhouettes.
- [x] Keep the existing density, motion, card-aware colors, and content-safe placement unchanged.
- [x] Verify the smaller particles on desktop and mobile before checkpointing.

## Smaller petal verification

- Desktop and mobile screenshots show the petals at a smaller, lighter scale while remaining visible inside the dark-red card. The title, date, frame, and controls remain readable, with density and motion preserved.

## Unawaza subheading

- [x] Add the exact parenthetical subheading beneath “unawaza chakula”.
- [x] Style the subheading at a small readable scale without disrupting the centered card hierarchy.
- [x] Verify the slide on desktop and mobile before checkpointing.

## Unawaza subheading verification

- The exact small parenthetical copy is now rendered beneath the “unawaza chakula” heading, with responsive sizing defined for desktop and mobile while preserving the existing card and petal treatment.

## Delayed unawaza subheading

- [x] Reveal the unawaza parenthetical subheading three seconds after the slide becomes active.
- [x] Reset the timer when leaving and returning to the slide, without delaying the main heading or card interaction.
- [x] Preserve reduced-motion behavior and verify the delayed reveal responsively.

## Delayed unawaza verification

- The subheading now starts hidden and reveals with a three-second active-slide delay; removing and re-adding the active class restarts the timing. Reduced-motion users see it immediately. Desktop and mobile opening-slide checks show no regression to the card, petals, title, or controls.

## Updated reveal timing

- [x] Change the unawaza subheading reveal from three seconds to two seconds after slide activation.
- [x] Delay only the dont-click button until five seconds after the girlfriend slide becomes active.
- [x] Keep the girlfriend slide heading, note area, reduced-motion behavior, and existing click sequence intact, then verify responsively.

## Updated reveal timing verification

- The CSS timing now uses a two-second active-slide delay for the unawaza subheading and a five-second delay for the initial dont-click button entrance. Desktop and mobile opening-slide checks show no regression to the card, petals, title, or controls.

## Movie quiz statements

- [x] Replace the generic quiz question with the exact statement for each movie.
- [x] Update Waves, Bones and All, and The Perks of Being a Wallflower options and correct answers to Tyler, Sully, and Patrick.
- [x] Verify quiz feedback, completion checks, gating, and responsive presentation after the data update.

## Movie quiz statements verification

- The quiz modal now renders the movie-specific statements and the requested A/B/C option order: Waves — Tyler, Emily, Alexis; Bones and All — Lee, Maren, Sully; The Perks of Being a Wallflower — Patrick, Sam, Charlie. Existing feedback, completion checks, and movie gating remain unchanged. Desktop and mobile deck checks passed.

## Botanical leaf contrast

- [x] Make the first-slide border leaves whiter and reuse that leaf treatment on the TV Girl and final slides.
- [x] Make the leaf artwork on every other slide a deeper dark red.
- [x] Verify botanical contrast, layering, and responsive composition across representative desktop and mobile views.

## Botanical leaf contrast verification

- The first-slide frame leaves now use a brighter cream-white, the TV Girl and final cards receive the same leaves-only treatment, and the remaining botanical ornaments use a deeper dark red. Desktop and mobile opening-slide checks preserve the title, petals, date, and frame hierarchy.

## Organic ornament correction

- [x] Remove the added leaves-only border frames from the TV Girl and final slides.
- [x] Make the underlying organic botanical ornaments lighter on the first, TV Girl, and final cards.
- [x] Keep the underlying ornaments deeper dark red on every other slide and verify the corrected composition responsively.

## Organic ornament correction verification

- The extra border-leaf frames are removed from TV Girl and final. The underlying organic ornament remains light on hero/TV Girl/final and deep dark red elsewhere; desktop and mobile opening-slide checks show the original border leaves and content hierarchy preserved.

## Thicker organic flowers

- [x] Increase the stroke thickness of the existing organic flower-and-leaf drawings across all cards.
- [x] Preserve slide-specific light/dark color treatments and keep the center content readable.
- [x] Verify the thicker organic artwork on desktop and mobile before checkpointing.

## Thicker organic flowers verification

- Organic flower-and-leaf strokes are now materially heavier across the base, rich, and first-slide variants. Desktop and mobile opening-card checks show stronger line visibility while the title, date, border, petals, and controls remain clear.

## 3D stacked-card transition

- [x] Replace the horizontal slide movement with a centered physical-deck transition using perspective, depth, scale, rotation, and shadow.
- [x] Make Next send the current card backward and bring the next card forward, with Previous using the opposite tilt direction.
- [x] Preserve rounded card shape, navigation behavior, content layering, and reduced-motion accessibility while verifying desktop/mobile presentation.

## 3D stacked-card transition verification

- The horizontal track was replaced with an absolute centered stack using perspective and direction-aware tilt/scale/depth states. A later simplified-deck override was corrected so the active card remains visible. Desktop and mobile screenshots show the centered rounded card, preserved frame/petals, and navigation controls.

## True pass-behind deck transition

- [x] Make the outgoing card remain visible while moving diagonally/sideways behind the incoming card.
- [x] Make the incoming card emerge from underneath and fully cover the outgoing card with explicit z-index ordering.
- [x] Reverse the same overlap sequence for Previous, preserving rounded cards, smooth timing, and reduced-motion behavior.

## True pass-behind deck verification

- The outgoing/current card now has an explicit exit state and remains visible while diagonally traveling behind the incoming card; the incoming card has a separate emerge state and higher final z-index. Previous uses mirrored motion. Desktop and mobile resting-state screenshots preserve the centered rounded card and all foreground artwork.

## Final-slide leaf emphasis

- [x] Make only the final slide’s organic leaf strokes substantially thicker and whiter.
- [x] Preserve the final slide’s other botanical flowers, card content, petals, and the treatments on every other slide.
- [x] Verify the final-slide contrast and responsive fit before checkpointing.

## Final-slide leaf emphasis verification

- Final-slide organic leaf paths now use a brighter cream-white color and materially heavier stroke only on that slide. Desktop and mobile checks preserve the card content, petals, frame, and other slide treatments.

## Sound-effect removal

- [x] Remove the Web Audio celebration sound and its cleanup lifecycle.
- [x] Preserve the visual confetti burst, falling confetti, petals, and navigation behavior.
- [x] Verify TypeScript, production build, and opening-card presentation.

## Marker-thick flower contrast

- [x] Make the organic flower artwork beneath borders much thicker and whiter on dark-red cards.
- [x] Make the same underlying flower artwork much thicker and deeper dark red on light cards.
- [x] Preserve border lines, petals, content clearance, and verify the marker-like treatment responsively.

## Marker-thick flower contrast verification

- The underlying organic ornaments now use marker-scale strokes: cream-white on dark-red hero/band/final cards and deep oxblood on light cards. Desktop and mobile opening-card checks show stronger botanical visibility while the border and centered birthday content remain clear.

## First-slide flower restoration

- [x] Restore the first slide’s underlying flower color and stroke thickness to the pre-marker treatment only.
- [x] Keep marker-thick contrast-aware flower strokes on every other slide.
- [x] Verify the first-slide border, petals, title, and responsive layout remain unchanged.

## First-slide flower restoration verification

- The first slide’s underlying ornament is restored to its earlier lighter/finer cream treatment, while the marker-thick contrast-aware flower rules remain scoped to other cards. Desktop and mobile opening-card checks preserve the border, petals, title, and layout.

## Favourite Movies top-left note

- [x] Add the exact text “(we dogo acha njaa)” above the Favourite Movies heading near the card’s top-left.
- [x] Style the note small and slanted without interfering with the heading, movie cards, or quiz controls.
- [x] Verify the Favourite Movies slide responsively before checkpointing.

## Favourite Movies top-left note verification

- The note is mounted above the Favourite Movies heading and anchored inside the card’s top-left with a small handwritten slant. Desktop and mobile deck checks show no regression to the active card, petals, border artwork, or navigation.

## Favourite Movies supplied images

- [x] Inventory the supplied filenames and match each image to its movie or character.
- [x] Crop the supplied images to the existing quiz-card aspect ratio while keeping the character subjects framed clearly.
- [x] Replace all relevant placeholder image references, then verify the quiz menu and modal assets responsively.

## Favourite Movies supplied images verification

- All supplied movie and character files are now cropped and wired into the centralized quiz data: Waves/Tyler/Emily/Alexis, Bones and All/Lee/Maren/Sully, and The Perks of Being a Wallflower/Patrick/Sam/Charlie. Desktop and mobile deck checks preserve the active card, petals, botanical artwork, and navigation.

## Remaining Favourite Movies images

- [x] Crop and upload `tyler.jpg`, `sully.png`, `sam.jpg`, and `waves.jpg` using the existing asset workflow.
- [x] Replace the Tyler, Sully, Sam, and Waves placeholder references with the newly supplied assets.
- [x] Verify the complete movie menu and quiz image set on desktop and mobile.

## Remaining Favourite Movies images verification

- The final four placeholders are now replaced with cropped Tyler, Sully, Sam, and Waves assets. The full supplied set is stored in permanent webdev storage and the build passes.

## TV Girl image row

- [x] Prepare and upload TV-Girl1.jpg, TV-Girl2.jpg, and TV-Girl3.jpg without cropping or changing their aspect ratios.
- [x] Replace the Favourite Band placeholder with a responsive side-by-side row of the three images.
- [x] Verify the TV Girl heading, petals, botanical artwork, and image row on desktop and mobile.

## TV Girl image row verification

- The Favourite Band placeholder is now replaced with the three supplied TV Girl images side by side. Source aspect ratios are preserved with intrinsic image sizing and no crop; the row is constrained responsively for the card. Desktop and mobile deck checks preserve the active card and visual layers.

## Layered TV Girl collage

- [x] Create one layered collage treatment from the three TV Girl images, with each image enlarged without distortion and set to 40% opacity.
- [x] Remove white bars from the foreground image, round the collage and foreground edges, and make the visuals fill a balanced amount of the Favourite Band card.
- [x] Place the collage above the card background but beneath the botanical artwork, text, and controls.
- [x] Verify the updated build and desktop/mobile regression states, then save a checkpoint.

## TV Girl foreground image

- [x] Upload the newly supplied `tvgirl.png` to permanent webdev storage.
- [x] Crop away the white bars, preserve the artwork’s subject, and apply rounded corners through the image treatment.
- [x] Add the cropped image as the Favourite Band slide’s foreground image while keeping the three-image collage behind it.

## TV Girl collage regression notes

- Desktop and mobile opening-card screenshots continue to show the centered dark-red hero, botanical frame, petals, date, and navigation without clipping after the Favourite Band layering changes. The Favourite Band slide itself still needs a direct interaction check before the new collage items are marked complete.

## Final regression notes

- The refined collage and foreground-image CSS changes pass TypeScript and production build checks. Desktop and mobile opening-card screenshots remain stable, with the hero frame, petals, date, centered title, and navigation controls readable and unclipped.

## Final crop regression notes

- The foreground image now uses a deliberate cover crop with a slight vertical overscan to remove the supplied white bars while preserving the main artwork. Desktop and mobile opening-card screenshots remain stable after this final adjustment.

## TV Girl collage opacity refinement

- [x] Reduce only the three layered TV Girl background images from 40% to 20% opacity.
- [x] Preserve the foreground artwork, crop, rounded edges, botanical layering, and responsive layout.
- [x] Run build and desktop/mobile regression checks, then save a checkpoint.

## TV Girl collage opacity verification

- The layered TV Girl background images now use 20% opacity; the foreground artwork, crop, rounded edges, botanical layering, and card structure remain unchanged. TypeScript, production build, desktop regression, and mobile regression checks passed.

## GitHub repository synchronization

- [ ] Inspect `Jo-Writes-Code/Clara-17th-Birthday` and compare its default branch with the current project files.
- [ ] Preserve unrelated repository work while copying the current Clara website source and required project configuration.
- [ ] Commit and push the synchronized files to the repository’s default branch.
- [ ] Verify the pushed commit and report the repository URL and commit reference.
