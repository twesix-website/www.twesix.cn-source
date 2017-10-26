import prototype from '../prototype'

const defaultOptions =
    {
        meterWidth: 20,
        gapWidth: 2,
        capHeight: 3,
        capFallSpeed: 3,
        capColor: '#ff2f3f',
        gradientLength: 1080,
        gradientStartColor: '#5bbeff',
        gradientMiddleColor: '#aad8ff',
        gradientEndColor: '#fb9c7a',
    }
    // TODO: design beautiful gradients

const Spectrum=function(audioSource, canvas, options = {})
{
    const __options = Object.assign(defaultOptions, options)
    if( ! this.__init(this, audioSource, canvas, __options)) return

    this.__calculateSize()

    const gradient=this.__ctx.createLinearGradient(0,0,0,this.__options.gradientLength)
    gradient.addColorStop(1,this.__options.gradientStartColor)
    gradient.addColorStop(0.5,this.__options.gradientMiddleColor)
    gradient.addColorStop(0,this.__options.gradientEndColor)
    this.__options.gradient = gradient

};

Spectrum.prototype=
    {
        __prepareAPI: prototype.prepareAPI,
        __init: prototype.init,
        __clearCanvas: prototype.clearCanvas,
        __getByteFrequencyData: prototype.getByteFrequencyData,
        __calculateSize: function()
        {
            const width = this.__canvas.width
            const meter = this.__options.meterWidth
            const gap = this.__options.gapWidth
            let num
            num = parseInt(width / (meter + gap))
            if(width % (num * (meter + gap)) < meter)
            {
                this.__options.meterNum = num
            }
            else
            {
                this.__options.meterNUm = num + 1
            }
        },
        resize: function()
        {
            const self = this
            self.__calculateSize()
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
            const options = this.__options
            const capPositions=[]
            const capInitialPosition = 0
            const canvas = this.__canvas
            const ctx=this.__ctx;
            const clearCanvas = this.__clearCanvas.bind(this)
            const getByteFrequencyData = this.__getByteFrequencyData.bind(this)
            while(capPositions.length < options.meterNum)
            {
                capPositions.push(capInitialPosition);
            }


            const draw_meter=function()
            {
                const array = getByteFrequencyData();

                const step=Math.round(array.length/options.meterNum);
                clearCanvas();

                for(let i = 0; i < options.meterNum; i ++)
                {
                    const value = array[i * step] / 256 * canvas.height

                    ctx.fillStyle=options.capColor;
                    if(value < capPositions[i])
                    {
                        capPositions[i] =
                            capPositions[i]-options.capFallSpeed > capInitialPosition
                                ?
                                capPositions[i]-options.capFallSpeed
                                :
                                capInitialPosition
                        const x = i * (options.meterWidth + options.gapWidth)
                        const y = canvas.height - capPositions[i] - options.capHeight
                        ctx.fillRect(x, y, options.meterWidth, options.capHeight)
                    }
                    else
                    {
                        const x = i * (options.meterWidth + options.gapWidth)
                        const y = canvas.height - value - options.capHeight
                        ctx.fillRect(x, y, options.meterWidth, options.capHeight)
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
                    // TODO: draw more small rectangles rather than one big
                }
            }
            self.__interval = setInterval(function()
            {
                requestAnimationFrame(draw_meter)
            }, 10)
        }
    };

export default Spectrum