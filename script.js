document.addEventListener("DOMContentLoaded", function () {
  const musicPaths = [
    "/myweb/shei.mp3",
    "/myweb/shanhuhai.mp3",
    “/myweb/kbky.mp3”,
    
    "/myweb/xiaohai.mp3",
    "/myweb/jiangnan.mp3",
    "/myweb/huahai.mp3"
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
