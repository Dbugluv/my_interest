import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Row, Modal, Col, Tag, Form, Input, Button  } from 'antd';
import { DeleteOutlined, HeartOutlined, FormOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './index.scss'

const { TextArea } = Input;
const mockShowImg = {    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13059026030%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663408125&t=0482433a02980591745663ca004ba3d0',}

const SinglePicCard = () => {
  const [loading, setLoading] = useState(false);
  const [curShowImg, setCurShowImg] = useState(mockShowImg)

  const onChange = (checked) => {
    setLoading(!checked);
  };

  return (
    <div className="singlePicCard-wrapper">
      <Card
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <Skeleton loading={loading} avatar active>
          {/* <Meta
            title="Card title"
            description="This is the description"
          /> */}
          <div className="imgDetail-content">
            <Row>
              <Col span={12}>
                <img src={curShowImg.imgUrl}/>
              </Col>
              <Col offset={1} span={11}>
                <Form className="imgDetail-info-des">
                  <Form.Item
                    label="原始图片尺寸"
                    name="imgSize"
                  >
                    {'667 × 1000'} px
                  </Form.Item>
                  <Form.Item
                    label="图片来源"
                    name="curSource"
                  >
                    <div className="curSource">
                    {'https://gimg2.baidu.com/image_search/src=http%3A%dadasec=1663408125&t=0482433a02980591745663ca004ba3d0'}
                    </div>
                  </Form.Item>
                  {
                    0 ? 
                    <React.Fragment>
                      <Form.Item
                        label="图片描述"
                        name="imgDes"
                      >
                        <TextArea disabled={true} rows={4} placeholder="自定图片描述" maxLength={10} />
                      </Form.Item>
                      
                    </React.Fragment>
                    :
                    <React.Fragment>
                      <Form.Item
                        label="图片描述"
                        name="imgDes"
                      >
                        Prada秀场Prada秀场Prada秀场Prada秀场
                        <FormOutlined style={{marginLeft: '10px', color: '#cf1322'}}/>
                      </Form.Item>
                    </React.Fragment>
                  }
                  
                  <Form.Item
                    label="标签"
                    name="imgTag"
                  >
                    <Tag color="red" closable>
                      秀场
                    </Tag>
                    <Tag color="red" closable>
                      Prada
                    </Tag>
                    <Tag color="red" closable>
                      2021秋冬男装
                    </Tag>
                    <Tag color="red" className="site-tag-plus">
                      <PlusOutlined /> New Tag
                    </Tag>
                  </Form.Item>
                </Form>
              </Col>
            </Row >
            <Row className="bottom-opt">
              <Col span={12}>
                <HeartOutlined/>
                <DeleteOutlined />
              </Col>
            </Row>
          </div>
        </Skeleton>
      </Card>
    </div>
  );
};

export default SinglePicCard;