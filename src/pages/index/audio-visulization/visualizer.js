const Visualizer=function(audio_source,ctx)
{
    this.audio_context=null;
    this.audio_source=audio_source;
    this.ctx=ctx;

    this.__prepare_api();
    this.data_source=this.audio_context.createMediaElementSource(this.audio_source);
    this.__visualize();
};
Visualizer.prototype=
    {
        __prepare_api:function()
        {
            window.AudioContext=window.AudioContext || window.webkitAudioContext || window.mozAudioContext || msAudioContext;
            window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
            try
            {
                this.audio_context = new window.AudioContext();
            }
            catch (e)
            {
                console.log('Your browser does not support AudioContext !');
            }
        },
        __add_event_listeners:function()
        {
            var that=this;
            this.audio_source.addEventListener('play',function()
            {

            });
            this.audio_source.addEventListener('pause',function()
            {
                that.data_source.disconnect();
            });
        },
        __visualize:function()
        {
            var analyser=this.audio_context.createAnalyser();

            this.data_source.connect(analyser);
            analyser.connect(this.audio_context.destination);

            this.__draw_spectrum(analyser);
        },
        __draw_spectrum:function(analyser)
        {
            var ctx=this.ctx;
            var draw_meter=function()
            {
                var array=new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                var step=Math.round(array.length/meter_num);
                ctx.clearRect(0,0,c_width,c_height);

                for(var i=0;i<meter_num;i++)
                {
                    var value=array[i*step]*3;

                    if(cap_positions.length<Math.round(meter_num))
                    {
                        cap_positions.push(value);
                    }
                    ctx.fillStyle=cap_style;
                    if(value<cap_positions[i])
                    {
                        cap_positions[i]=cap_positions[i]-cap_fall_speed>0?cap_positions[i]-cap_fall_speed:0;
                        ctx.fillRect(i*(meter_width+gap_width),c_height-cap_positions[i]-cap_height,meter_width,cap_height);
                    }
                    else
                    {
                        ctx.fillRect(i*(meter_width+gap_width),c_height-value-cap_height,meter_width,cap_height);
                        cap_positions[i]=value;
                    }
                    ctx.fillStyle=gradient;
                    ctx.fillRect(i*(meter_width+gap_width),c_height-value,meter_width,value);
                }
                requestAnimationFrame(draw_meter);
            };
            requestAnimationFrame(draw_meter);
        }
    };