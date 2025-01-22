import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      className?: string;
      style?: React.CSSProperties;
    }
  }
}
