'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function BlackFridayBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user dismissed the banner
    const dismissed = localStorage.getItem('bf2025-banner-dismissed')
    if (dismissed === 'true') {
      setIsVisible(false)
    }
  }, [])

  // Only show during campaign dates (PST timezone)
  const now = new Date()
  const start = new Date('2025-11-24T06:00:00-08:00')
  const end = new Date('2025-12-05T23:59:59-08:00')

  const isActiveCampaign = now >= start && now <= end

  const handleDismiss = () => {
    localStorage.setItem('cyberweek2025-banner-dismissed', 'true')
    setIsVisible(false)
  }

  // Don't render on server or if dismissed/outside campaign dates
  if (!mounted || !isVisible || !isActiveCampaign) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white relative z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-center">
            <p className="text-base md:text-lg font-bold">
              🎉 Cyber Week Sale: Up to 50% Off All Bundles – Save Big on SOC 2 Compliance
            </p>
            <p className="text-xs md:text-sm mt-1">
              Sale ends December 5th • Use codes{' '}
              <span className="font-mono bg-white text-red-700 px-2 py-0.5 rounded font-bold">
                CYBERWEEK50
              </span>
              {' '}or{' '}
              <span className="font-mono bg-white text-red-700 px-2 py-0.5 rounded font-bold">
                CYBERWEEK40
              </span>
              {' '}at checkout
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 hover:bg-red-800 rounded p-1 transition-colors"
            aria-label="Close banner"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
