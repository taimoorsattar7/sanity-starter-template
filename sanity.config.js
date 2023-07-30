// sanity.config.js
import { defineConfig, isDev } from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import {media} from 'sanity-plugin-media'

import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Sanity Starter Template',
  projectId: '8icf7l03',
  dataset: 'production',
  plugins: [
    deskTool(),
    media(),
    ...(isDev ? [visionTool()] : []),
  ],
  schema: {
    types: schemaTypes,
  },
})