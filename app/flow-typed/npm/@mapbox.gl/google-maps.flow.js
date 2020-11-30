/**
 * Flowtype definitions for index
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.11.0
 */

declare module "@deck.gl/google-maps/utils" {
  /**
   * Get a new deck instance
   * @param map (google.maps.Map) - The parent Map instance
   * @param overlay (google.maps.OverlayView) - A maps Overlay instance
   * @param [deck] (Deck) - a previously created instances
   */
  declare export function createDeckInstance(
    map: any,
    overlay: any,
    deck: any
  ): any;

  /**
   * Safely remove a deck instance
   * @param deck (Deck) - a previously created instances
   */
  declare export function destroyDeckInstance(deck: any): void;

  /**
   * Get the current view state
   * @param map (google.maps.Map) - The parent Map instance
   * @param overlay (google.maps.OverlayView) - A maps Overlay instance
   */
  declare export function getViewState(
    map: any,
    overlay: any
  ): {
    width: any,
    height: any,
    left: any,
    top: any,
    zoom: number,
    pitch: any,
    latitude: any,
    longitude: any,
    ...
  };
}

declare module "@deck.gl/google-maps/google-maps-overlay" {
  declare export default class GoogleMapsOverlay {
    constructor(props: any): this;
    setMap(map: any): void;
    setProps(props: any): void;
    pickObject(params: any): any;
    pickMultipleObjects(params: any): any;
    pickObjects(params: any): any;
    finalize(): void;
    _onAdd(): void;
    _onRemove(): void;
    _draw(): void;
  }
}

declare module "@deck.gl/google-maps" {
  declare export { default as GoogleMapsOverlay } from "@deck.gl/google-maps/google-maps-overlay";
}