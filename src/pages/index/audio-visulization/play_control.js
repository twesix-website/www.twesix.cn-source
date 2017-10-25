var control_panel=document.getElementById('control_panel');

var info=document.getElementById('info');
var player=document.getElementById('audio');


player.addEventListener('canplay',function()
{
    info.innerText=info.innerText.split('(正在加载，请稍候...)')[0];
});

var base='//audio.twesix.cn/music/';
function switch_music(data)
{
    player.src=base+data[1];
    info.innerText=data[0]+'(正在加载，请稍候...)';
    player.play();
}

switch_music(music_list[start_from]);