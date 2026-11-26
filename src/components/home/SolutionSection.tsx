'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Users,
  Bot,
  BarChart3,
  ArrowRight,
  Sparkles,
  Send,
  Home,
  FileText,
  User,
  Calendar,
  MessageSquare,
  RotateCcw,
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './SolutionSection.module.css';

type PillarKey = 'operations' | 'experience' | 'ai' | 'intelligence';

interface PillarConfig {
  key: PillarKey;
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  href: string;
  features: string[];
  badge?: string;
  tabLabel: string;
}

const PILLARS: PillarConfig[] = [
  {
    key: 'operations',
    icon: <Building2 size={24} color="#2563EB" />,
    title: 'School Operations',
    desc: 'Manage attendance, students, staff, admissions, fees and administrative workflows from one central hub.',
    color: '#2563EB',
    href: '/features#school-administration',
    features: ['Student & staff records', 'Attendance management', 'Fee tracking', 'Admissions pipeline'],
    tabLabel: 'Overview',
  },
  {
    key: 'experience',
    icon: <Users size={24} color="#10B981" />,
    title: 'Parent & Teacher Experience',
    desc: 'Connect parents and teachers through updates, conversations, digital requests and approvals.',
    color: '#10B981',
    href: '/features#parent-mobile-app',
    features: ['Parent mobile app', 'Teacher portal', 'Digital notices', 'Read acknowledgements'],
    tabLabel: 'Updates & Family App',
  },
  {
    key: 'ai',
    icon: <Bot size={24} color="#6366F1" />,
    title: 'AI Operations Assistant',
    desc: 'Assist with repetitive workflows, information retrieval and administrative tasks — with human oversight.',
    color: '#6366F1',
    href: '/features#ai-operations',
    features: ['Automated reminders', 'Natural language queries', 'Document search', 'Workflow assistance'],
    badge: 'Coming Soon',
    tabLabel: 'Smart Circular AI',
  },
  {
    key: 'intelligence',
    icon: <BarChart3 size={24} color="#F59E0B" />,
    title: 'Management Intelligence',
    desc: 'Give school leadership better visibility into operations, pending work and performance insights.',
    color: '#F59E0B',
    href: '/features#school-administration',
    features: ['Operations dashboard', 'Pending work overview', 'Attendance reports', 'Admission pipeline view'],
    tabLabel: 'Insights',
  },
];

function CircularStudioComposer({
  title,
  setTitle,
  category,
  setCategory,
  audience,
  setAudience,
  notes,
  setNotes,
  onPublish,
  showPolishButton = false,
}: {
  title: string;
  setTitle: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  audience: string;
  setAudience: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
  onPublish: () => void;
  showPolishButton?: boolean;
}) {
  const [polished, setPolished] = useState(false);

  const handlePolish = () => {
    if (!polished) {
      setNotes(
        'Dear Parents, Class 8A Parent-Teacher Meeting will be held this Saturday from 9:00 AM to 12:00 PM in Room 8A. Please carry your child’s signed report card.'
      );
      setPolished(true);
    } else {
      setNotes('ptm saturday 9am to 12pm room 8a bring signed report card');
      setPolished(false);
    }
  };

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: '14px',
        padding: '1.15rem',
        display: 'grid',
        gap: '0.8rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em', color: '#6B7280', textTransform: 'uppercase' }}>
          Smart Circular Studio
        </span>
        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em', color: '#6B7280', textTransform: 'uppercase' }}>
          Syncs to Parent App
        </span>
      </div>

      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', fontFamily: 'var(--font-display)' }}>
        Publish School Update
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: '#6B7280', marginBottom: '0.3rem', letterSpacing: '0.05em' }}>
          ANNOUNCEMENT TITLE
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Term 1 Parent-Teacher Meeting Schedule"
          style={{
            width: '100%',
            padding: '0.55rem 0.75rem',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            fontSize: '0.82rem',
            color: '#111827',
            background: '#FFFFFF',
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: '#6B7280', marginBottom: '0.3rem', letterSpacing: '0.05em' }}>
            CATEGORY
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 0.65rem',
              borderRadius: '8px',
              border: '1px solid #D1D5DB',
              fontSize: '0.8rem',
              background: '#FFFFFF',
              color: '#111827',
            }}
          >
            <option>General</option>
            <option>Important</option>
            <option>Academics</option>
            <option>Events</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: '#6B7280', marginBottom: '0.3rem', letterSpacing: '0.05em' }}>
            TARGET AUDIENCE
          </label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 0.65rem',
              borderRadius: '8px',
              border: '1px solid #D1D5DB',
              fontSize: '0.8rem',
              background: '#FFFFFF',
              color: '#111827',
            }}
          >
            <option>All School</option>
            <option>Class 8A</option>
            <option>Senior Wing</option>
          </select>
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
          <label style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.05em' }}>
            ROUGH NOTES OR MESSAGE
          </label>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#9CA3AF' }}>SHORT NOTES SUPPORTED</span>
        </div>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
            setPolished(false);
          }}
          style={{
            width: '100%',
            padding: '0.55rem 0.75rem',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            fontSize: '0.8rem',
            color: '#111827',
            background: '#FFFFFF',
            resize: 'vertical',
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        {showPolishButton && (
          <button
            type="button"
            onClick={handlePolish}
            style={{
              padding: '0.45rem 0.8rem',
              borderRadius: '8px',
              border: '1px solid #D1D5DB',
              background: '#FFFFFF',
              color: '#111827',
              fontSize: '0.78rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              cursor: 'pointer',
            }}
          >
            <Sparkles size={13} color="#6366F1" />
            {polished ? 'Original Notes' : 'Polish Draft (AI)'}
          </button>
        )}
        <button
          type="button"
          onClick={onPublish}
          style={{
            padding: '0.5rem 0.95rem',
            borderRadius: '8px',
            border: 'none',
            background: '#C23B22',
            color: '#FFFFFF',
            fontSize: '0.8rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            cursor: 'pointer',
          }}
        >
          Publish Update →
        </button>
      </div>
    </div>
  );
}

