import VideoApi from "./utils";

const fetchVideoDetails = async () => {
    const defaultVideoDetails = new VideoApi();
    const details = await defaultVideoDetails.getVideoDetails();
    console.log(details);
    return details;
}

fetchVideoDetails();