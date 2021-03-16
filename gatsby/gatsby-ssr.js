exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: 'no-js',
    'data-opacity': 0
  })
}
