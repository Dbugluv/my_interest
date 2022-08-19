import { useState, useEffect } from 'react';
import { Image } from 'antd';
import { jumpPage } from '../../utils/common'
import './index.scss'

export default function PicAlbum (props ) {
  const { albumInfo, albumInfo:{ albumName = '全部图片', albumSum = 10, imgCoverArr = [], albumId} = {}} = props;

  const jumpToAlbumShowPage = (info) => {
    console.log('item', info)
    jumpPage(`/AlbumShowPage:${info.albumId}`)
  }

  return (
    <div className="picAlbum_wrapper">
      <div className="list_wrapper">
        {imgCoverArr.map((item, index) => {
          return (
            <div key={`albumPic_${index}`} className="img_wrapper" onClick={() => jumpToAlbumShowPage(albumInfo)}>
              <Image preview={false} src={item} />
            </div>
          )
        })}
      </div>
      <div className="albumName">{albumName}</div>
      <div>共{albumSum}张图片</div>
    </div>
  )
}