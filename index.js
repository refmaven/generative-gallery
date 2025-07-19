const canvas = document.querySelector('canvas')
const gl = canvas.getContext('webgl2')

const program = gl.createProgram()
gl.useProgram(program)