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
                                    <div id="webserverID" runat="server"></div>
                                    <div id="clientlogoid" className="client-logo" runat="server"></div>
                                    <div id="logintextid" className="logintext" runat="server">
                                    </div>
                                </div>
                                <div className="columnwidth46">
                                    <div className="client-logo">
                                    </div>
                                    <div id="ctmcontentcontainer">
                                        <ul className="divcenter" id="tblLogin1" runat="server">
                                        </ul>
                                        <ul className="divcenter" id="tblLogin" runat="server">
                                            <li>
                                                <input type="text" id="Username" name="Username" placeholder="UserName" onfocus="onFocus(this,'UserName');"
                                                    onblur="onBlur(this,'UserName');" />
                                            </li>
                                            <li>
                                                <input type="text" id="Password_Text" placeholder="Password" onfocus="onFocus(this,'Password','Password');" />
                                                <input type="password" id="Password" name="Password" onblur="onBlur(this,'Password','Password_Text');"
                                                    style={{display: "none"}} />
                                            </li>
                                            <li>
                                                <input type="text" id="Server" name="Server" placeholder="Server" onfocus="onFocus(this,'Server');"
                                                    onblur="onBlur(this,'Server');" />
                                            </li>
                                            <li>
                                                <input type="text" id="Database" name="Database" placeholder="Database Name" onfocus="onFocus(this,'Database Name');"
                                                    onblur="onBlur(this,'Database Name');" />
                                            </li>
                                            <li><span className="arrow">&nbsp;</span>
                                                <input type="submit" id="cmdLogin" name="cmdLogin" className="loginformbutton" value="LOGIN"
                                                    runat="server" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{textAlign: "center"}} id="Div1">
                                </div>
                            </div>
                            <div className="loginshadow">
                                &nbsp;
                                </div>
                        </div>
                    </div>
                </div>

            </form>

        );
    }
}
