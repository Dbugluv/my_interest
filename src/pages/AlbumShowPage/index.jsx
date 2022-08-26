import React, { useState, useEffect } from 'react';
import { Row, Modal, Col, Tag, Form, Input, Button } from 'antd';
import './index.scss'
import { jumpPage } from '../../utils/common';

export default function AlbumShowPage () {
  const imgList = [{
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13059026030%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663408125&t=0482433a02980591745663ca004ba3d0',
  },{
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F07%2F20170507214144_eM3At.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663408170&t=0bf08d9592dc9ed7a490fb826a549886',
  },{
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.efu.com.cn%2Fupfile%2Ffashion%2Fphoto%2F41488%2F936982.jpg&refer=http%3A%2F%2Fimg1.efu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663408182&t=3a8d33be8c5d472ea5754810007f7385',
  },{
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff3de2199c20e6924d00bb4c7b3f429d43213f06b892f-5UHVfT_fw236&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663408887&t=23a26ef72f85271cdb25e0e942fff1c5',
  },{
    imgUrl: 'https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=prada%E7%A7%80%E5%9C%BA&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=2415857993,3709535384&os=1101390485,2693766624&simid=3516144123,458793067&pn=6&rn=1&di=7117150749552803841&ln=1685&fr=&fmq=1660815983344_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fb-ssl.duitang.com%252Fuploads%252Fitem%252F201705%252F07%252F20170507214144_eM3At.thumb.700_0.jpeg%26refer%3Dhttp%253A%252F%252Fb-ssl.duitang.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Dauto%3Fsec%3D1663407983%26t%3Dfc6db80b87fb094d1832e614c6bce265&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwzLDEsNiw0LDIsNSw3LDgsOQ%3D%3D',
  },{
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages03%2F20210227%2F62309fb1ee644454a2121f7c3fce6849.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663408826&t=463947d5433521b05376bdb61c00bf07',
  },{
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.cfw.cn%2Fimages%2Fnews_images%2Ftitle_images%2F2019%2F09%2F20%2F20190920133720675.jpg&refer=http%3A%2F%2Fimg1.cfw.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663408848&t=e970dd1177e984e841a5ecd54b5a807a',
  },{
    imgUrl: 'https://img2.baidu.com/it/u=3715546626,1462927025&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=742',
  },{
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.cfw.cn%2Fimages%2Fnews_images%2Ftitle_images%2F2019%2F09%2F20%2F20190920133720675.jpg&refer=http%3A%2F%2Fimg1.cfw.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663408848&t=e970dd1177e984e841a5ecd54b5a807a',
  },{
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fce337d6d102f1aa3e1fe56600fc7e86bd07bcb766147-onNVJo_fw236&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663408936&t=53f6db2b954fb2541b505562f68d0997',
  }]

  const imgErrorFB = (e) => {
    const {type} = e;
    if(type === 'error') {
      e.target.style.display = 'none';  // TODO:兜底还没想好怎么展示
    }
    console.log('eee', e)
  }

  const showImgDetail = (imgInfo) => {
    const {imgId = 1222} = imgInfo;
    jumpPage(`/personal/PicDetail/${imgId}`, {type: 'push'})
  }


  return (
    <div className="albumShowPage_wrapper">
      {
        imgList.map((item, index) => {
          return (
            <div key={`album-show-page-${index}`} className="single-pic-wrapper">
              <img 
                className="my-img" 
                src={item.imgUrl} onError={e => imgErrorFB(e)}
              />
              <span className="preview-btn" onClick={() => showImgDetail(item)}>Preview</span>
            </div>
            
          )
        })
      }
    </div>
  )
}