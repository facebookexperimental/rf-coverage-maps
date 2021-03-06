/**
 * Flowtype definitions for index
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.11.0
 * @flow
 */

declare module "@deck.gl/mesh-layers/utils/matrix" {
  declare export var MATRIX_ATTRIBUTES: {
    size: number,
    accessor: string[],
    shaderAttributes: {
      instanceModelMatrix__LOCATION_0: {
        size: number,
        elementOffset: number,
        ...
      },
      instanceModelMatrix__LOCATION_1: {
        size: number,
        elementOffset: number,
        ...
      },
      instanceModelMatrix__LOCATION_2: {
        size: number,
        elementOffset: number,
        ...
      },
      instanceTranslation: {
        size: number,
        elementOffset: number,
        ...
      },
      ...
    },
    update(
      attribute: any,
      x: {
        startRow: any,
        endRow: any,
        ...
      }
    ): void,
    ...
  };
  declare export function shouldComposeModelMatrix(
    viewport: any,
    coordinateSystem: any
  ): boolean;
}

declare module "@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer-vertex.glsl" {
  declare var _default: string;
  declare export default typeof _default;
}

declare module "@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer-fragment.glsl" {
  declare var _default: string;
  declare export default typeof _default;
}

declare module "@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer" {
  import type { Layer } from "@deck.gl/core";

  import type { LayerProps } from "@deck.gl/core/lib/layer";

  import typeof Texture2D from "@luma.gl/webgl/classes/texture-2d";

  import type { RGBAColor } from "@deck.gl/core/utils/color";

  import type { Position3D } from "@deck.gl/core/utils/positions";

  declare export type SimpleMesh = {
    positions: Float32Array;
    normals: Float32Array;
    texCoords: Float32Array;
  }
  declare export type SimpleMeshLayerProps<D> = {
    mesh: SimpleMesh,
    texture?: Texture2D | HTMLImageElement | string,
    sizeScale?: number,
    wireframe?: boolean,
    material?: any,
    getPosition?: (d: D) => Position3D,
    getColor?: ((d: D) => RGBAColor) | RGBAColor,
    getOrientation?: ((d: D) => Coordinates) | Position3D,
    getScale?: ((d: D) => Position3D) | Position3D,
    getTranslation?: ((d: D) => Position3D) | Position3D,
    getTransformMatrix?: ((d: D) => number[][]) | number[][],
    ...
  } & LayerProps<D>;

  declare export default class SimpleMeshLayer<
      D,
      P: SimpleMeshLayerProps<D> = SimpleMeshLayerProps<D>
    >
    mixins Layer<D, P> {
    getShaders(): any;
    initializeState(params: any): void;
    updateState(x: {
      props: P,
      oldProps: P,
      changeFlags: any,
      ...
    }): void;
    finalizeState(): void;
    draw(x: {
      uniforms: any,
      ...
    }): void;
    getModel(mesh: any): any;
    setTexture(image: any): void;
  }
}

declare module "@deck.gl/mesh-layers/scenegraph-layer/gltf-utils" {
  declare export function waitForGLTFAssets(gltfObjects: any): Promise<void>;
}

declare module "@deck.gl/mesh-layers/scenegraph-layer/scenegraph-layer-vertex.glsl" {
  declare var _default: string;
  declare export default typeof _default;
}

declare module "@deck.gl/mesh-layers/scenegraph-layer/scenegraph-layer-fragment.glsl" {
  declare var _default: string;
  declare export default typeof _default;
}

declare module "@deck.gl/mesh-layers/scenegraph-layer/scenegraph-layer" {
  import type { Layer } from "@deck.gl/core";

  import type { LayerProps } from "@deck.gl/core/lib/layer";

  import type { ScenegraphNode } from "@luma.gl/experimental";

  import type { RGBAColor } from "@deck.gl/core/utils/color";

  import type { Position3D } from "@deck.gl/core/utils/positions";

  declare export type ScenegraphLayerProps<D> = {
    scenegraph: URL | ScenegraphNode | Promise<ScenegraphNode>,
    sizeScale?: number,
    _animations?: Object,
    getScene?: (scenegraph: ScenegraphNode) => ScenegraphNode,
    getAnimator?: (scenegraph: ScenegraphNode) => any,
    _lighting?: string,
    getPosition?: (d: D) => Position3D,
    getColor?: ((d: D) => RGBAColor) | RGBAColor,
    getOrientation?: ((d: D) => Coordinates) | Coordinates,
    getScale?: ((d: D) => Coordinates) | Coordinates,
    getTranslation?: ((d: D) => Coordinates) | Coordinates,
    getTransformMatrix?: ((d: D) => number[][]) | number[][],
    sizeMinPixels?: number,
    sizeMaxPixels?: number,
    _imageBasedLightingEnvironment?: any,
    ...
  } & LayerProps<D>;

  declare export default class ScenegraphLayer<
      D,
      P: ScenegraphLayerProps<D> = ScenegraphLayerProps<D>
    >
    mixins Layer<D, P> {
    constructor(props: ScenegraphLayerProps<D>): this;
    initializeState(params: any): void;
    updateState(params: any): void;
    finalizeState(): void;
    _updateScenegraph(props: any): void;
    _applyAllAttributes(scenegraph: any): void;
    _applyAnimationsProp(
      scenegraph: any,
      animator: any,
      animationsProp: any
    ): void;
    _deleteScenegraph(): void;
    getLoadOptions(): {
      gl: any,
      waitForFullLoad: boolean,
      imageBasedLightingEnvironment: any,
      modelOptions: {
        vs: string,
        fs: string,
        modules: any[],
        isInstanced: boolean,
        transpileToGLSL100: boolean,
        ...
      },
      useTangents: boolean,
      ...
    };
    updateAttributes(changedAttributes: any): void;
    draw(x: {
      moduleParameters?: any,
      parameters?: { ... },
      context: any,
      ...
    }): void;
  }
}

declare module "@deck.gl/mesh-layers" {
  declare export { default as SimpleMeshLayer } from "@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer";

  declare export { default as ScenegraphLayer } from "@deck.gl/mesh-layers/scenegraph-layer/scenegraph-layer";
}
