// Style reminder: smaller squarer presentation cards, thick rounded handwritten display type, centered content, left/right deck controls, and only purposeful supporting copy.

import { useEffect, useMemo, useState, type CSSProperties, type MouseEvent } from "react";
import { ArrowLeft, ArrowRight, Check, Heart, X } from "lucide-react";
import { birthdayContent, type MovieQuiz, type QuizOption } from "@/data/birthday";

const totalSlides = 11;
const rainbowPalette = ["#ff3b30", "#ff9500", "#ffcc00", "#34c759", "#00c7be", "#007aff", "#5856d6", "#af52de", "#ff2d55"];
const confettiPieces = Array.from({ length: 30 }, (_, index) => ({
  left: `${(index * 37 + 7) % 100}%`,
  top: `${(index * 61 + 5) % 100}%`,
  rotate: `${(index * 29) % 360}deg`,
  size: `${6 + (index % 3) * 2}px`,
  color: rainbowPalette[index % rainbowPalette.length],
  shape: index % 4 === 0 ? "circle" : "star",
  delay: `${(index % 8) * 0.16}s`,
}));

const createBurstPieces = () => Array.from({ length: 112 }, () => {
  const angle = Math.random() * Math.PI * 2;
  const distance = 150 + Math.random() * 360;
  return {
    left: `${(Math.random() * 100).toFixed(2)}%`,
    top: `${(Math.random() * 100).toFixed(2)}%`,
    x: `${(Math.cos(angle) * distance).toFixed(1)}px`,
    y: `${(Math.sin(angle) * distance).toFixed(1)}px`,
    gravity: `${(200 + Math.random() * 360).toFixed(1)}px`,
    rotate: `${Math.round(360 + Math.random() * 900)}deg`,
    size: `${5 + Math.round(Math.random() * 8)}px`,
    color: rainbowPalette[Math.floor(Math.random() * rainbowPalette.length)],
    shape: Math.random() > 0.25 ? "star" : "circle",
    delay: `${(Math.random() * 0.32).toFixed(2)}s`,
    duration: `${(2.35 + Math.random() * 0.9).toFixed(2)}s`,
  };
});

const createRainPieces = () => Array.from({ length: 140 }, () => ({
  left: `${Math.round(Math.random() * 104 - 2)}%`,
  top: `${(-25 + Math.random() * 28).toFixed(2)}vh`,
  size: `${5 + Math.round(Math.random() * 5)}px`,
  color: rainbowPalette[Math.floor(Math.random() * rainbowPalette.length)],
  delay: `${(0.75 + Math.random() * 1.15).toFixed(2)}s`,
  duration: `${(2.95 + Math.random() * 0.8).toFixed(2)}s`,
  drift: `${Math.round(Math.random() * 220 - 110)}px`,
  rotate: `${Math.round(360 + Math.random() * 900)}deg`,
  gravity: `${Math.round(8 + Math.random() * 20)}vh`,
  shape: Math.random() > 0.25 ? "star" : "circle",
}));

const petalPalettes = {
  light: ["#7f1f2d", "#55212a", "#8e5c54", "#9d4b55"],
  dark: ["#f3dfcc", "#f0c1b8", "#e7c0b3", "#fff0e3"],
} as const;

