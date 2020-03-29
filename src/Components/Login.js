import React, { Component } from 'react';
import "./Login.css";

export default class Login extends Component {

    render() {
        return (
            <form id="Form1" method="post" runat="server">
                <div id="wrapper">
                    <div className="bgimg">
                        <div id="innerwrapper">
                            <div id="logincontainer" className="directional">
                                <div className="container_lft">
                                </div>
                                <div className="columnwidth46">
                                    <div className="client-logo">
                                    </div>
                                    <div id="ctmcontentcontainer">
                                        <ul className="divcenter" id="tblLogin1" runat="server">
                                        </ul>
                                        <ul className="divcenter" id="tblLogin" runat="server">
                                            <li>
                                                <input type="text" id="Username" name="Username" placeholder="UserName" />
                                            </li>
                                            <li>
                                                <input type="text" id="Password_Text" placeholder="Password" />
                                                <input type="password" id="Password" name="Password" style={{ display: "none" }} />
                                            </li>
                                            <li>
                                                <input type="text" id="Server" name="Server" placeholder="Server" />
                                            </li>
                                            <li>
                                                <input type="text" id="Database" name="Database" placeholder="Database Name" />
                                            </li>
                                            <li><span className="arrow">&nbsp;</span>
                                                <input type="submit" id="cmdLogin" name="cmdLogin" className="loginformbutton" value="LOGIN"
                                                    runat="server" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
