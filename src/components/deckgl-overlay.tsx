import { useControl } from "react-map-gl";
import { MapboxOverlay, MapboxOverlayProps } from "@deck.gl/mapbox";

export const DeckGLOverlay = (props: MapboxOverlayProps) => {
  const overlay = useControl<MapboxOverlay | any>(
    () => new MapboxOverlay(props)
  );
  overlay.setProps(props);
  return null;
};
