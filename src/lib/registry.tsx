'use client';

import React from 'react';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // For static export, we don't need server-side style collection
  // Just return children directly
  return <>{children}</>;
}
