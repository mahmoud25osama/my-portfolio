# Complete Portfolio Enhancement Plan

## TL;DR
> **Quick Summary**: Transform the portfolio with 20+ modern visual effects, interactive features, and polished micro-interactions using libraries like Three.js, Lenis, React-Bits, and custom GSAP animations. 
> 
> **Deliverables**: 
> - Lenis smooth scroll integration
> - Magnetic buttons throughout
> - Scroll progress indicator
> - 3D tilt cards for projects
> - Spotlight/glow cursor effects
> - Text animations (React-Bits)
> - Tech stack orbital showcase
> - Enhanced timeline animation
> - Particle background system
> - Skills radar visualization
> - Three.js 3D hero elements
> - GitHub activity integration
> - Testimonials carousel
> - Scroll-triggered reveals
> - Reduced motion support
> - Preloader animation
> - Parallax depth effects
> - Animated background grid
> - Typewriter code effect
> - Particle text transitions
> - WebGL distortion effects
> 
> **Estimated Effort**: Large
> **Parallel Execution**: YES - 5 phases
> **Critical Path**: Dependencies → Core Systems → Visual Effects → Sections → Polish

---

## Context

### Original Request
User wants to add modern sections, features, animations, and creative elements using libraries like react-bits or radix or any modern library.

### Interview Summary
- User selected: **ALL enhancements** from the recommendation list
- No specific constraints mentioned
- High-agency implementation expected
- Tech stack: React 19 + Vite + Tailwind v4 + GSAP + Framer Motion

### Research Findings
- Current portfolio has solid foundation with GSAP animations
- Glass morphism design system already in place
- Custom cursor exists (needs enhancement)
- Responsive design framework ready
- No existing smooth scroll library
- No 3D elements present
- No advanced text animations

---

## Work Objectives

### Core Objective
Transform the portfolio into a premium, visually stunning experience with cutting-edge animations, 3D elements, and satisfying micro-interactions while maintaining performance and accessibility.

### Concrete Deliverables
- 20+ distinct enhancement features implemented
- Zero regression in existing functionality
- Smooth 60fps animations throughout
- Full reduced-motion accessibility support
- Mobile-optimized implementations

### Definition of Done
- [ ] All enhancements working in development
- [ ] All enhancements verified in production build
- [ ] Performance metrics maintained (< 3s LCP, < 100ms FID)
- [ ] Accessibility checks pass (WCAG 2.1 AA)
- [ ] Mobile touch interactions tested

### Must Have
- Lenis smooth scroll
- Magnetic button effects
- Scroll progress indicator
- 3D tilt cards
- Spotlight cursor effects
- Text reveal animations
- Reduced motion support

### Must NOT Have (Guardrails)
- No breaking changes to existing sections
- No performance degradation (> 100KB bundle increase per major feature)
- No accessibility violations
- No mobile usability issues
- No console errors
- No layout shift on load

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: YES
- **Automated tests**: None
- **Agent-Executed QA**: MANDATORY for each task

### QA Policy
Every task includes agent-executed QA scenarios. Evidence saved to `.sisyphus/evidence/`.

---

## Execution Strategy

### Parallel Execution Waves

```
WAVE 1: Foundation & Dependencies (Can Start Immediately)
├── T1: Install Lenis smooth scroll
├── T2: Install Three.js ecosystem  
├── T3: Install React-Bits
├── T4: Install additional libraries
└── T5: Create utility hooks (useSmoothScroll, useMagnetic)

WAVE 2: Core Systems (After Wave 1)
├── T6: Implement smooth scroll provider
├── T7: Create magnetic button component
├── T8: Build scroll progress indicator
├── T9: Create 3D tilt card component
└── T10: Build spotlight/glow system

WAVE 3: Visual Effects (After Wave 2)
├── T11: Text animation components (React-Bits)
├── T12: Tech stack orbital showcase
├── T13: Enhanced timeline with connections
├── T14: Particle background system
├── T15: Skills radar visualization
├── T16: Animated background grid
└── T17: Parallax scroll effects

WAVE 4: Advanced Features (After Wave 3)
├── T18: Three.js hero elements
├── T19: GitHub activity integration
├── T20: Testimonials carousel
├── T21: Typewriter code effect
├── T22: Particle text transitions
└── T23: WebGL distortion effects

WAVE 5: Polish & Integration (After Wave 4)
├── T24: Preloader animation
├── T25: Reduced motion support
├── T26: Integration testing
├── T27: Performance optimization
└── T28: Final verification

WAVE FINAL: Review & Approval
├── F1: Plan compliance audit
├── F2: Code quality review
├── F3: Real manual QA
└── F4: Scope fidelity check
```

