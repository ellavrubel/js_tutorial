// Stop/Watch object

// properties: duration, reset, start, stop

// initially duration is 0   if sw.start or stop twice - error "Stopwatch has already started,  program should counting from start to stop; reset - initial state of the program


function Stopwatch() {

    let startTime,
        endTime,
        running,
        duration = 0;

    this.start = function () {

        if(running)
            throw new Error('SW has already started.');

        running = true;
        startTime = new Date();
    };


    this.stop = function () {

        if (!running)
            throw new Error('SW is not started.');

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };




    this.reset = function () {

        startTime = null;
        endTime = null;
        running = false;
        duration = 0;

    };

    Object.defineProperty(this, 'duration',{

        get: () => duration

    });

}

    const sw = new Stopwatch();

