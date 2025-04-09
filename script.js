document.addEventListener("DOMContentLoaded", function () {
  const musicPaths = [
    "musci/shei.mp3",
    "musci/shanhuhai.mp3",
    "musci/buyihan.mp3",
    "musci/xiaohai.mp3",
  ];
  let currentMusicIndex = 0;
  let isPlayed = false;
  const audio = document.getElementById("myAudio");

  document.addEventListener("click", function () {
    if (!isPlayed) {
      playNextMusic();
      isPlayed = true;
    }
  });

  function playNextMusic() {
    const currentPath = musicPaths[currentMusicIndex];
    audio.src = currentPath;
    audio.load(); // 重新加载音频文件
    audio
      .play()
      .then(() => {
        audio.addEventListener("ended", function () {
          currentMusicIndex = (currentMusicIndex + 1) % musicPaths.length;
          playNextMusic();
        });
      })
      .catch((error) => {
        console.error("播放错误:", error);
      });
  }
});
