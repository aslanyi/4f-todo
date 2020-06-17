import React from 'react';
import { useDispatch } from 'react-redux';
import useFirebaseAuth from '@utils/useFirebaseAuth';
import { getUser } from '@redux/actions';

const withAuth = (Component) => {
    const WrappedComponent = (props) => {
        const user = useFirebaseAuth();
        const dispatch = useDispatch();
        if (user && user.auth) {
            dispatch(getUser(user));
            return <Component {...props} />;
        }
        return null;
    };

    if (Component.getInitialProps) {
        WrappedComponent.getInitialProps = Component.getInitialProps;
    }

    return WrappedComponent;
};

export default withAuth;
