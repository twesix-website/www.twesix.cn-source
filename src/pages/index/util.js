const random = function(min,max)
{
    return Math.round(Math.random()*(max-min+1)+min-0.5);
};

function randomize(arr = [])
{
    arr.sort(function()
    {
        return Math.random() - 0.5
    })
}

export { random, randomize };

// random_test();

function random_test()
{
    var num=[];
    for(var i=0;i<=29;i++)
    {
        num[i]=0;
    }
    for(i=0;i<30000000;i++)
    {
        num[random(0,29)]++;
    }
    console.log(num);
}
