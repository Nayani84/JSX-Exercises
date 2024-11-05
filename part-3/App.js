const App = (props) => {
    return <div>
        <Person name="Conrad" age={20} hobbies={['Gaming', 'Reading', 'Watching Movies', 'Hiking', 'SCUBA']}/>
        <Person name="Devon" age={10} hobbies={['Playing', 'Watching Movies', 'Cycling']}/>
        <Person name="Nina" age={40} hobbies={['Reading', 'Singing']}/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));