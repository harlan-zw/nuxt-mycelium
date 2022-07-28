import { defineTokens } from '@nuxtjs/design-tokens'

const defaultPalette = {
  darkest: {
    value: '#0d9488',
  },
  darker: {
    value: '#11998e',
  },
  dark: {
    value: '#10b981',
  },
  light: {
    value: '#38ef7d',
  },
  lightest: {
    value: '#23e75e',
  },
}

export default defineTokens({
  colors: {
    primary: defaultPalette,
  },
})
