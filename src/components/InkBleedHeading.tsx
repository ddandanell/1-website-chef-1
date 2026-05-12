import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface InkBleedHeadingProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  'data-text'?: string;
}

export default function InkBleedHeading({
  as: Component = 'h2',
  children,
  className = '',
  'data-text': dataText,
}: InkBleedHeadingProps) {
  const ref = useRef<HTMLElement>(null);
  const blurRef = useRef(0);
  const targetBlurRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      // Use scroll speed approximation
      const scrollY = window.scrollY;
      const velocity = Math.abs(scrollY - (handleScroll as any)._lastScrollY || 0);
      (handleScroll as any)._lastScrollY = scrollY;
      targetBlurRef.current = Math.min(velocity * 0.1, 10);
    };

    const animate = () => {
      // Lerp toward target
      blurRef.current += (targetBlurRef.current - blurRef.current) * 0.1;
      // Decay target
      targetBlurRef.current *= 0.95;

      if (el) {
        el.style.setProperty('--blur', `${blurRef.current}px`);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const textContent = dataText || (typeof children === 'string' ? children : '');

  return (
    <Component
      ref={ref as any}
      className={`ink-bleed ${className}`}
      data-text={textContent}
    >
      {children}
    </Component>
  );
}
