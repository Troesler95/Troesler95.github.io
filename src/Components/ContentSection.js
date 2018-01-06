import React from 'react';

class ContentSection extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ContentSection;