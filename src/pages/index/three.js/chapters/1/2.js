export default function(canvas)
{
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, canvas.width, canvas.height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()

    renderer.setSize(canvas.width, canvas,height)


}