import {Component} from "react";
import { Link, Outlet } from "react-router-dom";
import Fallback from "./Fallback";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    //you can log the error to an error report
    console.log(error, info);
    // this.setState({hasError : true, error});
  }

  render() {
    if (this.state.hasError) {
      return <div><h1>Something is wrong ooo</h1><Link to={"/movies"}>Back</Link></div>;
    }

    return <Outlet />;
  }
}

export default ErrorBoundary;
