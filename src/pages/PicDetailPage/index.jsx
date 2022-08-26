import React, { useState, useEffect } from 'react';
import { Row, Modal, Col, Tag, Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { ArrowLeftOutlined, HeartOutlined, FormOutlined, PlusOutlined } from '@ant-design/icons';
import SinglePicCard from '../../components/SinglePicCard'
import './index.scss'

export default function PicDetailPage() {

  const history = useHistory();

  const backToPicList = () => {
    history.goBack();
  }

  return (
    <div className="picDetailPage-wrapper">
      <div className="top-opt-bar">
        <ArrowLeftOutlined onClick={backToPicList}/>
      </div>
      <SinglePicCard />
    </div>
  )
}