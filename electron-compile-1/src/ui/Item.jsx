import React, {Component, PropTypes} from 'react';

class Item extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render() {
        const {name} = this.props;

        return (
            <div>
                <div>
                    {name}
                </div>
                <div>
                    Item
                </div>
            </div>
        );
    }
};

module.exports = Item;
