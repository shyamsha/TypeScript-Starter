import { Fragment, Component, Dispatch, FC } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import { RouteEnums } from "./RouteEnums";
import Login from "../containers/Auth/Login/Login";
import { loginRequest } from "../containers/Auth/actions";
import { ApplicationState } from "../store";
import React from "react";
// import { AuthActionTypes } from "../containers/Auth/types";
// import { ApplicationState } from "../store";

interface PropsFromState {}

interface PropsDispatchFromState {}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  hasError: boolean;
}
interface PropsFromState {
  loading: boolean;
  errors: {};
}

interface PropsDispatchFromState {
  onLogin: typeof loginRequest;
}
class AppNavigator extends Component<any, any> {
  state: State = {
    hasError: false,
  };

  Auth: FC = () => (
    <Fragment>
      <Route
        path={`/${RouteEnums.LOGIN}`}
        element={
          <Login
            loading={false}
            errors={this.props.errors}
            onLogin={this.props.onLogin}
          />
        }
      />
    </Fragment>
  );

  App: FC = () => (
    <Fragment>
      <Route path={`/`} element={<div>id</div>} />
    </Fragment>
  );

  // componentDidMount() {
  //   axios.interceptors.response.use(Response=>Response, (error: AxiosError) => {
  //     const statusCode = error.response ? error.response.status : null;
  //     if (statusCode === 500) {
  //       alert("Internal Server Error");
  //       this.setState({hasError:true})
  //     }

  //     return Promise.reject(error);
  //   });
  // }

  render() {
    const { user } = this.props;

    return user ? <this.App /> : <this.Auth />;
  }
}

const mapStateToProps: any = ({ auth }: ApplicationState) => ({
  loading: auth.loading,
  errors: auth.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onLogin: () => dispatch(loginRequest()),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(AppNavigator);
