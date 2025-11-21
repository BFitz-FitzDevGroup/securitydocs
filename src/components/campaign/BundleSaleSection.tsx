'use client'

import { useEffect, useState } from 'react'
import { CountdownTimer } from './CountdownTimer'

interface BundleSaleSectionProps {
  bundleName: string
  discountPercent: number
  originalPrice: number
  salePrice: number
  savings: number
  discountCode: string
}

export function BundleSaleSection({
  bundleName,
  discountPercent,
  originalPrice,
  salePrice,
  savings,
  discountCode
}: BundleSaleSectionProps) {
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
    <div className="bg-red-50 border-2 border-red-600 rounded-xl p-8 mb-8 shadow-lg">
      <div className="text-center">
        <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wide">
          Cyber Week Special
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {discountPercent}% Off {bundleName}
        </h2>
        
        <div className="mb-4">
          <div className="text-5xl md:text-6xl font-bold text-red-600 mb-2">
            <span className="line-through text-gray-400 text-3xl md:text-4xl mr-3">
              ${originalPrice.toFixed(2)}
            </span>
            ${salePrice.toFixed(2)}
          </div>
          <div className="text-xl text-gray-700 font-semibold">
            Save ${savings.toFixed(2)} • Lifetime access
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4 inline-block">
          <div className="text-sm text-gray-600 mb-1">Use discount code at checkout:</div>
          <div className="font-mono text-2xl font-bold text-red-600">
            {discountCode}
          </div>
        </div>

        <CountdownTimer 
          endDate="2025-12-05T23:59:59-08:00"
          className="text-gray-700 text-lg"
        />

        <div className="mt-6 text-sm text-gray-500">
          Our biggest sale of the year. One-time purchase, no subscription required.
        </div>
      </div>
    </div>
  )
}