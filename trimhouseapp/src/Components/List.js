import React from 'react';
import { Button, Card, Col, Row} from 'antd';
const { Meta } = Card;


const List = () => (
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
      <Card
                        hoverable
                        style={{
                            marginTop: 60,
                            width: 240,
                            backgroundColor: 'grey'
                        }}
                        cover={<img alt="Clocks" src="https://i.pinimg.com/736x/bd/0b/5f/bd0b5fc9dbdd226123a235cb5d34a165.jpg" />}
                    >
                        <Meta title="Clocks" description="All types of fancy and fromal Clocks"/>
                        <Button >Add to Cart</Button>
                    </Card>
      </Col>
      <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            marginTop: 60,
                            width: 240,
                            backgroundColor: 'grey'
                        }}
                        cover={<img alt="Artificial & dried flowers" src="https://i5.walmartimages.com/asr/3ff06087-a24a-4b7b-bebd-d7ee19670287.91c46b60b266f7fdfa8ac82ce60866c3.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff" />}
                    >
                        <Meta title="Artificial & dried flowers" description="All the artificals and original plants"/>
                        <Button >Add to Cart</Button>
                    </Card>
      </Col>
      <Col span={8}>
                        <Card
                        hoverable
                        style={{
                            marginTop: 60,
                            width: 240,
                            backgroundColor: 'grey'
                        }}
                        cover={<img alt="Wall Art" src="https://i.etsystatic.com/18168488/r/il/86be5e/3023667381/il_570xN.3023667381_1anv.jpg" />}
                    >
                        <Meta title="Wall Art" description="Shop for Northern Lights Wall Art Photography."/>
                        <Button >Add to Cart</Button>
                    </Card>
      </Col>
    </Row>

    <Row gutter={16}>
      <Col span={8}>
      <Card
                        hoverable
                        style={{
                            marginTop: 60,
                            width: 240,
                            backgroundColor: 'grey'
                        }}
                        cover={<img alt="Clocks" src="https://i.pinimg.com/736x/bd/0b/5f/bd0b5fc9dbdd226123a235cb5d34a165.jpg" />}
                    >
                        <Meta title="Clocks" description="All types of fancy and fromal Clocks"/>
                        <Button >Add to Cart</Button>
                    </Card>
      </Col>
      <Col span={8}>
                    <Card
                        hoverable
                        style={{
                            marginTop: 60,
                            width: 240,
                            backgroundColor: 'grey'
                        }}
                        cover={<img alt="Artificial & dried flowers" src="https://i5.walmartimages.com/asr/3ff06087-a24a-4b7b-bebd-d7ee19670287.91c46b60b266f7fdfa8ac82ce60866c3.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff" />}
                    >
                        <Meta title="Artificial & dried flowers" description="All the artificals and original plants"/>
                        <Button >Add to Cart</Button>
                    </Card>
      </Col>
      <Col span={8}>
                        <Card
                        hoverable
                        style={{
                            marginTop: 60,
                            width: 240,
                            backgroundColor: 'grey'
                        }}
                        cover={<img alt="Wall Art" src="https://i.etsystatic.com/18168488/r/il/86be5e/3023667381/il_570xN.3023667381_1anv.jpg" />}
                    >
                        <Meta title="Wall Art" description="Shop for Northern Lights Wall Art Photography."/>
                        <Button >Add to Cart</Button>
                    </Card>
      </Col>
    </Row>
  
  </div>
);


export default List;