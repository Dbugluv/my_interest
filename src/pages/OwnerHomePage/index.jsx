import { useState, useEffect } from 'react';
import PicAlbum from '../../components/PicAlbum'
import './index.scss'

export default function OwnerHomePage () {
  const imgMockarr = [
    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
  ]

  const albumArr = [{
    imgCoverArr: imgMockarr,
    albumSum: 10,
    albumName: '全部的图片',
    albumId: 1,
  },{
    imgCoverArr: imgMockarr,
    albumSum: 3,
    albumName: '街拍集',
    albumId: 2,
  },{
    imgCoverArr: imgMockarr,
    albumSum: 4,
    albumName: '废土风',
    albumId: 3,
  },{
    imgCoverArr: imgMockarr,
    albumSum: 10,
    albumName: '全部的图片',
    albumId: 4,
  },{
    imgCoverArr: imgMockarr,
    albumSum: 3,
    albumName: '街拍集',
    albumId: 5,
  },{
    imgCoverArr: imgMockarr,
    albumSum: 4,
    albumName: '废土风',
    albumId: 6,
  }];

  return (
    <div className="ownerHomePage_wrapper">
      {albumArr.map((item, index) => {
        const {imgCoverArr, albumSum, albumName} = item;
        return (
          <PicAlbum 
            key={`album_${index}`} 
            albumInfo={item}
            />
        )
      })}
    </div>
  )
}