### Dependency Matrix
- **T1-T5**: Foundation - Blocks Waves 2-5
- **T6-T10**: Core - Blocks Waves 3-5
- **T11-T17**: Visual - Blocks Wave 4
- **T18-T23**: Advanced - Blocks Wave 5
- **T24-T28**: Polish - No blockers

### Agent Dispatch Summary
- **Wave 1**: 5 tasks → `quick`
- **Wave 2**: 5 tasks → `quick` to `unspecified-high`
- **Wave 3**: 7 tasks → `unspecified-high` + `artistry`
- **Wave 4**: 6 tasks → `unspecified-high` + `artistry`
- **Wave 5**: 5 tasks → `unspecified-high` + `deep`
- **Wave FINAL**: 4 tasks → `oracle`, `unspecified-high`, `deep`

---

## TODOs

### WAVE 1: Foundation & Dependencies

- [ ] 1. Install Lenis smooth scroll

**What to do**:
- Install `@studio-freight/lenis` package
- Configure Lenis with GSAP ScrollTrigger integration
- Create `useSmoothScroll` custom hook
- Test scroll behavior on all sections

**Must NOT do**:
- Don't replace existing scroll behavior without testing
- Don't install incompatible versions

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `javascript-pro`, `bun-development`

**Parallelization**:
- **Can Run In Parallel**: YES - Wave 1 tasks
- **Blocks**: T6, T8, T10
- **Blocked By**: None

**References**:
- Pattern: GSAP ScrollTrigger integration
- Docs: Lenis official documentation

**Acceptance Criteria**:
- [ ] Package installed: `@studio-freight/lenis@^1.3.1`
- [ ] Lenis instance created in main.tsx
- [ ] GSAP ScrollTrigger synced with Lenis
- [ ] Smooth scroll working on all anchor links

**QA Scenarios**:
```
Scenario: Smooth scroll navigation
Tool: Playwright
Preconditions: Development server running
Steps:
1. Navigate to http://localhost:5173
2. Click "About" nav link
3. Wait for scroll animation
4. Assert page is at #about section
Expected Result: Smooth scroll animation completes in ~800ms
Evidence: .sisyphus/evidence/t1-smooth-scroll.png

Scenario: Scroll position preserved on refresh
Tool: Playwright
Steps:
1. Scroll to Projects section
2. Refresh page
3. Assert scroll position maintained
Expected Result: Page returns to same position
Evidence: .sisyphus/evidence/t1-scroll-preserve.png
```

---

- [ ] 2. Install Three.js ecosystem

**What to do**:
- Install `@react-three/fiber`, `@react-three/drei`, `three`
- Configure React Three Fiber with Vite
- Create Three.js provider component
- Add canvas to Hero section (initial)

**Must NOT do**:
- Don't install THREE as separate dependency (use fiber)
- Don't add to all sections initially

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `threejs-skills`, `react-nextjs-development`

**Parallelization**:
- **Blocks**: T18
- **Blocked By**: None

**Acceptance Criteria**:
- [ ] Packages installed: `@react-three/fiber`, `@react-three/drei`, `three`
- [ ] ThreeCanvas component created
- [ ] Basic scene renders in Hero
- [ ] No console errors from Three.js

**QA Scenarios**:
```
Scenario: Three.js scene renders
Tool: Playwright
Steps:
1. Navigate to hero section
2. Wait for canvas load
3. Screenshot canvas element
Expected Result: Canvas visible, no errors in console
Evidence: .sisyphus/evidence/t2-three-canvas.png
```

---

- [ ] 3. Install React-Bits

**What to do**:
- Install `@react-bits` or copy from GitHub
- Configure text animation components
- Test with Hero headline
- Create reusable TextReveal component

**Must NOT do**:
- Don't use if bundle size > 50KB
- Don't apply to all text (selective use)

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `react-patterns`, `frontend-dev-guidelines`

**Parallelization**:
- **Blocks**: T11
- **Blocked By**: None

**Acceptance Criteria**:
- [ ] React-Bits installed/configured
- [ ] TextReveal component created
- [ ] Works with section headers
- [ ] Reduced motion fallback

**QA Scenarios**:
```
Scenario: Text reveal animation
Tool: Playwright
Steps:
1. Scroll to About section
2. Observe section header animation
3. Screenshot animation state
Expected Result: Text animates in with character stagger
Evidence: .sisyphus/evidence/t3-text-reveal.gif
```

