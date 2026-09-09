import type React from 'react'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

import { Badge } from '@/components/Badge'
import { Callout } from '@/components/Callout'
import { Card, CardGrid } from '@/components/Card'
import { Section } from '@/components/Section'
import { Steps, Step } from '@/components/Steps'
import { Property, Properties } from '@/components/Property'
import { Compatibility } from '@/components/Compatibility'
import { ResourceHeader } from '@/components/ResourceHeader'
import { Reference } from '@/components/Reference'
import { Preview, PreviewGrid } from '@/components/Preview'
import { Changelog, Release, Change } from '@/components/Changelog'

const themeComponents = getThemeComponents()

const custom = {
  Badge,
  Callout,
  Card,
  CardGrid,
  Section,
  Steps,
  Step,
  Property,
  Properties,
  Compatibility,
  ResourceHeader,
  Reference,
  Preview,
  PreviewGrid,
  Changelog,
  Release,
  Change,
}

export function useMDXComponents(components: Record<string, React.ComponentType> = {}) {
  return {
    ...themeComponents,
    ...custom,
    ...components,
  }
}