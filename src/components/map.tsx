'use client'

import React, { useState } from 'react'

import Map, { Layer } from 'react-map-gl'
import DeckGL from '@deck.gl/react'
import 'mapbox-gl/dist/mapbox-gl.css'

import {
  lightingEffect,
  material,
  INITIAL_VIEW_STATE,
  colorRange,
  paintLayer,
} from '@/lib/config-map'

export const LocationAggregatorMap = () => {
  return (
    <div>
      <DeckGL effects={[lightingEffect]} initialViewState={INITIAL_VIEW_STATE} controller={true}>
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