---

- [ ] 4. Install additional libraries

**What to do**:
- Install: `react-tilt`, `react-circular-progressbar`, `embla-carousel-react`
- Add to package.json dependencies
- Verify imports work
- Update lockfile

**Must NOT do**:
- Don't install unused libraries
- Don't update unrelated packages

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `bun-development`

**Parallelization**:
- **Blocks**: T9, T15, T20
- **Blocked By**: None

**Acceptance Criteria**:
- [ ] All packages installed
- [ ] Import statements working
- [ ] Build passes
- [ ] Lockfile updated

**QA Scenarios**:
```
Scenario: Library imports work
Tool: Bash
Steps:
1. Run build command
2. Check for import errors
Expected Result: Build completes successfully
Evidence: .sisyphus/evidence/t4-build-log.txt
```

---

- [ ] 5. Create utility hooks

**What to do**:
- Create `useSmoothScroll.ts` - Lenis integration
- Create `useMagnetic.ts` - magnetic button logic
- Create `useReducedMotion.ts` - accessibility
- Create `useMousePosition.ts` - cursor tracking

**Must NOT do**:
- Don't duplicate existing hook logic
- Don't add dependencies to hooks unnecessarily

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `react-patterns`, `javascript-pro`

**Parallelization**:
- **Blocks**: T7, T10, T25
- **Blocked By**: T1

**Acceptance Criteria**:
- [ ] All 4 hooks created in `src/hooks/`
- [ ] TypeScript types defined
- [ ] JSDoc comments added
- [ ] No ESLint warnings

**QA Scenarios**:
```
Scenario: Hooks work correctly
Tool: TypeScript compiler
Steps:
1. Run tsc --noEmit
2. Check for type errors
Expected Result: Zero type errors
Evidence: .sisyphus/evidence/t5-hooks-types.txt
```

---

### WAVE 2: Core Systems

- [ ] 6. Implement smooth scroll provider

**What to do**:
- Create `SmoothScrollProvider` component
- Wrap App.tsx with provider
- Sync GSAP ScrollTrigger
- Test on mobile devices

**Must NOT do**:
- Don't break existing scroll animations
- Don't disable native scroll completely

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `react-patterns`, `gsap`

**Parallelization**:
- **Blocks**: All scroll-dependent features
- **Blocked By**: T1, T5

**Acceptance Criteria**:
- [ ] Provider wraps entire app
- [ ] GSAP ScrollTrigger works with Lenis
- [ ] Scroll animations still trigger
- [ ] Mobile scroll functional

**QA Scenarios**:
```
Scenario: ScrollTrigger works with Lenis
Tool: Playwright
Steps:
1. Scroll through page
2. Observe GSAP animations
3. Verify triggers fire at correct positions
Expected Result: All animations work as before
Evidence: .sisyphus/evidence/t6-scrolltrigger.mp4
```

---

- [ ] 7. Create magnetic button component

**What to do**:
- Create `MagneticButton.tsx` using useMagnetic hook
- Apply to primary buttons (CTAs, nav)
- Add strength/intensity props
- Test hover states

**Must NOT do**:
- Don't apply to all buttons (selective)
- Don't use on mobile (disable)

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `react-component`, `animation`

**Parallelization**:
- **Blocked By**: T5

**Acceptance Criteria**:
- [ ] Component created
- [ ] Applied to Hero CTAs
- [ ] Mobile fallback (disabled)
- [ ] Smooth 60fps animation

**QA Scenarios**:
```
Scenario: Magnetic effect on hover
Tool: Playwright
Steps:
1. Move cursor near CTA button
2. Observe magnetic pull effect
3. Screenshot hover state
Expected Result: Button pulls toward cursor
Evidence: .sisyphus/evidence/t7-magnetic.mp4
```

---

- [ ] 8. Build scroll progress indicator

**What to do**:
- Create `ScrollProgress.tsx` component
- Position at top of viewport
- Animate width based on scroll
- Add to Navbar

**Must NOT do**:
- Don't show on mobile (too small)
- Don't use heavy calculations

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `react-patterns`

**Parallelization**:
- **Blocked By**: T1

**Acceptance Criteria**:
- [ ] Progress bar visible at top
- [ ] Width reflects scroll position
- [ ] Gradient color (indigo to teal)
- [ ] Hidden on mobile

