import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MousePointerClick, Play, RotateCcw, Timer } from 'lucide-react';
import { site } from '../config/site';

const GAME_SECONDS = 24;
const TILE_COUNT = 12;

const gameLines = [
  'The deadline tried to look busy.',
  'A tiny manager just approved that click.',
  'The launch button has entered witness protection.',
  'That one owed you money anyway.',
  'Excellent nonsense. Continue.',
  'The portfolio intern is sweating.',
];

function randomTile(current: number) {
  let next = Math.floor(Math.random() * TILE_COUNT);
  if (next === current) {
    next = (next + 5) % TILE_COUNT;
  }
  return next;
}

export default function Home() {
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [targetTile, setTargetTile] = useState(4);
  const [running, setRunning] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);

  const gameOver = timeLeft === 0;
  const message = useMemo(() => {
    if (!running && !gameOver) return 'The launch button is stretching.';
    if (gameOver && score >= 14) return 'Ridiculous score. The portfolio noticed.';
    if (gameOver && score >= 7) return 'Respectable chaos. The button may recover.';
    if (gameOver) return 'The button survived with suspicious confidence.';
    return gameLines[lineIndex % gameLines.length];
  }, [gameOver, lineIndex, running, score]);

  useEffect(() => {
    if (!running || timeLeft === 0) return;

    const timer = window.setInterval(() => {
      setTimeLeft((seconds) => {
        if (seconds <= 1) {
          setRunning(false);
          return 0;
        }

        return seconds - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [running, timeLeft]);

  const startGame = () => {
    setScore(0);
    setMisses(0);
    setTimeLeft(GAME_SECONDS);
    setTargetTile(randomTile(targetTile));
    setRunning(true);
    setLineIndex(0);
  };

  const resetGame = () => {
    setScore(0);
    setMisses(0);
    setTimeLeft(GAME_SECONDS);
    setTargetTile(4);
    setRunning(false);
    setLineIndex(0);
  };

  const hitTarget = () => {
    if (!running || gameOver) return;
    setScore((value) => value + 1);
    setLineIndex((value) => value + 1);
    setTargetTile((current) => randomTile(current));
  };

  const missTarget = () => {
    if (!running || gameOver) return;
    setMisses((value) => value + 1);
  };

  return (
    <>
      <Helmet>
        <title>{site.title}</title>
        <meta name="description" content="The portfolio is coming soon. A simple game is available while it is being prepared." />
        <meta property="og:title" content={`${site.name} — ${site.title}`} />
        <meta property="og:description" content="The portfolio is coming soon with a small playable surprise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
      </Helmet>

      <section className="relative isolate min-h-[calc(100vh-60px)] overflow-hidden bg-[#fbf7ea] text-[#272217] dark:bg-[#14120e] dark:text-[#fff5dd]">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.28] dark:opacity-[0.2]">
          <div className="absolute left-[6%] top-[8%] h-56 w-56 rotate-12 rounded-[2rem] border border-[#c06c35]/40" />
          <div className="absolute right-[5%] top-[20%] h-72 w-72 rounded-full border-[28px] border-[#587a63]/25" />
          <div className="absolute bottom-[5%] left-[24%] h-28 w-[34rem] -rotate-6 bg-[#e4c15f]/35" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,34,23,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(39,34,23,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
          <div className="max-w-xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#8a5b34] dark:text-[#f0ad72]">
              Workshop closed for renovations
            </p>
            <h1 className="mt-5 max-w-[11ch] font-serif text-[clamp(3.8rem,12vw,8.2rem)] font-black leading-[0.84] tracking-normal text-[#272217] dark:text-[#fff5dd]">
              Portfolio Comming Soon
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-[#5d523e] dark:text-[#d8c9aa]">
              The old portfolio data has been cleared while a fresh version is prepared. The waiting room contains one deeply unserious button.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={startGame}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#272217] px-5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#fff5dd] shadow-[0_10px_0_#c06c35] transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_0_#c06c35] active:translate-y-1 active:shadow-[0_6px_0_#c06c35] dark:bg-[#fff5dd] dark:text-[#272217]"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Start
              </button>
              <button
                type="button"
                onClick={resetGame}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#272217]/20 bg-white/45 text-[#272217] transition duration-150 hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/20 dark:bg-white/5 dark:text-[#fff5dd]"
                aria-label="Reset game"
              >
                <RotateCcw className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="rounded-[1.5rem] border-2 border-[#272217] bg-[#fffdf5] p-4 shadow-[12px_12px_0_#587a63] dark:border-[#fff5dd] dark:bg-[#201c16] dark:shadow-[12px_12px_0_#8a5b34] sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#272217]/15 pb-4 dark:border-white/15">
              <div>
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#8a5b34] dark:text-[#f0ad72]">
                  Button Panic
                </p>
                <p className="mt-1 text-sm text-[#6d6048] dark:text-[#d8c9aa]">{message}</p>
              </div>
              <div className="flex gap-2 font-mono text-xs font-bold uppercase tracking-[0.12em]">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#e4c15f]/45 px-3 py-2">
                  <MousePointerClick className="h-4 w-4" aria-hidden="true" />
                  {score}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f1dfbd] px-3 py-2 text-[#5d523e] dark:bg-[#3a3124] dark:text-[#d8c9aa]">
                  <Timer className="h-4 w-4" aria-hidden="true" />
                  {timeLeft}s
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {Array.from({ length: TILE_COUNT }, (_, index) => {
                const active = index === targetTile;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={active ? hitTarget : missTarget}
                    className={`aspect-square rounded-xl border-2 font-mono text-xs font-black uppercase tracking-[0.08em] transition duration-150 ${
                      active
                        ? 'rotate-[-3deg] border-[#272217] bg-[#c06c35] text-[#fff5dd] shadow-[0_8px_0_#272217] hover:rotate-2 hover:scale-[1.03] dark:border-[#fff5dd] dark:shadow-[0_8px_0_#fff5dd]'
                        : 'border-[#272217]/10 bg-[#f1dfbd]/70 text-[#7b705c] hover:border-[#c06c35]/60 hover:bg-[#f1dfbd] dark:border-white/10 dark:bg-white/5 dark:text-[#a99b80] dark:hover:border-[#f0ad72]/70'
                    }`}
                    aria-label={active ? 'Moving launch button' : 'Empty panel'}
                  >
                    {active ? (running ? 'click' : 'nap') : misses > index / 2 ? 'oops' : ''}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#f1dfbd] dark:bg-[#3a3124]">
              <div
                className="h-full rounded-full bg-[#587a63] transition-[width] duration-300 dark:bg-[#e4c15f]"
                style={{ width: `${(timeLeft / GAME_SECONDS) * 100}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#7b705c] dark:text-[#a99b80]">
              <span>Misses {misses}</span>
              <span>{gameOver ? 'Shift over' : running ? 'Live chaos' : 'Idle chaos'}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
