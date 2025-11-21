'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CountdownTimer } from './CountdownTimer'

export function BlogPromoBanner() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Only show during campaign dates (PST timezone)
  const now = new Date()
  const start = new Date('2025-11-24T06:00:00-08:00')
  const end = new Date('2025-12-05T23:59:59-08:00')

  const isActiveCampaign = now >= start && now <= end

  if (!mounted || !isActiveCampaign) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg my-8 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="text-4xl">🎉</div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">Cyber Week Sale</h3>
          <p className="text-lg mb-3">
            Save up to 50% on all SOC 2 bundles through December 5th
          </p>
          <div className="mb-3 text-sm space-y-1">
            <div>✓ Complete Bundle: 50% off → <strong>$274.95</strong> (code: CYBERWEEK50)</div>
            <div>✓ Individual Bundles: 40% off (code: CYBERWEEK40)</div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-3">
            <Link
              href="/products/complete-bundle?utm_source=blog&utm_medium=banner&utm_campaign=cyberweek2025"
              className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              View All Bundles →
            </Link>
          </div>
          <CountdownTimer 
            endDate="2025-12-05T23:59:59-08:00"
            className="text-white opacity-90"
          />
        </div>
      </div>
    </div>
  )
}
