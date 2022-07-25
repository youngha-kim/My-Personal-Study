
const _ = require('./underbar.js')

const shout = (...sentences) => {
    return console.log(...sentences);
};

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas feugiat elit, ac tincidunt neque vestibulum at. Mauris a eros sit amet urna efficitur tempus."
const shoutOnce = _.once(shout);

shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);