class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide ' : 'Show '} details
                </button>
                {this.state.visibility &&
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appObject = {
//     title: 'Visibility Toggle',
//     subtitle: 'Hey. These are some details you can now see.',
//     options: []
// };

// let visible = false;

// const onToggleVisibility = () => {
//     visible = !visible;
//     console.log(visible);
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{appObject.title}</h1>
//             <button onClick={onToggleVisibility}>{(visible) ? 'Hide' : 'Show'} details</button>
//             {visible && <p>{appObject.subtitle}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();