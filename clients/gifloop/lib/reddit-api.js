import jsonp from "jsonp";

class RedditApi {

    load() {
        let url = "http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week";

        return new Promise((resolve, reject) => {
            jsonp(url, {param:"jsonp"}, (error, data) => {
                error ? reject(error) : resolve(data.data.children);
            });
        });
    }
}

export default new RedditApi();
