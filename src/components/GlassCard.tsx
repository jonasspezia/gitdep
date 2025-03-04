import React from 'react'

export default function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/10 backdrop-blur-glass rounded-xl p-8 shadow-glass 
      border border-white/10 transition-all hover:border-white/20">
      {children}
    </div>
  )
}
