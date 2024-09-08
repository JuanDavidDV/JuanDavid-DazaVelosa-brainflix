//Function creates a dynamic timestamp
export const timeAgo = (timeStampAgo) => {
    let actualDate = new Date();
    let secondsAgo = (actualDate.getTime() - timeStampAgo) / 1000;
        if (secondsAgo < 30) {
            return "Just now";
        } else if(secondsAgo < 60) {
            return parseInt(secondsAgo) + " sec ago";
        } else if (secondsAgo < 3600) {
            return parseInt(secondsAgo / 60) + " mins ago";
        } else if (secondsAgo <= 86400) {
            return parseInt(secondsAgo / 3600) + " hours ago";
        } else if (secondsAgo <= 2628000) {
            return parseInt(secondsAgo / 86400) + " days ago";
        } else if (secondsAgo <= 31536000) {
            return parseInt(secondsAgo / 2628000) + " months ago";
        } else if (secondsAgo > 31536000) {
            return parseInt(secondsAgo / 31536000) + " year ago";
        }
};