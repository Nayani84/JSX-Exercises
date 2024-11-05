const Person = (props) => {
    let vote = true;
    if (props.age < 18) {
        vote = false;
    }

    let newName = props.name;
    if (props.name.length > 8) {
        newName = props.name.substring(0, 6);
    }

    return (
    <div>
        <p>Learn some information about this person.</p>
        <h3>Name : {newName}</h3>
        <h3>Age : {props.age}</h3>
        <h3>Voting : {vote ? "please go vote!" : "you must be 18"}</h3>
        <h3>Hobbies</h3>
        <ul>
            {props.hobbies.map(h => <li>{h}</li>)}
        </ul>
    </div>
);
}