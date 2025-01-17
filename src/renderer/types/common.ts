import { CSSProperties, ReactNode } from 'react';

// Common interfaces and types used across the application

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
}

export interface WithChildren {
  children: ReactNode;
}

export type BasePropsWithChildren = BaseProps & WithChildren;

// Example of a more specific interface
export interface PageMetadata {
  title: string;
  description?: string;
  keywords?: string[];
}
