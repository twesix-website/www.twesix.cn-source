const baseUrl = 'https://api.twesix.cn/music'
const playListId = 971042549

const getPlayList = async function(id)
{
    const result = await $.getJSON(`${baseUrl}/playlist/detail?id=${playListId}`)
    return result.playlist.tracks
}

async function init()
{
    const playlist = await getPlayList(playListId)
    playlist.forEach(function(music)
    {
        musicList.push(music)
    })
    console.log(musicList)
}

setTimeout(function()
{
    init()
}, 3000)