function FamilyAppPhoneMockup({
  lang,
  setLang,
  acknowledged,
  setAcknowledged,
  mobileTab,
  setMobileTab,
  latestNoticeTitle,
}: {
  lang: 'EN' | 'HI';
  setLang: (l: 'EN' | 'HI') => void;
  acknowledged: boolean;
  setAcknowledged: (v: boolean) => void;
  mobileTab: 'home' | 'child';
  setMobileTab: (t: 'home' | 'child') => void;
  latestNoticeTitle: string;
}) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '370px',
        marginInline: 'auto',
        background: '#F4F3EF',
        borderRadius: '28px',
        border: '6px solid #18181B',
        boxShadow: '0 24px 50px rgba(15, 23, 42, 0.14)',
        overflow: 'hidden',
      }}
    >
      {/* App Top Header */}
      <div
        style={{
          padding: '0.9rem 1rem 0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#F8F7F4',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9px',
              background: '#111827',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.95rem',
            }}
          >
            S.
          </div>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111827', lineHeight: 1.15 }}>
              School247 Family
            </div>
            <div style={{ fontSize: '0.7rem', color: '#6B7280' }}>
              Aravali Vidya Mandir · Family Space
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')}
          style={{
            padding: '0.28rem 0.65rem',
            borderRadius: '999px',
            border: '1px solid #D1D5DB',
            background: '#FFFFFF',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#111827',
            cursor: 'pointer',
          }}
        >
          हिं / {lang}
        </button>
      </div>

      {/* Greeting & Student Pill */}
      <div style={{ padding: '0.5rem 1rem 0.85rem', background: '#F8F7F4', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#111827', fontFamily: 'var(--font-display)' }}>
          {lang === 'EN' ? 'Hello, Meera.' : 'नमस्ते, मीरा.'}
        </div>
        <div
          style={{
            marginTop: '0.55rem',
            padding: '0.45rem 0.8rem',
            borderRadius: '999px',
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.74rem',
            color: '#4B5563',
          }}
        >
          <span>Aarav Sharma · Class 8A · Ritika Kapoor</span>
          <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: '#10B981' }} />
        </div>
      </div>

      {/* Phone Screen Body */}
      <div style={{ padding: '0.85rem', display: 'grid', gap: '0.75rem' }}>
        {mobileTab === 'home' ? (
          <>
            {/* Dark Attendance Card */}
            <div
              style={{
                background: '#141416',
                color: '#FFFFFF',
                borderRadius: '18px',
                padding: '1rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.07em', color: '#A1A1AA', fontWeight: 700 }}>
                  TERM ATTENDANCE
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.55rem',
                    borderRadius: '999px',
                    background: '#064E3B',
                    color: '#34D399',
                  }}
                >
                  ● ON TRACK
                </span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.2rem', fontVariantNumeric: 'tabular-nums' }}>
                94%
              </div>
              <div style={{ fontSize: '0.75rem', color: '#D4D4D8', marginBottom: '0.65rem' }}>
                47 days present · 3 days absent
              </div>
              <div style={{ height: '5px', borderRadius: '999px', background: '#27272A', overflow: 'hidden' }}>
                <div style={{ width: '94%', height: '100%', background: '#E11D48', borderRadius: '999px' }} />
              </div>
            </div>

            {/* 2x2 Quick Status Tiles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '0.75rem', border: '1px solid #ECECE8' }}>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>TODAY&apos;S CHECK-IN</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#059669', marginTop: '0.2rem' }}>Present · 8:12 AM</div>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '0.75rem', border: '1px solid #ECECE8' }}>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>HOMEWORK</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#DC2626', marginTop: '0.2rem' }}>2 pending</div>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '0.75rem', border: '1px solid #ECECE8' }}>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>NEXT EXAM</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#111827', marginTop: '0.2rem' }}>25 Nov · Math</div>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '0.75rem', border: '1px solid #ECECE8' }}>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>FEE STATUS</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#059669', marginTop: '0.2rem' }}>Up to date</div>
              </div>
            </div>

            {/* Latest Notice Card */}
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '0.85rem', border: '1px solid #ECECE8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>
                <span>LATEST NOTICE</span>
                <span style={{ color: '#DC2626' }}>ALL (4)</span>
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#111827', marginTop: '0.3rem' }}>
                {latestNoticeTitle}
              </div>
              <p style={{ fontSize: '0.76rem', color: '#4B5563', marginTop: '0.25rem', lineHeight: 1.45 }}>
                Due to a district administrative advisory, physical classes remain suspended today for all grades.
              </p>
              <div style={{ marginTop: '0.7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', color: '#6B7280' }}>26 Nov · 07:30</span>
                <button
                  type="button"
                  onClick={() => setAcknowledged(!acknowledged)}
                  style={{
                    padding: '0.38rem 0.85rem',
                    borderRadius: '999px',
                    border: 'none',
                    background: acknowledged ? '#059669' : '#C81E1E',
                    color: '#FFFFFF',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {acknowledged ? 'Acknowledged ✓' : 'Acknowledge'}
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Child Tab — Homework & Upcoming Exams */
          <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '0.85rem', border: '1px solid #ECECE8', display: 'grid', gap: '0.65rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.88rem', color: '#111827' }}>Homework &amp; Assignments</strong>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#6B7280' }}>CLASS 8A</span>
            </div>
            <div style={{ padding: '0.6rem', borderRadius: '10px', border: '1px solid #F3F4F6', background: '#FAFAFA' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.4rem' }}>
                <strong style={{ fontSize: '0.78rem', color: '#111827' }}>Mathematics · Exercise 5.2</strong>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#DC2626', background: '#FEE2E2', padding: '0.1rem 0.45rem', borderRadius: '999px' }}>
                  ● Due tomorrow
                </span>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#6B7280', marginTop: '0.2rem' }}>
                Complete questions 1–8 in notebook with algebraic verification steps.
              </p>
            </div>
            <div style={{ padding: '0.6rem', borderRadius: '10px', border: '1px solid #F3F4F6', background: '#FAFAFA' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.4rem' }}>
                <strong style={{ fontSize: '0.78rem', color: '#111827' }}>Science · Light and Reflection</strong>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#2563EB', background: '#DBEAFE', padding: '0.1rem 0.45rem', borderRadius: '999px' }}>
                  ● 29 Nov
                </span>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#6B7280', marginTop: '0.2rem' }}>
                Read NCERT pages 82–89 and sketch concave mirror ray diagrams.
              </p>
            </div>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#111827', paddingTop: '0.25rem' }}>
              Upcoming Exams &amp; Events
            </div>
            <div style={{ fontSize: '0.74rem', color: '#374151', display: 'grid', gap: '0.35rem' }}>
              <div><strong>25 NOV:</strong> Mathematics Assessment · Room 8A</div>
              <div><strong>28 NOV:</strong> Parent-Teacher Meeting · 09:00 AM</div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Pill Nav Bar */}
      <div style={{ padding: '0.55rem 0.75rem 0.75rem', background: '#F4F3EF' }}>
        <div
          style={{
            background: '#141416',
            borderRadius: '999px',
            padding: '0.35rem 0.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            alignItems: 'center',
            textAlign: 'center',
            color: '#A1A1AA',
            fontSize: '0.62rem',
          }}
        >
          <button
            type="button"
            onClick={() => setMobileTab('home')}
            style={{
              background: mobileTab === 'home' ? '#FFFFFF' : 'transparent',
              color: mobileTab === 'home' ? '#111827' : '#A1A1AA',
              border: 'none',
              borderRadius: '999px',
              padding: '0.35rem 0.2rem',
              fontWeight: 700,
              fontSize: '0.62rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            <Home size={13} />
            Home
          </button>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            <FileText size={13} />
            Updates
          </span>
          <button
            type="button"
            onClick={() => setMobileTab('child')}
            style={{
              background: mobileTab === 'child' ? '#FFFFFF' : 'transparent',
              color: mobileTab === 'child' ? '#111827' : '#A1A1AA',
              border: 'none',
              borderRadius: '999px',
              padding: '0.35rem 0.2rem',
              fontWeight: 700,
              fontSize: '0.62rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            <User size={13} />
            Child
          </button>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            <Calendar size={13} />
            Leave
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            <Sparkles size={13} />
            Ask AI
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            <MessageSquare size={13} />
            Inbox
          </span>
        </div>
      </div>
    </div>
  );
}

function SolutionScreenSimulation({ activeKey }: { activeKey: PillarKey }) {
  const [workspaceTab, setWorkspaceTab] = useState<'Overview' | 'Updates' | 'Parent Inbox' | 'Insights'>('Overview');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('General');
  const [audience, setAudience] = useState('All School');
  const [notes, setNotes] = useState('');
  const [publishedBanner, setPublishedBanner] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [sentReplies, setSentReplies] = useState<string[]>([
    'Yes, parents are welcome to attend. Please arrive at the main gate by 8:30 AM; visitor passes will be issued at reception.',
  ]);
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');
  const [acknowledged, setAcknowledged] = useState(false);
  const [mobileTab, setMobileTab] = useState<'home' | 'child'>('home');

  const handlePublish = () => {
    const cleanTitle = title.trim() || 'Term 1 Parent-Teacher Meeting Schedule';
    setPublishedBanner(`Published "${cleanTitle}" (${category} · ${audience}) to Parent App.`);
    setTitle('');
    setNotes('');
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setSentReplies((prev) => [...prev, replyText.trim()]);
    setReplyText('');
  };

  const effectiveTab =
    activeKey === 'experience' && workspaceTab === 'Overview'
      ? 'Updates'
      : activeKey === 'ai'
      ? 'Updates'
      : activeKey === 'intelligence'
      ? 'Insights'
      : workspaceTab;

  return (
    <div
      style={{
        marginTop: '3rem',
        background: '#F8F7F4',
        border: '1px solid #E5E7EB',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
      }}
    >
      {/* Top Application Bar (Matches Aravali Vidya Mandir / Teacher Workspace header) */}
      <div
        style={{
          background: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.84rem' }}>
          <span style={{ fontWeight: 700, color: '#111827' }}>Aravali Vidya Mandir</span>
          <span style={{ color: '#9CA3AF' }}>/</span>
          <span style={{ color: '#6B7280' }}>Teacher Workspace</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
          {(
            [
              ['Overview', 'Overview'],
              ['Updates', 'Updates (4)'],
              ['Parent Inbox', 'Parent Inbox (2)'],
              ['Insights', 'Insights'],
            ] as const
          ).map(([key, label]) => {
            const active = effectiveTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setWorkspaceTab(key)}
                style={{
                  padding: '0.38rem 0.85rem',
                  borderRadius: '999px',
                  border: 'none',
                  background: active ? '#111827' : 'transparent',
                  color: active ? '#FFFFFF' : '#4B5563',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem' }}>
          <span style={{ color: '#059669', fontWeight: 700 }}>● LIVE SYNC</span>
          <button
            type="button"
            onClick={() => {
              setPublishedBanner(null);
              setAcknowledged(false);
              setWorkspaceTab('Overview');
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#4B5563',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={12} /> Reset
          </button>
        </div>
      </div>

      {publishedBanner && (
        <div
          style={{
            background: '#ECFDF5',
            borderBottom: '1px solid #A7F3D0',
            color: '#065F46',
            padding: '0.6rem 1.25rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>✓ {publishedBanner}</span>
          <button
            type="button"
            onClick={() => setPublishedBanner(null)}
            style={{ background: 'none', border: 'none', color: '#065F46', fontWeight: 700, cursor: 'pointer' }}
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Simulated Screen Content */}
      <div style={{ padding: '1.5rem' }}>
        {effectiveTab === 'Overview' && (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.75rem' }}>
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em', color: '#6B7280', textTransform: 'uppercase' }}>
                  TEACHER WORKSPACE · RITIKA KAPOOR · CLASS 8A
                </div>
                <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111827', marginTop: '0.15rem', fontFamily: 'var(--font-display)' }}>
                  Good morning, Ritika.
                </h4>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => setWorkspaceTab('Updates')}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #D1D5DB',
                    background: '#FFFFFF',
                    color: '#111827',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Preview Parent App ↗
                </button>
                <button
                  type="button"
                  onClick={() => setWorkspaceTab('Updates')}
                  style={{
                    padding: '0.45rem 0.95rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#111827',
                    color: '#FFFFFF',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  + New Circular
                </button>
              </div>
            </div>

            {/* 4 KPI Strip */}
            <div className={styles.previewGrid4}>
              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>UPDATES PUBLISHED</div>
                <div className={styles.metricValue}>04</div>
                <div style={{ fontSize: '0.74rem', color: '#6B7280', marginTop: '0.2rem' }}>Active school circulars</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>OPEN CONVERSATIONS</div>
                <div className={styles.metricValue}>02</div>
                <div style={{ fontSize: '0.74rem', color: '#6B7280', marginTop: '0.2rem' }}>Monitored parent threads</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>PARENT ACKNOWLEDGEMENTS</div>
                <div className={styles.metricValue}>3/4</div>
                <div style={{ fontSize: '0.74rem', color: '#6B7280', marginTop: '0.2rem' }}>Meera Sharma live status</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>CONNECTED CLASSES</div>
                <div className={styles.metricValue}>24</div>
                <div style={{ fontSize: '0.74rem', color: '#6B7280', marginTop: '0.2rem' }}>Nursery through Class XII</div>
              </div>
            </div>

            {/* Split View: Recent Updates + Smart Circular Studio */}
            <div className={styles.previewGrid2}>
              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1.15rem', display: 'grid', gap: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.06em' }}>COMMUNICATION FEED</div>
                    <strong style={{ fontSize: '1.05rem', color: '#111827' }}>Recent Updates</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => setWorkspaceTab('Updates')}
                    style={{ background: 'none', border: 'none', fontSize: '0.78rem', fontWeight: 600, color: '#374151', cursor: 'pointer' }}
                  >
                    All updates →
                  </button>
                </div>

                <div style={{ border: '1px solid #F3F4F6', borderRadius: '10px', padding: '0.8rem', background: '#FAFAFA' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#C23B22' }}>● Important · All School · 26 Nov · 07:30</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#D97706', background: '#FEF3C7', padding: '0.15rem 0.55rem', borderRadius: '999px' }}>
                      ● 95% Pending
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, color: '#111827', marginTop: '0.35rem', fontSize: '0.9rem' }}>
                    School Remains Closed Today
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#4B5563', marginTop: '0.2rem', lineHeight: 1.45 }}>
                    Due to a district administrative advisory, physical classes remain suspended today for all grades. Online revision sheets for Class 8A are accessible inside the Child tab.
                  </p>
                </div>

                <div style={{ border: '1px solid #F3F4F6', borderRadius: '10px', padding: '0.8rem', background: '#FAFAFA' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#059669' }}>● Events · All School · 24 Nov · 13:01</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#059669', background: '#D1FAE5', padding: '0.15rem 0.55rem', borderRadius: '999px' }}>
                      ● 97% Seen
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, color: '#111827', marginTop: '0.35rem', fontSize: '0.9rem' }}>
                    Library Reading Week Begins Monday
                  </div>
                </div>
              </div>

              <CircularStudioComposer
                title={title}
                setTitle={setTitle}
                category={category}
                setCategory={setCategory}
                audience={audience}
                setAudience={setAudience}
                notes={notes}
                setNotes={setNotes}
                onPublish={handlePublish}
                showPolishButton={false}
              />
            </div>
          </div>
        )}

        {effectiveTab === 'Updates' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.35fr) minmax(300px, 0.85fr)', gap: '1.5rem', alignItems: 'start' }}>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em', color: '#6B7280', textTransform: 'uppercase' }}>
                  SCHOOL-WIDE &amp; CLASS COMMUNICATION
                </div>
                <h4 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#111827', fontFamily: 'var(--font-display)' }}>
                  Updates &amp; Circular Studio
                </h4>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#C23B22' }}>● Important</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#D97706', background: '#FEF3C7', padding: '0.15rem 0.6rem', borderRadius: '999px' }}>
                    ● {acknowledged ? '1185/1247' : '1184/1247'} Acknowledged
                  </span>
                </div>
                <div style={{ fontWeight: 700, color: '#111827', marginTop: '0.35rem' }}>School Remains Closed Today</div>
                <p style={{ fontSize: '0.8rem', color: '#4B5563', marginTop: '0.2rem' }}>
                  Due to a district administrative advisory, physical classes remain suspended today for all grades.
                </p>
                <div style={{ fontSize: '0.72rem', color: '#6B7280', marginTop: '0.5rem' }}>
                  All School · Ritika Kapoor · 26 Nov · 07:30
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#059669' }}>● Events</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#059669', background: '#D1FAE5', padding: '0.15rem 0.6rem', borderRadius: '999px' }}>
                    ● Acknowledged · 1214/1247 (97%)
                  </span>
                </div>
                <div style={{ fontWeight: 700, color: '#111827', marginTop: '0.35rem' }}>Library Reading Week Begins Monday</div>
                <p style={{ fontSize: '0.8rem', color: '#4B5563', marginTop: '0.2rem' }}>
                  Students are invited to participate in Library Reading Week from 30 November to 4 December.
                </p>
              </div>

              <CircularStudioComposer
                title={title}
                setTitle={setTitle}
                category={category}
                setCategory={setCategory}
                audience={audience}
                setAudience={setAudience}
                notes={notes}
                setNotes={setNotes}
                onPublish={handlePublish}
                showPolishButton={activeKey === 'ai'}
              />
            </div>

            {/* Live Parent Mobile App Frame */}
            <FamilyAppPhoneMockup
              lang={lang}
              setLang={setLang}
              acknowledged={acknowledged}
              setAcknowledged={setAcknowledged}
              mobileTab={mobileTab}
              setMobileTab={setMobileTab}
              latestNoticeTitle={publishedBanner ? 'New Circular Published' : 'School Remains Closed Today'}
            />
          </div>
        )}

        {effectiveTab === 'Parent Inbox' && (
          <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.07em' }}>MONITORED TWO-WAY CHANNEL</div>
                <strong style={{ fontSize: '1.25rem', color: '#111827' }}>Parent Inbox</strong>
              </div>
              <span style={{ fontSize: '0.74rem', color: '#6B7280', background: '#F9FAFB', border: '1px solid #E5E7EB', padding: '0.3rem 0.7rem', borderRadius: '999px' }}>
                ○ Staff personal phone numbers remain private
              </span>
            </div>

            <div className={styles.previewGrid2} style={{ gap: 0 }}>
              <div style={{ borderRight: '1px solid #E5E7EB', padding: '1rem', display: 'grid', gap: '0.75rem', alignContent: 'start' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280' }}>CONVERSATIONS (2) · CLASS 8A</div>
                <div style={{ padding: '0.75rem', borderRadius: '10px', background: '#F8F7F4', border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#6B7280' }}>
                    <strong style={{ color: '#111827' }}>Meera Sharma</strong>
                    <span>22 Nov · 13:04</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#111827', marginTop: '0.2rem' }}>
                    Question about Sports Day arrangements
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#4B5563', marginTop: '0.15rem' }}>
                    Yes, parents are welcome to attend. Please arrive at the main gate by 8:30...
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem', display: 'grid', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F3F4F6', paddingBottom: '0.6rem' }}>
                  <div>
                    <strong style={{ fontSize: '0.92rem', color: '#111827' }}>Question about Sports Day arrangements</strong>
                    <div style={{ fontSize: '0.74rem', color: '#6B7280' }}>Meera Sharma · Guardian of Aarav Sharma (Class 8A)</div>
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#059669', background: '#D1FAE5', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>
                    ● Synced to Parent App
                  </span>
                </div>

                <div style={{ background: '#F3F4F6', borderRadius: '10px', padding: '0.65rem 0.85rem', fontSize: '0.82rem', color: '#111827', maxWidth: '85%' }}>
                  Will parents be able to attend the Annual Sports Day event on 5 December?
                  <div style={{ fontSize: '0.66rem', color: '#6B7280', marginTop: '0.2rem' }}>Meera Sharma · 22 Nov · 13:01</div>
                </div>

                {sentReplies.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#111827',
                      color: '#FFFFFF',
                      borderRadius: '10px',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.82rem',
                      marginLeft: 'auto',
                      maxWidth: '85%',
                    }}
                  >
                    {msg}
                    <div style={{ fontSize: '0.66rem', color: '#D1D5DB', marginTop: '0.2rem' }}>Ritika Kapoor · 22 Nov · 13:04</div>
                  </div>
                ))}

                <form onSubmit={handleSendReply} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Reply to Meera Sharma..."
                    style={{
                      flex: 1,
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.8rem',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '0.5rem 0.9rem',
                      borderRadius: '8px',
                      border: 'none',
                      background: '#111827',
                      color: '#FFFFFF',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      cursor: 'pointer',
                    }}
                  >
                    Send Reply <Send size={12} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {effectiveTab === 'Insights' && (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em', color: '#6B7280', textTransform: 'uppercase' }}>
                LEADERSHIP &amp; OPERATIONS VISIBILITY
              </div>
              <h4 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#111827', fontFamily: 'var(--font-display)' }}>
                Management Intelligence
              </h4>
            </div>

            <div className={styles.previewGrid3}>
              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1.1rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280' }}>CIRCULAR READ RATES</div>
                <div className={styles.metricValue}>97%</div>
                <p style={{ fontSize: '0.78rem', color: '#4B5563', marginTop: '0.35rem' }}>
                  1,214 / 1,247 parents acknowledged Library Reading Week; live pending queue tracked per notice.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1.1rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280' }}>ATTENDANCE &amp; CHECK-INS</div>
                <div className={styles.metricValue}>94%</div>
                <p style={{ fontSize: '0.78rem', color: '#4B5563', marginTop: '0.35rem' }}>
                  Term attendance with daily morning check-in timestamps (e.g. Present · 8:12 AM) across classes.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1.1rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280' }}>PENDING WORK &amp; SCHEDULE</div>
                <div className={styles.metricValue}>02</div>
                <p style={{ fontSize: '0.78rem', color: '#4B5563', marginTop: '0.35rem' }}>
                  Active parent threads and upcoming milestones (25 Nov Math Assessment · 28 Nov PTM).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SolutionSection() {
  const [selectedPillar, setSelectedPillar] = useState<PillarKey>('operations');

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimateOnScroll>
          <div className={styles.header}>
            <div className="badge badge--indigo">The Solution</div>
            <h2 className="heading-lg">
              One platform. <span className="gradient-text">Four powerful layers.</span>
            </h2>
            <p className="lead" style={{ maxWidth: '560px', textAlign: 'center' }}>
              School247 connects what was previously fragmented — bringing administration,
              communication, and intelligence into a single, coherent system.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {PILLARS.map((p, i) => {
            const isSelected = selectedPillar === p.key;
            return (
              <AnimateOnScroll key={p.title} delay={i * 120}>
                <div
                  className={`${styles.card} ${isSelected ? styles.cardActive : ''}`}
                  onClick={() => setSelectedPillar(p.key)}
                  style={{ '--pillar-color': p.color } as React.CSSProperties}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap}>
                      <span className={styles.icon}>{p.icon}</span>
                    </div>
                    {p.badge && <span className="badge badge--amber">{p.badge}</span>}
                  </div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.desc}</p>
                  <ul className={styles.featureList}>
                    {p.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.cardFooter}>
                    <span className={`${styles.previewHint} ${isSelected ? styles.previewHintActive : ''}`}>
                      {isSelected ? '● Simulating screen below' : 'Simulate screen'}
                    </span>
                    <Link
                      href={p.href}
                      onClick={(e) => e.stopPropagation()}
                      className={styles.exploreLink}
                    >
                      Explore <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={150}>
          <SolutionScreenSimulation activeKey={selectedPillar} />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
