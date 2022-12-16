import "./L.css";
import React from 'react';
import { Button, Card, Col, Row} from 'antd';
const { Meta } = Card;



const List = () => (
    <div className="site-card-wrapper">
        <h1><center style={{marginTop:340, color:"black"}}>Category List </center></h1>
    <Row gutter={16} style={{marginLeft:120}}>
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

    <Row gutter={16} style={{marginLeft:120}}>
      <Col span={8}>
      <Card
                        hoverable
                        style={{
                            marginTop: 60,
                            width: 240,
                            backgroundColor: 'grey'
                        }}
                        cover={<img alt="Mirrors" src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/at%2Farchive%2Fb150f3df14dd22ac4729a6c6dcf037749eb1109e" />}
                    >
                        <Meta title="Mirrors" description="All types of fancy and fromal Mirrors"/>
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
                        cover={<img alt="Sofa" src="https://www.discountdecor.co.za/wp-content/uploads/2022/03/King-2-Seater-Couch-400x400.jpg" />}
                    >
                        <Meta title="Sofa" description="All the classy Sofa Models"/>
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
                        cover={<img alt="Stylish Tables" src="https://i.ebayimg.com/images/g/RssAAOSwHddg8UG4/s-l500.jpg" />}
                    >
                        <Meta title="Stylish Tables" description="Shop for Northern Stylish Tables."/>
                        <Button >Add to Cart</Button>
                    </Card>
      </Col>
    </Row>
  
  </div>
);


export default List;