**QA Scenarios**:
```
Scenario: Progress bar updates
Tool: Playwright
Steps:
1. Scroll to 50% of page
2. Check progress bar width
3. Scroll to bottom
4. Check progress bar at 100%
Expected Result: Width matches scroll %
Evidence: .sisyphus/evidence/t8-progress.png
```

---

- [ ] 9. Create 3D tilt card component

**What to do**:
- Create `TiltCard.tsx` using react-tilt or custom
- Apply to Project cards
- Add glare/sheen effect
- Include perspective transform

**Must NOT do**:
- Don't use on mobile (performance)
- Don't over-tilt (keep subtle)

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `react-component`, `animation`

**Parallelization**:
- **Blocked By**: T4

**Acceptance Criteria**:
- [ ] TiltCard component created
- [ ] Applied to project cards
- [ ] Glare effect working
- [ ] Smooth on mouse leave

**QA Scenarios**:
```
Scenario: Card tilts on hover
Tool: Playwright
Steps:
1. Hover over project card
2. Move mouse across card
3. Screenshot tilt state
Expected Result: Card tilts following cursor
Evidence: .sisyphus/evidence/t9-tilt-card.mp4
```

---

- [ ] 10. Build spotlight/glow system

**What to do**:
- Create `SpotlightEffect.tsx` component
- Use radial-gradient following mouse
- Apply to cards and sections
- Add glow intensity based on proximity

**Must NOT do**:
- Don't use heavy calculations (CSS-based)
- Don't apply to all elements

**Recommended Agent Profile**:
- **Category**: `artistry`
- **Skills**: `frontend-design`, `css`

**Parallelization**:
- **Blocked By**: T5

**Acceptance Criteria**:
- [ ] Spotlight follows cursor
- [ ] Applied to About cards
- [ ] Glow on interactive elements
- [ ] Performance 60fps

**QA Scenarios**:
```
Scenario: Spotlight effect visible
Tool: Playwright
Steps:
1. Navigate to About section
2. Move cursor over cards
3. Screenshot spotlight effect
Expected Result: Radial glow follows cursor
Evidence: .sisyphus/evidence/t10-spotlight.mp4
```

---

### WAVE 3: Visual Effects

- [ ] 11. Text animation components (React-Bits)

**What to do**:
- Implement character-by-character reveals
- Add scramble effect for tech labels
- Apply to section headers
- Create TextReveal, ScrambleText components

**Must NOT do**:
- Don't animate all text (just headers)
- Don't break accessibility

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `react-patterns`, `animation`

**Parallelization**:
- **Blocked By**: T3

**Acceptance Criteria**:
- [ ] TextReveal component working
- [ ] Applied to 6+ section headers
- [ ] Stagger animation smooth
- [ ] Reduced motion support

**QA Scenarios**:
```
Scenario: Text reveal on scroll
Tool: Playwright
Steps:
1. Scroll to Services section
2. Watch header animate
3. Screenshot animation
Expected Result: Header text reveals character by character
Evidence: .sisyphus/evidence/t11-text-reveal.gif
```

---

- [ ] 12. Tech stack orbital showcase

**What to do**:
- Create `TechOrbit.tsx` component
- Arrange tech icons in circular path
- Animate orbit movement
- Pause on hover, show details

**Must NOT do**:
- Don't use all skills (select top 8-10)
- Don't make orbit too fast

**Recommended Agent Profile**:
- **Category**: `artistry`
- **Skills**: `react-patterns`, `animation`, `framer-motion`

**Parallelization**:
- **Blocked By**: T2

**Acceptance Criteria**:
- [ ] Orbital animation created
- [ ] 8-10 icons orbiting
- [ ] Hover shows skill details
- [ ] Smooth 60fps orbit

**QA Scenarios**:
```
Scenario: Orbital animation visible
Tool: Playwright
Steps:
1. Scroll to About skills section
2. Observe orbital animation
3. Hover over orbiting icon
Expected Result: Icons orbit smoothly, pause on hover
Evidence: .sisyphus/evidence/t12-orbit.mp4
```

---

- [ ] 13. Enhanced timeline with connections

**What to do**:
- Redesign Experience section timeline
- Add vertical line connecting items
- Animate line drawing on scroll
- Pulse effect at nodes

**Must NOT do**:
- Don't break existing content
- Don't make timeline too busy

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `react-patterns`, `gsap`

**Parallelization**:
- **Blocked By**: T6

**Acceptance Criteria**:
- [ ] Vertical timeline line added
- [ ] Line draws as user scrolls
- [ ] Nodes pulse at intersection
- [ ] Responsive layout maintained

