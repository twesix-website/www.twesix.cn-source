const musicList=[];

// musicList.push('Brand X Music - Extinction')
// musicList.push('Immediate Music - Tales Of The Electric Romeo')
// musicList.push('Two Steps From Hell - El Dorado Dubstep (Remix) - remix')
// musicList.push('Two Steps From Hell - Star Sky')
// musicList.push('Two Steps From Hell - Victory')
// musicList.push('何曼婷、许嵩 - 素颜')
// musicList.push('小沈阳 - 大笑江湖')
// musicList.push('许嵩 - 你若成风')
// musicList.push('许嵩 - 有何不可')

// TODO: fix the bug that only the first song can be fetched

export default musicList

const baseUrl = 'https://wvw.twesix.cn/music'
const playListId = 971042549

const getPlayList = async function(id)
{
    const result = await $.getJSON(`${baseUrl}/playlist/detail?id=${playListId}&timestamp=${new Date().getTime()}`)
    const list = []
    result.playlist.tracks.forEach(function(music)
    {
        list.push
        (
            {
                id: music.id,
                name: music.name,
            }
        )
    })
    return list
}
const getMusicUrl = async function(id)
{
    const result = await $.getJSON(`${baseUrl}/music/url?id=${id}`)
    return result.data[0].url
}

async function init()
{
    const playlist = await getPlayList(playListId)
    playlist.forEach(async function(music)
    {
        music.url = await getMusicUrl(music.id)
        musicList.push(music)
    })
    console.log(musicList)
}

init()