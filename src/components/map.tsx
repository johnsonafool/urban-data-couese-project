'use client'

import Map, { Layer } from 'react-map-gl'
import DeckGL from '@deck.gl/react'
import { GeoJsonLayer } from '@deck.gl/layers'
import 'mapbox-gl/dist/mapbox-gl.css'

import {
  lightingEffect,
  material,
  INITIAL_VIEW_STATE,
  colorRange,
  paintLayer,
} from '@/lib/config-map'

export const LocationAggregatorMap = ({ data }: { data: any }) => {
  const layers = [
    new GeoJsonLayer({
      id: 'geojson-layer',
      data,
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      pointType: 'circle',
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: [0, 200, 0, 20],
      getLineColor: [0, 255, 0, 255],
      getPointRadius: 100,
      getLineWidth: 10,
      getElevation: 30,
      material: material as any,
      transitions: {
        elevationScale: 3000,
      },
    }),
  ]

  return (
    <div>
      <DeckGL
        layers={layers}
        effects={[lightingEffect]}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
      >
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/eltontsern/clriyp8fr007s01rb8ezn1yot"
          interactive
          attributionControl={false}
        >
          <Layer
            id="3d-buildings"
            source="composite"
            source-layer="building"
            filter={['==', 'extrude', 'true']}
            type="fill-extrusion"
            paint={paintLayer}
          />
        </Map>
      </DeckGL>
    </div>
  )
}
