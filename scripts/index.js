

// const BASE_URL = "https://www.googleapis.com/youtube/v3";
// const API_KEY = "AIzaSyDs5BJ8pBLq_x3IO6X9ZicisFqrZqteKpg";

// const container = document.getElementById("videos-container");



// async function getVideos(q) {
//   const url = `${BASE_URL}/search?key=${API_KEY}&q=${q}&type=video&maxResults=20`;
//   const response = await fetch(url, {
//     method: "get",
//   });
//   const data = await response.json();

//   const videos = data.items;
//   await getVideoData(videos);
// }

// async function getVideoData(videos) {
//   let videoData = [];
//   for (let i = 0; i < videos.length; i++) {
//     const video = videos[i];
//     const videoId = video.id.videoId;
//     const videoDetails = await getVideoDetails(videoId);
//     videoData.push(videoDetails);
//   }
//   console.log(videoData);
//   renderVideos(videoData);
// }

// async function getVideoDetails(videoId) {
//   const url = `${BASE_URL}/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`;
//   const response = await fetch(url, {
//     method: "get",
//   });
//   const data = await response.json();

//   return data.items[0];
// }

// function renderVideos(videos) {
//   container.innerHTML = "";
//   for (let i = 0; i < videos.length; i++) {
//     const video = videos[i];
//     // const videoId = video.id;
//      const videoTitle = video.snippet.title;
//      const videoThumbnail = video.snippet.thumbnails.default.url;
//     // const channelTitle = video.snippet.channelTitle;
//     // const viewCount = video.statistics.viewCount;
//     // const publishedAt = video.snippet.publishedAt;

//     container.innerHTML += `
    
//     <div class="video-info" onclick="openVideoDetails(${video.id})">
//          <div class="video-image">
//              <img src="${videoThumbnail}" alt="video image">
//          </div>
//         <div class="video-description">
//              <div class="channel-avatar">
//                  Channel avatar
//              </div>
//              <div class="video-title">
//              ${videoTitle}
//              </div>
//              <div class="channel-description">
//                  <p class="channnel-name">Channel</p>
//                  <p class="video-views">15K Views</p>
//                <p class="video-time">1 week ago</p>
    
//             </div>
//              </div>
//          </div>
//          `;
//   }
// }

// function openVideoDetails(videoId){
//     window.open("/videoDetails.html");
// }

// getVideos("");

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyDs5BJ8pBLq_x3IO6X9ZicisFqrZqteKpg";

const container = document.getElementById("videos-container");

async function getVideos(q) {
  const url = `${BASE_URL}/search?key=${API_KEY}&q=${q}&type=video&maxResults=20`;
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();

  const videos = data.items;
  await getVideoData(videos);
}

async function getVideoData(videos) {
  let videoData = [];
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    const videoId = video.id.videoId;
    const videoDetails = await getVideoDetails(videoId);
    videoData.push(videoDetails);
  }
  console.log(videoData);
  renderVideos(videoData);
}

async function getVideoDetails(videoId) {
  const url = `${BASE_URL}/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`;
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();

  return data.items[0];
}

function renderVideos(videos) {
  container.innerHTML = "";
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    const videoTitle = video.snippet.title;
    const videoThumbnail = video.snippet.thumbnails.default.url;

    container.innerHTML += `
      <div class="video-info" onclick="openVideoDetails('${video.id}')">
        <div class="video-image">
          <img src="${videoThumbnail}" alt="video image">
        </div>
        <div class="video-description">
          <div class="channel-avatar">
            Channel avatar
          </div>
          <div class="video-title">
            ${videoTitle}
          </div>
          <div class="channel-description">
            <p class="channel-name">Channel</p>
            <p class="video-views">15K Views</p>
            <p class="video-time">1 week ago</p>
          </div>
        </div>
      </div>`;
  }
}

function openVideoDetails(videoId) {
  window.open(`/videoDetails.html?id=${videoId}`);
}

getVideos("");
