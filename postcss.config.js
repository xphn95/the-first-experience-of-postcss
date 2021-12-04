import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'

export default [
  postcssImport({
    addModulesDirectories: ['node_modules'],
  }),
  postcssMixins({
    // 这里指定到文件夹名, 不要精细到文件名
    mixinsDir: './public/mixins',
  }),
  postcssPresetEnv({
    stage: 0,
    browsers: 'last 2 versions',
  }),
]
