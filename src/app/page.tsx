import { promises as fs } from 'fs'
import { LocationAggregatorMap } from '@/components/map'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/district.geojson', 'utf8')
  const data = JSON.parse(file)

  return (
    <main className="bg-slate-900">
      <div className="relative min-h-screen">
        <LocationAggregatorMap data={data} />
      </div>
    </main>
  )
}
