//This JS file was created to store API calls inside a blueprint Class to keep code DRY and organized 

import axios from "axios";

export default class VideoApi {
    constructor(videoId) {
        this.baseUrl = import.meta.env.VITE_API_URL;
        this.videoId = videoId;
    }

    async getVideoDetails() {
        try {
            const { data } = await axios.get(this.baseUrl + "/videos/" + this.videoId);
            return data;
        }
        catch(error) {
            console.error(error);
        }
    };

    async getNextVideoList() {
        try {
            const { data } = await axios.get(this.baseUrl + "/videos/");
            return data;
        }
        catch(error) {
            console.error(error);
        }
    };

    async postNewVideo() {
        try {

        }
        catch(error) {

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
    };
};