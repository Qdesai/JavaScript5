import React from "react";
import { Row, Col, Button, Form, Input } from 'antd';
import Navbar from "./Navbar";
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Header } from "antd/es/layout/layout";
const { TextArea } = Input;



export default function ContactUs(props){

    const handleSubmit = (values) => {
        console.log('Form Submited')
    }

    return(
        <>
            
            <Navbar/>
        <Row
            justify="space-around"
        >
            <Col
                xs={22}
                sm={18}
                md={16}
                lg={8}
            >

                {
                    // for setting up the froim interaction
                }



                <Form
                    name="cf"
                    method="post"
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    {/* This is the hidden field that the netlify-honeypot uses. */}

                    <Form.Item>
                        <br/>
                        <h1>
                            <center>Contact Us</center>
                        </h1>
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        rules={[{ required: true, message: `Please enter your name.` }]}
                        name="name"
                    >
                        <Input
                            placeholder="Name"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        rules={[{ required: true, type: `email`, message: `Please enter your email.` }]}
                        name="email"
                    >
                        <Input
                            placeholder="Your Email"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Message"
                        rules={[{ required: true, message: `Please enter your message.` }]}
                        name="message"
                    >
                        <TextArea
                            placeholder="Your Message"
                            rows={5}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={false}>
                            Send
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>

    </>
        
    )
}