import React, { Fragment, Component, Dispatch, FC } from "react";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";
import { RouteEnums } from "./RouteEnums";
import { ApplicationState } from "../store";


interface PropsFromState {
  
}

interface PropsDispatchFromState {
 
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
}

class AppNavigator extends Component<any, any> {
  state: State = {
  };

  setSearchQueryValue = (value: string) => {
    this.setState({ searchQuery: value });
  };

  Auth: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/${RouteEnums.LOGIN}`} component={()=>null} />
      </Switch>
    </Fragment>
  );

  App: FC = () => (
    <Fragment>
    
      <Switch>

        <Route
          path={`/`}
          component={() => <div>id</div>}
          exact
        />
      </Switch>
    </Fragment>
  );

  render() {
    const { user } = this.props;

    return user ? <this.App /> : <this.Auth />;
  }
}

const mapStateToProps: any = ({  }: ApplicationState) => ({
 
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(AppNavigator);
