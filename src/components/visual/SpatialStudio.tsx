import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  BedDouble,
  Building2,
  CheckCircle,
  Home,
  LayoutGrid,
  MousePointer2,
  Ruler,
  Sparkles,
  Utensils,
} from 'lucide-react';

type StudioZone = {
  id: string;
  label: string;
  title: string;
  detail: string;
  x: number;
  y: number;
};

type StudioScene = {
  id: 'kitchen' | 'wardrobe' | 'office' | 'living';
  label: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  accent: string;
  softAccent: string;
  stats: Array<[string, string]>;
  zones: StudioZone[];
};

const STUDIO_SCENES: StudioScene[] = [
  {
    id: 'kitchen',
    label: 'Kitchen',
    title: 'Kitchen planning that starts from your real walls',
    description:
      'Move through cabinet zones, appliance space, counter flow and service points before the team prepares the estimate.',
    icon: Utensils,
    accent: '#bd8632',
    softAccent: 'rgba(189, 134, 50, 0.18)',
    stats: [
      ['Wall sizes', 'locked first'],
      ['Storage', 'zone wise'],
      ['Quote', 'after review'],
    ],
    zones: [
      {
        id: 'cabinets',
        label: 'Cabinets',
        title: 'Storage wall',
        detail: 'Tall units, overhead cabinets and drawer banks are mapped after wall sizes are confirmed.',
        x: 43,
        y: 36,
      },
      {
        id: 'counter',
        label: 'Counter',
        title: 'Working triangle',
        detail: 'Counter movement, sink, hob and appliance flow are checked before material selection.',
        x: 58,
        y: 58,
      },
      {
        id: 'services',
        label: 'Services',
        title: 'Electrical and plumbing',
        detail: 'Existing service points are noted so the final plan stays practical for execution.',
        x: 75,
        y: 43,
      },
    ],
  },
  {
    id: 'wardrobe',
    label: 'Wardrobe',
    title: 'Wardrobes planned around daily use',
    description:
      'Switch between shutters, loft, drawers and hanging sections while keeping the room clearance visible.',
    icon: LayoutGrid,
    accent: '#a76d45',
    softAccent: 'rgba(167, 109, 69, 0.18)',
    stats: [
      ['Depth', 'checked'],
      ['Loft', 'optional'],
      ['Clearance', 'planned'],
    ],
    zones: [
      {
        id: 'shutters',
        label: 'Shutters',
        title: 'Door movement',
        detail: 'Sliding or swing shutters are chosen according to available front clearance.',
        x: 42,
        y: 41,
      },
      {
        id: 'drawers',
        label: 'Drawers',
        title: 'Daily storage',
        detail: 'Drawers, shelves and hanging space are divided by how the wardrobe will be used.',
        x: 59,
        y: 61,
      },
      {
        id: 'loft',
        label: 'Loft',
        title: 'Upper storage',
        detail: 'Loft height and shutter size are kept practical for access and long-term use.',
        x: 65,
        y: 30,
      },
    ],
  },
  {
    id: 'office',
    label: 'Office',
    title: 'Commercial interiors with cleaner movement',
    description:
      'Plan workstations, storage, reception flow and cable routes around how the team actually works.',
    icon: Building2,
    accent: '#9a793b',
    softAccent: 'rgba(154, 121, 59, 0.18)',
    stats: [
      ['Team flow', 'mapped'],
      ['Cables', 'planned'],
      ['Storage', 'built in'],
    ],
    zones: [
      {
        id: 'desks',
        label: 'Desks',
        title: 'Workstation layout',
        detail: 'Desk spacing, movement lanes and team count decide the workstation arrangement.',
        x: 44,
        y: 58,
      },
      {
        id: 'storage',
        label: 'Storage',
        title: 'Files and supplies',
        detail: 'Back storage, printer units and display shelves are kept within easy reach.',
        x: 64,
        y: 39,
      },
      {
        id: 'entry',
        label: 'Entry',
        title: 'First impression',
        detail: 'Reception and waiting corners are shaped to feel professional without wasting space.',
        x: 76,
        y: 63,
      },
    ],
  },
  {
    id: 'living',
    label: 'Living',
    title: 'Living rooms with storage, panels and softer light',
    description:
      'Explore TV wall depth, display niches, floating storage and lighting mood before confirming the final scope.',
    icon: Home,
    accent: '#b98b55',
    softAccent: 'rgba(185, 139, 85, 0.18)',
    stats: [
      ['TV wall', 'balanced'],
      ['Panels', 'measured'],
      ['Lighting', 'soft'],
    ],
    zones: [
      {
        id: 'tv',
        label: 'TV Unit',
        title: 'Wall panel and console',
        detail: 'Panel proportions, console height and wiring access are checked together.',
        x: 50,
        y: 42,
      },
      {
        id: 'display',
        label: 'Display',
        title: 'Niche and open shelves',
        detail: 'Open display areas are balanced with closed storage so the wall stays calm.',
        x: 68,
        y: 32,
      },
      {
        id: 'seating',
        label: 'Seating',
        title: 'Room distance',
        detail: 'Viewing distance and walking movement decide the TV wall depth and furniture placement.',
        x: 37,
        y: 68,
      },
    ],
  },
];

