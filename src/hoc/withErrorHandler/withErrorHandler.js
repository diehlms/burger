import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Ax from '../Ax/Ax'

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        
        componentDidMount() {
            // axios.intereceptors.request.use(req => {
            //     this.setState({error: null})
            //     return req;
            // })
            // axios.intereceptors.response.use(res => res, error => {
            //     this.setState({ error: error });
            // });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        // componentWillUnmount(){
        //     axios.intereceptors.request.eject(this.reqInterceptor);
        //     axios.intereceptors.response.eject(this.resInterceptor);
        // }

        render () {
            return (
                <Ax>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Ax>
            )
        }
    }
}

export default withErrorHandler;
