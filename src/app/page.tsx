import { LocationAggregatorMap } from '@/components/map'

export default function Home() {
  return (
    <main className="bg-slate-900">
      <div className="relative min-h-screen">
        <LocationAggregatorMap />
      </div>
    </main>
  )
}
