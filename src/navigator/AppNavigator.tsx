import React, { Fragment, Component, Dispatch, FC } from "react";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";
import { RouteEnums } from "./RouteEnums";
import Login from "../containers/Auth/Login/Login";
// import { ApplicationState } from "../store";


interface PropsFromState {}

interface PropsDispatchFromState {}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  hasError:boolean;
}

class AppNavigator extends Component<any, any> {
  state: State = {
    hasError: false,
  };

  Auth: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/${RouteEnums.LOGIN}`} component={Login} />
      </Switch>
    </Fragment>
  );

  App: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/`} component={() => <div>id</div>} exact />
      </Switch>
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

const mapStateToProps: any = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export default connect<any>(mapStateToProps, mapDispatchToProps)(AppNavigator);
