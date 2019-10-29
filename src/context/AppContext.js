import React from 'react';

const AppContext = React.createContext({});

export class ContextProvider extends React.Component {
    state = {
        view: 'Tags'
    }
    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                setView: (newView) => this.setState({
                    view: newView
                })
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
export default AppContext;