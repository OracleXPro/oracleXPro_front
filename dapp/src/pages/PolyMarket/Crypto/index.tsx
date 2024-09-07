import React from 'react';
import { Layout, Card, Row, Col, Button } from 'antd';

const { Content } = Layout;

const CryptoPage = () => {
    return (
        <Layout>
            <Content style={{ padding: '50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Bitcoin Price Forecast" bordered={false}>
                                <Button type="primary">View Prediction</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Ethereum Market Trends" bordered={false}>
                                <Button type="primary">Analyze Trends</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="New ICOs to Watch" bordered={false}>
                                <Button type="primary">Discover ICOs</Button>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginTop: '20px' }}>
                        <Col span={12}>
                            <Card title="DeFi Market Insights" bordered={false}>
                                <Button type="primary">Explore DeFi</Button>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="NFT Market Updates" bordered={false}>
                                <Button type="primary">View NFTs</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default CryptoPage;
