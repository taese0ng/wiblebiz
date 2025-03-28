interface Sizes {
  desktop: number;
  tablet: number;
}

interface Media {
  mobile: string;
  tablet: string;
  desktop: string;
}

export const BreakPoint: Sizes = {
  desktop: 1024,
  tablet: 745,
} as const;

export const media: Media = {
  mobile: `@media (max-width: ${BreakPoint.tablet}px)`,
  tablet: `@media (max-width: ${BreakPoint.desktop}px)`,
  desktop: `@media (min-width: ${BreakPoint.desktop}px)`,
} as const;
