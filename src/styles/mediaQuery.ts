interface Sizes {
  desktop: number;
}

interface Media {
  mobile: string;
  desktop: string;
}

export const BreakPoint: Sizes = {
  desktop: 1024,
} as const;

export const media: Media = {
  mobile: `@media (max-width: ${BreakPoint.desktop}px)`,
  desktop: `@media (min-width: ${BreakPoint.desktop}px)`,
} as const;
