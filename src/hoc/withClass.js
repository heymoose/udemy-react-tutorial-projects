import React from 'react';

const withClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
}

// This is the same thing but comes with the advantages of using a stateful component (for example if you need lifecycle hooks)
// Note: As with any other class component you need to import Component above for this
// const withClass = (WrappedComponent, className) => {
//     return class extends Component {
//         render() {
//             return (
//                 <div className={className}>
//                     <WrappedComponent {...this.props}/>
//                 </div>
//             )
//         }
//     }
// }

export default withClass;