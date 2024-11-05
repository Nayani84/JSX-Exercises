const Tweet = (props) => {
    return (
    <div class ="tweet-container">
        <h3 class = "tweet username">{props.username}</h3>
        <h1 class = "tweet message">{props.message}</h1>
        <p class = "tweet info">{props.user} - {props.date}</p>
    </div>
);
}