import React from 'react';
import { Layout, Menu, Card, Row, Col, Button } from 'antd';
const { Header, Content } = Layout;
const PloyMarketHome = () => {
    return (React.createElement(Layout, null,
        React.createElement(Header, null,
            React.createElement("div", { style: { color: 'white', fontSize: '24px' } }, "Polymarket"),
            React.createElement(Menu, { theme: "dark", mode: "horizontal", defaultSelectedKeys: ['1'] },
                React.createElement(Menu.Item, { key: "1" }, "All"),
                React.createElement(Menu.Item, { key: "2" }, "Politics"),
                React.createElement(Menu.Item, { key: "3" }, "Crypto"),
                React.createElement(Menu.Item, { key: "4" }, "Sports"))),
        React.createElement(Content, { style: { padding: '0 50px', marginTop: 64 } },
            React.createElement("div", { style: { background: '#fff', padding: 24, minHeight: 380 } },
                React.createElement(Row, { gutter: 16 },
                    React.createElement(Col, { span: 8 },
                        React.createElement(Card, { title: "2024 Election Forecast", bordered: false },
                            React.createElement(Button, { type: "primary" }, "View"))),
                    React.createElement(Col, { span: 8 },
                        React.createElement(Card, { title: "2024 Presidential Election", bordered: false },
                            React.createElement(Button, { type: "primary" }, "Bet now"))),
                    React.createElement(Col, { span: 8 },
                        React.createElement(Card, { title: "U.S. Recession in 2024?", bordered: false },
                            React.createElement(Button, { type: "primary" }, "Bet now")))),
                React.createElement(Row, { gutter: 16, style: { marginTop: '20px' } },
                    React.createElement(Col, { span: 8 },
                        React.createElement(Card, { title: "Presidential Election Winner 2024", bordered: false },
                            React.createElement(Button, { type: "primary" }, "Bet Yes"),
                            React.createElement(Button, { type: "danger", style: { marginLeft: '10px' } }, "Bet No"))),
                    React.createElement(Col, { span: 8 },
                        React.createElement(Card, { title: "Popular Vote Winner 2024", bordered: false },
                            React.createElement(Button, { type: "primary" }, "Bet Yes"),
                            React.createElement(Button, { type: "danger", style: { marginLeft: '10px' } }, "Bet No"))),
                    React.createElement(Col, { span: 8 },
                        React.createElement(Card, { title: "Tipping Point State in 2024 Election", bordered: false },
                            React.createElement(Button, { type: "primary" }, "Bet Yes"),
                            React.createElement(Button, { type: "danger", style: { marginLeft: '10px' } }, "Bet No"))))))));
};
export default PloyMarketHome;
//# sourceMappingURL=home.js.map