const prototype = {};

prototype.prepareAPI = function()
{
    window.AudioContext =
        window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        msAudioContext
    window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame
    try
    {
        new window.AudioContext()
        return true
    }
    catch(e)
    {
        console.log(e)
        alert('浏览器颜值太低, 音乐不想来见你 ！');
        return false
    }
}

prototype.init = function(that, audioSource, canvas, options)
{
    if( ! this.__prepareAPI())
    {
        return false
    }

    that.__audioSource=audioSource;
    that.__canvas = canvas
    const __options = options
    that.__options = __options

    that.__ctx = that.__canvas.getContext('2d')
    that.__audioContext= new window.AudioContext()
    that.__dataSource=that.__audioContext.createMediaElementSource(that.__audioSource);

    that.__analyser=that.__audioContext.createAnalyser()
    that.__dataSource.connect(that.__analyser)
    that.__analyser.connect(that.__audioContext.destination);

    that.__interval = null

    return true
}

prototype.clearCanvas = function()
{
    this.__ctx.clearRect(0, 0, this.__canvas.width, this.__canvas.height);
}

prototype.getByteFrequencyData = function()
{
    const array=new Uint8Array(this.__analyser.frequencyBinCount);
    this.__analyser.getByteFrequencyData(array);
    return array
}

prototype.loadAudioStream = function(url)
{

}

export default prototype