const App = (props) => {
    return <div>
        <Tweet username="Happy" user="Camden" message="Happy Tweet!" date="11/01/2024"/>
        <Tweet username="Joy" user="Mike" message="Joy Tweet!" date="11/03/2024"/>
        <Tweet username="Fantastic" user="Rachel" message="Fantastic Tweet!" date="11/05/2024"/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));