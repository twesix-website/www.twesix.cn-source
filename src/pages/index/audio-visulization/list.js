const musicList=[];

musicList.push('Brand X Music - Extinction')
musicList.push('Immediate Music - Tales Of The Electric Romeo')
musicList.push('Two Steps From Hell - El Dorado Dubstep (Remix) - remix')
musicList.push('Two Steps From Hell - Star Sky')
musicList.push('Two Steps From Hell - Victory')

const baseUrl = 'http://cn-twesix-static.oss-cn-beijing.aliyuncs.com/homepage/audio/'
console.log(JSON.parse(JSON.stringify(musicList)))

musicList.forEach(function(e, i)
{
    musicList[i] = baseUrl + e;
})

export default musicList