'use client';

import { useEffect, useRef, useState } from 'react';
import { FileSpreadsheet, MessageSquare, Shuffle, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './ProblemsSection.module.css';

type ProblemKey = 'manual' | 'scattered' | 'disconnected' | 'visibility';

interface ProblemItem {
  key: ProblemKey;
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  liveTag: string;
  metric: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    key: 'manual',
    icon: <FileSpreadsheet size={22} color="#EF4444" />,
    title: 'Manual administration',
    desc: 'Repeated data entry, registers and spreadsheets consume hours of staff time every single day.',
    color: '#EF4444',
    liveTag: 'Row-by-row entry',
    metric: '3.5 hrs / day in sheets',
  },
  {
    key: 'scattered',
    icon: <MessageSquare size={22} color="#F59E0B" />,
    title: 'Scattered communication',
    desc: 'Important messages fragmented across WhatsApp groups, phone calls, and notice boards.',
    color: '#F59E0B',
    liveTag: '4 channels unlinked',
    metric: 'Missed & unread notices',
  },
  {
    key: 'disconnected',
    icon: <Shuffle size={22} color="#6366F1" />,
    title: 'Disconnected workflows',
    desc: "Attendance, leave, fees and administration operate in separate systems that don't talk to each other.",
    color: '#6366F1',
    liveTag: 'Siloed tools',
    metric: 'Duplicate updates required',
  },
  {
    key: 'visibility',
    icon: <BarChart3 size={22} color="#EC4899" />,
    title: 'Limited visibility',
    desc: 'School management lacks a consolidated, real-time view of daily operations and pending work.',
    color: '#EC4899',
    liveTag: 'Delayed snapshots',
    metric: 'No live rollup view',
  },
];