**QA Scenarios**:
```
Scenario: Timeline animates on scroll
Tool: Playwright
Steps:
1. Scroll through Experience section
2. Watch timeline line draw
3. Verify node animations
Expected Result: Line draws progressively, nodes pulse
Evidence: .sisyphus/evidence/t13-timeline.mp4
```

---

- [ ] 14. Particle background system

**What to do**:
- Create `ParticleBackground.tsx`
- Generate 30-50 particles
- Animate floating movement
- Connect nearby particles with lines

**Must NOT do**:
- Don't use on mobile (performance)
- Don't exceed 50 particles

**Recommended Agent Profile**:
- **Category**: `artistry`
- **Skills**: `react-patterns`, `canvas`, `animation`

**Parallelization**:
- **Blocked By**: None

**Acceptance Criteria**:
- [ ] Particle system created
- [ ] Applied to Hero section
- [ ] Particles float smoothly
- [ ] Connections visible

**QA Scenarios**:
```
Scenario: Particles visible
Tool: Playwright
Steps:
1. Navigate to hero
2. Screenshot with particles
3. Verify movement
Expected Result: Floating particles visible
Evidence: .sisyphus/evidence/t14-particles.png
```

---

- [ ] 15. Skills radar visualization

**What to do**:
- Create `SkillRadar.tsx` component
- Use circular progress bars or radar chart
- Show proficiency levels
- Animate on scroll

**Must NOT do**:
- Don't use for all skills (categories)
- Don't clutter the section

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `react-component`, `charts`

**Parallelization**:
- **Blocked By**: T4

**Acceptance Criteria**:
- [ ] Radar/progress visualization created
- [ ] Shows 4-6 skill categories
- [ ] Animates on scroll
- [ ] Legend included

**QA Scenarios**:
```
Scenario: Skills visualization animates
Tool: Playwright
Steps:
1. Scroll to skills section
2. Watch radar chart animate
3. Screenshot completed state
Expected Result: Chart animates in with values
Evidence: .sisyphus/evidence/t15-radar.mp4
```

---

- [ ] 16. Animated background grid

**What to do**:
- Create animated CSS grid pattern
- Add subtle pulse animation
- Connect intersecting points
- Use in multiple sections

**Must NOT do**:
- Don't use heavy animations
- Don't overpower content

**Recommended Agent Profile**:
- **Category**: `artistry`
- **Skills**: `css`, `animation`

**Parallelization**:
- **Blocked By**: None

**Acceptance Criteria**:
- [ ] Animated grid CSS created
- [ ] Applied to Projects section
- [ ] Subtle pulsing visible
- [ ] No performance issues

**QA Scenarios**:
```
Scenario: Grid animation visible
Tool: Playwright
Steps:
1. Navigate to Projects section
2. Screenshot grid background
3. Verify animation
Expected Result: Subtle grid pulse visible
Evidence: .sisyphus/evidence/t16-grid.gif
```

---

- [ ] 17. Parallax scroll effects

**What to do**:
- Add parallax to background shapes
- Create depth layers
- Use GSAP ScrollTrigger
- Apply to Hero and About sections

**Must NOT do**:
- Don't overdo parallax (subtle)
- Don't cause motion sickness

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `gsap`, `animation`

**Parallelization**:
- **Blocked By**: T6

**Acceptance Criteria**:
- [ ] Parallax applied to 3+ elements
- [ ] Background shapes move slower
- [ ] Smooth 60fps
- [ ] Reduced motion fallback

**QA Scenarios**:
```
Scenario: Parallax effect visible
Tool: Playwright
Steps:
1. Scroll slowly through page
2. Observe depth in backgrounds
3. Screenshot parallax state
Expected Result: Layers move at different speeds
Evidence: .sisyphus/evidence/t17-parallax.mp4
```

---

### WAVE 4: Advanced Features

- [ ] 18. Three.js hero elements

**What to do**:
- Create 3D floating shapes in Hero
- Add interactive rotation
- Use glass material effect
- Integrate with existing design

**Must NOT do**:
- Don't make it too complex (keep subtle)
- Don't impact load time significantly

**Recommended Agent Profile**:
- **Category**: `artistry`
- **Skills**: `threejs-skills`, `react-nextjs-development`

**Parallelization**:
- **Blocked By**: T2

**Acceptance Criteria**:
- [ ] 3D shapes visible in Hero
- [ ] Shapes float and rotate
- [ ] Responsive to window size
- [ ] Loads within 2 seconds

