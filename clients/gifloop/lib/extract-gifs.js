export default (posts) => {
    return posts.map(p => p.data.url)
                .filter(u => /gifv?$/.exec(u))
                .map(u => u.replace(/v$/,""));
};
