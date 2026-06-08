import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Building2, LayoutGrid, Sparkles, Utensils } from 'lucide-react';
import { canvaVisuals } from '../../data/visualAssets';

const VISUAL_DIRECTIONS = [
  {
    id: 'journey',
    label: 'Preview Journey',
    title: 'A clearer first look before execution begins',
    copy:
      'See how a real site photo can move into an imagination preview, then into a designer-reviewed quotation and execution plan.',
    image: canvaVisuals.aiJourney,
    icon: Sparkles,
    tags: ['Photo to preview', 'Designer review', 'Quotation path'],
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    title: 'A warmer way to plan your kitchen',
    copy:
      'Explore modular kitchen ideas with storage, countertop direction, finish mood and practical service planning considered together.',
    image: canvaVisuals.kitchenVisual,
    icon: Utensils,
    tags: ['Tall storage', 'Counter flow', 'Warm finishes'],
  },
  {
    id: 'wardrobe',
    label: 'Wardrobe',
    title: 'Storage that belongs to the room',
    copy:
      'Look at wardrobe and bedroom storage ideas with shutter style, drawer zones, loft use and overall room calm in one view.',
    image: canvaVisuals.wardrobeVisual,
    icon: LayoutGrid,
    tags: ['Loft storage', 'Drawer zones', 'Bedroom calm'],
  },
  {
    id: 'office',
    label: 'Office',
    title: 'Commercial spaces with a softer premium tone',
    copy:
      'Plan workstations, reception areas, storage and cable-managed execution with a clean professional mood from the start.',
    image: canvaVisuals.office,
    icon: Building2,
    tags: ['Workstations', 'Reception', 'Cable planning'],
  },
];

export function CanvaVisualShowcase() {
  const [activeId, setActiveId] = useState(VISUAL_DIRECTIONS[0].id);
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const active = VISUAL_DIRECTIONS.find((item) => item.id === activeId) ?? VISUAL_DIRECTIONS[0];

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section || event.pointerType !== 'mouse') return;
    const rect = section.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    if (frameRef.current) return;
    frameRef.current = window.requestAnimationFrame(() => {
      section.style.setProperty('--canva-x', `${(x * 18).toFixed(2)}px`);
      section.style.setProperty('--canva-y', `${(y * 14).toFixed(2)}px`);
      section.style.setProperty('--canva-tilt', `${(x * 4).toFixed(2)}deg`);
      frameRef.current = null;
    });
  };

  const handlePointerLeave = () => {
    const section = sectionRef.current;
    if (!section) return;
    section.style.setProperty('--canva-x', '0px');
    section.style.setProperty('--canva-y', '0px');
    section.style.setProperty('--canva-tilt', '0deg');
  };

  return (
    <section
      ref={sectionRef}
      className="canva-showcase"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="home-container canva-showcase-grid">
        <div className="canva-showcase-copy">
          <p className="home-kicker">Design Preview Studio</p>
          <h2>See the mood before the work begins.</h2>
          <p>
            Choose a service and explore a richer visual direction for your space. Each preview
            stays connected to the way AlterCraft plans, quotes and executes real work.
          </p>
          <div className="canva-direction-tabs" role="tablist" aria-label="Select visual direction">
            {VISUAL_DIRECTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={item.id === active.id}
                  className={item.id === active.id ? 'active' : ''}
                  onClick={() => setActiveId(item.id)}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="canva-showcase-actions">
            <Link to="/ai-planner/start" className="home-button home-button-solid">
              Start My Design Preview
              <ArrowRight size={16} />
            </Link>
            <Link to="/gallery" className="home-button home-button-ghost">
              View Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="canva-visual-stage">
          <div className="canva-visual-main" key={active.id}>
            <img src={active.image} alt={`${active.label} AlterCraft interior preview board`} />
          </div>
          <article className="canva-visual-note">
            <span>{active.label}</span>
            <h3>{active.title}</h3>
            <p>{active.copy}</p>
            <div>
              {active.tags.map((tag) => (
                <em key={tag}>{tag}</em>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
