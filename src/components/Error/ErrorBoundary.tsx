import React, { Component } from "react";
import axios, { AxiosError } from "axios";

interface State {
 readonly hasError: boolean;
}

interface Props{
  children?: React.ReactNode | any;
}

export default class ErrorBoundary extends Component<Props,State> {
  state: State = {
     hasError: false,
  };

  componentDidMount() {
    axios.interceptors.response.use(Response=>Response, (error: AxiosError) => {
      const statusCode = error.response ? error.response.status : null;

      if (statusCode === 500) {
        alert("Internal Server Error");
        this.setState({hasError:true})
      }

      return Promise.reject(error);
    });
  }

  render() {
    return this.props.children;
  }
}
