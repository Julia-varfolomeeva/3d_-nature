// 3D Scroll

let zSpacing = -1000,
		lastPos = zSpacing / 5;
		($frames = document.getElementsByClassName('frame')),
		(frames = Array.from($frames)),
		(zVals = []);

        window.onscroll = function () {
            //При скроле нам нужны определенные переменные например такие как расстояние сверху до текущей позиции
          
            let top = document.documentElement.scrollTop,
              // Теперь нам нужен еще один параметр который будет вычислять последнюю позицию которую мы определили в LastPos минус нащ скролл
              delta = lastPos - top;
          
            lastPos = top;
          
            frames.forEach(function (n, i) {
              zVals.push(i * zSpacing + zSpacing);
              zVals[i] += delta * -5.5; //С помощью индекса -5 мы можем управлять скоростью пролистывания
              let frame = frames[i],
                transform = `translateZ(${zVals[i]}px)`;
                //для плавного затухания слайда: если каждый zVals[i] меньше чем ZSpasing (преобразованный в положительный ) то опасити 1, иначе 0
                opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
              frame.setAttribute(`style`, `transform:${transform};opacity: ${opacity}` );
            });
          };
          
   window.scrollTo(0,1)


   //audio


   let soundButton = document.querySelector('.soundbutton'),
   audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
 soundButton.classList.toggle('paused')
 audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
  soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
  audio.pause()
}


	

	


// 3D Scrool

// //Он отвечает за расстояние по оси Z
// let zSpacing = -1000,
//   //Теперь нас нужна страртовая позиция
//   lastPos = zSpacing / 5;
// //Здесь важно использовать getElementsByClassName или getElementsById а не Document.querySelectorA чтобы можно было работать с ним как с массивом и применять другие различные свойтсва
// ($frames = document.getElementsByClassName("frame")),
//   //Мы ищем все элементы на странице и преобразуем их в массив
//   (frames = Array.from($frames)),
//   //Создаем массив который мы далее будем наполнять значениями по оси Z
//   (zVals = []);

// window.onscroll = function () {
//   //При скроле нам нужны определенные переменные например такие как расстояние сверху до текущей позиции

//   let top = document.documentElement.scrollTop,
//     // Теперь нам нужен еще один параметр который будет вычислять последнюю позицию которую мы определили в LastPos минус нащ скролл
//     delta = lastPos - top;

//   lastPos = top;

//   frames.forEach(function (n, i) {
//     zVals.push(i * zSpacing + zSpacing);
//     zVals[i] += delta * -5; //С помощью индекса -5 мы можем управлять скоростью пролистывания
//     let frame = frames[i],
//       transform = `translateZ(${zVals[i]}px)`;
//     frame.setAttribute(`style`, `transform:${transform}`);
//   });
// };