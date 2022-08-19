import { useState, useEffect } from 'react';
import { AudioOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Avatar, Image  } from 'antd';
import './index.scss'

const { Search } = Input;



export default function NavigatorHead () {
  const onSearch = (value) => console.log(value);

  return (
    <div className="navigator_head">
      <div className="web-name">
        MyInterest
      </div>
      <div className="search-area">
        <Search placeholder="input search text" onSearch={onSearch} />
      </div>
      <div className="user-area">
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" />} />
      </div>
    </div>
  )
}