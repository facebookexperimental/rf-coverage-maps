/**
 * Flowtype definitions for index
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.11.0
 * @flow
 */

declare module "@luma.gl/constants" {
  declare var DEPTH_BUFFER_BIT: number;
  declare var STENCIL_BUFFER_BIT: number;
  declare var COLOR_BUFFER_BIT: number;
  declare var POINTS: number;
  declare var LINES: number;
  declare var LINE_LOOP: number;
  declare var LINE_STRIP: number;
  declare var TRIANGLES: number;
  declare var TRIANGLE_STRIP: number;
  declare var TRIANGLE_FAN: number;
  declare var ZERO: number;
  declare var ONE: number;
  declare var SRC_COLOR: number;
  declare var ONE_MINUS_SRC_COLOR: number;
  declare var SRC_ALPHA: number;
  declare var ONE_MINUS_SRC_ALPHA: number;
  declare var DST_ALPHA: number;
  declare var ONE_MINUS_DST_ALPHA: number;
  declare var DST_COLOR: number;
  declare var ONE_MINUS_DST_COLOR: number;
  declare var SRC_ALPHA_SATURATE: number;
  declare var CONSTANT_COLOR: number;
  declare var ONE_MINUS_CONSTANT_COLOR: number;
  declare var CONSTANT_ALPHA: number;
  declare var ONE_MINUS_CONSTANT_ALPHA: number;
  declare var FUNC_ADD: number;
  declare var FUNC_SUBTRACT: number;
  declare var FUNC_REVERSE_SUBTRACT: number;
  declare var BLEND_EQUATION: number;
  declare var BLEND_EQUATION_RGB: number;
  declare var BLEND_EQUATION_ALPHA: number;
  declare var BLEND_DST_RGB: number;
  declare var BLEND_SRC_RGB: number;
  declare var BLEND_DST_ALPHA: number;
  declare var BLEND_SRC_ALPHA: number;
  declare var BLEND_COLOR: number;
  declare var ARRAY_BUFFER_BINDING: number;
  declare var ELEMENT_ARRAY_BUFFER_BINDING: number;
  declare var LINE_WIDTH: number;
  declare var ALIASED_POINT_SIZE_RANGE: number;
  declare var ALIASED_LINE_WIDTH_RANGE: number;
  declare var CULL_FACE_MODE: number;
  declare var FRONT_FACE: number;
  declare var DEPTH_RANGE: number;
  declare var DEPTH_WRITEMASK: number;
  declare var DEPTH_CLEAR_VALUE: number;
  declare var DEPTH_FUNC: number;
  declare var STENCIL_CLEAR_VALUE: number;
  declare var STENCIL_FUNC: number;
  declare var STENCIL_FAIL: number;
  declare var STENCIL_PASS_DEPTH_FAIL: number;
  declare var STENCIL_PASS_DEPTH_PASS: number;
  declare var STENCIL_REF: number;
  declare var STENCIL_VALUE_MASK: number;
  declare var STENCIL_WRITEMASK: number;
  declare var STENCIL_BACK_FUNC: number;
  declare var STENCIL_BACK_FAIL: number;
  declare var STENCIL_BACK_PASS_DEPTH_FAIL: number;
  declare var STENCIL_BACK_PASS_DEPTH_PASS: number;
  declare var STENCIL_BACK_REF: number;
  declare var STENCIL_BACK_VALUE_MASK: number;
  declare var STENCIL_BACK_WRITEMASK: number;
  declare var VIEWPORT: number;
  declare var SCISSOR_BOX: number;
  declare var COLOR_CLEAR_VALUE: number;
  declare var COLOR_WRITEMASK: number;
  declare var UNPACK_ALIGNMENT: number;
  declare var PACK_ALIGNMENT: number;
  declare var MAX_TEXTURE_SIZE: number;
  declare var MAX_VIEWPORT_DIMS: number;
  declare var SUBPIXEL_BITS: number;
  declare var RED_BITS: number;
  declare var GREEN_BITS: number;
  declare var BLUE_BITS: number;
  declare var ALPHA_BITS: number;
  declare var DEPTH_BITS: number;
  declare var STENCIL_BITS: number;
  declare var POLYGON_OFFSET_UNITS: number;
  declare var POLYGON_OFFSET_FACTOR: number;
  declare var TEXTURE_BINDING_2D: number;
  declare var SAMPLE_BUFFERS: number;
  declare var SAMPLES: number;
  declare var SAMPLE_COVERAGE_VALUE: number;
  declare var SAMPLE_COVERAGE_INVERT: number;
  declare var COMPRESSED_TEXTURE_FORMATS: number;
  declare var VENDOR: number;
  declare var RENDERER: number;
  declare var VERSION: number;
  declare var IMPLEMENTATION_COLOR_READ_TYPE: number;
  declare var IMPLEMENTATION_COLOR_READ_FORMAT: number;
  declare var BROWSER_DEFAULT_WEBGL: number;
  declare var STATIC_DRAW: number;
  declare var STREAM_DRAW: number;
  declare var DYNAMIC_DRAW: number;
  declare var ARRAY_BUFFER: number;
  declare var ELEMENT_ARRAY_BUFFER: number;
  declare var BUFFER_SIZE: number;
  declare var BUFFER_USAGE: number;
  declare var CURRENT_VERTEX_ATTRIB: number;
  declare var VERTEX_ATTRIB_ARRAY_ENABLED: number;
  declare var VERTEX_ATTRIB_ARRAY_SIZE: number;
  declare var VERTEX_ATTRIB_ARRAY_STRIDE: number;
  declare var VERTEX_ATTRIB_ARRAY_TYPE: number;
  declare var VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
  declare var VERTEX_ATTRIB_ARRAY_POINTER: number;
  declare var VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
  declare var CULL_FACE: number;
  declare var FRONT: number;
  declare var BACK: number;
  declare var FRONT_AND_BACK: number;
  declare var BLEND: number;
  declare var DEPTH_TEST: number;
  declare var DITHER: number;
  declare var POLYGON_OFFSET_FILL: number;
  declare var SAMPLE_ALPHA_TO_COVERAGE: number;
  declare var SAMPLE_COVERAGE: number;
  declare var SCISSOR_TEST: number;
  declare var STENCIL_TEST: number;
  declare var NO_ERROR: number;
  declare var INVALID_ENUM: number;
  declare var INVALID_VALUE: number;
  declare var INVALID_OPERATION: number;
  declare var OUT_OF_MEMORY: number;
  declare var CONTEXT_LOST_WEBGL: number;
  declare var CW: number;
  declare var CCW: number;
  declare var DONT_CARE: number;
  declare var FASTEST: number;
  declare var NICEST: number;
  declare var GENERATE_MIPMAP_HINT: number;
  declare var BYTE: number;
  declare var UNSIGNED_BYTE: number;
  declare var SHORT: number;
  declare var UNSIGNED_SHORT: number;
  declare var INT: number;
  declare var UNSIGNED_INT: number;
  declare var FLOAT: number;
  declare var DOUBLE: number;
  declare var DEPTH_COMPONENT: number;
  declare var ALPHA: number;
  declare var RGB: number;
  declare var RGBA: number;
  declare var LUMINANCE: number;
  declare var LUMINANCE_ALPHA: number;
  declare var UNSIGNED_SHORT_4_4_4_4: number;
  declare var UNSIGNED_SHORT_5_5_5_1: number;
  declare var UNSIGNED_SHORT_5_6_5: number;
  declare var FRAGMENT_SHADER: number;
  declare var VERTEX_SHADER: number;
  declare var COMPILE_STATUS: number;
  declare var DELETE_STATUS: number;
  declare var LINK_STATUS: number;
  declare var VALIDATE_STATUS: number;
  declare var ATTACHED_SHADERS: number;
  declare var ACTIVE_ATTRIBUTES: number;
  declare var ACTIVE_UNIFORMS: number;
  declare var MAX_VERTEX_ATTRIBS: number;
  declare var MAX_VERTEX_UNIFORM_VECTORS: number;
  declare var MAX_VARYING_VECTORS: number;
  declare var MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
  declare var MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
  declare var MAX_TEXTURE_IMAGE_UNITS: number;
  declare var MAX_FRAGMENT_UNIFORM_VECTORS: number;
  declare var SHADER_TYPE: number;
  declare var SHADING_LANGUAGE_VERSION: number;
  declare var CURRENT_PROGRAM: number;
  declare var NEVER: number;
  declare var ALWAYS: number;
  declare var LESS: number;
  declare var EQUAL: number;
  declare var LEQUAL: number;
  declare var GREATER: number;
  declare var GEQUAL: number;
  declare var NOTEQUAL: number;
  declare var KEEP: number;
  declare var REPLACE: number;
  declare var INCR: number;
  declare var DECR: number;
  declare var INVERT: number;
  declare var INCR_WRAP: number;
  declare var DECR_WRAP: number;
  declare var NEAREST: number;
  declare var LINEAR: number;
  declare var NEAREST_MIPMAP_NEAREST: number;
  declare var LINEAR_MIPMAP_NEAREST: number;
  declare var NEAREST_MIPMAP_LINEAR: number;
  declare var LINEAR_MIPMAP_LINEAR: number;
  declare var TEXTURE_MAG_FILTER: number;
  declare var TEXTURE_MIN_FILTER: number;
  declare var TEXTURE_WRAP_S: number;
  declare var TEXTURE_WRAP_T: number;
  declare var TEXTURE_2D: number;
  declare var TEXTURE: number;
  declare var TEXTURE_CUBE_MAP: number;
  declare var TEXTURE_BINDING_CUBE_MAP: number;
  declare var TEXTURE_CUBE_MAP_POSITIVE_X: number;
  declare var TEXTURE_CUBE_MAP_NEGATIVE_X: number;
  declare var TEXTURE_CUBE_MAP_POSITIVE_Y: number;
  declare var TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
  declare var TEXTURE_CUBE_MAP_POSITIVE_Z: number;
  declare var TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
  declare var MAX_CUBE_MAP_TEXTURE_SIZE: number;
  declare var TEXTURE0: number;
  declare var ACTIVE_TEXTURE: number;
  declare var REPEAT: number;
  declare var CLAMP_TO_EDGE: number;
  declare var MIRRORED_REPEAT: number;
  declare var TEXTURE_WIDTH: number;
  declare var TEXTURE_HEIGHT: number;
  declare var FLOAT_VEC2: number;
  declare var FLOAT_VEC3: number;
  declare var FLOAT_VEC4: number;
  declare var INT_VEC2: number;
  declare var INT_VEC3: number;
  declare var INT_VEC4: number;
  declare var BOOL: number;
  declare var BOOL_VEC2: number;
  declare var BOOL_VEC3: number;
  declare var BOOL_VEC4: number;
  declare var FLOAT_MAT2: number;
  declare var FLOAT_MAT3: number;
  declare var FLOAT_MAT4: number;
  declare var SAMPLER_2D: number;
  declare var SAMPLER_CUBE: number;
  declare var LOW_FLOAT: number;
  declare var MEDIUM_FLOAT: number;
  declare var HIGH_FLOAT: number;
  declare var LOW_INT: number;
  declare var MEDIUM_INT: number;
  declare var HIGH_INT: number;
  declare var FRAMEBUFFER: number;
  declare var RENDERBUFFER: number;
  declare var RGBA4: number;
  declare var RGB5_A1: number;
  declare var RGB565: number;
  declare var DEPTH_COMPONENT16: number;
  declare var STENCIL_INDEX: number;
  declare var STENCIL_INDEX8: number;
  declare var DEPTH_STENCIL: number;
  declare var RENDERBUFFER_WIDTH: number;
  declare var RENDERBUFFER_HEIGHT: number;
  declare var RENDERBUFFER_INTERNAL_FORMAT: number;
  declare var RENDERBUFFER_RED_SIZE: number;
  declare var RENDERBUFFER_GREEN_SIZE: number;
  declare var RENDERBUFFER_BLUE_SIZE: number;
  declare var RENDERBUFFER_ALPHA_SIZE: number;
  declare var RENDERBUFFER_DEPTH_SIZE: number;
  declare var RENDERBUFFER_STENCIL_SIZE: number;
  declare var FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
  declare var FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
  declare var FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
  declare var FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
  declare var COLOR_ATTACHMENT0: number;
  declare var DEPTH_ATTACHMENT: number;
  declare var STENCIL_ATTACHMENT: number;
  declare var DEPTH_STENCIL_ATTACHMENT: number;
  declare var NONE: number;
  declare var FRAMEBUFFER_COMPLETE: number;
  declare var FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
  declare var FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
  declare var FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
  declare var FRAMEBUFFER_UNSUPPORTED: number;
  declare var FRAMEBUFFER_BINDING: number;
  declare var RENDERBUFFER_BINDING: number;
  declare var READ_FRAMEBUFFER: number;
  declare var DRAW_FRAMEBUFFER: number;
  declare var MAX_RENDERBUFFER_SIZE: number;
  declare var INVALID_FRAMEBUFFER_OPERATION: number;
  declare var UNPACK_FLIP_Y_WEBGL: number;
  declare var UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
  declare var UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
  declare var READ_BUFFER: number;
  declare var UNPACK_ROW_LENGTH: number;
  declare var UNPACK_SKIP_ROWS: number;
  declare var UNPACK_SKIP_PIXELS: number;
  declare var PACK_ROW_LENGTH: number;
  declare var PACK_SKIP_ROWS: number;
  declare var PACK_SKIP_PIXELS: number;
  declare var TEXTURE_BINDING_3D: number;
  declare var UNPACK_SKIP_IMAGES: number;
  declare var UNPACK_IMAGE_HEIGHT: number;
  declare var MAX_3D_TEXTURE_SIZE: number;
  declare var MAX_ELEMENTS_VERTICES: number;
  declare var MAX_ELEMENTS_INDICES: number;
  declare var MAX_TEXTURE_LOD_BIAS: number;
  declare var MAX_FRAGMENT_UNIFORM_COMPONENTS: number;
  declare var MAX_VERTEX_UNIFORM_COMPONENTS: number;
  declare var MAX_ARRAY_TEXTURE_LAYERS: number;
  declare var MIN_PROGRAM_TEXEL_OFFSET: number;
  declare var MAX_PROGRAM_TEXEL_OFFSET: number;
  declare var MAX_VARYING_COMPONENTS: number;
  declare var FRAGMENT_SHADER_DERIVATIVE_HINT: number;
  declare var RASTERIZER_DISCARD: number;
  declare var VERTEX_ARRAY_BINDING: number;
  declare var MAX_VERTEX_OUTPUT_COMPONENTS: number;
  declare var MAX_FRAGMENT_INPUT_COMPONENTS: number;
  declare var MAX_SERVER_WAIT_TIMEOUT: number;
  declare var MAX_ELEMENT_INDEX: number;
  declare var RED: number;
  declare var RGB8: number;
  declare var RGBA8: number;
  declare var RGB10_A2: number;
  declare var TEXTURE_3D: number;
  declare var TEXTURE_WRAP_R: number;
  declare var TEXTURE_MIN_LOD: number;
  declare var TEXTURE_MAX_LOD: number;
  declare var TEXTURE_BASE_LEVEL: number;
  declare var TEXTURE_MAX_LEVEL: number;
  declare var TEXTURE_COMPARE_MODE: number;
  declare var TEXTURE_COMPARE_FUNC: number;
  declare var SRGB: number;
  declare var SRGB8: number;
  declare var SRGB8_ALPHA8: number;
  declare var COMPARE_REF_TO_TEXTURE: number;
  declare var RGBA32F: number;
  declare var RGB32F: number;
  declare var RGBA16F: number;
  declare var RGB16F: number;
  declare var TEXTURE_2D_ARRAY: number;
  declare var TEXTURE_BINDING_2D_ARRAY: number;
  declare var R11F_G11F_B10F: number;
  declare var RGB9_E5: number;
  declare var RGBA32UI: number;
  declare var RGB32UI: number;
  declare var RGBA16UI: number;
  declare var RGB16UI: number;
  declare var RGBA8UI: number;
  declare var RGB8UI: number;
  declare var RGBA32I: number;
  declare var RGB32I: number;
  declare var RGBA16I: number;
  declare var RGB16I: number;
  declare var RGBA8I: number;
  declare var RGB8I: number;
  declare var RED_INTEGER: number;
  declare var RGB_INTEGER: number;
  declare var RGBA_INTEGER: number;
  declare var R8: number;
  declare var RG8: number;
  declare var R16F: number;
  declare var R32F: number;
  declare var RG16F: number;
  declare var RG32F: number;
  declare var R8I: number;
  declare var R8UI: number;
  declare var R16I: number;
  declare var R16UI: number;
  declare var R32I: number;
  declare var R32UI: number;
  declare var RG8I: number;
  declare var RG8UI: number;
  declare var RG16I: number;
  declare var RG16UI: number;
  declare var RG32I: number;
  declare var RG32UI: number;
  declare var R8_SNORM: number;
  declare var RG8_SNORM: number;
  declare var RGB8_SNORM: number;
  declare var RGBA8_SNORM: number;
  declare var RGB10_A2UI: number;
  declare var TEXTURE_IMMUTABLE_FORMAT: number;
  declare var TEXTURE_IMMUTABLE_LEVELS: number;
  declare var UNSIGNED_INT_2_10_10_10_REV: number;
  declare var UNSIGNED_INT_10F_11F_11F_REV: number;
  declare var UNSIGNED_INT_5_9_9_9_REV: number;
  declare var FLOAT_32_UNSIGNED_INT_24_8_REV: number;
  declare var UNSIGNED_INT_24_8: number;
  declare var HALF_FLOAT: number;
  declare var RG: number;
  declare var RG_INTEGER: number;
  declare var INT_2_10_10_10_REV: number;
  declare var CURRENT_QUERY: number;
  declare var QUERY_RESULT: number;
  declare var QUERY_RESULT_AVAILABLE: number;
  declare var ANY_SAMPLES_PASSED: number;
  declare var ANY_SAMPLES_PASSED_CONSERVATIVE: number;
  declare var MAX_DRAW_BUFFERS: number;
  declare var DRAW_BUFFER0: number;
  declare var DRAW_BUFFER1: number;
  declare var DRAW_BUFFER2: number;
  declare var DRAW_BUFFER3: number;
  declare var DRAW_BUFFER4: number;
  declare var DRAW_BUFFER5: number;
  declare var DRAW_BUFFER6: number;
  declare var DRAW_BUFFER7: number;
  declare var DRAW_BUFFER8: number;
  declare var DRAW_BUFFER9: number;
  declare var DRAW_BUFFER10: number;
  declare var DRAW_BUFFER11: number;
  declare var DRAW_BUFFER12: number;
  declare var DRAW_BUFFER13: number;
  declare var DRAW_BUFFER14: number;
  declare var DRAW_BUFFER15: number;
  declare var MAX_COLOR_ATTACHMENTS: number;
  declare var COLOR_ATTACHMENT1: number;
  declare var COLOR_ATTACHMENT2: number;
  declare var COLOR_ATTACHMENT3: number;
  declare var COLOR_ATTACHMENT4: number;
  declare var COLOR_ATTACHMENT5: number;
  declare var COLOR_ATTACHMENT6: number;
  declare var COLOR_ATTACHMENT7: number;
  declare var COLOR_ATTACHMENT8: number;
  declare var COLOR_ATTACHMENT9: number;
  declare var COLOR_ATTACHMENT10: number;
  declare var COLOR_ATTACHMENT11: number;
  declare var COLOR_ATTACHMENT12: number;
  declare var COLOR_ATTACHMENT13: number;
  declare var COLOR_ATTACHMENT14: number;
  declare var COLOR_ATTACHMENT15: number;
  declare var SAMPLER_3D: number;
  declare var SAMPLER_2D_SHADOW: number;
  declare var SAMPLER_2D_ARRAY: number;
  declare var SAMPLER_2D_ARRAY_SHADOW: number;
  declare var SAMPLER_CUBE_SHADOW: number;
  declare var INT_SAMPLER_2D: number;
  declare var INT_SAMPLER_3D: number;
  declare var INT_SAMPLER_CUBE: number;
  declare var INT_SAMPLER_2D_ARRAY: number;
  declare var UNSIGNED_INT_SAMPLER_2D: number;
  declare var UNSIGNED_INT_SAMPLER_3D: number;
  declare var UNSIGNED_INT_SAMPLER_CUBE: number;
  declare var UNSIGNED_INT_SAMPLER_2D_ARRAY: number;
  declare var MAX_SAMPLES: number;
  declare var SAMPLER_BINDING: number;
  declare var PIXEL_PACK_BUFFER: number;
  declare var PIXEL_UNPACK_BUFFER: number;
  declare var PIXEL_PACK_BUFFER_BINDING: number;
  declare var PIXEL_UNPACK_BUFFER_BINDING: number;
  declare var COPY_READ_BUFFER: number;
  declare var COPY_WRITE_BUFFER: number;
  declare var COPY_READ_BUFFER_BINDING: number;
  declare var COPY_WRITE_BUFFER_BINDING: number;
  declare var FLOAT_MAT2x3: number;
  declare var FLOAT_MAT2x4: number;
  declare var FLOAT_MAT3x2: number;
  declare var FLOAT_MAT3x4: number;
  declare var FLOAT_MAT4x2: number;
  declare var FLOAT_MAT4x3: number;
  declare var UNSIGNED_INT_VEC2: number;
  declare var UNSIGNED_INT_VEC3: number;
  declare var UNSIGNED_INT_VEC4: number;
  declare var UNSIGNED_NORMALIZED: number;
  declare var SIGNED_NORMALIZED: number;
  declare var VERTEX_ATTRIB_ARRAY_INTEGER: number;
  declare var VERTEX_ATTRIB_ARRAY_DIVISOR: number;
  declare var TRANSFORM_FEEDBACK_BUFFER_MODE: number;
  declare var MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: number;
  declare var TRANSFORM_FEEDBACK_VARYINGS: number;
  declare var TRANSFORM_FEEDBACK_BUFFER_START: number;
  declare var TRANSFORM_FEEDBACK_BUFFER_SIZE: number;
  declare var TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: number;
  declare var MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: number;
  declare var MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: number;
  declare var INTERLEAVED_ATTRIBS: number;
  declare var SEPARATE_ATTRIBS: number;
  declare var TRANSFORM_FEEDBACK_BUFFER: number;
  declare var TRANSFORM_FEEDBACK_BUFFER_BINDING: number;
  declare var TRANSFORM_FEEDBACK: number;
  declare var TRANSFORM_FEEDBACK_PAUSED: number;
  declare var TRANSFORM_FEEDBACK_ACTIVE: number;
  declare var TRANSFORM_FEEDBACK_BINDING: number;
  declare var FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: number;
  declare var FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: number;
  declare var FRAMEBUFFER_ATTACHMENT_RED_SIZE: number;
  declare var FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: number;
  declare var FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: number;
  declare var FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: number;
  declare var FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: number;
  declare var FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: number;
  declare var FRAMEBUFFER_DEFAULT: number;
  declare var DEPTH24_STENCIL8: number;
  declare var DRAW_FRAMEBUFFER_BINDING: number;
  declare var READ_FRAMEBUFFER_BINDING: number;
  declare var RENDERBUFFER_SAMPLES: number;
  declare var FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: number;
  declare var FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: number;
  declare var UNIFORM_BUFFER: number;
  declare var UNIFORM_BUFFER_BINDING: number;
  declare var UNIFORM_BUFFER_START: number;
  declare var UNIFORM_BUFFER_SIZE: number;
  declare var MAX_VERTEX_UNIFORM_BLOCKS: number;
  declare var MAX_FRAGMENT_UNIFORM_BLOCKS: number;
  declare var MAX_COMBINED_UNIFORM_BLOCKS: number;
  declare var MAX_UNIFORM_BUFFER_BINDINGS: number;
  declare var MAX_UNIFORM_BLOCK_SIZE: number;
  declare var MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: number;
  declare var MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: number;
  declare var UNIFORM_BUFFER_OFFSET_ALIGNMENT: number;
  declare var ACTIVE_UNIFORM_BLOCKS: number;
  declare var UNIFORM_TYPE: number;
  declare var UNIFORM_SIZE: number;
  declare var UNIFORM_BLOCK_INDEX: number;
  declare var UNIFORM_OFFSET: number;
  declare var UNIFORM_ARRAY_STRIDE: number;
  declare var UNIFORM_MATRIX_STRIDE: number;
  declare var UNIFORM_IS_ROW_MAJOR: number;
  declare var UNIFORM_BLOCK_BINDING: number;
  declare var UNIFORM_BLOCK_DATA_SIZE: number;
  declare var UNIFORM_BLOCK_ACTIVE_UNIFORMS: number;
  declare var UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: number;
  declare var UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: number;
  declare var UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: number;
  declare var OBJECT_TYPE: number;
  declare var SYNC_CONDITION: number;
  declare var SYNC_STATUS: number;
  declare var SYNC_FLAGS: number;
  declare var SYNC_FENCE: number;
  declare var SYNC_GPU_COMMANDS_COMPLETE: number;
  declare var UNSIGNALED: number;
  declare var SIGNALED: number;
  declare var ALREADY_SIGNALED: number;
  declare var TIMEOUT_EXPIRED: number;
  declare var CONDITION_SATISFIED: number;
  declare var WAIT_FAILED: number;
  declare var SYNC_FLUSH_COMMANDS_BIT: number;
  declare var COLOR: number;
  declare var DEPTH: number;
  declare var STENCIL: number;
  declare var MIN: number;
  declare var MAX: number;
  declare var DEPTH_COMPONENT24: number;
  declare var STREAM_READ: number;
  declare var STREAM_COPY: number;
  declare var STATIC_READ: number;
  declare var STATIC_COPY: number;
  declare var DYNAMIC_READ: number;
  declare var DYNAMIC_COPY: number;
  declare var DEPTH_COMPONENT32F: number;
  declare var DEPTH32F_STENCIL8: number;
  declare var INVALID_INDEX: number;
  declare var TIMEOUT_IGNORED: number;
  declare var MAX_CLIENT_WAIT_TIMEOUT_WEBGL: number;
  declare var VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: number;
  declare var UNMASKED_VENDOR_WEBGL: number;
  declare var UNMASKED_RENDERER_WEBGL: number;
  declare var MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
  declare var TEXTURE_MAX_ANISOTROPY_EXT: number;
  declare var COMPRESSED_RGB_S3TC_DXT1_EXT: number;
  declare var COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
  declare var COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
  declare var COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
  declare var COMPRESSED_R11_EAC: number;
  declare var COMPRESSED_SIGNED_R11_EAC: number;
  declare var COMPRESSED_RG11_EAC: number;
  declare var COMPRESSED_SIGNED_RG11_EAC: number;
  declare var COMPRESSED_RGB8_ETC2: number;
  declare var COMPRESSED_RGBA8_ETC2_EAC: number;
  declare var COMPRESSED_SRGB8_ETC2: number;
  declare var COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;
  declare var COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
  declare var COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
  declare var COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;
  declare var COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;
  declare var COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;
  declare var COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;
  declare var COMPRESSED_RGB_ETC1_WEBGL: number;
  declare var COMPRESSED_RGB_ATC_WEBGL: number;
  declare var COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;
  declare var COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;
  declare var UNSIGNED_INT_24_8_WEBGL: number;
  declare var HALF_FLOAT_OES: number;
  declare var RGBA32F_EXT: number;
  declare var RGB32F_EXT: number;
  declare var FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;
  declare var UNSIGNED_NORMALIZED_EXT: number;
  declare var MIN_EXT: number;
  declare var MAX_EXT: number;
  declare var SRGB_EXT: number;
  declare var SRGB_ALPHA_EXT: number;
  declare var SRGB8_ALPHA8_EXT: number;
  declare var FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number;
  declare var FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
  declare var COLOR_ATTACHMENT0_WEBGL: number;
  declare var COLOR_ATTACHMENT1_WEBGL: number;
  declare var COLOR_ATTACHMENT2_WEBGL: number;
  declare var COLOR_ATTACHMENT3_WEBGL: number;
  declare var COLOR_ATTACHMENT4_WEBGL: number;
  declare var COLOR_ATTACHMENT5_WEBGL: number;
  declare var COLOR_ATTACHMENT6_WEBGL: number;
  declare var COLOR_ATTACHMENT7_WEBGL: number;
  declare var COLOR_ATTACHMENT8_WEBGL: number;
  declare var COLOR_ATTACHMENT9_WEBGL: number;
  declare var COLOR_ATTACHMENT10_WEBGL: number;
  declare var COLOR_ATTACHMENT11_WEBGL: number;
  declare var COLOR_ATTACHMENT12_WEBGL: number;
  declare var COLOR_ATTACHMENT13_WEBGL: number;
  declare var COLOR_ATTACHMENT14_WEBGL: number;
  declare var COLOR_ATTACHMENT15_WEBGL: number;
  declare var DRAW_BUFFER0_WEBGL: number;
  declare var DRAW_BUFFER1_WEBGL: number;
  declare var DRAW_BUFFER2_WEBGL: number;
  declare var DRAW_BUFFER3_WEBGL: number;
  declare var DRAW_BUFFER4_WEBGL: number;
  declare var DRAW_BUFFER5_WEBGL: number;
  declare var DRAW_BUFFER6_WEBGL: number;
  declare var DRAW_BUFFER7_WEBGL: number;
  declare var DRAW_BUFFER8_WEBGL: number;
  declare var DRAW_BUFFER9_WEBGL: number;
  declare var DRAW_BUFFER10_WEBGL: number;
  declare var DRAW_BUFFER11_WEBGL: number;
  declare var DRAW_BUFFER12_WEBGL: number;
  declare var DRAW_BUFFER13_WEBGL: number;
  declare var DRAW_BUFFER14_WEBGL: number;
  declare var DRAW_BUFFER15_WEBGL: number;
  declare var MAX_COLOR_ATTACHMENTS_WEBGL: number;
  declare var MAX_DRAW_BUFFERS_WEBGL: number;
  declare var VERTEX_ARRAY_BINDING_OES: number;
  declare var QUERY_COUNTER_BITS_EXT: number;
  declare var CURRENT_QUERY_EXT: number;
  declare var QUERY_RESULT_EXT: number;
  declare var QUERY_RESULT_AVAILABLE_EXT: number;
  declare var TIME_ELAPSED_EXT: number;
  declare var TIMESTAMP_EXT: number;
  declare var GPU_DISJOINT_EXT: number;
}
