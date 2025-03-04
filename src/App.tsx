import React from 'react'
import AnimatedHeader from './components/AnimatedHeader'
import GlassCard from './components/GlassCard'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function App() {
  return (
    <div className="dark bg-dark-900 min-h-screen">
      <AnimatedHeader />

      <main className="pt-32 pb-20 container mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <GlassCard>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-metallic-primary to-metallic-secondary bg-clip-text text-transparent">
                Modern Web Design
              </h2>
              <p className="mt-4 text-metallic-secondary text-lg">
                Experience the future of interface design with our glassmorphism implementation.
              </p>
            </GlassCard>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-metallic-primary to-metallic-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200"
              alt="Modern design"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[1,2,3].map((item) => (
            <GlassCard key={item}>
              <div className="h-48 mb-4 bg-dark-800 rounded-lg" />
              <h3 className="text-xl font-semibold text-metallic-primary">Feature {item}</h3>
              <p className="text-metallic-secondary mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </GlassCard>
          ))}
        </div>

        <section className="max-w-2xl mx-auto">
          <GlassCard>
            <form className="space-y-6">
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-dark-800/30 border border-metallic-primary/20 rounded-lg px-4 py-3 text-metallic-secondary focus:border-metallic-primary focus:ring-1 focus:ring-metallic-primary outline-none transition-all"
                  placeholder=" "
                />
                <label 
                  htmlFor="email"
                  className="absolute top-3 left-4 text-metallic-secondary/80 pointer-events-none transition-all"
                >
                  Email address
                </label>
              </div>
              
              <button className="w-full bg-gradient-to-r from-metallic-primary to-metallic-secondary text-dark-900 py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </form>
          </GlassCard>
        </section>
      </main>
    </div>
  )
}