**QA Scenarios**:
```
Scenario: 3D elements render
Tool: Playwright
Steps:
1. Navigate to hero
2. Wait for 3D canvas
3. Screenshot 3D elements
Expected Result: Floating 3D shapes visible
Evidence: .sisyphus/evidence/t18-three-hero.png
```

---

- [ ] 19. GitHub activity integration

**What to do**:
- Create `GitHubActivity.tsx` component
- Fetch contribution data
- Display heatmap graph
- Show recent repositories

**Must NOT do**:
- Don't use private API calls
- Don't cache sensitive data

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `api-patterns`, `react-patterns`

**Parallelization**:
- **Blocked By**: None

**Acceptance Criteria**:
- [ ] Component fetches GitHub data
- [ ] Contribution graph displayed
- [ ] Recent repos shown
- [ ] Loading state handled

**QA Scenarios**:
```
Scenario: GitHub data loads
Tool: Playwright
Steps:
1. Scroll to new GitHub section
2. Wait for data load
3. Verify contribution graph visible
Expected Result: GitHub activity displayed
Evidence: .sisyphus/evidence/t19-github.png
```

---

- [ ] 20. Testimonials carousel

**What to do**:
- Create `Testimonials.tsx` section
- Use Embla Carousel
- 3-5 testimonial cards
- Auto-play with manual controls

**Must NOT do**:
- Don't auto-play if user prefers reduced motion
- Don't add testimonials without content

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `react-component`, `carousel`

**Parallelization**:
- **Blocked By**: T4

**Acceptance Criteria**:
- [ ] Carousel component created
- [ ] Auto-play enabled
- [ ] Navigation dots/arrows
- [ ] Touch swipe on mobile

**QA Scenarios**:
```
Scenario: Carousel navigates
Tool: Playwright
Steps:
1. Scroll to testimonials
2. Click next arrow
3. Swipe on mobile
Expected Result: Cards slide smoothly
Evidence: .sisyphus/evidence/t20-carousel.mp4
```

---

- [ ] 21. Typewriter code effect

**What to do**:
- Enhance existing typewriter in Hero
- Add syntax highlighting
- Animate code snippet typing
- Use react-syntax-highlighter

**Must NOT do**:
- Don't use real passwords/secrets
- Don't make it too fast

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `react-patterns`

**Parallelization**:
- **Blocked By**: None

**Acceptance Criteria**:
- [ ] Syntax highlighting added
- [ ] Code typing animated
- [ ] Looks realistic
- [ ] Smooth transitions

**QA Scenarios**:
```
Scenario: Code typing animates
Tool: Playwright
Steps:
1. Watch Hero section
2. Observe typewriter with code
3. Verify syntax highlighting
Expected Result: Code types with colors
Evidence: .sisyphus/evidence/t21-code-type.gif
```

---

- [ ] 22. Particle text transitions

**What to do**:
- Create text that dissolves to particles
- Particles reform into new text
- Use on section transitions
- Canvas-based animation

**Must NOT do**:
- Don't use on all text (just accents)
- Don't cause performance issues

**Recommended Agent Profile**:
- **Category**: `artistry`
- **Skills**: `canvas`, `animation`, `react-patterns`

**Parallelization**:
- **Blocked By**: T14

**Acceptance Criteria**:
- [ ] Particle text effect created
- [ ] Dissolves and reforms
- [ ] Applied to 1-2 elements
- [ ] 60fps performance

**QA Scenarios**:
```
Scenario: Text particles animate
Tool: Playwright
Steps:
1. Scroll to trigger transition
2. Watch text dissolve
3. Verify reformation
Expected Result: Smooth particle transition
Evidence: .sisyphus/evidence/t22-particles-text.mp4
```

---

- [ ] 23. WebGL distortion effects

**What to do**:
- Create liquid distortion on project images
- RGB split effect on scroll
- Use custom shaders
- Apply to project cards

**Must NOT do**:
- Don't use on mobile
- Don't over-distort

**Recommended Agent Profile**:
- **Category**: `artistry`
- **Skills**: `webgl`, `shaders`, `react-patterns`

**Parallelization**:
- **Blocked By**: T18

**Acceptance Criteria**:
- [ ] Distortion shader created
- [ ] Applied to project images
- [ ] Hover triggers effect
- [ ] Performance acceptable

