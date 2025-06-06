declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gmp-map": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        center: string
        zoom: number
        "map-id": string
        style?: React.CSSProperties
      }
      "gmp-advanced-marker": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        position?: { lat: number; lng: number }
      }
      "gmpx-place-picker": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        placeholder?: string
      }
      "gmpx-api-loader": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        key: string
        "solution-channel": string
      }
    }
  }
}

declare namespace google.maps {
  class Map {
    constructor(mapDiv: Element, opts?: MapOptions)
    setOptions(options: MapOptions): void
    fitBounds(bounds: LatLngBounds): void
  }
  class InfoWindow {
    constructor(opts?: InfoWindowOptions)
    setContent(content: string | Element): void
    open(map?: Map, anchor?: Element): void
    close(): void
  }
  class LatLngBounds {
    constructor(sw?: LatLng, ne?: LatLng)
  }
  interface MapOptions {
    mapTypeControl?: boolean
    zoomControl?: boolean
    streetViewControl?: boolean
    fullscreenControl?: boolean
    center?: LatLng | LatLngLiteral
    zoom?: number
  }
  interface InfoWindowOptions {
    content?: string | Element
    position?: LatLng | LatLngLiteral
  }
  interface LatLng {
    lat(): number
    lng(): number
  }
  interface LatLngLiteral {
    lat: number
    lng: number
  }
} 