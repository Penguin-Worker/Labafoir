const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const interactiveElements = document.querySelectorAll('.interactive-element');

// Array of audio files and image URLs
const sounds = ['music/01. Morning of D-day.mp3',
     'music/02 Kings Field IV Title Theme.mp3',
     'music/04. Krakow.mp3',
    'music/06. Comintern Theme.mp3',
    'music/14. Mother Russia.mp3',
'music/Hearts of Iron IV - No Step Back-Katyusha -Pre-Order Bonus- OST-textmp3.ru.mp3',
'music/RainBecomesWithPain.mp3',
'music/Scooter - How Much Is The Fish_.mp3',
'music/Status Quo - In The Army Now.mp3',
'music/The C418 Slowed Playlist.mp3'
];
const images = ['musicPic/7eTR6Te2ZII__01.jpg',
     'musicPic/20240517_052331.jpg', 
     'musicPic/bkk.jpg',
     'musicPic/IMG_20240621_192146.jpg',
     'musicPic/IMG_20240906_154013.jpg',
     'musicPic/IMG_20241016_165405.jpg',
     'musicPic/Jx8yWKSqG2E.png',
     'musicPic/sh_agm65a.jpg',
     'musicPic/wallpaperbetter.com_3840x2160.jpg',
     'musicPic/zmCquXxre0k__01.jpg'
    ];

// Функция для переключения Play/Pause
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Функция для смены изображения и звука при клике на элемент
interactiveElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Случайный выбор нового изображения и звука
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

    // Установка изображения в качестве фона элемента
    element.style.backgroundImage = `url(${randomImage})`;
    element.style.backgroundSize = 'cover';

    // Установка и воспроизведение нового звука
    audioPlayer.src = randomSound;
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  });
});