import React from 'react';
import { Layout, Card, Row, Col, Button } from 'antd';

const { Content } = Layout;

const SportsPage = () => {
    return (
        <Layout>
            <Content style={{ padding: '50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="2024 Olympics Forecast" bordered={false}>
                                <Button type="primary">View Events</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="World Cup Qualifiers" bordered={false}>
                                <Button type="primary">See Matches</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="NBA Season Highlights" bordered={false}>
                                <Button type="primary">Watch Highlights</Button>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginTop: '20px' }}>
                        <Col span={12}>
                            <Card title="Premier League Updates" bordered={false}>
                                <Button type="primary">Latest Scores</Button>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Formula 1 Racing Schedule" bordered={false}>
                                <Button type="primary">View Schedule</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default SportsPage;
