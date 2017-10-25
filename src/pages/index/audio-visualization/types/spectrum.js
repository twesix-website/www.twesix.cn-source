import prototype from '../prototype'

const defaultOptions =
    {
        meterWidth: 20,
        gapWidth: 2,
        capHeight: 2,
        capFallSpeed: 3,
        capColor: '#ff2f3f',
        gradientLength: 1080,
        gradientStartColor: '#22ff7d',
        gradientMiddleColor: '#55caff',
        gradientEndColor: '#a84cff',
    }



const Spectrum=function(audioSource, canvas, options = {})
{
    if( ! this.__prepareAPI())
    {
        return
    }

    this.audioSource=audioSource;
    this.canvas = canvas
    options = Object.assign(defaultOptions, options)
    this.options = options

    this.ctx = canvas.getContext('2d')

    const gradient=this.ctx.createLinearGradient(0,0,0,options.gradientLength)
    gradient.addColorStop(1,options.gradientStartColor)
    gradient.addColorStop(0.5,options.gradientMiddleColor)
    gradient.addColorStop(0,options.gradientEndColor)
    options.gradient = gradient

    options.meterNum = parseInt(canvas.width)/(options.meterWidth + options.gapWidth)
    this.audioContext= new window.AudioContext()
    this.dataSource=this.audioContext.createMediaElementSource(this.audioSource);

    this.__analyser=this.audioContext.createAnalyser()
    this.dataSource.connect(this.__analyser)
    this.__analyser.connect(this.audioContext.destination);

    this.__interval = null
};

Spectrum.prototype=
    {
        __prepareAPI: prototype.prepareAPI,

        __addEventListeners:function()
        {
            const that=this;
            this.audioSource.addEventListener('play',function()
            {

            });
            this.audioSource.addEventListener('pause',function()
            {
                that.dataSource.disconnect();
            });
        },
        start: function()
        {
            this.__draw();
        },
        stop: function()
        {
            clearInterval(this.__interval)
        },
        __draw:function()
        {
            const self = this
            const options = this.options
            const capPositions=[]
            const capInitialPosition = options.capHeight
            const canvas = this.canvas
            const ctx=this.ctx;
            const ratio = 3; // 柱体的高度/音频数据
            while(capPositions.length<options.meterNum)
            {
                capPositions.push(capInitialPosition);
            }
            const draw_meter=function()
            {
                console.log('drawing')
                const array=new Uint8Array(self.__analyser.frequencyBinCount);
                self.__analyser.getByteFrequencyData(array);

                const step=Math.round(array.length/options.meterNum);
                ctx.clearRect(0,0,self.canvas.width,self.canvas.height);

                for(let i = 0 ; i < self.meterNum ; i ++ )
                {
                    const value=array[i*step]*3;

                    ctx.fillStyle=options.capColor;
                    if(value < capPositions[i])
                    {
                        ctx.fillRect
                        (
                            i * (options.meterWidth+options.gapWidth),
                            canvas.height - capPositions[i] + options.capHeight,
                            options.meterWidth,
                            options.capHeight
                        )
                        capPositions[i] =
                            capPositions[i]-options.capFallSpeed > capInitialPosition
                                ?
                                capPositions[i]-options.capFallSpeed
                                :
                                capInitialPosition
                    }
                    else
                    {
                        ctx.fillRect
                        (
                            i * (options.meterWidth+options.gapWidth),
                            canvas.height - value + options.capHeight,
                            options.meterWidth,
                            options.capHeight
                        )
                        capPositions[i] = value;
                    }
                    ctx.fillStyle=options.gradient;
                    ctx.fillRect
                    (
                        i * (options.meterWidth+options.gapWidth),
                        canvas.height-value,
                        options.meterWidth,
                        value
                    )
                }
            }
            self.__interval = setInterval(function()
            {
                requestAnimationFrame(draw_meter)
            }, 10)
        }
    };

export default Spectrum