const createPetalPieces = (count: number, tone: "light" | "dark") => Array.from({ length: count }, () => {
  const zone = Math.random();
  let left: string;
  let top: string;

  if (zone < 0.42) {
    left = `${(Math.random() * 20 + 2).toFixed(2)}%`;
    top = `${(Math.random() * 100).toFixed(2)}%`;
  } else if (zone < 0.84) {
    left = `${(Math.random() * 20 + 78).toFixed(2)}%`;
    top = `${(Math.random() * 100).toFixed(2)}%`;
  } else if (zone < 0.92) {
    left = `${(Math.random() * 100).toFixed(2)}%`;
    top = `${(Math.random() * 18).toFixed(2)}%`;
  } else {
    left = `${(Math.random() * 100).toFixed(2)}%`;
    top = `${(Math.random() * 18 + 82).toFixed(2)}%`;
  }

  return {
    left,
    top,
    size: `${(4 + Math.random() * 5).toFixed(1)}px`,
    opacity: (0.42 + Math.random() * 0.28).toFixed(2),
    rotate: `${Math.round(Math.random() * 360)}deg`,
    drift: `${Math.round(Math.random() * 150 - 75)}px`,
    drop: `${Math.round(90 + Math.random() * 210)}px`,
    duration: `${(12 + Math.random() * 9).toFixed(2)}s`,
    delay: `${(-Math.random() * 18).toFixed(2)}s`,
    color: petalPalettes[tone][Math.floor(Math.random() * petalPalettes[tone].length)],
    kind: ["soft", "pointed", "folded"][Math.floor(Math.random() * 3)],
  };
});

