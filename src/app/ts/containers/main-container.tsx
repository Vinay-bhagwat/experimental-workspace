import React from "react";
import { BasicPage } from "../page/basic-page";
import { FooterComponent } from "../components/footer";
import { Header } from "../components/header";
import { Login } from "../components/login";
import { Register } from "../components/register";

interface IMainComponentProps {
  user?: string;
}

export class MainComponent extends React.Component<IMainComponentProps> {
  public render() {
    return (
      <BasicPage
        body={this.getBody(this.props.user)}
        footer={<FooterComponent />}
        header={<Header />}
      />
    );
  }
  public getBody = (user?: string): React.ReactNode => {
    return user ?<Login />:<Register/>;
  };
}
