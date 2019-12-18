if(!znui){
    require('znui-react/index.all.js');
}
znui.react.fixCreateReactClass(require('react'), require('create-react-class'));
module.exports = require('./index.js');