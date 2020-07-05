class Post {
    constructor(title) {
            this.title = title,
            this.date = new Date()
    }
    toString() {
        console.log(this.title, this.date.toString());
    }
    toRun() {
        console.log("Run");
    }
    sayHello() {
        console.log("Good boy");
    }
}
export default Post;