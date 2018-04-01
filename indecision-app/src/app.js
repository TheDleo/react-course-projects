const appObject = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['Item 1', 'Item 2']
};

const template = (
    <div>
        <h1>{appObject.title}</h1>
        {appObject.subtitle && <p>{appObject.subtitle}</p>}
        <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>{appObject.options[0]}</li>
            <li>{appObject.options[1]}</li>
        </ol>
    </div>
);

const user = {
    name: 'Dan Martin',
    age: 54,
    location: 'Phoenix'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}!</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);