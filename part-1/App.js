const App = (props) => {
    return <div>
        <FirstComponent/>
        <NamedComponent name="Mike"/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));