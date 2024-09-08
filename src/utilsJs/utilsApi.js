//This JS file was created to store API calls inside a blueprint class in order to keep a good 
//application quality, concise information, and keep code DRY. 

import axios from "axios"

export default class VideoApi {
    constructor(videoId) {
        this.apiKey = "9f775a25-53c7-484d-9f4f-a51936074c66";
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
    };

    async postComment(newComment) {
        try {
            const newVideoComment = await axios.post(this.baseUrl + "/videos/" + this.videoId + "/comments" + "?api_key=" + this.apiKey, newComment);
            const newVideoCommentData = newVideoComment.data;
            return newVideoCommentData;

        }
        catch(error) {
            console.error(error);
        }
    };

    async deleteComment(commentId) {
        try {
            const deleteVideoComment = await axios.delete(this.baseUrl + "/videos/" + this.videoId + "/comments/" + commentId + "?api_key=" + this.apiKey);
            const deleteVideoCommentData = deleteVideoComment.data;
            return deleteVideoCommentData;
        }
        catch(error) {
            console.error(error);
        }
    }
};