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
  CheckCircle2,
  Clock,
  ShieldCheck,
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
  previewLabel: string;
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
    previewLabel: 'Teacher Workspace & Ops',
  },
  {
    key: 'experience',
    icon: <Users size={24} color="#10B981" />,
    title: 'Parent & Teacher Experience',
    desc: 'Connect parents and teachers through updates, conversations, digital requests and approvals.',
    color: '#10B981',
    href: '/features#parent-mobile-app',
    features: ['Parent mobile app', 'Teacher portal', 'Digital notices', 'Read acknowledgements'],
    previewLabel: 'Circulars, Inbox & Family App',
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
    previewLabel: 'Smart Circular Draft & Ask AI',
  },
  {
    key: 'intelligence',
    icon: <BarChart3 size={24} color="#F59E0B" />,
    title: 'Management Intelligence',
    desc: 'Give school leadership better visibility into operations, pending work and performance insights.',
    color: '#F59E0B',
    href: '/features#school-administration',
    features: ['Operations dashboard', 'Pending work overview', 'Attendance reports', 'Admission pipeline view'],
    previewLabel: 'Read Receipts & Term Insights',
  },
];

function SolutionPreviewStage({ activeKey }: { activeKey: PillarKey }) {
  const [experienceView, setExperienceView] = useState<'circulars' | 'inbox' | 'family'>('circulars');
  const [draftTitle, setDraftTitle] = useState('Term 1 Parent-Teacher Meeting Schedule');
  const [draftNotes, setDraftNotes] = useState('PTM Saturday 9am to 12pm Room 8A; bring signed report card');
  const [polished, setPolished] = useState(false);

  return (
    <div
      style={{
        marginTop: '3rem',
        background: '#F8FAFC',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* Top Workspace Bar matching Aravali Vidya Mandir / School247 */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          paddingBottom: '1rem',
          marginBottom: '1.25rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)' }}>
            Aravali Vidya Mandir
          </span>
          <span style={{ color: 'var(--muted-light)' }}>/</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
            School247 Live Preview
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {PILLARS.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <span
                key={item.key}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.35rem 0.75rem',
                  borderRadius: '999px',
                  background: isActive ? 'var(--navy)' : 'var(--white)',
                  color: isActive ? 'var(--white)' : 'var(--text-secondary)',
                  border: `1px solid ${isActive ? 'var(--navy)' : 'var(--border)'}`,
                }}
              >
                {item.previewLabel}
              </span>
            );
          })}
        </div>
      </div>

      {/* 1. School Operations — Teacher Workspace */}
      {activeKey === 'operations' && (
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                Teacher Workspace · Ritika Kapoor · Class 8A
              </div>
              <h4 style={{ fontSize: '1.35rem', color: 'var(--navy)', marginTop: '0.15rem' }}>
                Good morning, Ritika.
              </h4>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>● LIVE SYNC</span>
          </div>

          <div className="grid-4">
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600 }}>UPDATES PUBLISHED</div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--navy)', fontVariantNumeric: 'tabular-nums' }}>04</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Active school circulars</div>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600 }}>OPEN CONVERSATIONS</div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--navy)', fontVariantNumeric: 'tabular-nums' }}>02</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Monitored parent threads</div>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600 }}>PARENT ACKNOWLEDGEMENTS</div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--navy)', fontVariantNumeric: 'tabular-nums' }}>3/4</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Meera Sharma live status</div>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600 }}>CONNECTED CLASSES</div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--navy)', fontVariantNumeric: 'tabular-nums' }}>24</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Nursery through Class XII</div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Parent & Teacher Experience — Circulars, Parent Inbox & Family App */}
      {activeKey === 'experience' && (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {(
              [
                ['circulars', 'Updates & Circular Studio'],
                ['inbox', 'Parent Inbox (2)'],
                ['family', 'School247 Family App'],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setExperienceView(id)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: experienceView === id ? 'var(--navy)' : '#fff',
                  color: experienceView === id ? '#fff' : 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {experienceView === 'circulars' && (
            <div className="grid-2">
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem', display: 'grid', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge badge--blue">Important</span>
                  <span style={{ fontSize: '0.75rem', color: '#D97706', fontWeight: 600 }}>● 95% Pending</span>
                </div>
                <strong style={{ color: 'var(--navy)' }}>School Remains Closed Today</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Due to a district administrative advisory, physical classes remain suspended today for all grades. Online revision sheets for Class 8A are accessible inside the Child tab.
                </p>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                  Library Reading Week Begins Monday · Winter Uniform Mandatory From Monday
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem', display: 'grid', gap: '0.65rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--muted)' }}>SMART CIRCULAR STUDIO · SYNCS TO PARENT APP</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)' }}>Publish School Update</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: '#F8FAFC', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
                  {draftTitle}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <span className="btn btn--sm btn-primary">Publish Update →</span>
                </div>
              </div>
            </div>
          )}

          {experienceView === 'inbox' && (
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem', display: 'grid', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--muted)' }}>MONITORED TWO-WAY CHANNEL</div>
                  <strong style={{ color: 'var(--navy)' }}>Question about Sports Day arrangements</strong>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Meera Sharma · Guardian of Aarav Sharma (Class 8A)</div>
                </div>
                <span className="badge badge--green">● Synced to Parent App</span>
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.65rem 0.85rem', fontSize: '0.85rem' }}>
                Will parents be able to attend the Annual Sports Day event on 5 December?
              </div>
              <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: '0.5rem', padding: '0.65rem 0.85rem', fontSize: '0.85rem', marginLeft: 'auto', maxWidth: '85%' }}>
                Yes, parents are welcome to attend. Please arrive at the main gate by 8:30 AM; visitor passes will be issued at reception.
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={14} /> Staff personal phone numbers remain private
              </div>
            </div>
          )}

          {experienceView === 'family' && (
            <div className="grid-2">
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1rem', display: 'grid', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--navy)' }}>School247 Family</strong>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>Aarav Sharma · Class 8A · Ritika Kapoor</div>
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '999px', border: '1px solid var(--border)' }}>
                    हिं / EN
                  </span>
                </div>
                <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: '0.75rem', padding: '0.9rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', opacity: 0.8 }}>
                    <span>TERM ATTENDANCE</span>
                    <span style={{ color: '#34D399', fontWeight: 700 }}>● ON TRACK</span>
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.25rem' }}>94%</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>47 days present · 3 days absent</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem' }}>
                  <div style={{ border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.6rem' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>TODAY&apos;S CHECK-IN</div>
                    <strong style={{ color: '#059669' }}>Present · 8:12 AM</strong>
                  </div>
                  <div style={{ border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.6rem' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>FEE STATUS</div>
                    <strong style={{ color: '#059669' }}>Up to date</strong>
                  </div>
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1rem', display: 'grid', gap: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--navy)' }}>Homework &amp; Assignments</strong>
                  <span style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600 }}>CLASS 8A</span>
                </div>
                <div style={{ border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.65rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <strong style={{ fontSize: '0.82rem' }}>Mathematics · Exercise 5.2</strong>
                    <span className="badge badge--amber">Due tomorrow</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.2rem' }}>
                    Complete questions 1–8 in notebook with algebraic verification steps.
                  </p>
                </div>
                <div style={{ border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.65rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <strong style={{ fontSize: '0.82rem' }}>English · Reading Journal</strong>
                    <span className="badge badge--green">Submitted</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.2rem' }}>
                    Submit one-page critical summary of chapter 4.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. AI Operations Assistant */}
      {activeKey === 'ai' && (
        <div className="grid-2">
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem', display: 'grid', gap: '0.65rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--indigo)' }}>
              <Sparkles size={15} /> SMART CIRCULAR STUDIO · POLISH DRAFT (AI)
            </div>
            <input
              type="text"
              value={draftTitle}
              onChange={(e) => {
                setDraftTitle(e.target.value);
                setPolished(false);
              }}
              style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.85rem' }}
            />
            <textarea
              rows={3}
              value={
                polished
                  ? 'Dear Parents, Class 8A Parent-Teacher Meeting will be held this Saturday from 9:00 AM to 12:00 PM in Room 8A. Please carry your child’s signed report card.'
                  : draftNotes
              }
              onChange={(e) => {
                setDraftNotes(e.target.value);
                setPolished(false);
              }}
              style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.85rem' }}
            />
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setPolished((prev) => !prev)}
                className="btn btn--sm btn-secondary"
              >
                {polished ? 'Show Rough Notes' : '✦ Polish Draft (AI)'}
              </button>
              <span className="btn btn--sm btn-primary">
                <Send size={13} /> Publish Update
              </span>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem', display: 'grid', gap: '0.65rem', alignContent: 'start' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)' }}>HUMAN-IN-THE-LOOP GUARDRAILS</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Turn rough teacher notes into clear circulars and answer routine attendance or schedule questions while keeping every outward notice and fee action teacher-approved.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.35rem' }}>
              <div>✓ Drafts circulars from short notes</div>
              <div>✓ Flags unacknowledged urgent notices</div>
              <div>✓ Requires explicit approval before sending</div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Management Intelligence */}
      {activeKey === 'intelligence' && (
        <div className="grid-3">
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)' }}>
              <CheckCircle2 size={15} color="#059669" /> CIRCULAR ACKNOWLEDGEMENTS
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginTop: '0.35rem' }}>97% Seen</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              Library Reading Week: 1,214 / 1,247 acknowledged · 1,184 / 1,247 awaiting on latest notice.
            </p>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)' }}>
              <Clock size={15} color="#2563EB" /> ATTENDANCE &amp; CHECK-INS
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginTop: '0.35rem' }}>94% Term Avg</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              Morning check-in timestamps and term attendance trends visible per student and class.
            </p>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)' }}>
              <BarChart3 size={15} color="#D97706" /> UPCOMING SCHEDULE
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginTop: '0.35rem' }}>25–28 Nov</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              Math Assessment (25 Nov) and Parent-Teacher Meeting (28 Nov) tracked alongside pending work.
            </p>
          </div>
        </div>
      )}
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
                  className={styles.card}
                  onClick={() => setSelectedPillar(p.key)}
                  style={
                    {
                      '--pillar-color': p.color,
                      cursor: 'pointer',
                      borderColor: isSelected ? p.color : undefined,
                      boxShadow: isSelected ? 'var(--shadow-lg)' : undefined,
                    } as React.CSSProperties
                  }
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
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', paddingTop: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isSelected ? p.color : 'var(--muted)' }}>
                      {isSelected ? '● Previewing below' : 'Click to preview'}
                    </span>
                    <Link
                      href={p.href}
                      onClick={(e) => e.stopPropagation()}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 600, color: p.color, textDecoration: 'none' }}
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
          <SolutionPreviewStage activeKey={selectedPillar} />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
