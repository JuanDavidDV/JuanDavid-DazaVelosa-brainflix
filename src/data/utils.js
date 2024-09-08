import axios from "axios"

export default class VideoApi {
    constructor(videoId) {
        this.apiKey = "6d596f9e-9f33-449b-8b6e-a88a7b953d0f";
        this.baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
        this.videoId = videoId;
    }

    async getVideoDetails() {
        try {
            const videoDetailsResult = await axios.get(this.baseUrl + "/videos/" + this.videoId + "?api_key=" + this.apiKey);
            const videoDetailsData = videoDetailsResult.data;
            return videoDetailsData;
        }
        catch(error) {
            console.error(error);
        }
    };

    async getNextVideoList() {
        try {
            const nextVideoList = await axios.get(this.baseUrl + "/videos" + "?api_key=" + this.apiKey);
            const nextVideoListData = nextVideoList.data;
            return nextVideoListData;
        }
        catch(error) {
            console.error(error);
        }
    }

    async postComment(newComment) {
        try {
            const newVideoComment = await axios.post(this.baseUrl + "/videos/" + this.videoId + "/comments" + "?api_key=" + this.apiKey, newComment);
            const newVideoCommentData = newVideoComment.data;
            console.log(newVideoCommentData);
            return newVideoCommentData;

        }
        catch(error) {
            console.error(error);
        }
    }
}

