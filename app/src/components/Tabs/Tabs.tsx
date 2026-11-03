"use client";

import { useId, useRef } from "react";
import type { JSX, KeyboardEvent, ReactNode } from "react";
import styles from "./Tabs.module.css";

export type TabItem = { id: string; label: string; content: ReactNode };

export type TabsProps = {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  /** Optional accessible name for the tab list. */
  ariaLabel?: string;
};

/**
 * Controlled, accessible tabs following the WAI-ARIA Authoring Practices
 * "Tabs with automatic activation" pattern:
 * - role=tablist / tab / tabpanel, aria-selected, aria-controls, aria-labelledby
 * - roving tabindex: only the selected tab is in the Tab order
 * - Arrow Left/Right (wrapping), Home and End move focus AND select the tab
 * - DOM ids are index based, so any user supplied tab id is safe
 */
export function Tabs({ tabs, activeId, onChange, ariaLabel }: TabsProps): JSX.Element {
  const baseId = useId();
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const found = tabs.findIndex((t) => t.id === activeId);
  const activeIndex = found === -1 ? 0 : found; // defensive; spec guarantees a match
  const active = tabs[activeIndex];

  const tabDomId = (i: number) => `${baseId}-tab-${i}`;
  const panelDomId = (i: number) => `${baseId}-panel-${i}`;

  function select(index: number) {
    const next = tabs[index];
    if (!next) return;
    buttonRefs.current[index]?.focus();
    if (next.id !== activeId) onChange(next.id);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = tabs.length - 1;
    let target: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        target = index === last ? 0 : index + 1;
        break;
      case "ArrowLeft":
        target = index === 0 ? last : index - 1;
        break;
      case "Home":
        target = 0;
        break;
      case "End":
        target = last;
        break;
      default:
        return;
    }
    event.preventDefault();
    select(target);
  }

  return (
    <div className={styles.tabs}>
      <div role="tablist" aria-label={ariaLabel} aria-orientation="horizontal" className={styles.list}>
        {tabs.map((tab, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={tabDomId(index)}
              aria-selected={selected}
              aria-controls={panelDomId(index)}
              tabIndex={selected ? 0 : -1}
              className={styles.tab}
              onClick={() => onChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {active && (
        <div
          role="tabpanel"
          id={panelDomId(activeIndex)}
          aria-labelledby={tabDomId(activeIndex)}
          tabIndex={0}
          className={styles.panel}
        >
          {active.content}
        </div>
      )}
    </div>
  );
}