export function SpatialStudio() {
  const [activeSceneId, setActiveSceneId] = useState<StudioScene['id']>('kitchen');
  const [activeZoneId, setActiveZoneId] = useState(STUDIO_SCENES[0].zones[0].id);
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const nextTiltRef = useRef({ x: 0, y: 0 });

  const activeScene = STUDIO_SCENES.find((scene) => scene.id === activeSceneId) ?? STUDIO_SCENES[0];
  const activeZone = activeScene.zones.find((zone) => zone.id === activeZoneId) ?? activeScene.zones[0];

  useEffect(() => {
    setActiveZoneId(activeScene.zones[0].id);
  }, [activeScene.id, activeScene.zones]);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section || event.pointerType !== 'mouse') return;

    const rect = section.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    nextTiltRef.current = {
      x: Math.max(-10, Math.min(10, px * 16)),
      y: Math.max(-8, Math.min(8, py * -12)),
    };

    if (frameRef.current) return;
    frameRef.current = window.requestAnimationFrame(() => {
      const next = nextTiltRef.current;
      section.style.setProperty('--studio-tilt-x', `${next.x.toFixed(2)}deg`);
      section.style.setProperty('--studio-tilt-y', `${next.y.toFixed(2)}deg`);
      frameRef.current = null;
    });
  };

  const handlePointerLeave = () => {
    const section = sectionRef.current;
    if (!section) return;
    section.style.setProperty('--studio-tilt-x', '0deg');
    section.style.setProperty('--studio-tilt-y', '0deg');
  };

  return (
    <section
      ref={sectionRef}
      className={`spatial-studio scene-${activeScene.id}`}
      style={
        {
          '--studio-accent': activeScene.accent,
          '--studio-accent-soft': activeScene.softAccent,
        } as React.CSSProperties
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="home-container spatial-studio-grid">
        <div className="spatial-studio-copy">
          <p className="home-kicker">Interactive Design Studio</p>
          <h2>Touch the idea before we build it.</h2>
          <p>
            Choose a room, move your cursor through the scene and inspect the planning points.
            This gives customers a simple first feel of the project journey before site review.
          </p>

          <div className="spatial-control-row" role="tablist" aria-label="Select space type">
            {STUDIO_SCENES.map((scene) => {
              const Icon = scene.icon;
              return (
                <button
                  key={scene.id}
                  type="button"
                  role="tab"
                  aria-selected={scene.id === activeScene.id}
                  className={scene.id === activeScene.id ? 'active' : ''}
                  onClick={() => setActiveSceneId(scene.id)}
                >
                  <Icon size={17} />
                  {scene.label}
                </button>
              );
            })}
          </div>

          <article className="spatial-zone-card">
            <div>
              <span>
                <MousePointer2 size={16} />
                Selected point
              </span>
              <strong>{activeZone.title}</strong>
            </div>
            <p>{activeZone.detail}</p>
          </article>

          <div className="spatial-stat-grid">
            {activeScene.stats.map(([value, label]) => (
              <div key={`${value}-${label}`}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="spatial-actions">
            <Link to="/ai-planner/start" className="home-button home-button-solid">
              Start My Design Preview
              <ArrowRight size={16} />
            </Link>
            <Link to="/gallery" className="home-button home-button-ghost">
              View Real Work
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="spatial-stage" aria-label={`${activeScene.label} interactive spatial preview`}>
          <div className="spatial-stage-label">
            <Sparkles size={15} />
            {activeScene.title}
          </div>

          <div className="spatial-room-model" aria-hidden="true">
            <span className="spatial-plane spatial-plane-back" />
            <span className="spatial-plane spatial-plane-left" />
            <span className="spatial-plane spatial-plane-right" />
            <span className="spatial-plane spatial-plane-floor" />
            <span className="spatial-light-beam beam-one" />
            <span className="spatial-light-beam beam-two" />
            <span className="spatial-object spatial-object-one" />
            <span className="spatial-object spatial-object-two" />
            <span className="spatial-object spatial-object-three" />
            <span className="spatial-object spatial-object-four" />
            <span className="spatial-measure-line measure-width">
              <Ruler size={13} />
              Fixed width
            </span>
            <span className="spatial-measure-line measure-height">
              <Ruler size={13} />
              Site height
            </span>
          </div>

          <div className="spatial-hotspot-layer">
            {activeScene.zones.map((zone) => (
              <button
                key={zone.id}
                type="button"
                className={zone.id === activeZone.id ? 'active' : ''}
                style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                onClick={() => setActiveZoneId(zone.id)}
                aria-pressed={zone.id === activeZone.id}
              >
                <span />
                {zone.label}
              </button>
            ))}
          </div>

          <div className="spatial-bottom-card">
            <div>
              <CheckCircle size={17} />
              <strong>{activeScene.label} preview mode</strong>
            </div>
            <p>{activeScene.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
