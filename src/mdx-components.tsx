import type React from 'react'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

import { Badge } from '@/components/Badge'
import { Callout } from '@/components/Callout'
import { Card, CardGrid } from '@/components/Card'
import { Section } from '@/components/Section'
import { Steps, Step } from '@/components/Steps'
import { Property, Properties } from '@/components/Property'
import { Compatibility } from '@/components/Compatibility'

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
}

export function useMDXComponents(components: Record<string, React.ComponentType> = {}) {
  return {
    ...themeComponents,
    ...custom,
    ...components,
  }
}