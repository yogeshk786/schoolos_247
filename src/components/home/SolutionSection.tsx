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
type MobileTabKey = 'home' | 'updates' | 'child' | 'leave' | 'ai' | 'inbox';
type WorkspaceTabKey = 'Overview' | 'Updates' | 'Parent Inbox' | 'Insights';

interface PillarConfig {
  key: PillarKey;
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  href: string;
  features: string[];
  badge?: string;
}

interface CircularItem {
  id: string;
  title: string;
  summary: string;
  tag: string;
  audience: string;
  meta: string;
  statusLabel: string;
  isImportant?: boolean;
}

interface InboxMessage {
  sender: 'parent' | 'teacher';
  author: string;
  time: string;
  text: string;
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
  },
  {
    key: 'experience',
    icon: <Users size={24} color="#10B981" />,
    title: 'Parent & Teacher Experience',
    desc: 'Connect parents and teachers through updates, conversations, digital requests and approvals.',
    color: '#10B981',
    href: '/features#parent-mobile-app',
    features: ['Parent mobile app', 'Teacher portal', 'Digital notices', 'Read acknowledgements'],
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
  },
  {
    key: 'intelligence',
    icon: <BarChart3 size={24} color="#F59E0B" />,
    title: 'Management Intelligence',
    desc: 'Give school leadership better visibility into operations, pending work and performance insights.',
    color: '#F59E0B',
    href: '/features#school-administration',
    features: ['Operations dashboard', 'Pending work overview', 'Attendance reports', 'Admission pipeline view'],
  },
];

const INITIAL_CIRCULARS: CircularItem[] = [
  {
    id: 'c1',
    title: 'School Remains Closed Today',
    summary:
      'Due to a district administrative advisory, physical classes remain suspended today for all grades. Online revision sheets for Class 8A are accessible inside the Child tab.',
    tag: 'Important',
    audience: 'All School',
    meta: 'All School · Ritika Kapoor · 26 Nov · 07:30',
    statusLabel: '95% Pending',
    isImportant: true,
  },
  {
    id: 'c2',
    title: 'Library Reading Week Begins Monday',
    summary:
      'Students are invited to participate in Library Reading Week from 30 November to 4 December. Every section has an allotted 45-minute guided session.',
    tag: 'Events',
    audience: 'All School',
    meta: 'All School · Ritika Kapoor · 24 Nov · 13:01',
    statusLabel: '97% Seen',
  },
  {
    id: 'c3',
    title: 'Winter Uniform Mandatory From Monday',
    summary:
      'Students must report in complete winter uniform starting Monday, 30 November. Please label blazers and sweaters with the student admission number.',
    tag: 'Circular',
    audience: 'All School',
    meta: 'All School · Ritika Kapoor · 23 Nov · 13:00',
    statusLabel: '96% Seen',
  },
];