function BotanicalFrame({ leavesOnly = false }: { leavesOnly?: boolean }) {
  return (
    <svg className={`botanical-frame ${leavesOnly ? "botanical-frame-leaves-only" : ""}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <g className="botanical-frame-corner botanical-frame-tl">
        <path d="M8 31 C7.8 22 9.1 14 8 8 C15.4 7.7 23.7 9.1 31 8" />
        <g className="botanical-frame-leaves">
          <path d="M8 21 C12 17 16 18 17 22 C13 24 10 23 8 21Z" />
          <path d="M17 8 C19 5 23 5 25 8 C22 10 19 10 17 8Z" />
          <path d="M8 27 C11 24 14 25 14 28 C11 30 9 29 8 27Z" />
          <path d="M12 8 C14 11 17 12 19 10 C18 7 15 7 12 8Z" />
          <path d="M8 15 C5 13 4 10 6 9 C9 10 10 12 8 15Z" />
        </g>
      </g>
      <g className="botanical-frame-corner botanical-frame-tr">
        <path d="M69 8 C76.3 9.1 84.6 7.7 92 8 C90.9 14 92.2 22 92 31" />
        <g className="botanical-frame-leaves">
          <path d="M92 21 C88 17 84 18 83 22 C87 24 90 23 92 21Z" />
          <path d="M83 8 C81 5 77 5 75 8 C78 10 81 10 83 8Z" />
          <path d="M92 27 C89 24 86 25 86 28 C89 30 91 29 92 27Z" />
          <path d="M88 8 C86 11 83 12 81 10 C82 7 85 7 88 8Z" />
          <path d="M92 15 C95 13 96 10 94 9 C91 10 90 12 92 15Z" />
        </g>
      </g>
      <g className="botanical-frame-corner botanical-frame-bl">
        <path d="M8 69 C7.8 78 9.1 86 8 92 C15.4 92.3 23.7 90.9 31 92" />
        <g className="botanical-frame-leaves">
          <path d="M8 79 C12 83 16 82 17 78 C13 76 10 77 8 79Z" />
          <path d="M17 92 C19 95 23 95 25 92 C22 90 19 90 17 92Z" />
          <path d="M8 73 C11 76 14 75 14 72 C11 70 9 71 8 73Z" />
          <path d="M12 92 C14 89 17 88 19 90 C18 93 15 94 12 92Z" />
          <path d="M8 85 C5 87 4 90 6 91 C9 90 10 88 8 85Z" />
        </g>
      </g>
      <g className="botanical-frame-corner botanical-frame-br">
        <path d="M69 92 C76.3 90.9 84.6 92.3 92 92 C90.9 86 92.2 78 92 69" />
        <g className="botanical-frame-leaves">
          <path d="M92 79 C88 83 84 82 83 78 C87 76 90 77 92 79Z" />
          <path d="M83 92 C81 95 77 95 75 92 C78 90 81 90 83 92Z" />
          <path d="M92 73 C89 76 86 75 86 72 C89 70 91 71 92 73Z" />
          <path d="M88 92 C86 89 83 88 81 90 C82 93 85 94 88 92Z" />
          <path d="M92 85 C95 87 96 90 94 91 C91 90 90 88 92 85Z" />
        </g>
      </g>
    </svg>
  );
}

function BotanicalOrnament({ richer = false }: { richer?: boolean }) {
  return (
    <svg className={`botanical-ornament ${richer ? "botanical-ornament-rich" : ""}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <g className="botanical-top-left">
        <path d="M-2 30 C 5 22, 9 11, 24 -2" />
        <path d="M5 22 C 2 16, 6 12, 12 13 C 11 18, 9 21, 5 22Z" />
        <path d="M12 14 C 10 8, 15 4, 21 5 C 20 10, 17 13, 12 14Z" />
        <path d="M3 26 C 11 23, 14 25, 15 31 C 9 32, 5 30, 3 26Z" />
      </g>
      <g className="botanical-top-right">
        <path d="M101 1 C 94 6, 92 14, 98 25" />
        <path d="M96 10 C 90 9, 89 5, 93 2 C 97 3, 98 6, 96 10Z" />
        <path d="M95 17 C 99 13, 103 15, 103 20 C 99 21, 97 20, 95 17Z" />
      </g>
      <g className="botanical-bottom-left">
        <path d="M-2 82 C 8 87, 14 94, 27 102" />
        <path d="M8 88 C 5 82, 8 79, 14 80 C 14 85, 12 88, 8 88Z" />
        <path d="M16 94 C 16 88, 21 86, 25 90 C 23 94, 20 96, 16 94Z" />
      </g>
      <g className="botanical-bottom-right">
        <path d="M101 101 C 93 94, 92 85, 85 76 C 80 69, 79 62, 82 54" />
        <path d="M94 95 C 86 91, 80 92, 77 98" />
        <path d="M91 90 C 98 87, 101 89, 103 94" />
        <path d="M87 81 C 80 78, 77 80, 76 85" />
        <path d="M84 73 C 90 69, 94 71, 95 76" />
        <path d="M82 62 C 76 58, 72 60, 72 65" />
        <path d="M82 56 C 87 51, 91 52, 92 57" />
        <path d="M94 97 C 92 89, 96 84, 101 83" />
        <path d="M87 81 C 91 77, 96 78, 98 82" />
        <path d="M84 72 C 80 68, 75 69, 73 73" />
        <circle cx="84" cy="53" r="4.2" />
        <circle cx="84" cy="53" r="1.3" />
        <path d="M80 53 C 75 49, 77 45, 82 44 C 84 47, 83 50, 80 53Z" />
        <path d="M86 50 C 86 45, 90 43, 94 46 C 92 50, 89 51, 86 50Z" />
        <path d="M87 57 C 91 54, 95 56, 95 60 C 91 61, 88 60, 87 57Z" />
      </g>
      {richer ? (
        <g className="botanical-rich">
          <path d="M70 101 C 72 93, 75 84, 80 76 C 85 68, 92 63, 100 59" />
          <path d="M75 89 C 68 86, 66 80, 71 77 C 76 80, 78 84, 75 89Z" />
          <path d="M80 80 C 86 74, 92 75, 94 81 C 88 84, 84 83, 80 80Z" />
          <path d="M84 71 C 78 67, 78 61, 83 58 C 88 62, 88 67, 84 71Z" />
          <path d="M88 66 C 94 61, 99 63, 100 69 C 95 71, 91 70, 88 66Z" />
          <circle cx="88" cy="56" r="3.8" />
          <path d="M88 52 C 83 49, 84 45, 88 43 C 91 46, 91 49, 88 52Z" />
          <path d="M91 54 C 94 48, 99 48, 101 52 C 98 56, 94 57, 91 54Z" />
          <path d="M91 58 C 96 57, 100 60, 99 64 C 95 64, 92 62, 91 58Z" />
          <path d="M85 59 C 80 62, 76 60, 76 56 C 80 54, 83 55, 85 59Z" />
          <path d="M100 -3 C 96 6, 94 16, 98 27" />
          <path d="M96 8 C 90 5, 90 1, 94 -2 C 98 1, 99 5, 96 8Z" />
          <path d="M96 16 C 101 12, 104 14, 104 19 C 100 21, 97 20, 96 16Z" />
          <path d="M3 101 C 8 96, 13 91, 16 83" />
          <path d="M9 95 C 3 91, 2 86, 7 83 C 11 87, 12 91, 9 95Z" />
          <path d="M13 88 C 18 83, 23 85, 24 90 C 20 92, 16 91, 13 88Z" />
          <circle cx="17" cy="80" r="3" />
          <path d="M17 77 C 12 74, 13 70, 17 69 C 20 72, 20 75, 17 77Z" />
          <path d="M20 79 C 23 74, 27 75, 29 78 C 27 82, 23 82, 20 79Z" />
        </g>
      ) : null}
    </svg>
  );
}

function AmbientParticles({ tone }: { tone: string }) {
  return (
    <div className={`ambient-particles ambient-${tone}`} aria-hidden="true">
      <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
    </div>
  );
}

function FloatingPetals({ count = 18, tone = "light" }: { count?: number; tone?: "light" | "dark" }) {
  const petals = useMemo(() => createPetalPieces(count, tone), [count, tone]);

  return (
    <div className="floating-petals" aria-hidden="true">
      {petals.map((petal, index) => (
        <span
          className={`floating-petal petal-${petal.kind}`}
          key={index}
          style={{
            backgroundColor: petal.color,
            color: petal.color,
            left: petal.left,
            top: petal.top,
            "--petal-size": petal.size,
            "--petal-opacity": petal.opacity,
            "--petal-rotate": petal.rotate,
            "--petal-drift": petal.drift,
            "--petal-drop": petal.drop,
            "--petal-duration": petal.duration,
            "--petal-delay": petal.delay,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

function NextButton({ onClick, disabled = false }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button className="button button-primary next-button" onClick={onClick} disabled={disabled}>
      next <ArrowRight size={16} />
    </button>
  );
}

function DeckControls({ onPrevious, onNext, previousDisabled, nextDisabled }: { onPrevious: () => void; onNext: () => void; previousDisabled: boolean; nextDisabled: boolean }) {
  return (
    <nav className="deck-controls" aria-label="Presentation navigation">
      <button className="deck-button" onClick={onPrevious} disabled={previousDisabled}>
        <ArrowLeft size={16} /> prev
      </button>
      <button className="deck-button deck-button-next" onClick={onNext} disabled={nextDisabled}>
        next <ArrowRight size={16} />
      </button>
    </nav>
  );
}

function QuizModal({
  movie,
  selectedOption,
  feedback,
  onSelect,
  onClose,
}: {
  movie: MovieQuiz;
  selectedOption: string | null;
  feedback: string;
  onSelect: (option: QuizOption) => void;
  onClose: () => void;
}) {
  const isCorrect = selectedOption === movie.correctId;

  return (
    <div className="quiz-backdrop" role="dialog" aria-modal="true" aria-labelledby="quiz-title">
      <div className="quiz-modal">
        <button className="icon-button quiz-close" onClick={onClose} aria-label="Close quiz">
          <X size={18} strokeWidth={1.7} />
        </button>
        <h3 id="quiz-title">Guess the character I&apos;m thinking of</h3>
        <p className="quiz-question">{movie.statement}</p>
        <div className="quiz-options">
          {movie.options.map((option) => {
            const isSelected = selectedOption === option.id;
            return (
              <button
                key={option.id}
                className={`quiz-option ${isSelected ? "is-selected" : ""} ${isSelected && option.id === movie.correctId ? "is-correct" : ""}`}
                onClick={() => onSelect(option)}
                aria-pressed={isSelected}
              >
                <span className="quiz-option-image">
                  <img src={option.image} alt="" />
                </span>
                <span>{option.name}</span>
              </button>
            );
          })}
        </div>
        <div className={`quiz-feedback ${isCorrect ? "is-correct" : ""}`} aria-live="polite">
          {feedback}
        </div>
        {isCorrect ? <NextButton onClick={onClose} /> : null}
      </div>
    </div>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [transitionFrom, setTransitionFrom] = useState<number | null>(null);
  const [completedMovies, setCompletedMovies] = useState<string[]>([]);
  const [activeQuiz, setActiveQuiz] = useState<MovieQuiz | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const [burstKey, setBurstKey] = useState(0);
  const [burstPieces, setBurstPieces] = useState(() => createBurstPieces());
  const [rainPieces, setRainPieces] = useState(() => createRainPieces());
  const [dontClickCount, setDontClickCount] = useState(0);
  const allMoviesComplete = completedMovies.length === birthdayContent.movies.length;

  const nextSlide = () => {
    if (slide === 2) return;
    if (slide === 4 && !allMoviesComplete) return;
    setTransitionFrom(slide);
    setDirection("next");
    setSlide((current) => Math.min(totalSlides - 1, current + 1));
  };

  const previousSlide = () => {
    setTransitionFrom(slide);
    setDirection("previous");
    setSlide((current) => {
      const next = Math.max(0, current - 1);
      if (next === 0 && current !== 0) triggerCelebration();
      return next;
    });
  };

  const triggerCelebration = () => {
    setBurstPieces(createBurstPieces());
    setRainPieces(createRainPieces());
    setBurstKey((current) => current + 1);
  };

  const handleCardClick = () => {
    if (slide === 2 || slide === totalSlides - 1 || (slide === 4 && !allMoviesComplete)) return;
    if (slide === 0) triggerCelebration();
    nextSlide();
  };

  const handleDontClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (dontClickCount >= 3) {
      setDontClickCount(0);
      setTransitionFrom(slide);
      setDirection("next");
      setSlide(3);
      return;
    }
    setDontClickCount((current) => current + 1);
  };

  useEffect(() => {
    setBurstPieces(createBurstPieces());
    setRainPieces(createRainPieces());
    setBurstKey(1);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (activeQuiz) {
        if (event.key === "Escape") setActiveQuiz(null);
        return;
      }
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") previousSlide();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const openQuiz = (movie: MovieQuiz) => {
    setActiveQuiz(movie);
    setSelectedOption(null);
    setFeedback("");
  };

  const chooseOption = (option: QuizOption) => {
    setSelectedOption(option.id);
    if (option.id === activeQuiz?.correctId) {
      setCompletedMovies((current) => Array.from(new Set([...current, activeQuiz.id])));
      setFeedback("u got it!!");
    } else {
      setFeedback("bahati mbaya");
    }
  };

  const deckSlideClass = (index: number, className: string) => [
    className,
    "deck-card",
    slide === index ? "is-active" : "",
    transitionFrom === index ? "is-exiting" : "",
    index < slide ? "is-behind" : index > slide ? "is-upcoming" : "",
  ].filter(Boolean).join(" ");

  return (
    <div className="birthday-app">
      <main className="slide-viewport">
        <div className={`slide-track deck-direction-${direction} ${transitionFrom !== null ? "is-transitioning" : ""}`}>
          <section className={deckSlideClass(0, "slide slide-hero")} aria-label="Happy Birthday Clara">
            <div className="confetti-layer" aria-hidden="true">
              {confettiPieces.map((piece, index) => (
                <span key={index} className={`confetti-piece ${piece.shape}`} style={{ left: piece.left, top: piece.top, backgroundColor: piece.color, height: piece.size, width: piece.size, transform: `rotate(${piece.rotate})`, animationDelay: piece.delay }} />
              ))}
            </div>
            {burstKey > 0 ? <div className="burst-layer" key={burstKey} aria-hidden="true">
              {burstPieces.map((piece, index) => (
                <span key={index} className={`burst-piece ${piece.shape}`} style={{ left: piece.left, top: piece.top, backgroundColor: piece.color, height: piece.size, width: piece.size, "--burst-x": piece.x, "--burst-y": piece.y, "--burst-gravity": piece.gravity, "--burst-rotate": piece.rotate, "--burst-delay": piece.delay, "--burst-duration": piece.duration } as CSSProperties} />
              ))}
            </div> : null}
            {burstKey > 0 ? <div className="rain-layer" key={`rain-${burstKey}`} aria-hidden="true">
              {rainPieces.map((piece, index) => (
                <span key={index} className={`rain-piece ${piece.shape}`} style={{ left: piece.left, top: piece.top, backgroundColor: piece.color, height: piece.size, width: piece.size, "--rain-delay": piece.delay, "--rain-duration": piece.duration, "--rain-drift": piece.drift, "--rain-gravity": piece.gravity, "--rain-rotate": piece.rotate } as CSSProperties} />
              ))}
            </div> : null}
            <div className="slide-card slide-card-hero simple-card" onClick={handleCardClick}>
              <FloatingPetals count={48} tone="dark" />
              <BotanicalFrame />
              <BotanicalOrnament richer />
              <h1>Happy<br /><em>Birthday</em><br />Clara!</h1>
              <p className="hero-date">aug 14th 2026</p>
            </div>
          </section>

          <section className={deckSlideClass(1, "slide slide-letter")} aria-label="A handwritten letter for Clara">
            <AmbientParticles tone="rose" />
            <div className="slide-card slide-card-letter simple-card" onClick={handleCardClick}>
              <FloatingPetals count={42} tone="light" />
              <BotanicalOrnament />
              <div className="letter-paper">
                <div className="paper-heading"><Heart size={18} fill="currentColor" /><span>dear clara,</span></div>
                <p className="letter-copy">{birthdayContent.letter}</p>
                <div className="letter-signature">love, always<br /><span>Jovin</span></div>
              </div>
            </div>
          </section>

          <section className={deckSlideClass(2, "slide slide-tease")} aria-label="Thank you for being my girlfriend">
            <AmbientParticles tone="warm" />
            <div className="slide-card simple-card" onClick={handleCardClick}>
              <FloatingPetals count={64} tone="light" />
              <BotanicalOrnament />
              <p className="tease-subheading">The End</p>
              <h2>Thank you for being my girlfriend.</h2>
              <div className="dont-click-stack">
                {dontClickCount > 0 ? <p key={dontClickCount} className="dont-click-note">{dontClickCount === 1 ? "i said dont click 😭" : dontClickCount === 2 ? "i said no" : "imeishaa 😭😭😭"}</p> : null}
                <button className={`button button-outline next-button dont-click-button dont-click-step-${dontClickCount}`} onClick={handleDontClick}>dont click</button>
              </div>
            </div>
          </section>

          <section className={deckSlideClass(3, "slide slide-unawaza")} aria-label="Unawaza chakula">
            <AmbientParticles tone="gold" />
            <div className="slide-card simple-card" onClick={handleCardClick}>
              <FloatingPetals count={72} tone="light" />
              <BotanicalOrnament />
              <h2>unawaza chakula</h2>
              <p className="unawaza-subheading">(you thought there was food here? maybe the next slide)</p>
            </div>
          </section>

          <section className={deckSlideClass(4, "slide slide-movies")} aria-label="Favourite Movies">
            <AmbientParticles tone="archive" />
            <div className="slide-card slide-card-movies simple-card" onClick={handleCardClick}>
              <FloatingPetals count={30} tone="light" />
              <BotanicalOrnament />
              <p className="movies-top-note">(we dogo acha njaa)</p>
              <h2>Favourite <em>Movies</em></h2>
              <div className="movie-grid">
                {birthdayContent.movies.map((movie, index) => {
                  const isComplete = completedMovies.includes(movie.id);
                  return (
                    <button className={`movie-card movie-card-${index + 1} ${isComplete ? "is-complete" : ""}`} key={movie.id} onClick={(event) => { event.stopPropagation(); openQuiz(movie); }}>
                      <span className="movie-art"><img src={movie.image} style={{ objectPosition: movie.objectPosition }} alt="" /></span>
                      <span className="movie-card-footer"><strong>{movie.title}</strong><ArrowRight size={16} /></span>
                      {isComplete ? <span className="movie-complete-check" aria-label={`${movie.title} completed`}><Check size={16} strokeWidth={3} /></span> : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section className={deckSlideClass(5, "slide slide-memory slide-sushi")} aria-label="Favourite Food">
            <AmbientParticles tone="soft" />
            <div className="slide-card simple-card topic-card" onClick={handleCardClick}>
              <FloatingPetals count={38} tone="light" />
              <BotanicalOrnament />
              <h2>Favourite Food</h2>
              <p className="topic-subheading">Sushi</p>
              <div className="single-image"><img src={birthdayContent.sushiImage} alt="A warm sushi dinner for two." /></div>
            </div>
          </section>

          <section className={deckSlideClass(6, "slide slide-memory slide-italy")} aria-label="Favourite Country">
            <AmbientParticles tone="sun" />
            <div className="slide-card simple-card topic-card" onClick={handleCardClick}>
              <FloatingPetals count={38} tone="light" />
              <BotanicalOrnament />
              <h2>Favourite Country</h2>
              <p className="topic-subheading">Italy</p>
              <div className="single-image"><img src={birthdayContent.italyImage} alt="A sun-washed Italian coastal village." /></div>
            </div>
          </section>

          <section className={deckSlideClass(7, "slide slide-band")} aria-label="Favourite Band">
            <AmbientParticles tone="band" />
            <div className="slide-card simple-card topic-card" onClick={handleCardClick}>
              <FloatingPetals count={50} tone="dark" />
              <div className="band-collage" aria-hidden="true">
                {birthdayContent.bandImages.map((image) => <img key={image} src={image} alt="" />)}
              </div>
              <BotanicalOrnament />
              <h2>Favourite Band</h2>
              <p className="topic-subheading">TV Girl</p>
              <div className="band-foreground-image">
                <img src={birthdayContent.bandImage} alt="TV Girl artwork in pink and blue." />
              </div>
            </div>
          </section>

          <section className={deckSlideClass(8, "slide slide-flowers")} aria-label="Favourite Flowers">
            <AmbientParticles tone="bloom" />
            <div className="slide-card simple-card topic-card" onClick={handleCardClick}>
              <FloatingPetals count={38} tone="light" />
              <BotanicalOrnament />
              <h2>Favourite Flowers</h2>
              <div className="flower-gallery">
                <figure><img src={birthdayContent.flowerImages[0]} alt="Pink hibiscus flowers." /><figcaption>hibiscus</figcaption></figure>
                <figure><img src={birthdayContent.flowerImages[1]} alt="White lilies among green leaves." /><figcaption>lily</figcaption></figure>
              </div>
            </div>
          </section>

          <section className={deckSlideClass(9, "slide slide-color")} aria-label="Favourite Colour">
            <AmbientParticles tone="red" />
            <div className="slide-card slide-card-color simple-card topic-card" onClick={handleCardClick}>
              <FloatingPetals count={46} tone="light" />
              <BotanicalOrnament />
              <h2>Favourite Colour</h2>
              <div className="color-swatch" aria-label="Dark red color swatch" />
              <p className="color-subheading">Dark Red</p>
            </div>
          </section>

          <section className={deckSlideClass(10, "slide slide-ending")} aria-label="The end">
            <AmbientParticles tone="red" />
            <div className="slide-card slide-card-ending simple-card">
              <FloatingPetals count={64} tone="dark" />
              <BotanicalOrnament />
              <h2>thank u babe for being<br /><em>my girlfriend babe</em></h2>
              <p className="ending-note">(anything less then they arent the one)</p>
            </div>
          </section>
        </div>
      </main>

      <DeckControls onPrevious={previousSlide} onNext={nextSlide} previousDisabled={slide === 0} nextDisabled={slide === totalSlides - 1 || slide === 2 || (slide === 4 && !allMoviesComplete)} />

      {activeQuiz ? <QuizModal movie={activeQuiz} selectedOption={selectedOption} feedback={feedback} onSelect={chooseOption} onClose={() => setActiveQuiz(null)} /> : null}
    </div>
  );
}
