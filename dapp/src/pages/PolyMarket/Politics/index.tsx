import React from 'react';
import { Layout, Card, Row, Col, Button } from 'antd';

const { Content } = Layout;

const PoliticsPage = () => {
    return (
        <Layout>
            <Content style={{ padding: '50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="2024 U.S. Senate Races" bordered={false}>
                                <Button type="primary">View Details</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="House of Representatives 2024" bordered={false}>
                                <Button type="primary">View More</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="State Governor Elections 2024" bordered={false}>
                                <Button type="primary">Explore</Button>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginTop: '20px' }}>
                        <Col span={12}>
                            <Card title="Political Polling Updates" bordered={false}>
                                <Button type="primary">Latest Polls</Button>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Political News and Insights" bordered={false}>
                                <Button type="primary">Read Articles</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default PoliticsPage;
