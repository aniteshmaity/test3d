// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Extend the default config properly
config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'cjs', 'mjs'],
  assetExts: [...config.resolver.assetExts, 'glb', 'gltf', 'png', 'jpg'],
};

module.exports = config;
