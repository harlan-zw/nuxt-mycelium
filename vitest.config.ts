import { resolve } from 'path'
import type { AliasOptions } from 'vite'
import { defineConfig } from 'vite'

const r = (p: string) => resolve(__dirname, p)

export const alias: AliasOptions = {
  'chonky-pkg': r('./packages/chonky-pkg'),
  '@chonky-pkg/core': r('./packages/core/src'),
}

export default defineConfig({
  resolve: {
    alias,
  },
})