const INITIAL_MESSAGES: InboxMessage[] = [
  {
    sender: 'parent',
    author: 'Meera Sharma',
    time: '22 Nov · 13:01',
    text: 'Will parents be able to attend the Annual Sports Day event on 5 December?',
  },
  {
    sender: 'teacher',
    author: 'Ritika Kapoor',
    time: '22 Nov · 13:04',
    text: 'Yes, parents are welcome to attend. Please arrive at the main gate by 8:30 AM; visitor passes will be issued at reception.',
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
        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em', color: '#059669', textTransform: 'uppercase' }}>
          ● Live Syncs to Phone
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
            <option>Circular</option>
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
          placeholder="e.g. ptm saturday 9am to 12pm room 8a bring signed report card"
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
  acknowledgedIds,
  onToggleAcknowledge,
  mobileTab,
  setMobileTab,
  circulars,
  messages,
  onSendParentMessage,
  attendancePct,
  homeworkPending,
}: {
  lang: 'EN' | 'HI';
  setLang: (l: 'EN' | 'HI') => void;
  acknowledgedIds: Record<string, boolean>;
  onToggleAcknowledge: (id: string) => void;
  mobileTab: MobileTabKey;
  setMobileTab: (t: MobileTabKey) => void;
  circulars: CircularItem[];
  messages: InboxMessage[];
  onSendParentMessage: (text: string) => void;
  attendancePct: number;
  homeworkPending: number;
}) {
  const [parentInput, setParentInput] = useState('');
  const [aiQuery, setAiQuery] = useState('');
  const [aiAnswer, setAiAnswer] = useState(
    'Aarav has 94% term attendance (47/50 days), 2 pending homework tasks (Math Ex 5.2 due tomorrow), and next exam is Mathematics on 25 Nov.'
  );

  const latestCircular = circulars[0];
  const isLatestAck = latestCircular ? !!acknowledgedIds[latestCircular.id] : false;

  const handleParentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentInput.trim()) return;
    onSendParentMessage(parentInput.trim());
    setParentInput('');
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;
    const q = aiQuery.toLowerCase();
    if (q.includes('fee')) {
      setAiAnswer('Fee status for Aarav Sharma (Class 8A) is currently Up to date.');
    } else if (q.includes('exam') || q.includes('ptm')) {
      setAiAnswer('Next exam is Mathematics on 25 Nov, followed by Parent-Teacher Meeting on 28 Nov at 09:00 AM.');
    } else {
      setAiAnswer(`Latest notice: "${latestCircular?.title}" (${latestCircular?.meta}).`);
    }
    setAiQuery('');
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '372px',
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
      <div style={{ padding: '0.85rem', display: 'grid', gap: '0.75rem', minHeight: '440px', alignContent: 'start' }}>
        {mobileTab === 'home' && (
          <>
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
                  {lang === 'EN' ? 'TERM ATTENDANCE' : 'सत्र उपस्थिति'}
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
                {attendancePct}%
              </div>
              <div style={{ fontSize: '0.75rem', color: '#D4D4D8', marginBottom: '0.65rem' }}>
                47 days present · 3 days absent
              </div>
              <div style={{ height: '5px', borderRadius: '999px', background: '#27272A', overflow: 'hidden' }}>
                <div style={{ width: `${attendancePct}%`, height: '100%', background: '#E11D48', borderRadius: '999px' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '0.75rem', border: '1px solid #ECECE8' }}>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>TODAY&apos;S CHECK-IN</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#059669', marginTop: '0.2rem' }}>Present · 8:12 AM</div>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '0.75rem', border: '1px solid #ECECE8' }}>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>HOMEWORK</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#DC2626', marginTop: '0.2rem' }}>
                  {homeworkPending} pending
                </div>
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

            {latestCircular && (
              <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '0.85rem', border: '1px solid #ECECE8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>
                  <span>{lang === 'EN' ? 'LATEST NOTICE' : 'नवीनतम सूचना'}</span>
                  <button
                    type="button"
                    onClick={() => setMobileTab('updates')}
                    style={{ background: 'none', border: 'none', color: '#DC2626', fontWeight: 700, fontSize: '0.66rem', cursor: 'pointer' }}
                  >
                    ALL ({circulars.length + 1})
                  </button>
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#111827', marginTop: '0.3rem' }}>
                  {latestCircular.title}
                </div>
                <p style={{ fontSize: '0.76rem', color: '#4B5563', marginTop: '0.25rem', lineHeight: 1.45 }}>
                  {latestCircular.summary}
                </p>
                <div style={{ marginTop: '0.7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: '#6B7280' }}>{latestCircular.audience}</span>
                  <button
                    type="button"
                    onClick={() => onToggleAcknowledge(latestCircular.id)}
                    style={{
                      padding: '0.38rem 0.85rem',
                      borderRadius: '999px',
                      border: 'none',
                      background: isLatestAck ? '#059669' : '#C81E1E',
                      color: '#FFFFFF',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {isLatestAck ? 'Acknowledged ✓' : 'Acknowledge'}
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {mobileTab === 'updates' && (
          <div style={{ display: 'grid', gap: '0.65rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.88rem', color: '#111827' }}>School Circulars</strong>
              <span style={{ fontSize: '0.68rem', color: '#6B7280', fontWeight: 600 }}>{circulars.length} active</span>
            </div>
            {circulars.map((item) => {
              const ack = !!acknowledgedIds[item.id];
              return (
                <div key={item.id} style={{ background: '#FFFFFF', borderRadius: '14px', padding: '0.75rem', border: '1px solid #ECECE8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: item.isImportant ? '#C23B22' : '#059669' }}>
                      ● {item.tag} · {item.audience}
                    </span>
                    <button
                      type="button"
                      onClick={() => onToggleAcknowledge(item.id)}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        border: 'none',
                        background: ack ? '#059669' : '#C81E1E',
                        color: '#FFFFFF',
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      {ack ? 'Ack ✓' : 'Acknowledge'}
                    </button>
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#111827', marginTop: '0.25rem' }}>{item.title}</div>
                  <p style={{ fontSize: '0.72rem', color: '#4B5563', marginTop: '0.2rem' }}>{item.summary}</p>
                </div>
              );
            })}
          </div>
        )}

        {mobileTab === 'child' && (
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

        {mobileTab === 'leave' && (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '0.85rem', border: '1px solid #ECECE8', display: 'grid', gap: '0.65rem' }}>
            <strong style={{ fontSize: '0.88rem', color: '#111827' }}>Leave &amp; Gate Requests</strong>
            <div style={{ padding: '0.65rem', borderRadius: '10px', background: '#F8F7F4', border: '1px solid #E5E7EB', fontSize: '0.76rem' }}>
              <strong>Sports Day Visitor Pass</strong>
              <div style={{ color: '#4B5563', marginTop: '0.2rem' }}>5 Dec · Main Gate entry at 8:30 AM</div>
              <span style={{ display: 'inline-block', marginTop: '0.35rem', fontSize: '0.66rem', fontWeight: 700, color: '#059669', background: '#D1FAE5', padding: '0.15rem 0.5rem', borderRadius: '999px' }}>
                ● Approved by Class Teacher
              </span>
            </div>
          </div>
        )}

        {mobileTab === 'ai' && (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '0.85rem', border: '1px solid #ECECE8', display: 'grid', gap: '0.65rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', fontWeight: 700, color: '#4F46E5' }}>
              <Sparkles size={14} /> Ask AI (Parent Assistant)
            </div>
            <div style={{ background: '#F8F7F4', borderRadius: '10px', padding: '0.7rem', fontSize: '0.76rem', color: '#1F2937', lineHeight: 1.45 }}>
              {aiAnswer}
            </div>
            <form onSubmit={handleAiSubmit} style={{ display: 'flex', gap: '0.4rem' }}>
              <input
                type="text"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                placeholder="Ask about fees, exam, notice..."
                style={{ flex: 1, padding: '0.45rem 0.65rem', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '0.74rem' }}
              />
              <button
                type="submit"
                style={{ padding: '0.45rem 0.7rem', borderRadius: '8px', border: 'none', background: '#111827', color: '#FFFFFF', fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer' }}
              >
                Ask
              </button>
            </form>
          </div>
        )}

        {mobileTab === 'inbox' && (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '0.85rem', border: '1px solid #ECECE8', display: 'grid', gap: '0.6rem' }}>
            <strong style={{ fontSize: '0.86rem', color: '#111827' }}>Inbox · Ritika Kapoor (Class 8A)</strong>
            <div style={{ display: 'grid', gap: '0.5rem', maxHeight: '240px', overflowY: 'auto' }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    background: msg.sender === 'teacher' ? '#111827' : '#F3F4F6',
                    color: msg.sender === 'teacher' ? '#FFFFFF' : '#111827',
                    borderRadius: '10px',
                    padding: '0.55rem 0.7rem',
                    fontSize: '0.74rem',
                    marginLeft: msg.sender === 'teacher' ? 'auto' : 0,
                    marginRight: msg.sender === 'parent' ? 'auto' : 0,
                    maxWidth: '88%',
                  }}
                >
                  <div>{msg.text}</div>
                  <div style={{ fontSize: '0.6rem', opacity: 0.75, marginTop: '0.2rem' }}>
                    {msg.author} · {msg.time}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleParentSubmit} style={{ display: 'flex', gap: '0.4rem' }}>
              <input
                type="text"
                value={parentInput}
                onChange={(e) => setParentInput(e.target.value)}
                placeholder="Message teacher..."
                style={{ flex: 1, padding: '0.45rem 0.65rem', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '0.74rem' }}
              />
              <button
                type="submit"
                style={{ padding: '0.45rem 0.7rem', borderRadius: '8px', border: 'none', background: '#111827', color: '#FFFFFF', fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer' }}
              >
                Send
              </button>
            </form>
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
          {(
            [
              ['home', 'Home', <Home key="h" size={13} />],
              ['updates', 'Updates', <FileText key="u" size={13} />],
              ['child', 'Child', <User key="c" size={13} />],
              ['leave', 'Leave', <Calendar key="l" size={13} />],
              ['ai', 'Ask AI', <Sparkles key="a" size={13} />],
              ['inbox', 'Inbox', <MessageSquare key="i" size={13} />],
            ] as const
          ).map(([key, label, icon]) => {
            const active = mobileTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setMobileTab(key)}
                style={{
                  background: active ? '#FFFFFF' : 'transparent',
                  color: active ? '#111827' : '#A1A1AA',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.35rem 0.2rem',
                  fontWeight: active ? 700 : 500,
                  fontSize: '0.62rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                {icon}
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SolutionScreenSimulation({ activeKey }: { activeKey: PillarKey }) {
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTabKey>('Overview');
  const [circulars, setCirculars] = useState<CircularItem[]>(INITIAL_CIRCULARS);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('General');
  const [audience, setAudience] = useState('All School');
  const [notes, setNotes] = useState('');
  const [publishedBanner, setPublishedBanner] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [messages, setMessages] = useState<InboxMessage[]>(INITIAL_MESSAGES);
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');
  const [acknowledgedIds, setAcknowledgedIds] = useState<Record<string, boolean>>({});
  const [mobileTab, setMobileTab] = useState<MobileTabKey>('home');

  const handlePublish = () => {
    const cleanTitle = title.trim() || 'Term 1 Parent-Teacher Meeting Schedule';
    const cleanSummary =
      notes.trim() ||
      'Class 8A Parent-Teacher Meeting will be held this Saturday from 9:00 AM to 12:00 PM in Room 8A.';
    const newItem: CircularItem = {
      id: `c_${Date.now()}`,
      title: cleanTitle,
      summary: cleanSummary,
      tag: category,
      audience,
      meta: `${audience} · Ritika Kapoor · Just now`,
      statusLabel: '0% Seen · Just Synced',
      isImportant: category === 'Important',
    };

    setCirculars((prev) => [newItem, ...prev]);
    setPublishedBanner(`Synced "${cleanTitle}" to School247 Family phone in real time.`);
    setTitle('');
    setNotes('');
    setMobileTab('home');
  };

  const handleToggleAcknowledge = (id: string) => {
    setAcknowledgedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSendTeacherReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setMessages((prev) => [
      ...prev,
      { sender: 'teacher', author: 'Ritika Kapoor', time: 'Just now', text: replyText.trim() },
    ]);
    setReplyText('');
  };

  const handleSendParentMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'parent', author: 'Meera Sharma', time: 'Just now', text },
    ]);
  };

  const handleReset = () => {
    setCirculars(INITIAL_CIRCULARS);
    setMessages(INITIAL_MESSAGES);
    setAcknowledgedIds({});
    setPublishedBanner(null);
    setLang('EN');
    setMobileTab('home');
    setWorkspaceTab('Overview');
  };

  const effectiveTab: WorkspaceTabKey =
    activeKey === 'experience' && workspaceTab === 'Overview'
      ? 'Updates'
      : activeKey === 'ai'
      ? 'Updates'
      : activeKey === 'intelligence'
      ? 'Insights'
      : workspaceTab;

  const extraUpdatesCount = circulars.length - INITIAL_CIRCULARS.length;
  const displayedUpdatesCount = 4 + Math.max(0, extraUpdatesCount);
  const ackCount = 3 + Object.values(acknowledgedIds).filter(Boolean).length;
  const displayedAckRatio = `${Math.min(4, ackCount)}/4`;

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
      {/* Top Application Bar */}
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
              ['Updates', `Updates (${displayedUpdatesCount})`],
              ['Parent Inbox', `Parent Inbox (${messages.length})`],
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
            onClick={handleReset}
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

      {/* Split Workspace + Live Synced Phone */}
      <div
        style={{
          padding: '1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start',
        }}
      >
        <div style={{ gridColumn: 'span 2' }} className="workspace-span">
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
                    onClick={() => setMobileTab('updates')}
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
                    Focus Phone Updates ↗
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

              <div className={styles.previewGrid4}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>UPDATES PUBLISHED</div>
                  <div className={styles.metricValue}>{String(displayedUpdatesCount).padStart(2, '0')}</div>
                  <div style={{ fontSize: '0.74rem', color: '#6B7280', marginTop: '0.2rem' }}>Active school circulars</div>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>OPEN CONVERSATIONS</div>
                  <div className={styles.metricValue}>{String(messages.length).padStart(2, '0')}</div>
                  <div style={{ fontSize: '0.74rem', color: '#6B7280', marginTop: '0.2rem' }}>Monitored parent threads</div>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>PARENT ACKNOWLEDGEMENTS</div>
                  <div className={styles.metricValue}>{displayedAckRatio}</div>
                  <div style={{ fontSize: '0.74rem', color: '#6B7280', marginTop: '0.2rem' }}>Meera Sharma live status</div>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#6B7280' }}>CONNECTED CLASSES</div>
                  <div className={styles.metricValue}>24</div>
                  <div style={{ fontSize: '0.74rem', color: '#6B7280', marginTop: '0.2rem' }}>Nursery through Class XII</div>
                </div>
              </div>

              <div className={styles.previewGrid2}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1.15rem', display: 'grid', gap: '0.8rem' }}>
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

                  {circulars.slice(0, 2).map((item) => {
                    const isAck = !!acknowledgedIds[item.id];
                    return (
                      <div key={item.id} style={{ border: '1px solid #F3F4F6', borderRadius: '10px', padding: '0.8rem', background: '#FAFAFA' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: item.isImportant ? '#C23B22' : '#059669' }}>
                            ● {item.tag} · {item.meta}
                          </span>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: isAck ? '#059669' : '#D97706', background: isAck ? '#D1FAE5' : '#FEF3C7', padding: '0.15rem 0.55rem', borderRadius: '999px' }}>
                            ● {isAck ? 'Meera Acknowledged' : item.statusLabel}
                          </span>
                        </div>
                        <div style={{ fontWeight: 700, color: '#111827', marginTop: '0.35rem', fontSize: '0.9rem' }}>{item.title}</div>
                        <p style={{ fontSize: '0.78rem', color: '#4B5563', marginTop: '0.2rem', lineHeight: 1.45 }}>{item.summary}</p>
                      </div>
                    );
                  })}
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
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em', color: '#6B7280', textTransform: 'uppercase' }}>
                  SCHOOL-WIDE &amp; CLASS COMMUNICATION
                </div>
                <h4 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#111827', fontFamily: 'var(--font-display)' }}>
                  Updates &amp; Circular Studio
                </h4>
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

              {circulars.map((item) => {
                const isAck = !!acknowledgedIds[item.id];
                return (
                  <div key={item.id} style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: item.isImportant ? '#C23B22' : '#059669' }}>
                        ● {item.tag}
                      </span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: isAck ? '#059669' : '#D97706', background: isAck ? '#D1FAE5' : '#FEF3C7', padding: '0.15rem 0.6rem', borderRadius: '999px' }}>
                        ● {isAck ? 'Acknowledged on Phone' : item.statusLabel}
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, color: '#111827', marginTop: '0.35rem' }}>{item.title}</div>
                    <p style={{ fontSize: '0.8rem', color: '#4B5563', marginTop: '0.2rem' }}>{item.summary}</p>
                    <div style={{ fontSize: '0.72rem', color: '#6B7280', marginTop: '0.5rem' }}>{item.meta}</div>
                  </div>
                );
              })}
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

              <div style={{ padding: '1rem', display: 'grid', gap: '0.75rem' }}>
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: msg.sender === 'teacher' ? '#111827' : '#F3F4F6',
                      color: msg.sender === 'teacher' ? '#FFFFFF' : '#111827',
                      borderRadius: '10px',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.82rem',
                      marginLeft: msg.sender === 'teacher' ? 'auto' : 0,
                      marginRight: msg.sender === 'parent' ? 'auto' : 0,
                      maxWidth: '85%',
                    }}
                  >
                    <div>{msg.text}</div>
                    <div style={{ fontSize: '0.66rem', opacity: 0.75, marginTop: '0.2rem' }}>
                      {msg.author} · {msg.time}
                    </div>
                  </div>
                ))}

                <form onSubmit={handleSendTeacherReply} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Reply to Meera Sharma (syncs to phone Inbox)..."
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
                    {displayedAckRatio} sample guardians acknowledged · {circulars.length} circulars live on phone.
                  </p>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1.1rem' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280' }}>ATTENDANCE &amp; CHECK-INS</div>
                  <div className={styles.metricValue}>94%</div>
                  <p style={{ fontSize: '0.78rem', color: '#4B5563', marginTop: '0.35rem' }}>
                    Morning check-in timestamps (Present · 8:12 AM) synced to Family Space.
                  </p>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '1.1rem' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280' }}>ACTIVE THREADS</div>
                  <div className={styles.metricValue}>{String(messages.length).padStart(2, '0')}</div>
                  <p style={{ fontSize: '0.78rem', color: '#4B5563', marginTop: '0.35rem' }}>
                    Two-way parent messages synced between workspace and phone.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Always-Visible Real-Time Synced Phone */}
        <div>
          <FamilyAppPhoneMockup
            lang={lang}
            setLang={setLang}
            acknowledgedIds={acknowledgedIds}
            onToggleAcknowledge={handleToggleAcknowledge}
            mobileTab={mobileTab}
            setMobileTab={setMobileTab}
            circulars={circulars}
            messages={messages}
            onSendParentMessage={handleSendParentMessage}
            attendancePct={94}
            homeworkPending={2}
          />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .workspace-span {
            grid-column: span 2;
          }
        }
        @media (max-width: 1023px) {
          .workspace-span {
            grid-column: span 1 !important;
          }
        }
      `}</style>
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
