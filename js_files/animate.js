

        let a = document.getElementById('js__btn');
        a.addEventListener('click', animeFunc);


        function animeFunc() {

            let animateJs = document.getElementsByClassName('animateJs')[0];

            let position = 0;
            let id = setInterval(frame, 10);

            function frame() {

                if (position === 350) {

                    clearInterval(id);

                } else {

                    position++;
                    animateJs.style.top = position + 'px';
                    animateJs.style.left = position + 'px';
                }
            }
        }