**QA Scenarios**:
```
Scenario: Distortion effect works
Tool: Playwright
Steps:
1. Hover over project image
2. Watch distortion
3. Screenshot effect
Expected Result: Liquid distortion visible
Evidence: .sisyphus/evidence/t23-distortion.mp4
```

---

### WAVE 5: Polish & Integration

- [ ] 24. Preloader animation

**What to do**:
- Create `Preloader.tsx` component
- Logo reveal animation
- Progress bar with tech puns
- Smooth fade to content

**Must NOT do**:
- Don't make it too long (< 3s)
- Don't block interaction

**Recommended Agent Profile**:
- **Category**: `quick`
- **Skills**: `react-patterns`, `animation`

**Parallelization**:
- **Blocked By**: None

**Acceptance Criteria**:
- [ ] Preloader shows on load
- [ ] Logo animates
- [ ] Progress bar accurate
- [ ] Smooth transition out

**QA Scenarios**:
```
Scenario: Preloader displays
Tool: Playwright
Steps:
1. Hard refresh page
2. Watch preloader
3. Measure duration
Expected Result: Preloader shows, then fades
Evidence: .sisyphus/evidence/t24-preloader.mp4
```

---

- [ ] 25. Reduced motion support

**What to do**:
- Add `prefers-reduced-motion` checks
- Create fallback static versions
- Apply to all animations
- Test with OS setting

**Must NOT do**:
- Don't skip this (accessibility required)
- Don't just disable (provide alternatives)

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `accessibility`, `css`, `react-patterns`

**Parallelization**:
- **Blocked By**: T5

**Acceptance Criteria**:
- [ ] useReducedMotion hook working
- [ ] All animations have fallback
- [ ] Tested with OS setting
- [ ] No motion when disabled

**QA Scenarios**:
```
Scenario: Reduced motion respected
Tool: Playwright + OS settings
Steps:
1. Enable reduced motion in OS
2. Refresh page
3. Verify animations disabled
Expected Result: Static versions shown
Evidence: .sisyphus/evidence/t25-reduced-motion.png
```

---

- [ ] 26. Integration testing

**What to do**:
- Test all features together
- Verify no conflicts
- Check console for errors
- Cross-browser testing

**Must NOT do**:
- Don't skip testing
- Don't ignore console errors

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `testing`, `debugging`

**Parallelization**:
- **Blocked By**: All previous tasks

**Acceptance Criteria**:
- [ ] All features work together
- [ ] No console errors
- [ ] Chrome, Firefox, Safari tested
- [ ] Mobile tested

**QA Scenarios**:
```
Scenario: Full integration test
Tool: Playwright + Manual
Steps:
1. Complete full page flow
2. Check console
3. Test all interactions
Expected Result: Everything works, no errors
Evidence: .sisyphus/evidence/t26-integration.txt
```

---

- [ ] 27. Performance optimization

**What to do**:
- Audit with Lighthouse
- Lazy load heavy components
- Optimize images
- Code split where possible

**Must NOT do**:
- Don't sacrifice functionality
- Don't skip critical features

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `performance`, `optimization`

**Parallelization**:
- **Blocked By**: T26

**Acceptance Criteria**:
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] Bundle size documented

**QA Scenarios**:
```
Scenario: Performance acceptable
Tool: Lighthouse
Steps:
1. Run Lighthouse audit
2. Check all metrics
3. Verify scores
Expected Result: All metrics pass
Evidence: .sisyphus/evidence/t27-lighthouse.html
```

---

- [ ] 28. Final verification

**What to do**:
- Final review of all enhancements
- Check against original request
- Verify completeness
- Create summary document

**Must NOT do**:
- Don't declare done prematurely
- Don't skip verification

**Recommended Agent Profile**:
- **Category**: `unspecified-high`
- **Skills**: `review`, `documentation`

**Parallelization**:
- **Blocked By**: All tasks

**Acceptance Criteria**:
- [ ] All 20+ features implemented
- [ ] User requirements met
- [ ] Documentation complete
- [ ] Ready for deployment

**QA Scenarios**:
```
Scenario: Final verification
Tool: Manual review
Steps:
1. Review all features
2. Check requirements
3. Verify completeness
Expected Result: Everything complete
Evidence: .sisyphus/evidence/t28-final-check.md
```

---

### FINAL VERIFICATION WAVE

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.

- [ ] F1. **Plan Compliance Audit** — `oracle`

Read the plan end-to-end. For each task:
- Verify implementation exists (check files)
- Verify all "Must NOT Have" items absent
- Check evidence files exist
- Compare deliverables against plan

