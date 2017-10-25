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

export default prototype