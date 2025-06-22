'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface Props {
  gaId: string
}

// ✅ Add global type for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function AnalyticsTracker({ gaId }: Props) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', gaId, {
        page_path: pathname,
      })
    }
  }, [pathname, gaId])

  return null
}