**Expected Output**:
```
Must Have [25/25] ✓
Must NOT Have [0/0] ✓
Tasks [28/28] ✓
Evidence [28/28] ✓
VERDICT: APPROVE
```

- [ ] F2. **Code Quality Review** — `unspecified-high`

Review all changed files for:
- TypeScript errors (`tsc --noEmit`)
- ESLint warnings
- No `any` types
- No console.log in production
- Proper component structure

**Expected Output**:
```
Build [PASS]
Lint [PASS]
TypeScript [0 errors]
Console logs [CLEAN]
VERDICT: APPROVE
```

- [ ] F3. **Real Manual QA** — `unspecified-high` + `playwright`

Execute EVERY QA scenario from EVERY task:
- Follow exact steps
- Capture evidence
- Test on Chrome, Firefox, Safari
- Test mobile (iOS Safari, Android Chrome)

**Expected Output**:
```
Scenarios [28/28 pass]
Desktop browsers [3/3]
Mobile browsers [2/2]
VERDICT: APPROVE
```

- [ ] F4. **Scope Fidelity Check** — `deep`

For each task:
- Read "What to do" vs actual implementation
- Verify 1:1 matching
- Check no scope creep
- Verify "Must NOT do" compliance

**Expected Output**:
```
Tasks [28/28 compliant]
Scope creep [NONE]
Missing features [NONE]
VERDICT: APPROVE
```

---

## Commit Strategy

### Phase Commits
- **Wave 1**: `chore(deps): add animation libraries`
- **Wave 2**: `feat(core): add smooth scroll and effects`
- **Wave 3**: `feat(visual): add text animations and particles`
- **Wave 4**: `feat(advanced): add 3D and interactive elements`
- **Wave 5**: `feat(polish): add preloader and accessibility`
- **Final**: `feat(complete): portfolio enhancements`

### Pre-commit Checks
```bash
# For each commit:
npm run lint
npm run build
tsc --noEmit
```

---

## Success Criteria

### Verification Commands
```bash
# Build test
npm run build
# Expected: Build completes with 0 errors

# TypeScript check
npx tsc --noEmit
# Expected: 0 errors, 0 warnings

# Performance audit
npx lighthouse http://localhost:4173 --preset=desktop
# Expected: Score > 90, LCP < 2.5s
```

### Final Checklist
- [ ] All 28 tasks complete
- [ ] All 4 final checks APPROVED
- [ ] Lighthouse score > 90
- [ ] TypeScript 0 errors
- [ ] Mobile responsive
- [ ] Accessibility compliant
- [ ] All animations working
- [ ] Reduced motion fallback
- [ ] Documentation complete
- [ ] User sign-off obtained

---

## Implementation Notes

### Performance Targets
- **LCP**: < 2.5 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1
- **Bundle Size**: < 500KB gzipped (including all libraries)

### Accessibility Requirements
- All animations respect `prefers-reduced-motion`
- Focus states visible
- Keyboard navigation works
- Color contrast WCAG AA
- Screen reader compatible

### Mobile Considerations
- 3D effects disabled on mobile
- Touch gestures work
- Performance optimized
- Layout responsive

### Browser Support
- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

---

## Plan Generated: portfolio-complete-enhancement

**Key Decisions Made**:
- All 20+ enhancements from analysis approved
- Executed in 5 waves for parallel processing
- Each task has detailed QA scenarios
- Final verification requires 4-agent approval

**Scope**:
- **IN**: All 28 tasks across 5 waves
- **OUT**: Major content changes, new sections beyond planned

**Guardrails Applied**:
- Performance budgets enforced
- Accessibility requirements mandatory
- Mobile optimization required
- Reduced motion support

**Auto-Resolved**:
- Library versions: Latest stable
- Animation timing: 60fps targets
- Code organization: Feature-based

**Defaults Applied**:
- Testing: Agent-executed QA per task
- Evidence: Screenshots/videos per feature
- Commit style: Conventional commits

---

## Next Steps

To execute this plan:

1. **Review the plan** at `.sisyphus/plans/portfolio-complete-enhancement.md`
2. **Run `/start-work`** to begin execution with Sisyphus
3. **Monitor progress** via todo tracking
4. **Review evidence** as tasks complete
5. **Approve final verification** when all 4 checks pass

This is a **large undertaking** (~28 tasks across 5 waves). Estimated completion: 2-3 focused work sessions.

**Ready to begin?** Say "start work" and I'll launch Sisyphus to execute this plan!