function ProblemIllustration({ problemKey, active }: { problemKey: ProblemKey; active: boolean }) {
  if (problemKey === 'manual') {
    return (
      <div
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          padding: '12px',
          borderRadius: '12px',
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          minHeight: '68px',
        }}
      >
        <div style={{ display: 'grid', gap: '5px', flex: 1 }}>
          {[0, 1, 2, 3].map((row) => (
            <div
              key={row}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '4px',
              }}
            >
              {[0, 1, 2, 3, 4].map((col) => {
                const isPulse = row === 1 && (col === 0 || col === 1 || col === 2);
                return (
                  <div
                    key={col}
                    style={{
                      height: '6px',
                      borderRadius: '2px',
                      background: isPulse && active ? '#EF4444' : '#CBD5E1',
                      opacity: isPulse ? 1 : 0.6,
                      transform: isPulse && active ? 'scaleY(1.15)' : 'scale(1)',
                      transition: 'all 350ms ease',
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: active ? 1 : 0.7, transform: active ? 'translateY(-2px)' : 'none', transition: 'all 300ms ease' }}>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#475569" strokeWidth="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" stroke="#475569" strokeWidth="1.5" />
          <path d="M14 14l3 3m0 0l-1.5 3.5M17 17l3.5-1.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (problemKey === 'scattered') {
    return (
      <div
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '12px',
          borderRadius: '12px',
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          minHeight: '68px',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            padding: '4px 10px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            background: '#3B82F6',
            color: '#FFFFFF',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            transform: active ? 'translateY(-2px)' : 'none',
            transition: 'transform 300ms ease',
          }}
        >
          💬 Chat
        </span>
        <span style={{ color: '#94A3B8', fontSize: '0.8rem', borderBottom: '1px dashed #94A3B8', width: '12px', height: '1px' }} />
        <span
          style={{
            padding: '4px 10px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            background: '#0D9488',
            color: '#FFFFFF',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            transform: active ? 'translateY(2px)' : 'none',
            transition: 'transform 400ms ease',
          }}
        >
          📞 Call
        </span>
        <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>✕</span>
        <span
          style={{
            padding: '4px 10px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            background: '#D97706',
            color: '#FFFFFF',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            transform: active ? 'translateX(3px)' : 'none',
            transition: 'transform 500ms ease',
          }}
        >
          📋 Board
        </span>
      </div>
    );
  }

  if (problemKey === 'disconnected') {
    return (
      <div
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          padding: '12px',
          borderRadius: '12px',
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          minHeight: '68px',
        }}
      >
        <span
          style={{
            padding: '4px 10px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            background: '#4F46E5',
            color: '#FFFFFF',
            flex: 1,
            textAlign: 'center',
            transform: active ? 'translateX(-3px)' : 'none',
            transition: 'transform 350ms ease',
          }}
        >
          Student Data
        </span>
        <span
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: '#EF4444',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.65rem',
            fontWeight: 800,
            flexShrink: 0,
            transform: active ? 'rotate(180deg)' : 'none',
            transition: 'transform 400ms ease',
          }}
        >
          ✕
        </span>
        <span
          style={{
            padding: '4px 10px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            background: '#312E81',
            color: '#FFFFFF',
            flex: 1,
            textAlign: 'center',
            transform: active ? 'translateX(3px)' : 'none',
            transition: 'transform 350ms ease',
          }}
        >
          Parent Feed
        </span>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        padding: '12px',
        borderRadius: '12px',
        background: '#F8FAFC',
        border: '1px solid #E2E8F0',
        minHeight: '68px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'end',
          gap: '5px',
          height: '38px',
          flex: 1,
        }}
      >
        {[20, 35, 75, 15, 45, 10, 50].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: active ? `${h}%` : '20%',
              borderRadius: '2px 2px 0 0',
              background: i === 2 || i === 4 || i === 6 ? '#EC4899' : '#94A3B8',
              transition: `height ${300 + i * 100}ms ease`,
            }}
          />
        ))}
      </div>
      <div
        style={{
          width: '24px',
          height: '24px',
          border: '2px dashed #94A3B8',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: active ? 'spin 3s linear infinite' : 'none',
          flexShrink: 0,
        }}
      >
        <div style={{ width: '4px', height: '4px', background: '#94A3B8', borderRadius: '50%' }} />
      </div>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function ProblemsSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeKey, setActiveKey] = useState<ProblemKey | null>(null);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.section}`} style={{ background: '#F1F5F9' }}>
      <div className="container">
        <AnimateOnScroll>
          <div className={styles.header} style={{ marginBottom: '3rem' }}>
            <div className="badge badge--indigo">The Problem</div>
            <h2 className={`heading-lg ${styles.headline}`} style={{ color: '#1E293B', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
              Schools don&apos;t need more software complexity.
              <br />
              <span className="gradient-text" style={{ background: 'linear-gradient(to right, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                They need better-connected operations.
              </span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div
          ref={gridRef}
          className={`${styles.grid} ${isVisible ? styles.gridVisible : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {PROBLEMS.map((p, i) => {
            const highlighted = isVisible || activeKey === p.key;
            return (
              <div
                key={p.title}
                onMouseEnter={() => setActiveKey(p.key)}
                onMouseLeave={() => setActiveKey(null)}
                onClick={() => setActiveKey(p.key)}
                className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
                style={
                  {
                    '--card-color': p.color,
                    '--stagger-delay': `${i * 110}ms`,
                    background: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                    transition: 'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
                    cursor: 'pointer',
                  } as React.CSSProperties
                }
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <div className={styles.iconWrap} style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${p.color}10`, display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>
                    <span className={styles.icon}>{p.icon}</span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      background: p.color,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      textTransform: 'none',
                    }}
                  >
                    {p.liveTag}
                  </span>
                </div>

                <div>
                  <h3 className={styles.cardTitle} style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-display)', marginBottom: '0.4rem' }}>
                    {p.title}
                  </h3>
                  <p className={styles.cardDesc} style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                    {p.desc}
                  </p>
                </div>

                <ProblemIllustration problemKey={p.key} active={highlighted} />

                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B', marginTop: 'auto', borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem' }}>
                  {p.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
