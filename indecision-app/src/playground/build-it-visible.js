const appObject = {
    title: 'Visibility Toggle',
    subtitle: 'Hey. These are some details you can now see.',
    options: []
};

let visible = false;

const onToggleVisibility = () => {
    visible = !visible;
    console.log(visible);
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            <button onClick={onToggleVisibility}>{(visible) ? 'Hide' : 'Show'} details</button>
            {visible && <p>{appObject.subtitle}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();