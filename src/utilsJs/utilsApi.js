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

    async postNewVideo(newUploadVideo) {
        try {
            const { data } = await axios.post(this.baseUrl + "/videos/", newUploadVideo);
            return data;
        }
        catch(error) {
            console.error(error);
        }
    };

    async postComment(newComment) {
        try {
            const { data } = await axios.post(this.baseUrl + "/videos/" + this.videoId + "/comments", newComment);
            return data;

        }
        catch(error) {
            console.error(error);
        }
    };

    async deleteComment(commentId) {
        try {
            const { data } = await axios.delete(this.baseUrl + "/videos/" + this.videoId + "/comments/" + commentId);
            return data;
        }
        catch(error) {
            console.error(error);
        }
    };

    async likeVideo() {
        try {
            const { data } = await axios.put(this.baseUrl + "/videos/" + this.videoId + "/likes");
            console.log(data);
            return data;
        }
        catch(error) {
            console.error(error);
        } 
    }
};